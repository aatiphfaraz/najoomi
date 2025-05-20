import { NextRequest, NextResponse } from 'next/server';
import { getMongoDb } from "@/app/lib/mongo";
import { getCalendlySchedulingLink } from '@/app/lib/calendly';
import { sendNajoomiSchedulingEmail } from '@/app/lib/email';
import { getBookingById } from '@/app/lib/booking';
import { COLLECTION_NAME } from '@/app/constants/schema';

// Helper: Extract booking_id from webhook body
function extractBookingId(body: any): string | null {
  return body?.data?.customer_details?.customer_id || null;
}

// Helper: Generate and update Calendly link if needed
async function ensureCalendlyLink(booking: any): Promise<string | null> {
  if (booking.calendly_link) return booking.calendly_link;
  const practitioner_id = booking.practitioner_id;
  if (!practitioner_id) throw new Error('Missing practitioner_id in booking');
  const CALENDLY_TOKEN = process.env.CALENDLY_TOKEN;
  if (!CALENDLY_TOKEN) throw new Error('Missing CALENDLY_TOKEN');
  // Generate link
  let calendly_link = '';
  try {
    calendly_link = await getCalendlySchedulingLink(practitioner_id, CALENDLY_TOKEN);
    if (booking.email) {
      try {
        await sendNajoomiSchedulingEmail(booking.email, calendly_link);
      } catch (e) {
        console.warn('Failed to send email with Calendly link:', e);
      }
    }
  } catch (e) {
    console.warn('Failed to fetch Calendly link', e);
    return null;
  }
  if (!calendly_link) return null;
  // Update booking in DB
  const db = await getMongoDb();
  const bookings = db.collection(COLLECTION_NAME);
  await bookings.updateOne({ booking_id: booking.booking_id }, {
    $set: { calendly_link, status: 'scheduled', updatedAt: new Date() },
  });
  return calendly_link;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log('[Cashfree Webhook] Received:', body);

    // Extract booking_id
    const booking_id = extractBookingId(body);
    if (!booking_id) {
      return NextResponse.json({ status: 'error', message: 'Missing booking_id in webhook' }, { status: 400 });
    }

    // Lookup booking
    const booking = await getBookingById(booking_id);
    if (!booking) {
      return NextResponse.json({ status: 'error', message: 'Booking not found' }, { status: 404 });
    }

    // Ensure Calendly link exists and update booking if needed
    const calendly_link = await ensureCalendlyLink(booking);
    if (!calendly_link) {
      return NextResponse.json({ status: 'error', message: 'Failed to get scheduling link' }, { status: 500 });
    }

    return NextResponse.json({ status: 'ok' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 'error', message: (error as Error).message }, { status: 400 });
  }
}

