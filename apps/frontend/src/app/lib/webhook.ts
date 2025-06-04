import { COLLECTION_NAME } from '@/app/constants/schema';
import { getBookingById } from '@/app/lib/booking';
import { getCalendlySchedulingLink } from '@/app/lib/calendly';
import { sendNajoomiSchedulingEmail } from '@/app/lib/email';
import { getMongoDb } from '@/app/lib/mongo';
import { createMeetEvent } from './google-calendar';
import { parseDateTimeWithMoment } from './datetime-util';

export function extractBookingId(body: any): string | null {
  return body?.data?.customer_details?.customer_id || null;
}

export async function ensureCalendlyLink(booking: any): Promise<string | null> {
  if (booking.calendly_link) return booking.calendly_link;
  const practitioner_id = booking.practitioner_id;
  if (!practitioner_id) throw new Error('Missing practitioner_id in booking');
  const CALENDLY_TOKEN = process.env.CALENDLY_TOKEN;
  if (!CALENDLY_TOKEN) throw new Error('Missing CALENDLY_TOKEN');
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
  const db = await getMongoDb();
  const bookings = db.collection(COLLECTION_NAME);
  await bookings.updateOne({ booking_id: booking.booking_id }, {
    $set: { calendly_link, status: 'scheduled', updatedAt: new Date() },
  });
  return calendly_link;
}

export async function handleWebhook(body: any) {
  // Extract booking_id
  const booking_id = extractBookingId(body);
  if (!booking_id) {
    return { status: 'error', message: 'Missing booking_id in webhook', statusCode: 400 };
  }
  // Lookup booking
  const booking = await getBookingById(booking_id);
  if (!booking) {
    return { status: 'error', message: 'Booking not found', statusCode: 404 };
  }

  // booking.slot: "02:00 PM - 02:30 PM"
  // booking.date: "24/05/2025"
  const [slotStart, slotEnd] = booking.slot.split('-').map((s: string) => s.trim());
  const date = booking.date; // e.g. '24/05/2025'

  const start = parseDateTimeWithMoment(date, slotStart, 'Asia/Kolkata');
  const end = parseDateTimeWithMoment(date, slotEnd, 'Asia/Kolkata');

  if (!booking.meet_link) {
    const scheduleMeet = await createMeetEvent(start, end, booking.practitioner_email, booking.email);
    if (!scheduleMeet) {
      return { status: 'error', message: 'Failed to get scheduling link', statusCode: 500 };
    }
    const db = await getMongoDb();
    const bookings = db.collection(COLLECTION_NAME);
    await bookings.updateOne({ booking_id: booking.booking_id }, {
      $set: { meet_link: scheduleMeet, status: 'scheduled', updatedAt: new Date() },
    });
  }

  return { status: 'ok', message: 'Webhook received successfully', statusCode: 200 };
}
