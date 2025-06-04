import type { Metadata } from "next";
import PractitionerCard from "../../components/PractitionerCard";
import { Practitioner } from "../../constants/practitioners";

export const metadata: Metadata = {
  title: "Najoomi Spiritual Guides | Certified Najoomis for Islamic Guidance",
  description:
    "Explore our team of certified Najoomis, experts in Islamic spiritual guidance and esoteric sciences. Book a session for dream interpretation, ruqyah, and more.",
  keywords: [
    "Najoomi", "Najoomis", "Islamic spiritual guidance", "dream interpretation", "ruqyah", "esoteric sciences", "Islamic counseling", "spiritual guides"
  ],
  openGraph: {
    title: "Najoomi Spiritual Guides | Certified Najoomis for Islamic Guidance",
    description:
      "Explore our team of certified Najoomis, experts in Islamic spiritual guidance and esoteric sciences. Book a session for dream interpretation, ruqyah, and more.",
    url: "https://najoomi.in/practitioners/najoomis",
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
    title: "Najoomi Spiritual Guides | Certified Najoomis for Islamic Guidance",
    description:
      "Explore our team of certified Najoomis, experts in Islamic spiritual guidance and esoteric sciences. Book a session for dream interpretation, ruqyah, and more.",
    images: ["https://najoomi.in/najoomi-logo.png"]
  }
};

export default async function NajoomiPage() {
  // Fetch practitioners from API (server component)
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/practitioners?type=najoomi`, { cache: 'no-store' });
  const data = await res.json();
  const najoomis = (data?.practitioners || []).sort((a: any, b: any) => {
    if ((b.starPractitioner ? 1 : 0) !== (a.starPractitioner ? 1 : 0)) {
      return (b.starPractitioner ? 1 : 0) - (a.starPractitioner ? 1 : 0);
    }
    return (b.rating || 0) - (a.rating || 0);
  });

  return (
    <section className="w-full py-12 flex flex-col items-center ">
      {/* Decorative crescent moon accent */}
      <div className="flex justify-center mb-2">
        <svg className="w-12 h-12 text-yellow-400 opacity-70" viewBox="0 0 32 32"><path d="M24 16c0 5-4 9-9 9-1.4 0-2.7-.3-3.9-.9a1 1 0 0 1-.1-1.7A8 8 0 0 0 16 7c.6 0 1.2.1 1.7.2a1 1 0 0 1 .3 1.8A9 9 0 0 0 24 16z" fill="currentColor" /></svg>
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight drop-shadow-lg">Our Najoomis</h1>
      <p className="mb-10 text-gray-700 text-center max-w-2xl">
        Explore our team of certified Najoomis, experts in Islamic spiritual guidance and esoteric sciences
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {najoomis.map((p: Practitioner) => (
          <PractitionerCard key={p._id || p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
