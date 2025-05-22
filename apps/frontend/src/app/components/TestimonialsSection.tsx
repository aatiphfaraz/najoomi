"use client"
const testimonials = [
  {
    rating: 5,
    text: "The dream interpretation service was incredibly accurate. The practitioner explained the Islamic context behind my recurring dream and provided me with practical guidance that helped me find peace!",
    name: "Farah Khan",
    location: "Mumbai",
    initials: "FK"
  },
  {
    rating: 5,
    text: "I was going through a difficult time making a life-changing decision. The Istikhara guidance I received helped me find clarity and confidence in my choice. Truly blessed to have found this service!",
    name: "Ahmed Patel",
    location: "Hyderabad",
    initials: "AP"
  },
  {
    rating: 5,
    text: "The Ruqyah service helped my family during a time of spiritual difficulty. The practitioner was compassionate, knowledgeable, and provided us with ongoing support even after our session!",
    name: "Zainab Ali",
    location: "Delhi",
    initials: "ZA"
  }
];

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import React, { useState } from 'react';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, sliderInstanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 0 },
    loop: true,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
  });

  return (
    <section className="w-full bg-gradient-to-br from-white to-[#F1E1C6] py-10 md:py-20 px-2 sm:px-4 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#15577a] mb-1 sm:mb-2">What Our Clients Say</h2>
      <p className="mb-6 sm:mb-10 text-gray-700 text-center max-w-md sm:max-w-2xl text-sm sm:text-base">
        Hear from those who have experienced the transformative guidance and support from our practitioners
      </p>
      {/* Mobile carousel */}
      <div className="block md:hidden w-full max-w-xs sm:max-w-sm mx-auto">
        <div ref={sliderRef} className="keen-slider">
          {testimonials.map((t, idx) => (
            <div className="keen-slider__slide px-0.5" key={t.name} aria-label={`Testimonial ${idx + 1}`}>
              <div className="bg-white rounded-2xl shadow-md border border-[#eab308]/10 p-3 sm:p-4 flex flex-col min-h-[200px] sm:min-h-[240px]">
                <div className="flex items-center mb-1 sm:mb-2">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#eab308] mr-0.5 sm:mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.382-2.454a1 1 0 00-1.175 0l-3.382 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.382-2.454c-.784-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                    </svg>
                  ))}
                </div>
                <div className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-6 italic">&quot;{t.text}&quot;</div>
                <div className="flex items-center gap-2 sm:gap-3 mt-auto">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-[#f3ead7] text-[#15577a] font-bold text-xs sm:text-sm">
                    {t.initials}
                  </span>
                  <div>
                    <div className="font-semibold text-[#15577a] text-xs sm:text-sm leading-tight">{t.name}</div>
                    <div className="text-[10px] sm:text-xs text-gray-400">{t.location}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Dots for mobile */}
        <div className="flex justify-center mt-3 sm:mt-4 space-x-1.5 sm:space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to testimonial ${idx + 1}`}
              onClick={() => sliderInstanceRef.current && sliderInstanceRef.current.moveToIdx(idx)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-colors ${currentSlide === idx ? 'bg-[#eab308]' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
      {/* Desktop grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white rounded-2xl shadow-md border border-[#eab308]/10 p-6 flex flex-col min-h-[260px]"
          >
            <div className="flex items-center mb-2">
              {[...Array(t.rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#eab308] mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.382-2.454a1 1 0 00-1.175 0l-3.382 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.382-2.454c-.784-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
            </div>
            <div className="text-gray-700 text-sm mb-6 italic">&quot;{t.text}&quot;</div>
            <div className="flex items-center gap-3 mt-auto">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f3ead7] text-[#15577a] font-bold text-sm">
                {t.initials}
              </span>
              <div>
                <div className="font-semibold text-[#15577a] text-sm leading-tight">{t.name}</div>
                <div className="text-xs text-gray-400">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
