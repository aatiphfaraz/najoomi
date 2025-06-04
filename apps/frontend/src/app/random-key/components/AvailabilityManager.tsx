"use client"
import { Listbox } from "@headlessui/react";
import React from "react";
import Button from "@/app/components/ui/Button";

type DayKey = "sun" | "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

const WEEKDAYS: { key: DayKey; label: string }[] = [
  { key: "sun", label: "S" },
  { key: "mon", label: "M" },
  { key: "tue", label: "T" },
  { key: "wed", label: "W" },
  { key: "thu", label: "T" },
  { key: "fri", label: "F" },
  { key: "sat", label: "S" },
];

type Slot = {
  start: string;
  end: string;
};

export type DayAvailability = {
  unavailable: boolean;
  slots: Slot[];
};

export type WeeklyAvailability = {
  sun: DayAvailability;
  mon: DayAvailability;
  tue: DayAvailability;
  wed: DayAvailability;
  thu: DayAvailability;
  fri: DayAvailability;
  sat: DayAvailability;
};

export const weekdayKeyToMomentDay: Record<string, number> = {
  sun: 0,
  mon: 1,
  tue: 2,
  wed: 3,
  thu: 4,
  fri: 5,
  sat: 6,
};

export function getMomentDayFromKey(key: string): number {
  return weekdayKeyToMomentDay[key];
}


const TIME_INTERVAL = 15; // minutes

function generateTimes() {
  const times: string[] = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += TIME_INTERVAL) {
      const hour = h % 12 || 12;
      const ampm = h < 12 ? "AM" : "PM";
      const min = m.toString().padStart(2, "0");
      const hourStr = hour.toString().padStart(2, "0");
      times.push(`${hourStr}:${min} ${ampm}`);
    }
  }
  return times;
}
const timeOptions = generateTimes();

