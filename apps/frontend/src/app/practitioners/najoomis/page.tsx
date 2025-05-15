import PractitionerCard from "../../components/PractitionerCard";
import { practitioners } from "../../constants/practitioners";

export default function NajoomiPage() {
  const najoomis = practitioners
    .filter((p) => p.type === "najoomi")
    .sort((a, b) => {
      if ((b.starPractitioner ? 1 : 0) !== (a.starPractitioner ? 1 : 0)) {
        return (b.starPractitioner ? 1 : 0) - (a.starPractitioner ? 1 : 0);
      }
      return (b.rating || 0) - (a.rating || 0);
    });

  return (
    <section className="w-full py-12 px-4 flex flex-col items-center ">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight drop-shadow-lg">Our Najoomis</h1>
      <p className="mb-10 text-gray-700 text-center max-w-2xl">
        Explore our team of certified Najoomis, experts in Islamic spiritual guidance and esoteric sciences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {najoomis.map((p) => (
          <PractitionerCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
