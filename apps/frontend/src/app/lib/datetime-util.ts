import moment from 'moment';

/**
 * Parses a date and time string into an ISO string with timezone.
 * @param date e.g. '24/05/2025'
 * @param time e.g. '02:00 PM'
 * @returns ISO string (e.g. '2025-05-24T14:00:00+05:30')
 */
export function parseDateTimeWithMoment(date: string, time: string): string {
  return moment(`${date} ${time}`, 'DD/MM/YYYY hh:mm A').format();
}
