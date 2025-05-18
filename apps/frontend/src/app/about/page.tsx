import React from "react";
import UpsellBanner from "../components/UpsellBanner";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white to-[#F1E1C6] pb-20 overflow-x-hidden">
      {/* Gold gradient accent background */}
      <div className="absolute left-0 top-0 w-full h-96  opacity-70 pointer-events-none z-0" />
      <section className="relative max-w-6xl mx-auto px-4 pt-12 z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-8 tracking-tight drop-shadow-lg">
          Our Story <span>– The Heart Behind Najoomi</span>
        </h1>
        <div className="relative bg-white/95 rounded-2xl shadow-2xl mx-auto p-8 md:p-12 mb-12 flex flex-col items-center border-l-8 border-[#15577a] animate-fade-in" style={{ boxShadow: '0 8px 32px 0 rgba(34, 40, 80, 0.10)' }}>

          <p className="mb-4 text-gray-800 text-[1rem]">
            <span className="font-bold text-primary">Najoomi</span> began with a heartfelt need — the kind that lives quietly in Muslim homes. In times of uncertainty, illness, heartbreak, or spiritual unease, we often turn to Allah for answers. But finding <span className="font-semibold text-brand-gold">authentic, inclusive, and compassionate Islamic guidance</span> isn&rsquo;t always easy.
          </p>
          <p className="text-center text-brand-gold font-medium mb-2 ">
            Najoomi was created to change that.
          </p>
          <p className="mb-4 text-gray-800 text-[1rem]">
            We’re building a <span className="font-bold text-primary">sanctuary for the global Muslim community</span> — a digital home for those seeking clarity through the Qur’an, Sunnah, and roohani healing. Whether you’re looking for ruqyah for protection, istikhara guidance, Islamic dream interpretation, personalized duas, or counsel from experienced Islamic psychologists — Najoomi is here to help.
          </p>
          <p className="mb-4 text-gray-800 text-[1rem]">
            Our team includes <span className="font-bold text-primary">qualified scholars, spiritual healers, and faith-based counsellors</span>, each dedicated to offering solutions rooted in deen, not fear.
          </p>
          <p className="mb-4 text-gray-800 text-[1rem]">
            We welcome Muslims from all walks of life, across all sects, with open hearts and sincere intentions. Every service on Najoomi is halal, spiritually sound, and tailored to your unique need — from baby naming to life path guidance.
          </p>
          <p className="text-center text-primary font-bold mt-6 mb-1">
            At our core, Najoomi is more than a platform.
          </p>
          <p className="text-center italic text-primary mb-1">
            It’s a movement back to the heart of Islam.<br />
            To the soul of connection.<br />
            <span className="font-semibold text-brand-gold">And to Guidance Beyond Boundaries.</span>
          </p>
          <p className="text-center mt-10">
            <span className="bg-[#fff7e0] border-2 border-brand-gold text-brand-gold px-6 py-3 rounded-xl text-lg font-semibold shadow-md inline-block tracking-wide drop-shadow-md">
              “A sanctuary for every seeker of faith, clarity, and healing.”
            </span>
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-12">
          <div className="bg-white/90 rounded-xl shadow p-6 border border-[#e7e4dc]">
            <h2 className="text-xl font-bold text-primary mb-2">Our Mission</h2>
            <p className="text-gray-700 text-base">At Najoomi, our mission is to walk beside every Muslim on their spiritual journey — offering heartfelt guidance, healing, and clarity through the timeless wisdom of the Quran, Sunnah, and sincere care.</p>
          </div>
          <div className="bg-white/90 rounded-xl shadow p-6 border border-[#e7e4dc]">
            <h2 className="text-xl font-bold text-primary mb-2">Our Vision</h2>
            <p className="text-gray-700 text-base">Najoomi aims to build a trusted sanctuary of Islamic healing and guidance, where every Muslim across beliefs finds roohani clarity, emotional peace, and spiritual alignment through Quran, Sunnah, and compassion.</p>
          </div>
        </div>

        {/* What Guides Our Work */}
        <div className="w-full flex flex-col items-center mb-12">
          <h2 className="text-2xl font-bold text-primary mb-8">What Guides Our Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
            <div className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center border border-[#e7e4dc]">
              <span className="text-3xl mb-2">🕌</span>
              <span className="font-bold text-primary mb-1">Authenticity</span>
              <span className="text-xs text-gray-600 text-center">Rooted in Quran, Sunnah, and established Islamic scholarship</span>
            </div>
            <div className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center border border-[#e7e4dc]">
              <span className="text-3xl mb-2">💡</span>
              <span className="font-bold text-primary mb-1">Insight</span>
              <span className="text-xs text-gray-600 text-center">Blending tradition with modern understanding for relevant guidance</span>
            </div>
            <div className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center border border-[#e7e4dc]">
              <span className="text-3xl mb-2">🤝</span>
              <span className="font-bold text-primary mb-1">Community</span>
              <span className="text-xs text-gray-600 text-center">Serving the needs of a diverse, global Muslim community</span>
            </div>
            <div className="bg-white/90 rounded-xl shadow p-6 flex flex-col items-center border border-[#e7e4dc]">
              <span className="text-3xl mb-2">❤️</span>
              <span className="font-bold text-primary mb-1">Compassion</span>
              <span className="text-xs text-gray-600 text-center">Approaching every individual with empathy and respect</span>
            </div>
          </div>
        </div>

        {/* Team & Commitment */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white/90 rounded-xl shadow p-6 border border-[#e7e4dc] flex flex-col">
            <h2 className="text-xl font-bold text-primary mb-2">Team Behind Najoomi</h2>
            <p className="text-gray-700 text-base">Najoomi is powered by a diverse team of qualified Islamic scholars, spiritual healers, and faith-based professionals. We are united by our commitment to confidentiality, compassion, and authentic guidance. Every member is carefully vetted to ensure you receive support rooted in Islamic tradition, modern expertise, and genuine care—while your privacy always comes first.</p>
          </div>
          <div className="bg-gradient-to-br from-[#fff7e0] to-[#fdf6e3] rounded-xl shadow p-6 border border-brand-gold flex flex-col">
            <h2 className="text-xl font-bold text-primary mb-2">Our Commitment to Quality</h2>
            <ul className="space-y-2 mt-2">
              <li className="flex items-start gap-2"><span className="text-brand-gold text-lg mt-0.5">✔️</span> <span>Practitioners vetted for Islamic orthodoxy & compassion</span></li>
              <li className="flex items-start gap-2"><span className="text-brand-gold text-lg mt-0.5">✔️</span> <span>Personalized, confidential, and respectful service</span></li>
              <li className="flex items-start gap-2"><span className="text-brand-gold text-lg mt-0.5">✔️</span> <span>Continuous training & quality assurance</span></li>
              <li className="flex items-start gap-2"><span className="text-brand-gold text-lg mt-0.5">✔️</span> <span>Easy access to resources & support</span></li>
            </ul>
          </div>
        </div>
      </section>
      <UpsellBanner />
    </main>
  );
}
