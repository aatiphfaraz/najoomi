"use client"
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import PractitionersSection from "./components/PractitionersSection";
import TherapistsSection from "./components/TherapistsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import { useEffect } from "react";

export default function HomePage() {

  useEffect(() => {
    // fetch("/api/practitioners/availability?userId=t1748685813771")
    //   .then(res => res.json())
    //   .then(data => {
    //     // eslint-disable-next-line no-console
    //     console.log("Practitioner availability API result:", data);
    //   });

    // fetch("/api/schedule-session")
    //   .then(res => res.json())
    //   .then(data => {
    //     if (data.authUrl) {
    //       // Open Google OAuth consent screen in a new tab
    //       window.open(data.authUrl, '_blank', 'noopener,noreferrer');
    //     }
    //     // eslint-disable-next-line no-console
    //     console.log("Google Meet link API result:", data);
    //   });
  }, []);

  return (
    <main className="relative min-h-[60vh] flex flex-col items-stretch justify-start bg-black/70">
      <HeroSection />
      <ServicesSection />
      <PractitionersSection />
      <TherapistsSection />
      <MissionSection />
      <TestimonialsSection />
    </main>
  );
}

