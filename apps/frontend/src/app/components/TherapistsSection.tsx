import Link from "next/link";
import PractitionerCard from "./PractitionerCard";
import { practitioners } from "../constants/practitioners";
import PractitionerCardMini from "./PractitionerCardMini";

export default function TherapistsSection() {
  return (
    <section className="w-full py-10 md:py-20 px-2 sm:px-4 flex flex-col items-center bg-gradient-to-br from-white to-[#F1E1C6]">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#15577a] mb-1 sm:mb-2">Our Therapists</h2>
      <p className="mb-6 sm:mb-10 text-gray-700 text-center max-w-md sm:max-w-2xl text-sm sm:text-base">
        Meet our licensed therapists, combining psychology and Islamic values for your well-being
      </p>
      {/* Mini cards for mobile */}
      <div className="flex flex-col gap-3 w-full max-w-md mx-auto md:hidden">
        {practitioners
          .filter((p) => p.type === "therapist")
          .sort((a, b) => {
            if ((b.starPractitioner ? 1 : 0) !== (a.starPractitioner ? 1 : 0)) {
              return (b.starPractitioner ? 1 : 0) - (a.starPractitioner ? 1 : 0);
            }
            return (b.rating || 0) - (a.rating || 0);
          })
          .slice(0, 3)
          .map((p) => (
            <PractitionerCardMini key={p.name} {...p} />
          ))}
      </div>
      {/* Regular cards for md+ */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 w-full max-w-6xl">
        {practitioners
          .filter((p) => p.type === "therapist")
          .sort((a, b) => {
            if ((b.starPractitioner ? 1 : 0) !== (a.starPractitioner ? 1 : 0)) {
              return (b.starPractitioner ? 1 : 0) - (a.starPractitioner ? 1 : 0);
            }
            return (b.rating || 0) - (a.rating || 0);
          })
          .slice(0, 3)
          .map((p) => (
            <PractitionerCard key={p.name} {...p} />
          ))}
      </div>
      <div className="flex justify-center mt-6 sm:mt-10">
        <Link href="/practitioners/therapists" className="text-[#15577a] text-base sm:text-lg font-semibold underline underline-offset-4 decoration-[#b6894a] hover:decoration-2 hover:text-[#b6894a] transition-all duration-150">
          View All Practitioners
        </Link>
      </div>
    </section>


  );
}
