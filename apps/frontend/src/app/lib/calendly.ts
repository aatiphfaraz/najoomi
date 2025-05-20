// Utility for Calendly scheduling link generation

export async function getCalendlySchedulingLink(userId: string, token: string): Promise<string> {
  // Fetch event types for the user
  const eventRes = await fetch(`https://api.calendly.com/event_types?user=https://api.calendly.com/users/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  if (!eventRes.ok) throw new Error('Failed to fetch Calendly event types');
  const eventData = await eventRes.json();
  if (!eventData.collection || !eventData.collection[0]?.uri) throw new Error('No event types found for user');

  // Create a scheduling link
  const schedRes = await fetch('https://api.calendly.com/scheduling_links', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      owner: eventData.collection[0].uri,
      max_event_count: 1,
      owner_type: 'EventType',
    }),
  });
  if (!schedRes.ok) throw new Error('Failed to create Calendly scheduling link');
  const schedData = await schedRes.json();
  // Return the booking URL if available
  return schedData?.resource?.booking_url || schedData?.booking_url || '';
}

// --- Types ---
export interface Slot {
  start: string; // Time only (HH:mm)
  end: string;   // Time only (HH:mm)
}
export type SlotsByDate = Record<string, Slot[]>; // key: dd/mm/yyyy
export interface AvailabilityAPIResponse {
  slots: SlotsByDate;
}

// Helper: Fetch event type info for a user
export async function fetchCalendlyEventType(userId: string, token: string) {
  const res = await fetch(`https://api.calendly.com/event_types?user=https://api.calendly.com/users/${userId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    }
  );
  if (!res.ok) throw new Error('Failed to fetch event types');
  const data = await res.json();
  if (!data.collection || !data.collection[0]?.uri) throw new Error('No event types found for user');
  return data.collection[0];
}

// Helper: Fetch available times for an event type
export async function fetchCalendlyAvailableTimes(eventTypeUri: string, token: string, startTime: string, endTime: string) {
  const url = `https://api.calendly.com/event_type_available_times?event_type=${encodeURIComponent(eventTypeUri)}&start_time=${startTime}&end_time=${endTime}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) throw new Error('Failed to fetch available times');
  return res.json();
}
