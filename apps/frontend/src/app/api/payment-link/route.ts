import { Booking } from "@/app/lib/booking";
import { getMongoDb } from "@/app/lib/mongo";
import { CFEnvironment, Cashfree } from 'cashfree-pg';
import { NextRequest, NextResponse } from "next/server";

const COLLECTION_NAME = "bookings";

const isSandbox = process.env.CASHFREE_ENV === 'SANDBOX';

const cashfree = new Cashfree(
  isSandbox ? CFEnvironment.SANDBOX : CFEnvironment.PRODUCTION,
  isSandbox ? process.env.CASHFREE_CLIENT_ID_SANDBOX : process.env.CASHFREE_CLIENT_ID,
  isSandbox ? process.env.CASHFREE_CLIENT_SECRET_SANDBOX : process.env.CASHFREE_CLIENT_SECRET,
);

export async function POST(
  req: NextRequest
) {
  try {
    const {
      name,
      email,
      phone,
      amount,
      practitioner_id,
      date,
      slot,
      practitioner_email
    } = await req.json();
    if (
      !name ||
      !phone ||
      !amount ||
      !practitioner_id ||
      !date ||
      !slot ||
      !practitioner_email
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const db = await getMongoDb();
    const bookings = db.collection(COLLECTION_NAME);
    const booking_id = crypto.randomUUID();

    // Insert booking attempt first with status 'initiated'
    const initialBooking: Partial<Booking> = {
      name,
      email,
      phone,
      amount,
      practitioner_id,
      date,
      slot,
      booking_id, // Used for webhook reconciliation
      status: "initiated",
      practitioner_email,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await bookings.insertOne(initialBooking);

    let payment_session_id = null;
    let order_id = null;
    try {
      // 1. Create a Cashfree order
      const orderRequest = {
        order_amount: amount,
        order_currency: "INR",
        customer_details: {
          customer_id: booking_id,
          customer_name: name,
          customer_email: email,
          customer_phone: phone,
        },
        order_meta: {
          return_url: `${isSandbox ? "http://localhost:3000" : "https://najoomi.in"}/booking/success/${booking_id}`,
          notify_url: `https://najoomi.vercel.app/api/cashfree-webhook`,
        },
        order_note: "Najoomi Booking Payment",
      };

      const response = await cashfree.PGCreateOrder(orderRequest);
      payment_session_id = response.data.payment_session_id;
      order_id = response.data.order_id;

      // Update booking with payment info and status 'created'
      await bookings.updateOne(
        { booking_id },
        {
          $set: {
            cashfree_order_id: order_id,
            payment_session_id,
            status: "created",
            updatedAt: new Date(),
          },
        }
      );

      return new Response(JSON.stringify({ payment_session_id, booking_id }), { status: 200 });
    } catch (err: any) {
      // Update booking with status 'failed' and optionally error info
      await bookings.updateOne(
        { booking_id },
        {
          $set: {
            status: "failed",
            error: err?.response?.data || err?.message || String(err),
            updatedAt: new Date(),
          },
        }
      );
      console.error("Payment API error:", err?.response?.data || err);
      return new Response(JSON.stringify({ error: "Payment initialization failed. Please check your details and try again." }), { status: 500 });
    }
  } catch (err: any) {
    console.error("Payment API error:", err?.response?.data || err);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}