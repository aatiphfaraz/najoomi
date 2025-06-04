import { NextRequest } from 'next/server';

// Types
interface Slot {
    start: string;
    end: string;
}
interface DayAvailability {
    unavailable: boolean;
    slots: Slot[];
}
interface WeeklyAvailability {
    sun: DayAvailability;
    mon: DayAvailability;
    tue: DayAvailability;
    wed: DayAvailability;
    thu: DayAvailability;
    fri: DayAvailability;
    sat: DayAvailability;
}
interface Practitioner {
    id: string;
    availability: WeeklyAvailability;
    duration: string;
}
interface SlotsByDate {
    [date: string]: Slot[];
}
interface AvailabilityAPIResponse {
    slots: SlotsByDate;
}

// Mock practitioner data (replace with DB query in real use)
const mockPractitioner: Practitioner = {
    id: 't1748685813771',
    duration: '15',
    availability: {
        sun: { unavailable: true, slots: [] },
        mon: { unavailable: false, slots: [{ start: '09:00 AM', end: '05:00 PM' }, { start: '06:15 PM', end: '11:00 PM' }] },
        tue: { unavailable: false, slots: [{ start: '09:00 AM', end: '05:00 PM' }] },
        wed: { unavailable: false, slots: [{ start: '09:00 AM', end: '05:00 PM' }] },
        thu: { unavailable: true, slots: [{ start: '09:00 AM', end: '05:00 PM' }] },
        fri: { unavailable: false, slots: [{ start: '09:00 AM', end: '05:00 PM' }] },
        sat: { unavailable: true, slots: [] },
    }
};

const INTERVAL_NEXT_START = 10;

function getDayKeyFromDate(date: Date): keyof WeeklyAvailability {
    // 0=Sun, 1=Mon, ...
    return ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'][date.getDay()] as keyof WeeklyAvailability;
}

// Use practitioner's duration for slot interval
// const CONSECUTIVE_INTERVAL = 10; // replaced below

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    if (!userId) {
        return new Response(JSON.stringify({ error: 'Missing user' }), { status: 400 });
    }

    // TODO: Replace this with a DB query by userId
    const practitioner = mockPractitioner;
    if (practitioner.id !== userId) {
        return new Response(JSON.stringify({ error: 'Practitioner not found' }), { status: 404 });
    }

    // Build slots for next 7 days
    const slotsByDate: SlotsByDate = {};
    const now = new Date();
    for (let i = 0; i < 7; i++) {
        const date = new Date(now.getTime() + i * 24 * 60 * 60 * 1000);
        const dayKey = getDayKeyFromDate(date);
        const avail = practitioner.availability[dayKey];
        if (!avail || avail.unavailable || !avail.slots.length) continue;
        // Format dateKey as DD/MM/YYYY in IST
        const istDate = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
        const dateKey = istDate.toLocaleDateString('en-GB', { timeZone: 'Asia/Kolkata' });
        // Use practitioner's duration for window, INTERVAL_NEXT_START for step
        const windowMin = parseInt(practitioner.duration) || 10;
        const stepMin = INTERVAL_NEXT_START;
        const expandedSlots: Slot[] = [];
        for (const slot of avail.slots) {
            // Parse start/end times in IST
            const [startHour, startMin, startPeriod] = slot.start.match(/(\d+):(\d+) (AM|PM)/)!.slice(1);
            const [endHour, endMin, endPeriod] = slot.end.match(/(\d+):(\d+) (AM|PM)/)!.slice(1);
            const start = new Date(istDate);
            const end = new Date(istDate);
            start.setHours((parseInt(startHour) % 12) + (startPeriod === 'PM' ? 12 : 0), parseInt(startMin), 0, 0);
            end.setHours((parseInt(endHour) % 12) + (endPeriod === 'PM' ? 12 : 0), parseInt(endMin), 0, 0);
            // Generate sliding windows
            let windowStart = new Date(start);
            while (windowStart.getTime() + windowMin * 60000 <= end.getTime()) {
                const windowEnd = new Date(windowStart.getTime() + windowMin * 60000);
                // Format times as 12h
                const fmt = (d: Date) => d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Kolkata' });
                expandedSlots.push({ start: fmt(windowStart), end: fmt(windowEnd) });
                windowStart = new Date(windowStart.getTime() + stepMin * 60000);
            }
        }
        slotsByDate[dateKey] = expandedSlots;
    }

    const response: AvailabilityAPIResponse = { slots: slotsByDate };
    return new Response(JSON.stringify(response), { status: 200 });
}
