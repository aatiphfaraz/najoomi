import { NextRequest, NextResponse } from 'next/server';

// Cashfree recommends verifying the signature for security. You can add that logic here if needed.
// For now, this simply logs and acknowledges the webhook.

import { getMongoDb } from "@/app/lib/mongo";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('[Cashfree Webhook] Received:', body);

    // 1. Extract booking_id from webhook (adjust key as per actual webhook structure)
    const booking_id = body.booking_id || body.order_id || body.data?.order?.order_id;
    if (!booking_id) {
      return NextResponse.json({ status: 'error', message: 'Missing booking_id in webhook' }, { status: 400 });
    }

    // 2. Lookup the booking in MongoDB
    const db = await getMongoDb();
    const bookings = db.collection('bookings');
    const booking = await bookings.findOne({ booking_id });
    if (!booking) {
      return NextResponse.json({ status: 'error', message: 'Booking not found' }, { status: 404 });
    }

    // 3. Call the Calendly scheduling link endpoint (needs practitioner_id)
    const practitioner_id = booking.practitioner_id;
    if (!practitioner_id) {
      return NextResponse.json({ status: 'error', message: 'Missing practitioner_id in booking' }, { status: 400 });
    }
    // Call internal API to get scheduling link
    const calendlyRes = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/calendly/scheduling-link?userId=${practitioner_id}`);
    const calendlyData = await calendlyRes.json();
    const scheduling_link = calendlyData.resource?.booking_url || calendlyData.booking_url || calendlyData.scheduling_link || null;
    if (!scheduling_link) {
      return NextResponse.json({ status: 'error', message: 'Failed to get scheduling link', calendlyData }, { status: 500 });
    }

    // 4. Update booking with scheduling link
    await bookings.updateOne({ booking_id }, { $set: { calendly_link: scheduling_link, status: 'scheduled', updatedAt: new Date() } });

    // 5. Respond OK
    return NextResponse.json({ status: 'ok', scheduling_link }, { status: 200 });
  } catch (error) {
    console.error('[Cashfree Webhook] Error:', error);
    return NextResponse.json({ status: 'error', message: (error as Error).message }, { status: 400 });
  }
}

