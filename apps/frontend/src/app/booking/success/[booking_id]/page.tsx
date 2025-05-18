"use client"
import React from "react";
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import BookingStatusPoller from "./BookingStatusPoller";
import { useParams } from "next/navigation";

export default function PaymentSuccessPage() {
  // Try to get the order_id (which is booking_id or order_id) from params or query
  // If your route is /booking/success/[booking_id], use useParams
  const params = useParams();
  const orderId = params?.booking_id as string;
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f7fafc] to-[#e0e7ef] overflow-hidden">
      {/* Decorative Islamic geometric pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg width="100%" height="100%" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="geo" patternUnits="userSpaceOnUse" width="60" height="60">
              <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="#b6c2d1" strokeWidth="1.5" />
              <circle cx="30" cy="30" r="6" fill="#dbeafe" />
            </pattern>
          </defs>
          <rect width="600" height="600" fill="url(#geo)" />
        </svg>
      </div>

      {/* Magical crescent moon and stars */}
      <div className="absolute top-10 right-10 z-10">
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <path d="M45 30c0 8.284-6.716 15-15 15A15 15 0 1 1 45 30z" fill="#fffbe6" stroke="#fbbf24" strokeWidth="1.5" />
          <circle cx="48" cy="18" r="2" fill="#fbbf24" />
          <circle cx="54" cy="26" r="1.2" fill="#fbbf24" />
          <circle cx="42" cy="12" r="1.5" fill="#fbbf24" />
        </svg>
      </div>
      {/* Subtle sparkles */}
      <div className="absolute bottom-20 left-10 z-10">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <path d="M20 10l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" fill="#c7d2fe" opacity="0.7" />
        </svg>
      </div>

      <div className="relative z-20 bg-white/80 rounded-2xl shadow-xl px-8 py-12 flex flex-col items-center max-w-md mx-auto border border-[#e0e7ef]">
        {/* Poll for scheduling link */}
        {orderId && <BookingStatusPoller orderId={orderId} />}
        <h1 className="text-3xl md:text-4xl font-bold text-[#2b3445] mb-4 flex items-center gap-2">
          <span>Payment Successful</span>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#a7f3d0" /><path d="M10 17l4 4 8-8" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </h1>
        <p className="text-lg text-[#3b4252] mb-6 text-center">
          Thank you for your payment!<br />Your booking is confirmed.<br />
          You will receive a confirmation email shortly with further details and next steps.
        </p>
        <Link href="/" >
          <Button variant="golden">
            Return Home

          </Button>
        </Link>
      </div>
    </div>
  );
}
