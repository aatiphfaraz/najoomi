"use client"
import React from "react";
import BookingStatusPoller from "./BookingStatusPoller";
import { useParams } from "next/navigation";

export default function PaymentSuccessPage() {
  // Try to get the order_id (which is booking_id or order_id) from params or query
  // If your route is /booking/success/[booking_id], use useParams
  const params = useParams();
  const orderId = params?.booking_id as string;
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-[#F1E1C6] overflow-hidden py-8 px-2 sm:py-12 sm:px-0">
      {/* Magical crescent moon and stars */}
      <div className="absolute top-10 right-10 z-10 animate-fade-in">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M45 30c0 8.284-6.716 15-15 15A15 15 0 1 1 45 30z" fill="#fffbe6" stroke="#fbbf24" strokeWidth="1.5" />
          <circle cx="48" cy="18" r="2" fill="#fbbf24" />
          <circle cx="54" cy="26" r="1.2" fill="#fbbf24" />
          <circle cx="42" cy="12" r="1.5" fill="#fbbf24" />
        </svg>
      </div>
      {/* Subtle sparkles and calligraphy */}
      <div className="absolute bottom-20 left-10 z-10 animate-fade-in">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 10l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" fill="#c7d2fe" opacity="0.7" />
        </svg>
      </div>
      <div className="absolute bottom-12 right-12 z-10 animate-fade-in">
        <svg width="70" height="28" viewBox="0 0 70 28" fill="none">
          <text x="0" y="22" fontFamily="'Scheherazade', serif" fontSize="22" fill="#c7b47b" opacity="0.22">نجومي</text>
        </svg>
      </div>
      {/* More sparkles */}
      <div className="absolute top-24 left-16 z-10 animate-fade-in">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 4l1.2 3.5 3.5 1.2-3.5 1.2-1.2 3.5-1.2-3.5-3.5-1.2 3.5-1.2L14 4z" fill="#fde68a" opacity="0.7" />
        </svg>
      </div>

      {/* Payment Successful Heading at the top */}


      <div className="relative z-20 bg-white/90 rounded-2xl shadow-xl px-2 py-12 flex flex-col items-center w-full max-w-6xl mx-auto border border-[#e0e7ef] animate-fade-in-card"
        style={{ boxShadow: '0 0 0 4px #fef3c7, 0 2px 24px 0 #b6894a22' }}>

        <div className="w-full flex flex-col items-center mt-2 mb-4 animate-fade-in-title">
          <h1 className="text-[26px] md:text-4xl font-bold text-[#2b3445] flex items-center gap-2">
            <span>Payment Successful</span>
            <span className="inline-block animate-bounce-once">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#a7f3d0" /><path d="M10 17l4 4 8-8" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
          </h1>
        </div>
        {/* Poll for scheduling link */}
        {orderId && <BookingStatusPoller orderId={orderId} />}
        <div className="w-full flex flex-col items-center mb-6 animate-fade-in">
          <div className="flex items-center justify-center mb-2">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="mr-2"><circle cx="14" cy="14" r="14" fill="#fde68a" opacity="0.5" /><path d="M8 15l4 4 8-8" stroke="#b6894a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="font-semibold text-[#b6894a] text-lg">Thank you for your payment!</span>
          </div>
          <div className="w-1/2 border-t border-dashed border-[#fde68a] mb-2"></div>
          <span className="block text-base text-[#3b4252] mb-1">Your booking is <span className="font-bold text-primary">confirmed</span> &amp; you will receive a confirmation email shortly.</span>
          <div className="flex items-center justify-center gap-1 mt-3">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 2l1.2 3.5 3.5 1.2-3.5 1.2-1.2 3.5-1.2-3.5-3.5-1.2 3.5-1.2L10 2z" fill="#fde68a" opacity="0.8" /></svg>
            <span className="italic text-xs text-[#b6894a] tracking-wide">May the stars guide your journey!</span>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M10 2l1.2 3.5 3.5 1.2-3.5 1.2-1.2 3.5-1.2-3.5-3.5-1.2 3.5-1.2L10 2z" fill="#fde68a" opacity="0.8" /></svg>
          </div>
        </div>
      </div>
      {/* Keyframes for subtle fade-in and bounce */}
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes fade-in-card {
          from { opacity: 0; transform: scale(0.98) translateY(32px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes fade-in-title {
          from { opacity: 0; transform: translateY(-16px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes bounce-once {
          0% { transform: scale(0.7); }
          60% { transform: scale(1.15); }
          80% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        .animate-fade-in { animation: fade-in 1s ease both; }
        .animate-fade-in-card { animation: fade-in-card 1.1s cubic-bezier(.42,0,.58,1.0) both; }
        .animate-fade-in-title { animation: fade-in-title 1.2s cubic-bezier(.42,0,.58,1.0) both; }
        .animate-bounce-once { animation: bounce-once 0.7s cubic-bezier(.42,0,.58,1.0) both; }
      `}</style>
    </div>
  );
}
