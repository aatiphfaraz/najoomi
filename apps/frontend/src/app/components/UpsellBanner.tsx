import { FaRegCalendarCheck } from "react-icons/fa";
import React from "react";
import Button from "./ui/Button";

interface UpsellBannerProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export default function UpsellBanner({
  title = "Begin Your Spiritual Journey Today",
  description = "Take the first step towards clarity, healing, and guidance with our authentic Islamic spiritual services.",
  primaryCtaText = "Book a Consultation",
  primaryCtaHref = "/book",
  secondaryCtaText = "Learn More About Our Services",
  secondaryCtaHref = "/services",
}: UpsellBannerProps) {
  return (
    <section className="w-full bg-[#15577a] py-16 px-4 flex flex-col items-center justify-center text-center rounded-3xl shadow-lg mt-20">
      <div className="mb-4 flex justify-center">
        <span className="rounded-full p-4 flex items-center justify-center shadow-md border-2 border-[#eab308] w-20 h-20">
          <span className="text-4xl" role="img" aria-label="Moon">🌙</span>
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">{title}</h2>
      <p className="mb-8 text-[#e0e7ff] text-base md:text-lg max-w-2xl mx-auto">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href={primaryCtaHref}>
          <Button variant="golden"><div>
            <span className="mr-1">🗓️</span> {primaryCtaText}
          </div></Button>
        </a>
        <a href={secondaryCtaHref}>
          <Button variant="secondary">{secondaryCtaText}</Button>
        </a>
      </div>
    </section>
  );
}
