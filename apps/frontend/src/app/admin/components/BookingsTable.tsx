"use client"
import React from 'react';

import { useEffect, useState } from 'react';

type Booking = {
  booking_id: string;
  name: string;
  email: string;
  phone: string;
  amount: number;
  practitioner_email: string;
  date: string;
  slot?: string;
  status: string;
};



const BookingsTable: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/bookings')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch bookings');
        return res.json();
      })
      .then(data => {
        setBookings(data.bookings || data || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (

    <div className="overflow-x-auto">
      <div className="relative">
        {/* Decorative crescent moon */}
        <svg className="absolute right-4 top-2 w-10 h-10 opacity-10 text-yellow-400 pointer-events-none" viewBox="0 0 32 32"><path d="M24 16c0 5-4 9-9 9-1.4 0-2.7-.3-3.9-.9a1 1 0 0 1-.1-1.7A8 8 0 0 0 16 7c.6 0 1.2.1 1.7.2a1 1 0 0 1 .3 1.8A9 9 0 0 0 24 16z" fill="currentColor" /></svg>
        <table className="min-w-full table-auto border border-blue-200 rounded-lg bg-white">
          <thead>
            <tr className="bg-blue-50">
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Phone</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Practitioner</th>
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">Time</th>
              <th className="px-4 py-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={5} className="py-8 text-center animate-pulse text-blue-300">Loading bookings...</td></tr>
            ) : error ? (
              <tr><td colSpan={5} className="py-8 text-center text-red-500">{error}</td></tr>
            ) : bookings.length === 0 ? (
              <tr><td colSpan={5} className="py-8 text-center text-gray-400">No bookings found.</td></tr>
            ) : (
              bookings.map((b) => {
                // Slot time string (e.g. "02:00 PM - 02:15 PM")
                const time = b.slot ? b.slot : '';
                // Status color logic
                let statusColor = 'text-gray-600';
                if (["confirmed", "scheduled"].includes(b.status)) statusColor = 'text-green-600';
                else if (b.status === "created") statusColor = 'text-yellow-600';
                else if (["cancelled", "failed"].includes(b.status)) statusColor = 'text-red-500';
                return (
                  <tr key={b.booking_id} className="text-center hover:bg-blue-50">
                    <td className="px-4 py-2 border">{b.name}</td>
                    <td className="px-4 py-2 border">{b.email}</td>
                    <td className="px-4 py-2 border">{b.phone}</td>
                    <td className="px-4 py-2 border">₹{b.amount}</td>
                    <td className="px-4 py-2 border">{b.practitioner_email}</td>
                    <td className="px-4 py-2 border">{b.date}</td>
                    <td className="px-4 py-2 border">{time}</td>
                    <td className={`px-4 py-2 border ${statusColor}`}>{b.status}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsTable;
