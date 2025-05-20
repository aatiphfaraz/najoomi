"use client";
import React, { useEffect, useState } from "react";

interface BookingStatusPollerProps {
  orderId: string;
}

const BookingStatusPoller: React.FC<BookingStatusPollerProps> = ({ orderId }) => {
  const [calendlyLink, setCalendlyLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function pollStatus() {
      try {
        const res = await fetch(`/api/booking-status?order_id=${orderId}`);
        const data = await res.json();
        if (res.ok && data.calendly_link) {
          setCalendlyLink(data.calendly_link);
          setLoading(false);
          return; // Stop polling
        } else if (res.ok) {
          setLoading(true);
        } else {
          setError(data.error || 'Unknown error');
          setLoading(false);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Network error');
        }
        setLoading(false);
      }
      if (!cancelled) {
        setTimeout(pollStatus, 3000);
      }
    }
    pollStatus();
    return () => {
      cancelled = true;
    };
  }, [orderId]);

  if (loading && !calendlyLink) {
    return (
      <div className="flex flex-col items-center justify-center my-6">
        {/* Magical golden spinner with sparkles */}
        <span className="relative flex items-center justify-center mb-2">
          <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#b6894a] border-t-2 border-opacity-40"></span>
          <svg className="absolute left-0 top-0" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7L9 2z" fill="#fde68a" opacity="0.7" /></svg>
          <svg className="absolute right-0 bottom-0" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="1.2" fill="#b6894a" opacity="0.3" /></svg>
        </span>
        <span className="text-[#b6894a] font-semibold tracking-wide italic">Awaiting your magical scheduling link...</span>
      </div>
    );
  }
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }


  if (calendlyLink) {
    return (
      <div className="flex flex-col items-center my-6 pt-5 bg-gradient-to-br from-[#fffbe6] to-[#f1e1c6] rounded-2xl shadow-xl border border-[#fde68a] relative w-full">
        {/* Decorative crescent and sparkles */}
        <svg className="absolute -top-4 left-2" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M24 16c0 4.418-3.582 8-8 8A8 8 0 1 1 24 16z" fill="#fffbe6" stroke="#fde68a" strokeWidth="1.2" /></svg>
        <svg className="absolute -bottom-3 right-3" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="1.2" fill="#b6894a" opacity="0.3" /></svg>
        <span className="text-primary font-semibold mb-2 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="10" fill="#a7f3d0" /><path d="M6 11l3 3 6-6" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Your scheduling link is ready!
        </span>
        <div className="w-full  mt-4 rounded-2xl overflow-hidden border border-[#fde68a] shadow-lg">
          <iframe
            src={calendlyLink}
            title="Calendly Scheduling"
            className="w-full min-h-[600px] md:min-h-[700px] bg-white rounded-2xl"
            style={{ border: 'none' }}
          // allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  return null;
};

export default BookingStatusPoller;
