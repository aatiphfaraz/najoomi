import { NextRequest, NextResponse } from 'next/server';
import { getMongoDb } from '@/app/lib/mongo';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const order_id = searchParams.get('order_id');
  if (!order_id) {
    return NextResponse.json({ error: 'Missing order_id' }, { status: 400 });
  }
  const db = await getMongoDb();
  console.log(db, "db");
  const bookings = db.collection('bookings');
  console.log(bookings);
  const booking = await bookings.findOne({ cashfree_order_id: order_id });
  console.log(booking);
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