const AvailabilityManager = ({ weekly, handleAvailability }: { weekly: WeeklyAvailability, handleAvailability: (weekly: WeeklyAvailability) => void }) => {

  const handleToggleUnavailable = (day: DayKey, markAvailable: boolean) => {

    const slots = markAvailable ? [{ start: "09:00 AM", end: "05:00 PM" }] : weekly[day].slots;
    handleAvailability({
      ...weekly,
      [day]: { slots, unavailable: !markAvailable },
    });
  };

  const handleSlotChange = (
    day: DayKey,
    idx: number,
    field: "start" | "end",
    value: string
  ) => {
    const slots = weekly[day].slots.map((slot: any, i: number) =>
      i === idx ? { ...slot, [field]: value } : slot
    );
    handleAvailability({ ...weekly, [day]: { ...weekly[day], slots } });
  };

  const handleAddSlot = (day: DayKey) => {
    const slots = [
      ...weekly[day].slots,
      { start: "09:00 AM", end: "05:00 PM" },
    ];
    handleAvailability({ ...weekly, [day]: { ...weekly[day], slots } });
  };

  const handleRemoveSlot = (day: DayKey, idx: number) => {
    const slots = weekly[day].slots.filter((_: any, i: number) => i !== idx);
    handleAvailability({ ...weekly, [day]: { ...weekly[day], slots } });
  };



  return (
    <div className="relative">
      <h2 className="text-xl font-semibold mb-4 text-blue-800 flex items-center gap-2">
        <svg width="22" height="22" fill="none" className="inline-block text-blue-400"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="2" /></svg>
        Weekly hours
      </h2>
      <p className="text-sm text-blue-700 mb-4">Set when you are typically available for meetings</p>
      <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 shadow-sm">
        {WEEKDAYS.map((d) => (
          <div key={d.key} className="flex items-center gap-3 py-2 border-b border-blue-100 last:border-b-0">
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-700 text-white font-bold text-lg">
              {d.label}
            </span>
            {weekly[d.key].unavailable ? (
              <>
                <span className="text-gray-500 mr-2">Unavailable</span>
                <button
                  className="ml-2 text-blue-500 hover:text-blue-700"
                  onClick={() => handleToggleUnavailable(d.key, true)}
                  title="Mark as available"
                >
                  ➕
                </button>
              </>
            ) : (
              <>
                <div className="flex flex-col gap-2 flex-1">
                  {weekly[d.key].slots.map((slot: any, idx: number) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Listbox value={slot.start} onChange={val => handleSlotChange(d.key, idx, 'start', val)}>
                        <div className="relative w-30">
                          <Listbox.Button className="w-full px-3 py-1 rounded-full border border-blue-200 bg-white text-center shadow-sm focus:outline-blue-400 cursor-pointer flex items-center justify-between">
                            <span>{slot.start}</span>
                            <span className="ml-2 text-blue-400">▼</span>
                          </Listbox.Button>
                          <Listbox.Options className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-lg bg-white border border-blue-200 shadow-lg text-left">
                            {timeOptions.map((t) => (
                              <Listbox.Option
                                key={t}
                                value={t}
                                className={({ active, selected }) =>
                                  `cursor-pointer px-3 py-1 ${active ? 'bg-blue-50 text-blue-900' : 'text-blue-700'} ${selected ? 'font-bold bg-blue-100' : ''}`
                                }
                              >
                                {t}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </div>
                      </Listbox>
                      <span className="text-blue-900">-</span>
                      <Listbox value={slot.end} onChange={val => handleSlotChange(d.key, idx, 'end', val)}>
                        <div className="relative w-30">
                          <Listbox.Button className="w-full px-3 py-1 rounded-full border border-blue-200 bg-white text-center shadow-sm focus:outline-blue-400 cursor-pointer flex items-center justify-between">
                            <span>{slot.end}</span>
                            <span className="ml-2 text-blue-400">▼</span>
                          </Listbox.Button>
                          <Listbox.Options className="absolute z-10 mt-1 w-full max-h-60 overflow-auto rounded-lg bg-white border border-blue-200 shadow-lg text-left">
                            {timeOptions.map((t) => (
                              <Listbox.Option
                                key={t}
                                value={t}
                                className={({ active, selected }) =>
                                  `cursor-pointer px-3 py-1 ${active ? 'bg-blue-50 text-blue-900' : 'text-blue-700'} ${selected ? 'font-bold bg-blue-100' : ''}`
                                }
                              >
                                {t}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </div>
                      </Listbox>
                      {idx !== 0 && (
                        <button
                          className="ml-1 text-red-500 hover:text-red-700 text-lg"
                          onClick={() => handleRemoveSlot(d.key, idx)}
                          title="Remove slot"
                        >
                          ✕
                        </button>
                      )}
                      {idx === weekly[d.key].slots.length - 1 && (
                        <button
                          className="ml-1 text-blue-500 hover:text-blue-700 text-lg"
                          onClick={() => handleAddSlot(d.key)}
                          title="Add slot"
                        >
                          ➕
                        </button>
                      )}

                    </div>
                  ))}
                </div>
                <Button
                  type="button"
                  onClick={() => handleToggleUnavailable(d.key, false)}
                  variant="underline"
                >
                  Unavailableeee
                </Button>

              </>
            )}
          </div>
        ))}
      </div>
      <div className="mt-4 text-blue-700 text-sm">
        <span className="font-medium">India Standard Time</span> <span className="ml-1">▼</span>
      </div>
      {/* Decorative sparkles */}
      <svg className="absolute right-4 top-4 w-8 h-8 opacity-20 text-blue-300" viewBox="0 0 32 32"><circle cx="8" cy="8" r="2" fill="currentColor" /><circle cx="24" cy="24" r="1.5" fill="currentColor" /><circle cx="20" cy="12" r="1" fill="currentColor" /></svg>
    </div>
  );
};

export default AvailabilityManager;
