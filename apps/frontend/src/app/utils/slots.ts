import moment from 'moment-timezone';
import { Practitioner } from '@/app/constants/practitioners';
import { DayAvailability, WeeklyAvailability } from '@/app/random-key/components/AvailabilityManager';
import { Slot } from '@/app/lib/calendly';

export type SlotsByDate = { [date: string]: Slot[] };

export const INTERVAL_NEXT_START = 10;
export const OVERLAP_MINUTES = 5;
export const MINIMUM_NEXT_START = 30;
export const IST = 'Asia/Kolkata';
export const DAY_KEYS: (keyof WeeklyAvailability)[] = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export function getDayKeyFromDate(date: moment.Moment): keyof WeeklyAvailability {
  return DAY_KEYS[date.day()];
}

export function expandSlotWindows(slot: Slot, date: moment.Moment, windowMin: number, stepMin: number): Slot[] {
  const slotStart = moment.tz(date.format('YYYY-MM-DD') + ' ' + slot.start, 'YYYY-MM-DD hh:mm A', IST);
  const slotEnd = moment.tz(date.format('YYYY-MM-DD') + ' ' + slot.end, 'YYYY-MM-DD hh:mm A', IST);
  const windowStart = slotStart.clone();
  const slots: Slot[] = [];
  while (windowStart.clone().add(windowMin, 'minutes').isSameOrBefore(slotEnd)) {
    const windowEnd = windowStart.clone().add(windowMin, 'minutes');
    slots.push({
      start: windowStart.format('hh:mm A'),
      end: windowEnd.format('hh:mm A'),
    });
    windowStart.add(stepMin, 'minutes');
  }
  return slots;
}

export function expandDaySlots(avail: DayAvailability, date: moment.Moment, windowMin: number, stepMin: number): Slot[] {
  return avail.slots.flatMap(slot => expandSlotWindows(slot, date, windowMin, stepMin));
}

export function getSlotsByDate(practitioner: Practitioner): SlotsByDate {
  const slotsByDate: SlotsByDate = {};
  const now = moment().tz(IST);
  const windowMin = parseInt(practitioner.duration) || 15;
  const stepMin = INTERVAL_NEXT_START;
  for (let i = 0; i < 7; i++) {
    const date = now.clone().add(i, 'days');
    const dayKey = getDayKeyFromDate(date);
    const avail = practitioner.availability?.[dayKey];
    if (!avail || avail.unavailable || !avail.slots.length) continue;
    const dateKey = date.format('DD/MM/YYYY');
    let slots = expandDaySlots(avail, date, windowMin, stepMin);
    // For today, filter out slots that start less than MINIMUM_NEXT_START minutes from now
    if (i === 0) {
      const minStart = now.clone().add(MINIMUM_NEXT_START, 'minutes');
      slots = slots.filter(slot => {
        const slotStart = moment.tz(`${dateKey} ${slot.start}`, 'DD/MM/YYYY hh:mm A', IST);
        return slotStart.isSameOrAfter(minStart);
      });
    }
    slotsByDate[dateKey] = slots;
  }
  return slotsByDate;
}
