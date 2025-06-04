"use client";
import React, { useEffect, useState } from "react";

interface BookingStatusPollerProps {
  orderId: string;
}

const BookingStatusPoller: React.FC<BookingStatusPollerProps> = ({ orderId }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    async function pollStatus() {
      try {
        const res = await fetch(`/api/booking-status?order_id=${orderId}`);
        const data = await res.json();
        if (res.ok && data.status === "scheduled") {
          setLoading(false);
          return; // Stop polling
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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center my-6">
        {/* Magical golden spinner with sparkles */}
        <span className="relative flex items-center justify-center mb-2">
          <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#b6894a] border-t-2 border-opacity-40"></span>
          <svg className="absolute left-0 top-0" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7L9 2z" fill="#fde68a" opacity="0.7" /></svg>
          <svg className="absolute right-0 bottom-0" width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="1.2" fill="#b6894a" opacity="0.3" /></svg>
        </span>
        <span className="text-[#b6894a] font-semibold tracking-wide italic">Awaiting your payment confirmation...</span>
      </div>
    );
  }
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return null;
};

export default BookingStatusPoller;
