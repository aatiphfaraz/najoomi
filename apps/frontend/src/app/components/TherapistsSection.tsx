"use client";
import Link from "next/link";
import PractitionerCard from "./PractitionerCard";
import PractitionerCardMini from "./PractitionerCardMini";
import React, { useEffect, useState } from "react";
import { Practitioner } from "../constants/practitioners";

export default function TherapistsSection() {
  const [practitioners, setPractitioners] = useState<Practitioner[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("/api/practitioners?type=therapist")
      .then((res) => res.json())
      .then((data) => {
        if (data.practitioners) {
          setPractitioners(data.practitioners);
        } else {
          setError("No therapists found.");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load therapists.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="w-full py-10 md:py-20 px-2 sm:px-4 flex flex-col items-center bg-gradient-to-br from-white to-[#F1E1C6]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#15577a] mb-1 sm:mb-2">Our Therapists</h2>
      <p className="mb-6 sm:mb-10 text-gray-700 text-center max-w-md sm:max-w-2xl text-sm sm:text-base">
        Meet our licensed therapists, combining psychology and Islamic values for your well-being
      </p>
      {/* Mini cards for mobile */}
      <div className="flex flex-col gap-3 w-full max-w-md mx-auto md:hidden">
        {loading ? (
          <div className="text-blue-600 py-6 flex items-center justify-center gap-2">
            <svg className="animate-spin h-6 w-6 text-blue-400" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
            Loading therapists...
          </div>
        ) : error ? (
          <div className="text-red-600 py-6">{error}</div>
        ) : (
          practitioners
            .sort((a, b) => {
              if ((b.starPractitioner ? 1 : 0) !== (a.starPractitioner ? 1 : 0)) {
                return (b.starPractitioner ? 1 : 0) - (a.starPractitioner ? 1 : 0);
              }
              return (b.rating || 0) - (a.rating || 0);
            })
            .slice(0, 3)
            .map((p) => (
              <PractitionerCardMini key={p._id} {...p} />
            ))
        )}
      </div>
      {/* Regular cards for md+ */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 w-full max-w-6xl">
        {loading ? (
          Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-white/80 border border-[#fde68a]/40 shadow animate-pulse h-[390px] w-full flex flex-col items-center justify-center">
              <div className="w-24 h-24 bg-[#fffbe8] rounded-full mb-4" />
              <div className="h-6 w-32 bg-[#fde68a]/30 rounded mb-2" />
              <div className="h-4 w-24 bg-[#fde68a]/20 rounded mb-2" />
              <div className="h-4 w-16 bg-[#fde68a]/20 rounded mb-4" />
              <div className="h-8 w-36 bg-[#fde68a]/10 rounded mb-2" />
              <div className="h-4 w-20 bg-[#fde68a]/10 rounded" />
            </div>
          ))
        ) : (
          practitioners
            .sort((a, b) => {
              if ((b.starPractitioner ? 1 : 0) !== (a.starPractitioner ? 1 : 0)) {
                return (b.starPractitioner ? 1 : 0) - (a.starPractitioner ? 1 : 0);
              }
              return (b.rating || 0) - (a.rating || 0);
            })
            .slice(0, 3)
            .map((p) => (
              <PractitionerCard key={p._id} {...p} />
            ))
        )}
      </div>
      <div className="flex justify-center mt-6 sm:mt-10">
        <Link href="/practitioners/therapists" className="text-[#15577a] text-base sm:text-lg font-semibold underline underline-offset-4 decoration-[#b6894a] hover:decoration-2 hover:text-[#b6894a] transition-all duration-150">
          View All Practitioners
        </Link>
      </div>
    </section>
  );
}
