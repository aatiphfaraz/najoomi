import { getMongoDb } from '@/app/lib/mongo';
import { COLLECTION_NAME } from '@/app/constants/schema';
import moment from 'moment';

/**
 * Fetch a booking by booking_id (or order_id, which is the same)
 * @param booking_id The booking_id/order_id to search for
 * @returns booking document or null
 */
export async function getBookingById(booking_id: string): Promise<Booking | null> {
  const db = await getMongoDb();
  const bookings = db.collection(COLLECTION_NAME);
  return bookings.findOne({ booking_id }) as Promise<Booking | null>;
}

/**
 * Fetch all bookings for a practitioner within a date range (inclusive)
 * @param practitioner_id The practitioner's ID
 * @param fromDate ISO date string (YYYY-MM-DD)
 * @param toDate ISO date string (YYYY-MM-DD)
 * @returns Array of booking documents
 */
export async function getBookingsForPractitionerInRange(
  practitioner_id: string,
  fromDate: string,
  toDate: string
): Promise<Booking[]> {
  const db = await getMongoDb();
  const bookings = db.collection(COLLECTION_NAME);
  // Assuming booking documents have: practitioner_id, date (DD/MM/YYYY), slot { start, end }
  // Convert fromDate and toDate to moment for comparison
  const results = await bookings.find({
    practitioner_id,
    date: { $gte: moment(fromDate).format('DD/MM/YYYY'), $lte: moment(toDate).format('DD/MM/YYYY') },
    status: "scheduled"
  }).toArray();
  return results as Booking[] | [];
}


/**
 * Fetch all bookings (admin usage)
 * @returns Array of booking documents
 */
export async function getBookings(): Promise<Booking[]> {
  const db = await getMongoDb();
  const bookings = db.collection(COLLECTION_NAME);
  const results = await bookings.find({}).sort({ createdAt: -1 }).toArray();
  return results as Booking[] | [];
}

// Booking type inferred from mockBookings
export type Booking = {
  id: string;
  name: string;
  email: string;
  phone: string;
  amount: number;
  practitioner_id: string;
  date: string; // DD/MM/YYYY
  slot: string; // e.g., '02:00 PM - 02:15 PM'
  booking_id: string;
  cashfree_order_id?: string;
  payment_session_id?: string;
  meet_link: string;
  status: string;
  practitioner_email: string;
  createdAt: Date;
  updatedAt: Date;
};