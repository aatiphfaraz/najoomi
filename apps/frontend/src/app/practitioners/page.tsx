import React from "react";
import { FaStar, FaUserMd } from "react-icons/fa";
import Link from "next/link";

export default function PractitionersPage() {
  return (

    <section className="relative max-w-6xl w-full mx-auto pt-12 z-10 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-12 tracking-tight drop-shadow-lg">
        Meet Our Practitioners
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {/* Najumis Card */}
        <Link href="/practitioners/najoomis" className="group bg-white/95 rounded-2xl shadow-2xl border-brand-gold p-10 flex flex-col items-center hover:scale-105 transition-transform duration-200 animate-fade-in relative" style={{ boxShadow: '0 8px 32px 0 rgba(34, 40, 80, 0.10)' }}>
          <span className="bg-[#fff7e0] rounded-full p-6 flex items-center justify-center mb-6 shadow-inner">
            <FaStar className="text-4xl text-brand-gold group-hover:text-primary transition-colors" />
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 text-center">Najumis</h2>
          <p className="text-gray-700 text-center mb-2">Our expert Najumis specialize in spiritual guidance, dream interpretation, ruqyah, istikhara, and holistic Islamic support rooted in Quran and Sunnah</p>
          <span className="mt-4 text-brand-gold font-semibold group-hover:underline group-hover:underline-offset-4 transition-all">Explore Najumis →</span>
        </Link>
        {/* Therapists Card */}
        <Link href="/practitioners/therapists" className="group bg-white/95 rounded-2xl shadow-2xl  border-[#15577a] p-10 flex flex-col items-center hover:scale-105 transition-transform duration-200 animate-fade-in relative" style={{ boxShadow: '0 8px 32px 0 rgba(34, 40, 80, 0.10)' }}>
          <span className="bg-[#e0e7ff] rounded-full p-6 flex items-center justify-center mb-6 shadow-inner">
            <FaUserMd className="text-4xl text-primary group-hover:text-brand-gold transition-colors" />
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 text-center">Therapists</h2>
          <p className="text-gray-700 text-center mb-2">Our licensed therapists offer confidential, faith-aligned counseling for emotional, mental, and relational well-being, blending expertise with compassion</p>
          <span className="mt-4 text-primary font-semibold group-hover:underline group-hover:underline-offset-4 transition-all">Explore Therapists →</span>
        </Link>
      </div>

    </section>


  );
}
