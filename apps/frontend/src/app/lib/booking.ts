import { getMongoDb } from '@/app/lib/mongo';
import { COLLECTION_NAME } from '@/app/constants/schema';

/**
 * Fetch a booking by booking_id (or order_id, which is the same)
 * @param booking_id The booking_id/order_id to search for
 * @returns booking document or null
 */
export async function getBookingById(booking_id: string) {
  const db = await getMongoDb();
  const bookings = db.collection(COLLECTION_NAME);
  return bookings.findOne({ booking_id });
}
