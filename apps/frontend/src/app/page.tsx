import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import PractitionersSection from "./components/PractitionersSection";
import TherapistsSection from "./components/TherapistsSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function HomePage() {

  return (
    <main className="relative min-h-[60vh] flex flex-col items-stretch justify-start bg-black/70">
      <HeroSection />
      <ServicesSection />
      <MissionSection />
      <PractitionersSection />
      <TherapistsSection />
      <TestimonialsSection />
    </main>
  );
}

