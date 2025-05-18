
import type { Metadata } from "next";
import PractitionerStandardsGrid from "../components/PractitionerStandardsGrid";

export const metadata: Metadata = {
  title: "Najoomi Practitioners | Authentic Islamic Spiritual Guides",
  description:
    "Meet Najoomi's certified practitioners for dream interpretation, ruqyah, and Islamic spiritual counseling. Book a session with trusted scholars and healers.",
  keywords: [
    "Najoomi", "Islamic practitioners", "spiritual guides", "dream interpretation", "ruqyah", "istikhara", "Islamic counseling", "faith-based guidance", "Najoomi practitioners"
  ],
  openGraph: {
    title: "Najoomi Practitioners | Authentic Islamic Spiritual Guides",
    description:
      "Meet Najoomi's certified practitioners for dream interpretation, ruqyah, and Islamic spiritual counseling. Book a session with trusted scholars and healers.",
    url: "https://najoomi.in/practitioners",
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
    title: "Najoomi Practitioners | Authentic Islamic Spiritual Guides",
    description:
      "Meet Najoomi's certified practitioners for dream interpretation, ruqyah, and Islamic spiritual counseling. Book a session with trusted scholars and healers.",
    images: ["https://najoomi.in/najoomi-logo.png"]
  },
  alternates: {
    canonical: "https://najoomi.in/practitioners"
  }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="relative min-h-screen bg-gradient-to-br from-white to-[#F1E1C6] pb-20 overflow-x-hidden px-4 flex flex-col items-center">
            {children}
            <PractitionerStandardsGrid />
        </main>

    );
}
