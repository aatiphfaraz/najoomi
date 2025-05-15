import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const CALENDLY_TOKEN = process.env.CALENDLY_TOKEN;
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  try {

    const res = await fetch(`https://api.calendly.com/event_types?user=https://api.calendly.com/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${CALENDLY_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    const eventData = await res.json();
    const calendlyRes = await fetch('https://api.calendly.com/scheduling_links', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${CALENDLY_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        owner: eventData.collection[0].uri,
        max_event_count: 1,
        owner_type: "EventType",
      }),
    });
    const calendlyData = await calendlyRes.json();
    return new Response(JSON.stringify(calendlyData), { status: calendlyRes.status });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to create scheduling link', details: err }), { status: 500 });
  }
}
