"use client";
import ServiceCard from "./ServiceCard";
import ServiceCardMini from "./ServiceCardMini";
import Link from "next/link";
import { allServices } from "../constants/services";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import CarouselDecorations from "./CarouselDecorations";
import React, { useRef, useState } from "react";
export default function ServicesSection() {
  // State for keen-slider instance
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderInstanceRef, setSliderInstanceRef] = useState<any>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // --- Responsive chunking logic (shared for mobile and desktop) ---
  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const res: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };
  const getChunkSize = () => {

    return 3; // mobile & SSR fallback
  };
  const [chunkSize, setChunkSize] = React.useState(getChunkSize());
  React.useEffect(() => {
    const handleResize = () => setChunkSize(getChunkSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const serviceChunks = chunkArray(allServices, chunkSize);

  // keen-slider for mobile: universal chunking
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 0 }, // 1 group per slide, chunked
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
    <section className="w-full bg-gradient-to-br from-white to-[#F1E1C6] py-10 md:py-20 px-2 md:px-4 flex flex-col items-center relative overflow-x-clip">
      {/* Decorative overlay for magical/Islamic touch */}
      <span className="absolute left-0 top-0 w-full h-16 md:h-24 pointer-events-none z-0">
        <CarouselDecorations />
      </span>
      <h2 className="text-2xl md:text-4xl font-bold text-[#15577a] mb-1 md:mb-2 z-10">Our Services</h2>
      <p className="mb-4 md:mb-10 text-gray-700 text-center max-w-xl md:max-w-2xl text-sm md:text-base z-10">
        Discover our range of authentic spiritual services designed to provide guidance, healing, and clarity through an Islamic perspective
      </p>
      {/* Carousel for mobile, grid for md+ */}
      <div className="block md:hidden w-full max-w-xl z-10 relative">

        <div
          ref={sliderRef}
          className="keen-slider"
          onMouseEnter={pauseAutoplay}
          onMouseLeave={resumeAutoplay}
          onFocus={pauseAutoplay}
          onBlur={resumeAutoplay}
        >
          {serviceChunks.map((chunk, idx) => (
            <div className="keen-slider__slide px-0.5" key={idx} aria-label={`Service group ${idx + 1}`}>
              <div className="flex gap-2 justify-center">
                {chunk.map((service) => (
                  <ServiceCardMini key={service.title} icon={service.icon} title={service.title} href={service.href} />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Carousel dots for mobile */}
        {/* Carousel dots for mobile */}
        <div className="flex md:hidden justify-center gap-2 mt-4 z-10">
          {serviceChunks.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to group ${idx + 1}`}
              onClick={() => sliderInstanceRef && sliderInstanceRef.moveToIdx(idx)}
              className={
                `w-3 h-3 rounded-full border border-[#b6894a] transition-all duration-200 ` +
                (currentSlide === idx ? "bg-[#b6894a] shadow-[0_0_6px_#eab30855] scale-110" : "bg-[#fef9c3] opacity-60")
              }
              style={{ outline: 'none' }}
            >
              {/* Subtle star/geometric accent for active dot */}
              {currentSlide === idx && (
                <svg width="12" height="12" className="absolute -top-2 left-1/2 -translate-x-1/2" viewBox="0 0 12 12" fill="none">
                  <polygon points="6,1 7,5 11,5 8,7 9,11 6,9 3,11 4,7 1,5 5,5" fill="#eab308" opacity="0.16" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
      {/* Carousel for desktop */}
      <div className="hidden md:block w-full max-w-6xl mx-auto z-10 relative">
        <DesktopServicesCarousel />
      </div>


      <div className="flex justify-center mt-6 md:mt-10 z-10">
        <Link href="/services" className="text-[#15577a] text-base md:text-lg font-semibold underline underline-offset-2 md:underline-offset-4 decoration-[#b6894a] hover:decoration-2 hover:text-[#b6894a] transition-all duration-150">
          View All Services
        </Link>
      </div>
    </section>
  );
}



// Desktop carousel: 3 ServiceCard per slide, dots
function DesktopServicesCarousel() {
  const chunkArray = <T,>(arr: T[], size: number): T[][] => {
    const res: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      res.push(arr.slice(i, i + size));
    }
    return res;
  };
  // Responsive chunking for md (2 per slide) and lg+ (3 per slide)
  const getChunkSize = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1146) return 3; // lg+
      if (window.innerWidth >= 768) return 2; // md
    }
    return 3; // SSR fallback
  };
  const [chunkSize, setChunkSize] = React.useState(getChunkSize());
  React.useEffect(() => {
    const handleResize = () => setChunkSize(getChunkSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const serviceChunks = chunkArray(allServices, chunkSize);

  const [current, setCurrent] = React.useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: { perView: 1, spacing: 24 },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 1, spacing: 24 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 1, spacing: 24 },
      },
    },
    loop: true,
    initial: 0,
    slideChanged(s) {
      setCurrent(s.track.details.rel);
    },
  });
  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {serviceChunks.map((chunk, idx) => (
          <div className="keen-slider__slide px-2" key={idx} aria-label={`Service group ${idx + 1}`}>
            <div className="flex gap-8 justify-center">
              {chunk.map((service) => (
                <div className="w-[350px] flex-shrink-0" key={service.title}>
                  <ServiceCard key={service.title} {...service} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Desktop carousel dots */}
      <div className="flex justify-center gap-2 mt-4 z-10">
        {serviceChunks.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to group ${idx + 1}`}
            onClick={() => instanceRef.current && instanceRef.current.moveToIdx(idx)}
            className={
              `w-3 h-3 rounded-full border border-[#b6894a] transition-all duration-200 ` +
              (current === idx ? "bg-[#b6894a] shadow-[0_0_6px_#eab30855] scale-110" : "bg-[#fef9c3] opacity-60")
            }
            style={{ outline: 'none', position: 'relative' }}
          >
            {/* Subtle star/geometric accent for active dot */}
            {current === idx && (
              <svg width="12" height="12" className="absolute -top-2 left-1/2 -translate-x-1/2" viewBox="0 0 12 12" fill="none">
                <polygon points="6,1 7,5 11,5 8,7 9,11 6,9 3,11 4,7 1,5 5,5" fill="#eab308" opacity="0.16" />
              </svg>
            )}
          </button>
        ))}
      </div>
    </>
  );
}