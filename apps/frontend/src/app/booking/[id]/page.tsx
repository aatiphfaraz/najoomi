"use client";
import React, { useState } from "react";
import Image from "next/image";
import { practitioners } from "../../constants/practitioners";
import Button from "@/app/components/ui/Button";
import PractitionerStandardsGrid from "@/app/components/PractitionerStandardsGrid";

// @ts-expect-error Ignore type for Next.js dynamic route props
export default function BookingPage(props) {
  const { id } = props.params;
  const practitioner = practitioners.find((p) => p.id === id);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);
  // Calendly API integration
  const [days, setDays] = useState<{ date: string; active: boolean }[]>([]);
  const [slots, setSlots] = useState<Record<string, { start: string; end: string }[]>>({});
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const fetchAvailability = async () => {
      setLoading(true);
      try {
        const userId = "de340638-e06c-4ed4-ba5b-007b023b8ab4";
        const res = await fetch(`/api/calendly/availability?userId=${userId}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        const slotDates = Object.keys(data.slots);
        setDays(slotDates.map((d, i) => ({ date: d, active: i === 0 })));
        setSlots(data.slots);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err.message);
        } else {
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchAvailability();
  }, []);


  if (!practitioner) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#F1E1C6] relative overflow-hidden">
        {/* Sparkles - subtle, magical */}
        <svg className="absolute top-10 left-10 opacity-30 animate-pulse" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="2" fill="#FFD700" /><g opacity="0.7"><circle cx="8" cy="24" r="1" fill="#E5C07B" /><circle cx="28" cy="6" r="1.5" fill="#F6E27A" /></g></svg>
        <svg className="absolute bottom-10 right-10 opacity-30 animate-pulse" width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="1.2" fill="#FFD700" /><g opacity="0.6"><circle cx="20" cy="4" r="0.8" fill="#E5C07B" /></g></svg>
        <div className="bg-white/90 rounded-2xl shadow-xl p-10 pt-8 text-center text-xl font-semibold text-primary border-l-8 border-brand-gold relative max-w-md w-full">
          {/* Crescent moon and star */}
          <div className="flex flex-col items-center mb-4">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-2">
              <path d="M36 24c0 6.627-5.373 12-12 12a12 12 0 1 1 0-24c.338 0 .672.014 1.003.041A10 10 0 1 0 36 24z" fill="#FFD700" />
              <polygon points="38,16 40,20 44,20 41,23 42,27 38,25 34,27 35,23 32,20 36,20" fill="#E5C07B" />
            </svg>
            <span className="block text-2xl font-extrabold text-brand-gold" style={{ fontFamily: 'serif', letterSpacing: '0.03em' }}>Practitioner not found</span>
          </div>
          <p className="text-base text-gray-700 font-normal">We could not find the practitioner you were looking for.<br />Please check the link or return to the previous page.</p>
          <div className="mt-6 flex justify-center">
            <a href="/services" className="inline-block px-6 py-2 rounded-full bg-brand-gold text-white font-semibold shadow hover:bg-yellow-600 transition">View All Services</a>
          </div>
        </div>
      </main>
    );
  }


  const session = {
    practitioner: {
      name: practitioner.name,
      image: practitioner.image,
      rating: practitioner.rating,
    },
    title: practitioner.title,
    originalPrice: practitioner.price !== practitioner.discountPrice ? practitioner.price : undefined,
    price: practitioner.discountPrice || practitioner.price,
    duration: practitioner.duration,
    description: practitioner.description,
  };


  // Get times for selected day
  const selectedDayDate = days[selectedDay]?.date;
  const times = selectedDayDate && slots[selectedDayDate]
    ? slots[selectedDayDate].map(slot => `${slot.start} - ${slot.end}`)
    : [];


  return (
    <main className=" bg-gradient-to-br from-white to-[#F1E1C6] flex flex-col items-center justify-center py-14 px-2">
      <div className="max-w-6xl flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-10 max-w-6xl">
          {/* Left Card */}
          <section className="bg-white/95 rounded-2xl shadow-2xl border border-[#e7e4dc] flex-1 min-w-[340px]  p-8 flex flex-col relative animate-fade-in flex-1">
            <div className="flex flex-col items-center mb-3 relative">

              <Image
                src={session.practitioner.image}
                alt={session.practitioner.name}
                width={100}
                height={100}
                className="relative z-10 rounded-full border-4 border-[#fde68a] shadow-lg aspect-square object-cover"
                style={{ background: "#fffbe8" }}
              />
              <div className="flex items-center gap-2 mt-2">
                <span className="text-gray-600 text-base font-medium">{session.practitioner.name}</span>
                <span className="flex items-center gap-1 bg-[#fff7e0] px-3 py-1 rounded-full text-[#eab308] font-bold text-sm shadow">
                  <span className="text-lg">★</span> {session.practitioner.rating}/5
                </span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-[#15577a] mb-3 leading-tight">{session.title}</h2>
            <div className="flex items-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                {session.originalPrice && (
                  <span className="line-through text-gray-400 text-base mr-1">₹{session.originalPrice}</span>
                )}
                <span className="text-lg font-extrabold text-brand-gold bg-[#fffde6] px-3 py-1 rounded-full shadow border border-[#fde68a]">₹{session.price}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M8 2v2M16 2v2M3 8.5h18M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Zm0 0V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" stroke="#217ebd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>{session.duration}</span>
              </div>
            </div>
            <div className="border-t border-[#f6e9c0] pt-6 text-gray-700 text-base whitespace-pre-line">
              <div dangerouslySetInnerHTML={{ __html: session.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
            </div>
          </section>

          {/* Right Booking Panel */}
          <section className="bg-white/95 rounded-2xl shadow-2xl border border-[#e7e4dc] flex-1 p-8 flex flex-col animate-fade-in">
            <div className="mb-6 flex flex-col">
              <div className="font-bold text-primary mb-4">When should we meet?</div>
              <div className="mb-4">
                <div className="font-semibold text-gray-800 mb-2">Select time of day</div>
                <div className="max-h-35 overflow-y-auto mb-2">
                  <div className="grid grid-cols-2 gap-3">
                    {loading
                      ? Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="w-full h-10 bg-gray-100 rounded-lg animate-pulse" />
                      ))
                      : days.map((d, i) => {
                        const [dd, mm, yyyy] = d.date.split('/');
                        const jsDate = new Date(`${yyyy}-${mm}-${dd}`);
                        const weekday = jsDate.toLocaleDateString('en-US', { weekday: 'short' });
                        const dayNum = jsDate.getDate();
                        const month = jsDate.toLocaleDateString('en-US', { month: 'short' });
                        return (
                          <button
                            key={d.date}
                            onClick={() => setSelectedDay(i)}
                            className={`px-4 py-2 rounded-lg font-semibold text-sm border transition-all duration-150 cursor-pointer flex flex-col items-center justify-center ${selectedDay === i ? 'bg-brand-gold text-[#15577a] border-[#15577a] shadow' : 'bg-white border-gray-200 text-gray-700'}`}
                            style={{ minWidth: 50 }}
                          >
                            <span className="block leading-tight">{weekday}, </span>
                            <span className="block">{dayNum} {month}</span>
                          </button>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div className="font-semibold text-gray-800 mb-2">Select time of day</div>
                <div className="max-h-48 overflow-y-auto mb-2">
                  <div className="grid grid-cols-2 gap-3">
                    {loading
                      ? Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="w-full h-10 bg-gray-100 rounded-lg animate-pulse" />
                      ))
                      : times.map((t, i) => {
                        const [start] = t.split('-');
                        return (
                          <button
                            key={t}
                            onClick={() => setSelectedTime(i)}
                            className={`px-4 py-2 rounded-lg font-semibold text-sm border transition-all duration-150 cursor-pointer ${selectedTime === i ? 'bg-brand-gold text-[#15577a] border-[#15577a] shadow' : 'bg-white border-gray-200 text-gray-700'}`}
                          >
                            {start}
                          </button>
                        )
                      })}
                  </div>
                </div>
              </div>
              {/* <div className="mb-4">
                <div className="font-semibold text-gray-800 mb-2">Timezone</div>
                <div className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm">
                  (GMT+5:30) Chennai, Kolkata, Mumbai, New Delhi (IST)
                </div>
              </div> */}
              <Button variant="primary" className="w-full">
                Continue
              </Button>
            </div>
          </section>

        </div>
        <PractitionerStandardsGrid />
      </div>
    </main>
  );
}
