import { getBookings } from '@/app/lib/booking';

// GET /api/bookings - returns all bookings
export async function GET() {
  try {
    const bookings = await getBookings();
    return new Response(JSON.stringify({ bookings }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message || 'Failed to fetch bookings' }), { status: 500 });
  }
}
