"use client";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { allServices } from "../constants/services";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import CarouselDecorations from "./CarouselDecorations";
import React, { useRef, useState } from "react";
export default function ServicesSection() {
  // State for keen-slider instance
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setCurrentSlide] = useState(0);
  const [sliderInstanceRef, setSliderInstanceRef] = useState<any>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // keen-slider for mobile: show 1 card at a time, swipeable, autoplay
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
    rubberband: true,
    loop: true,
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created(s) {
      setSliderInstanceRef(s);
    },
  });

  // Autoplay effect
  React.useEffect(() => {
    if (!sliderInstanceRef) return;
    const autoplay = () => {
      timerRef.current = setInterval(() => {
        sliderInstanceRef.next();
      }, 3500);
    };
    autoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [sliderInstanceRef]);

  // Pause autoplay on hover/focus for UX
  const pauseAutoplay = () => timerRef.current && clearInterval(timerRef.current);
  const resumeAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (sliderInstanceRef)
      timerRef.current = setInterval(() => {
        sliderInstanceRef.next();
      }, 3500);
  };

  return (
    <section className="w-full bg-gradient-to-br from-white to-[#F1E1C6] py-20 px-4 flex flex-col items-center relative overflow-x-clip">
      {/* Decorative overlay for magical/Islamic touch */}
      <span className="absolute left-0 top-0 w-full h-24 pointer-events-none z-0">
        <CarouselDecorations />
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-[#15577a] mb-2 z-10">Our Services</h2>
      <p className="mb-10 text-gray-700 text-center max-w-2xl z-10">
        Discover our range of authentic spiritual services designed to provide guidance, healing, and clarity through an Islamic perspective
      </p>
      {/* Carousel for mobile, grid for md+ */}
      <div className="block md:hidden w-full max-w-xl z-10 relative">
        {/* Left Arrow */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/60 shadow-md rounded-full w-10 h-10 flex items-center justify-center z-20 border border-[#eab308]/30 hover:bg-[#fef9c3] transition-colors"
          style={{ backdropFilter: 'blur(6px)' }}
          aria-label="Previous service"
          onClick={() => sliderInstanceRef && sliderInstanceRef.prev()}
          tabIndex={0}
        >
          {/* Plain left chevron arrow */}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M14 6l-6 5 6 5" stroke="#15577a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        {/* Right Arrow */}
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/60 shadow-md rounded-full w-10 h-10 flex items-center justify-center z-20 border border-[#eab308]/30 hover:bg-[#fef9c3] transition-colors"
          style={{ backdropFilter: 'blur(6px)' }}
          aria-label="Next service"
          onClick={() => sliderInstanceRef && sliderInstanceRef.next()}
          tabIndex={0}
        >
          {/* Plain right chevron arrow */}
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M8 6l6 5-6 5" stroke="#15577a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div
          ref={sliderRef}
          className="keen-slider"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          onFocus={pauseAutoplay}
          onBlur={resumeAutoplay}
        >
          {allServices.slice(0, 6).map((service, idx) => (
            <div className="keen-slider__slide px-1" key={service.title} aria-label={`Service ${idx + 1}`}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
      {/* Grid for desktop */}
      <div className="hidden md:grid grid-cols-3 gap-8 w-full max-w-6xl z-10">
        {allServices.slice(0, 6).map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
      <div className="flex justify-center mt-10 z-10">
        <Link href="/services" className="text-[#15577a] text-lg font-semibold underline underline-offset-4 decoration-[#b6894a] hover:decoration-2 hover:text-[#b6894a] transition-all duration-150">
          View All Services
        </Link>
      </div>
    </section>
  );
}

