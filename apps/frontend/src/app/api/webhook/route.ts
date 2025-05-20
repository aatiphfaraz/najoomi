import { CFEnvironment, Cashfree } from 'cashfree-pg';
import { NextRequest, NextResponse } from "next/server";

// const COLLECTION_NAME = "bookings";

const isSandbox = process.env.CASHFREE_ENV === 'SANDBOX';

const cashfree = new Cashfree(
  isSandbox ? CFEnvironment.SANDBOX : CFEnvironment.PRODUCTION,
  isSandbox ? process.env.CASHFREE_CLIENT_ID_SANDBOX : process.env.CASHFREE_CLIENT_ID,
  isSandbox ? process.env.CASHFREE_CLIENT_SECRET_SANDBOX : process.env.CASHFREE_CLIENT_SECRET,
);
console.log(cashfree);

// GET /api/hello
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('[Cashfree Webhook] Received:', body);

    // // Extract booking_id
    // const booking_id = extractBookingId(body);
    // if (!booking_id) {
    //   return NextResponse.json({ status: 'error', message: 'Missing booking_id in webhook' }, { status: 400 });
    // }

    // // Lookup booking
    // const booking = await getBookingById(booking_id);
    // if (!booking) {
    //   return NextResponse.json({ status: 'error', message: 'Booking not found' }, { status: 404 });
    // }

    // // Ensure Calendly link exists and update booking if needed
    // const calendly_link = await ensureCalendlyLink(booking);
    // if (!calendly_link) {
    //   return NextResponse.json({ status: 'error', message: 'Failed to get scheduling link' }, { status: 500 });
    // }

    return NextResponse.json({ status: 'ok', message: 'Webhook received successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 'error', message: (error as Error).message }, { status: 400 });
  }
}
