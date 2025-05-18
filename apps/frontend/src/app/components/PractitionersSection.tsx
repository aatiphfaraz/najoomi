import Link from "next/link";
import PractitionerCard from "./PractitionerCard";
import { practitioners } from "../constants/practitioners";



export default function PractitionersSection() {

  return (
    <section className="w-full py-20 px-4 flex flex-col items-center bg-gradient-to-br from-white to-[#F1E1C6]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#15577a] mb-2">Our Practitioners</h2>
      <p className="mb-10 text-gray-700 text-center max-w-2xl">
        Meet our team of experienced spiritual guides, qualified in various Islamic disciplines to provide you with authentic guidance and support
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {practitioners
          .filter((p) => p.type === "najoomi")
          .sort((a, b) => {
            // Star practitioners first, then by rating descending
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
      <div className="flex justify-center mt-10">
        <Link href="/practitioners/najoomis" className="text-[#15577a] text-lg font-semibold underline underline-offset-4 decoration-[#b6894a] hover:decoration-2 hover:text-[#b6894a] transition-all duration-150">
          View All Practitioners
        </Link>
      </div>
    </section>
  );
}
