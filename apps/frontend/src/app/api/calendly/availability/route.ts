import { NextRequest } from 'next/server';
import { fetchCalendlyEventType, fetchCalendlyAvailableTimes, Slot, SlotsByDate, AvailabilityAPIResponse } from '@/app/lib/calendly';

export async function GET(req: NextRequest) {
  const CALENDLY_TOKEN = process.env.CALENDLY_TOKEN;
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');
  if (!userId) {
    return new Response(JSON.stringify({ error: 'Missing user' }), { status: 400 });
  }
  if (!CALENDLY_TOKEN) {
    return new Response(JSON.stringify({ error: 'Missing CALENDLY_TOKEN' }), { status: 500 });
  }

  try {
    // Fetch event type info
    const eventType = await fetchCalendlyEventType(userId, CALENDLY_TOKEN);
    const durationMinutes = Number(eventType.duration) || 0;
    // Time window: from 1 hour from now to 7 days from now
    const startTime = new Date(Date.now() + 1 * 60 * 60 * 1000).toISOString();
    const endTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
    // Fetch available times
    const availability = await fetchCalendlyAvailableTimes(eventType.uri, CALENDLY_TOKEN, startTime, endTime);
    // Group slots by date
    const slotsByDate: SlotsByDate = {};
    (availability.collection || []).forEach((slot: { start_time: string }) => {
      const startDate = new Date(slot.start_time);
      const endDate = new Date(startDate.getTime() + durationMinutes * 60000);
      const dateKey = startDate.toLocaleDateString('en-GB'); // DD/MM/YYYY
      const slotObj: Slot = {
        start: startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        end: endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      if (!slotsByDate[dateKey]) slotsByDate[dateKey] = [];
      slotsByDate[dateKey].push(slotObj);
    });
    // Return grouped slots
    const response: AvailabilityAPIResponse = { slots: slotsByDate };
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch availability', details: (err as Error).message }), { status: 500 });
  }
}
