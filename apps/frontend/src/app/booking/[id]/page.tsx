"use client";
import React, { useState } from "react";
import Image from "next/image";
import PaymentModal from "./PaymentModal";
import { practitioners } from "../../constants/practitioners";
import Button from "@/app/components/ui/Button";
import PractitionerStandardsGrid from "@/app/components/PractitionerStandardsGrid";
import Link from "next/link";
import Clarity from '@microsoft/clarity';

// @ts-expect-error Ignore type for Next.js dynamic route props
export default function BookingPage(props) {
  type Params = { id: string };
  const params = React.use<Params>(props.params);
  const { id } = params;
  const practitioner = practitioners.find((p) => p.id === id);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState(0);
  // Calendly API integration
  // Mock 5 days starting from today
  const [days, setDays] = useState<{ date: string; active: boolean }[]>([]);
  const [slots, setSlots] = useState<Record<string, { start: string; end: string }[]>>({});
  const [loading, setLoading] = useState(true);
  // Payment Modal Form State
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  console.log("slots", slots)

  React.useEffect(() => {
    const fetchAvailability = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/calendly/availability?userId=${practitioner?.id}`);
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
  }, [practitioner?.id]);


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
            <Link href="/services" className="inline-block px-6 py-2 rounded-full bg-brand-gold text-white font-semibold shadow hover:bg-yellow-600 transition">View All Services</Link>
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
    reviews: practitioner.reviews,
    specialties: practitioner.specialties,
  };


  // Get times for selected day
  const selectedDayDate = days[selectedDay]?.date;
  // --- MOCK DYNAMIC TIME SLOTS FOR NEXT 5 SLOTS WITH 10-MINUTE INCREMENT ---
  // Current local time: 2025-05-26T02:02:44+05:30
  function getNextRoundedTime(date: Date, intervalMinutes: number = 10) {
    const ms = 1000 * 60 * intervalMinutes;
    return new Date(Math.ceil(date.getTime() / ms) * ms);
  }
  function pad(n: number) { return n.toString().padStart(2, '0'); }
  function formatTime12(date: Date) {
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    if (hours === 0) hours = 12;
    return `${hours}:${pad(minutes)} ${ampm}`;
  }
  // Generate time slots for the next 20 slots with 15-minute increments
  const now = new Date();
  const slotsCount = 20;
  const slotDuration = 15; // minutes
  const times = Array.from({ length: slotsCount }).map((_, i) => {
    const start = new Date(getNextRoundedTime(now, 15).getTime() + i * slotDuration * 60000);
    const end = new Date(start.getTime() + slotDuration * 60000);
    return `${formatTime12(start)} - ${formatTime12(end)}`;
  });

  const mockDays = () => {
    const daysArr = [];
    const today = new Date();
    for (let i = 0; i < 5; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dd = d.getDate().toString().padStart(2, '0');
      const mm = (d.getMonth() + 1).toString().padStart(2, '0');
      const yyyy = d.getFullYear();
      daysArr.push({ date: `${dd}/${mm}/${yyyy}`, active: i === 0 });
    }
    return daysArr;
  }
  // --- END MOCK DYNAMIC TIME SLOTS ---


  // const times = selectedDayDate && slots[selectedDayDate]
  //   ? slots[selectedDayDate].map(slot => `${slot.start} - ${slot.end}`)
  //   : [];


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
                <span className="text-gray-600 text-base font-bold">{session.practitioner.name}</span>
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

            {/* Specialties Section */}
            {session.specialties && session.specialties.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5 items-center">

                {session.specialties.map((spec: string, idx: number) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#fdf6e3] border border-[#fde68a] text-brand-gold font-semibold text-xs shadow-sm flex items-center"
                    style={{ letterSpacing: '0.01em' }}
                  >
                    {spec}
                  </span>
                ))}
                {/* Decorative star accent */}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="opacity-60"><circle cx="9" cy="9" r="1.2" fill="#FFD700" /><g opacity="0.6"><circle cx="15" cy="3" r="0.7" fill="#E5C07B" /></g></svg>
              </div>
            )}

            <div className="border-t border-[#f6e9c0] pt-6 text-gray-700 text-base whitespace-pre-line">
              {session.description}

            </div>
          </section>

          {/* Right Booking Panel */}
          <section className="bg-white/95 rounded-2xl shadow-2xl border border-[#e7e4dc] flex-1 p-8 flex flex-col animate-fade-in">
            {/* Coming Soon State */}
            {practitioner.id === 'coming-soon' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
                {/* Magical/Islamic accent */}
                <svg width="54" height="54" viewBox="0 0 54 54" fill="none" className="mb-4 animate-pulse">
                  <path d="M40 27c0 7.18-5.82 13-13 13a13 13 0 1 1 0-26c.37 0 .74.015 1.11.045A11 11 0 1 0 40 27z" fill="#FDE68A" />
                  <polygon points="42,19 44,23 48,23 45,26 46,30 42,28 38,30 39,26 36,23 40,23" fill="#E5C07B" />
                  <circle cx="10" cy="44" r="1.5" fill="#FDE68A" opacity=".5" />
                  <circle cx="48" cy="10" r="1" fill="#E5C07B" opacity=".7" />
                </svg>
                <div className="text-2xl font-bold text-brand-gold mb-2">Coming Soon</div>
                <div className="text-gray-700 text-base text-center max-w-xs mb-4">This practitioner will be available for bookings soon, insha'Allah. Please check back later or explore other practitioners in the meantime.</div>
                <Link href="/practitioners" className="mt-2 text-primary font-semibold underline underline-offset-2 hover:text-brand-gold transition">Browse Practitioners</Link>
              </div>
            ) : days.length === 0 && !loading ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px]">
                {/* Magical/Islamic accent */}
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="mb-4 animate-pulse">
                  <circle cx="22" cy="22" r="10" fill="#FDE68A" opacity=".13" />
                  <polygon points="22,5 24,12 32,12.2 26,17 27.5,24 22,20.5 16.5,24 18,17 12,12.2 20,12" fill="#FDE68A" opacity=".4" />
                  <circle cx="34" cy="10" r="1.2" fill="#E5C07B" />
                  <circle cx="8" cy="36" r="1" fill="#F6E27A" />
                </svg>
                <div className="text-xl font-bold text-brand-gold mb-2">No Available Slots</div>
                <div className="text-gray-700 text-base text-center max-w-xs mb-4">There are currently no available slots for this practitioner. Please try another practitioner or check back later.</div>
                <Link href="/practitioners" className="mt-2 text-primary font-semibold underline underline-offset-2 hover:text-brand-gold transition">Browse Practitioners</Link>
              </div>
            ) : (
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
                        : mockDays().map((d, i) => {
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
                          );
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
                <Button variant="primary" className="w-full" onClick={() => {
                  Clarity.event('Booking Continue Click');
                  setShowPaymentForm(true);
                }}>
                  Continue
                </Button>

                {/* Payment Form Modal */}
                {showPaymentForm && <PaymentModal
                  onClose={() => setShowPaymentForm(false)}
                  price={session.price}
                  practitionerId={practitioner.id}
                  date={selectedDayDate}
                  slot={times[selectedTime]}
                />}

              </div>
            )}
          </section>

        </div>

      </div>
      {/* Consultee Stories Section */}
      <section className="max-w-6xl mx-auto mt-14 mb-6 px-2 w-full">
        <div className="flex flex-col items-center mb-8">
          {/* Decorative Islamic/Magical Touch */}
          <div className="flex items-center gap-2 mb-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="2" fill="#FFD700" /><g opacity="0.7"><circle cx="8" cy="24" r="1" fill="#E5C07B" /><circle cx="28" cy="6" r="1.5" fill="#F6E27A" /></g></svg>
            <span className="text-2xl md:text-3xl font-bold text-brand-gold tracking-tight">Consultee Stories</span>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="2" fill="#FFD700" /><g opacity="0.7"><circle cx="24" cy="8" r="1" fill="#E5C07B" /><circle cx="4" cy="26" r="1.5" fill="#F6E27A" /></g></svg>
          </div>
          <p className="text-gray-700 text-base md:text-lg text-center max-w-2xl">Real stories of healing, clarity, and transformation from our Najoomi family. Your journey to peace and purpose can begin here, too.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
          {practitioner.reviews && practitioner.reviews.length > 0 ? (
            practitioner.reviews.map((review, idx) => (
              <div key={idx} className="bg-white/90 border border-[#fde68a] rounded-xl shadow-lg p-6 flex flex-col items-start relative">
                {/* Subtle geometric/star accent */}
                <svg className="absolute top-3 left-3 opacity-20" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12a7 7 0 0 1 7-7v2a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3v2a1 1 0 0 0-1 1H5z" fill="#eab308" />
                  <circle cx="19" cy="5" r="1.2" fill="#F6E27A" opacity="0.5" />
                  <circle cx="7" cy="19" r="0.8" fill="#E5C07B" opacity="0.5" />
                  <path d="M17 20a3 3 0 0 1 2-2.6" stroke="#eab308" strokeWidth="0.7" opacity="0.4" />
                </svg>
                <p className="text-gray-800 text-md md:text-lg font-medium mb-4">“{review.text}”</p>
                <span className="text-sm text-brand-gold font-semibold mt-auto">— {review.name}</span>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 italic py-8">
              No testimonials yet for this practitioner. Be the first to share your story!
            </div>
          )}
        </div>
      </section>
      <PractitionerStandardsGrid />
    </main>
  );
}
