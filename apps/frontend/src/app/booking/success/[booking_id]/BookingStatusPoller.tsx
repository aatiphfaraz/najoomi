"use client";
import React, { useEffect, useRef, useState } from "react";

interface BookingStatusPollerProps {
  orderId: string;
}

const BookingStatusPoller: React.FC<BookingStatusPollerProps> = ({ orderId }) => {
  const [calendlyLink, setCalendlyLink] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch(`/api/booking-status?order_id=${orderId}`);
        const data = await res.json();
        if (res.ok && data.calendly_link) {
          setCalendlyLink(data.calendly_link);
          setLoading(false);
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
    };
    fetchStatus();
    interval.current = setInterval(fetchStatus, 3000);
    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, [orderId]);

  if (loading && !calendlyLink) {
    return (
      <div className="flex flex-col items-center justify-center my-6">
        <span className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-500 mb-2"></span>
        <span className="text-gold-700 font-semibold">Waiting for scheduling link...</span>
      </div>
    );
  }
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }
  if (calendlyLink) {
    return (
      <div className="flex flex-col items-center my-6 p-4 bg-white/80 rounded-xl shadow-lg border border-gold-200">
        <span className="text-green-700 font-semibold mb-2">Your scheduling link is ready!</span>
        <a href={calendlyLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-bold">Schedule Now</a>
      </div>
    );
  }
  return null;
};

export default BookingStatusPoller;
