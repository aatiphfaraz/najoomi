import PractitionerCard from "../../components/PractitionerCard";
import { practitioners } from "../../constants/practitioners";

export default function TherapistsPage() {
  const therapists = practitioners
    .filter((p) => p.type === "therapist")
    .sort((a, b) => {
      if ((b.starPractitioner ? 1 : 0) !== (a.starPractitioner ? 1 : 0)) {
        return (b.starPractitioner ? 1 : 0) - (a.starPractitioner ? 1 : 0);
      }
      return (b.rating || 0) - (a.rating || 0);
    });

  return (
    <section className="w-full py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight drop-shadow-lg">Our Therapists</h1>
      <p className="mb-10 text-gray-700 text-center max-w-2xl">
        Meet our licensed therapists, dedicated to your mental and emotional well-being with a blend of modern and spiritual techniques.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {therapists.map((p) => (
          <PractitionerCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
