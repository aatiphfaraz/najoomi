"use client"
import React, { useState } from "react";

interface FAQAccordionProps {

  faqs: { question: string; answer: string }[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="faq-group bg-white/80 rounded-3xl p-6 border border-[#fde68a]/60 flex flex-col mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#15577a] mb-6 flex items-center justify-center gap-2">
        <span role="img" aria-label="sparkles">✨</span>
        Frequently Asked Questions
        <span role="img" aria-label="sparkles">✨</span>
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, idx) => (
          <div key={faq.question} className="rounded-lg border border-[#b6894a]/20 bg-white/60 overflow-hidden transition-all">
            <button
              className="w-full flex items-center justify-between px-4 py-3 text-left font-semibold text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#fde68a] hover:bg-[#fde68a]/10 transition group"
              aria-expanded={openIdx === idx}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              <span className="flex items-center gap-2">

                {faq.question}
              </span>
              <span className="ml-2 transform transition-transform duration-300" style={{ transform: openIdx === idx ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 5v8" stroke="#b6894a" strokeWidth="2" strokeLinecap="round" /><path d="M5 9h8" stroke="#b6894a" strokeWidth="2" strokeLinecap="round" /></svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 bg-gradient-to-br from-[#fdf6e3] to-[#f7ecd7] px-4 ${openIdx === idx ? 'max-h-[1000px] py-3 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
              aria-hidden={openIdx !== idx}
            >
              <div className="text-[#15577a] text-sm leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
