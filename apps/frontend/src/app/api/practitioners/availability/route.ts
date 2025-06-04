import { NextRequest } from 'next/server';
import moment from 'moment-timezone';
import { getBookingsForPractitionerInRange } from '@/app/lib/booking';
import { getPractitioner } from '@/app/lib/practitioner';
import { Practitioner } from '@/app/constants/practitioners';
import { SlotsByDate, getSlotsByDate, IST, OVERLAP_MINUTES } from '@/app/utils/slots';

type AvailabilityAPIResponse = { slots: SlotsByDate };

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  if (!userId) {
    return new Response(JSON.stringify({ error: 'Missing user' }), { status: 400 });
  }

  const practitioner = await getPractitioner(userId);
  if (!practitioner) {
    return new Response(JSON.stringify({ error: 'Practitioner not found' }), { status: 404 });
  }
  const slotsByDate = getSlotsByDate(practitioner as unknown as Practitioner);

  // Fetch real bookings for this practitioner in the next 7 days
  const bookings = await getBookingsForPractitionerInRange(practitioner._id.toString());
  // Remove booked slots for this practitioner
  Object.keys(slotsByDate).forEach(dateKey => {
    const bookingsForDate = bookings.filter(
      (b: { date: string }) => b.date === dateKey
    );
    if (bookingsForDate.length > 0) {
      slotsByDate[dateKey] = slotsByDate[dateKey].filter(slot => {
        const slotStart = moment.tz(`${dateKey} ${slot.start}`, 'DD/MM/YYYY hh:mm A', IST);
        const slotEnd = moment.tz(`${dateKey} ${slot.end}`, 'DD/MM/YYYY hh:mm A', IST);
        return !bookingsForDate.some((b: { slot: string }) => {
          if (!b.slot || typeof b.slot !== 'string') return false;
          const [bookedStartStr, bookedEndStr] = b.slot.split(' - ');
          if (!bookedStartStr || !bookedEndStr) return false;
          const bookedStart = moment.tz(`${dateKey} ${bookedStartStr.trim()}`, 'DD/MM/YYYY hh:mm A', IST);
          const bookedEnd = moment.tz(`${dateKey} ${bookedEndStr.trim()}`, 'DD/MM/YYYY hh:mm A', IST);
          // Check if slot overlaps or is within 5 minutes before/after booked slot
          return (
            (slotStart.isBetween(bookedStart.clone().subtract(OVERLAP_MINUTES, 'minutes'), bookedEnd.clone().add(OVERLAP_MINUTES, 'minutes'), undefined, '()')) ||
            (slotEnd.isBetween(bookedStart.clone().subtract(OVERLAP_MINUTES, 'minutes'), bookedEnd.clone().add(OVERLAP_MINUTES, 'minutes'), undefined, '()')) ||
            (bookedStart.isBetween(slotStart, slotEnd, undefined, '()')) ||
            (bookedEnd.isBetween(slotStart, slotEnd, undefined, '()'))
          );
        });
      });
    }
  });

  const response: AvailabilityAPIResponse = { slots: slotsByDate };
  return new Response(JSON.stringify(response), { status: 200 });
}

// import { Booking } from '@/app/lib/booking';

// export const mockBookings: Booking[] = [
//   {
//     id: "683de0049dcc336f6ad9aaa5",
//     name: "Vijaypal ",
//     email: "vijaypalsingh26066@gmail.com",
//     phone: "9897509038",
//     amount: 11,
//     practitioner_id: "ebdec80b-650c-4d8b-bb07-56eeccf6c6df",
//     date: "04/06/2025",
//     slot: "02:00 PM - 02:15 PM",
//     booking_id: "be0c19f9-6092-44e8-b637-81763487b42a",
//     cashfree_order_id: "order_id",
//     payment_session_id: "payment_session_id",
//     calendly_link: "",
//     status: "created",
//     createdAt: "2025-06-02T17:31:48.417+00:00",
//     updatedAt: "2025-06-02T17:31:48.417+00:00"
//   }
// ];
// import { Practitioner } from './practitioners';

// export const mockPractitioner: Practitioner = {
//   id: 't1748685813771',
//   duration: '15',
//   availability: {
//     sun: { unavailable: true, slots: [] },
//     mon: {
//       unavailable: false, slots: [
//         { start: '09:00 AM', end: '05:00 PM' },
//         { start: '06:15 PM', end: '11:00 PM' }
//       ]
//     },
//     tue: { unavailable: false, slots: [{ start: '09:00 AM', end: '05:00 PM' }] },
//     wed: { unavailable: false, slots: [{ start: '09:00 AM', end: '05:00 PM' }] },
//     thu: { unavailable: true, slots: [{ start: '09:00 AM', end: '05:00 PM' }] },
//     fri: { unavailable: false, slots: [{ start: '09:00 AM', end: '05:00 PM' }] },
//     sat: { unavailable: true, slots: [] },
//   },
//   name: '',
//   title: '',
//   image: '',
//   experience: '',
//   specialties: [],
//   rating: 0,
//   price: '',
//   discountPrice: '',
//   type: 'najoomi',
//   description: undefined,
//   reviews: []
// };
