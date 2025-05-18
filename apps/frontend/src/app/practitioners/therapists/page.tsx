import type { Metadata } from "next";
import PractitionerCard from "../../components/PractitionerCard";
import { practitioners } from "../../constants/practitioners";

export const metadata: Metadata = {
  title: "Najoomi Therapists | Licensed Islamic Therapists & Counselors",
  description:
    "Meet our licensed therapists, dedicated to your mental and emotional well-being with a blend of modern and spiritual techniques. Book a session for faith-based therapy and counseling.",
  keywords: [
    "Najoomi", "Islamic therapists", "faith-based therapy", "mental health", "Islamic counseling", "licensed therapists", "Muslim counselors", "spiritual therapy"
  ],
  openGraph: {
    title: "Najoomi Therapists | Licensed Islamic Therapists & Counselors",
    description:
      "Meet our licensed therapists, dedicated to your mental and emotional well-being with a blend of modern and spiritual techniques. Book a session for faith-based therapy and counseling.",
    url: "https://najoomi.in/practitioners/therapists",
    siteName: "Najoomi",
    type: "website",
    images: [
      {
        url: "https://najoomi.in/najoomi-logo.png",
        width: 512,
        height: 512,
        alt: "Najoomi Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Najoomi Therapists | Licensed Islamic Therapists & Counselors",
    description:
      "Meet our licensed therapists, dedicated to your mental and emotional well-being with a blend of modern and spiritual techniques. Book a session for faith-based therapy and counseling.",
    images: ["https://najoomi.in/najoomi-logo.png"]
  },
  alternates: {
    canonical: "https://najoomi.in/practitioners/therapists"
  }
};

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
    <section className="w-full py-12 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight drop-shadow-lg">Our Therapists</h1>
      <p className="mb-10 text-gray-700 text-center max-w-2xl">
        Meet our licensed therapists, dedicated to your mental and emotional well-being with a blend of modern and spiritual techniques
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {therapists.map((p) => (
          <PractitionerCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
