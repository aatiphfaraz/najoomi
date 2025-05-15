import { NextRequest } from 'next/server';

// --- Types ---
interface Slot {
  start: string; // Time only (HH:mm)
  end: string;   // Time only (HH:mm)
}
type SlotsByDate = Record<string, Slot[]>; // key: dd/mm/yyyy
interface AvailabilityAPIResponse {
  slots: SlotsByDate;
}

export async function GET(req: NextRequest) {
  const CALENDLY_TOKEN = process.env.CALENDLY_TOKEN;
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  if (!userId) {
    return new Response(JSON.stringify({ error: 'Missing user' }), { status: 400 });
  }

  try {
    const res = await fetch(`https://api.calendly.com/event_types?user=https://api.calendly.com/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${CALENDLY_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    const startTime = new Date(Date.now() + 1 * 60 * 60 * 1000).toISOString();
    const endTime = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
    const data = await res.json();
    const url = `https://api.calendly.com/event_type_available_times?event_type=${encodeURIComponent(data.collection[0].uri)}&start_time=${startTime}&end_time=${endTime}`;
    const calendlyRes = await fetch(url, {
      headers: {
        Authorization: `Bearer ${CALENDLY_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    const availability = await calendlyRes.json();
    const durationMinutes = Number(data.collection[0].duration) || 0;
    const slotsByDate: SlotsByDate = {};
    availability.collection.forEach((slot: { start_time: string }) => {
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

    const response: AvailabilityAPIResponse = { slots: slotsByDate };
    return new Response(JSON.stringify(response), { status: calendlyRes.status });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch availability', details: err }), { status: 500 });
  }
}
