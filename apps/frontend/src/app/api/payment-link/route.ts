// import { NextRequest, NextResponse } from 'next/server';
// import { MongoClient } from 'mongodb';
// import { getMongoDb } from '@/app/lib/mongo';
// const COLLECTION_NAME = 'bookings';

// function generatePaymentLink(orderId: string, amount: number) {
//   return `https://pay.najoomi.in/pay?order=${orderId}&amount=${amount}`;
// }

// export async function GET() {
//   try {
//     // const { name, email, phone, amount, practitioner_id, date, slot, booking_id } = await req.json();
//     // if (!name || !email || !phone || !amount || !practitioner_id || !date || !slot || !booking_id) {
//     //   return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
//     // }
//     const db = await getMongoDb();
//     const bookings = db.collection(COLLECTION_NAME);

//     const booking = {
//       name: "",
//       email: "",
//       phone: "",
//       amount: 0,
//       practitioner_id: "",
//       date: "",
//       slot: "",
//       booking_id: crypto.randomUUID(),
//       calendly_link: "",
//       createdAt: new Date(),
//     };
//     const result = await bookings.insertOne(booking);

//     return NextResponse.json({ calendly_link: "" });
//   } catch (err) {
//     console.error('Payment API error:', err);
//     return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
//   }
// }


// import { NextRequest } from "next/server";
import { getMongoDb } from "@/app/lib/mongo";


const COLLECTION_NAME = "bookings";

// import { CFEnvironment, Cashfree } from 'cashfree-pg';

// const cashfree = new Cashfree(
//   CFEnvironment.SANDBOX,
//   process.env.CASHFREE_CLIENT_ID_SANDBOX,
//   process.env.CASHFREE_CLIENT_SECRET_SANDBOX,
// );

export async function POST(
  // req: NextRequest
) {
  // try {
  // const {
  //   name,
  //   email,
  //   phone,
  //   amount,
  //   practitioner_id,
  //   date,
  //   slot,
  // } = await req.json();
  // console.log(name, email, phone, amount, practitioner_id, date, slot);
  // if (
  //   !name ||
  //   !email ||
  //   !phone ||
  //   !amount ||
  //   !practitioner_id ||
  //   !date ||
  //   !slot
  // ) {
  //   return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  // }
  // // Generate a booking_id for reconciliation with webhook
  // const booking_id = crypto.randomUUID();
  // // 1. Create a Cashfree order
  // const orderRequest = {
  //   order_amount: amount,
  //   order_currency: "INR",
  //   customer_details: {
  //     customer_id: booking_id,
  //     customer_name: name,
  //     customer_email: email,
  //     customer_phone: phone,
  //   },
  //   order_meta: {
  //     return_url: `http://localhost:3000/booking/success/${booking_id}`,
  //   },
  //   order_note: "Najoomi Booking Payment",
  // };

  // const response = await cashfree.PGCreateOrder(orderRequest);
  // const { payment_session_id, order_id } = response.data;

  // 2. Store booking in MongoDB with all required fields for webhook reconciliation
  console.log("getMongoDb")
  const db = await getMongoDb();
  console.log("db", db)
  const bookings = db.collection(COLLECTION_NAME);
  const booking = {
    name,
    // email,
    // phone,
    // amount,
    // practitioner_id,
    // date,
    // slot,
    // booking_id, // Used for webhook reconciliation
    // cashfree_order_id: order_id,
    // payment_session_id,
    calendly_link: "", // Will be filled by webhook after payment
    status: "created",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  await bookings.insertOne(booking);

  // 3. Respond with payment session id and booking_id
  return new Response(JSON.stringify({}));
  // } catch (err: any) {
  //   console.error("Payment API error:", err?.response?.data || err);
  //   return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 });
  // }
}