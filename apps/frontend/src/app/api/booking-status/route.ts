import { NextRequest, NextResponse } from 'next/server';

import { getBookingById } from '@/app/lib/booking';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const order_id = searchParams.get('order_id');
  if (!order_id) {
    return NextResponse.json({ error: 'Missing order_id' }, { status: 400 });
  }
  const booking = await getBookingById(order_id);

  if (!booking) {
    return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
  }
  // Only return relevant fields
  return NextResponse.json({
    calendly_link: booking.calendly_link,
    status: booking.status,
    booking_id: booking.booking_id,
    name: booking.name,
    email: booking.email,
    phone: booking.phone,
    amount: booking.amount,
    practitioner_id: booking.practitioner_id,
    date: booking.date,
    slot: booking.slot,
    createdAt: booking.createdAt,
    updatedAt: booking.updatedAt,
  });
}
