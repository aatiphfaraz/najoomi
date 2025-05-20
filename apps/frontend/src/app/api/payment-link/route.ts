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
    } = await req.json();
    if (
      !name ||
      !email ||
      !phone ||
      !amount ||
      !practitioner_id ||
      !date ||
      !slot
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    // Generate a booking_id for reconciliation with webhook
    const booking_id = crypto.randomUUID();
    // 1. Create a Cashfree order
    const orderRequest = {
      order_amount: 1,
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
    const { payment_session_id, order_id } = response.data;

    // 2. Store booking in MongoDB with all required fields for webhook reconciliation
    const db = await getMongoDb();
    const bookings = db.collection(COLLECTION_NAME);
    const booking = {
      name,
      email,
      phone,
      amount,
      practitioner_id,
      date,
      slot,
      booking_id, // Used for webhook reconciliation
      cashfree_order_id: order_id,
      payment_session_id,
      calendly_link: "", // Fetched from scheduling-link API or empty string if failed
      status: "created",
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    await bookings.insertOne(booking);

    return new Response(JSON.stringify({ payment_session_id, booking_id }), { status: 200 });
  } catch (err: any) {
    console.error("Payment API error:", err?.response?.data || err);
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  }
}