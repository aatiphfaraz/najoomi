import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClarityProvider } from "./ClarityProvider";

import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { CONTACT_DETAILS } from "./constants/contact";

const email = CONTACT_DETAILS.find((item) => item.type === "Email")?.value[0] || "";
const address = CONTACT_DETAILS.find((item) => item.type === "Office")?.value[0] || "";
const phone = CONTACT_DETAILS.find((item) => item.type === "Phone")?.value[0] || "";
const hours = CONTACT_DETAILS.find((item) => item.type === "Hours")?.value[0] || "";

export const metadata: Metadata = {
  title: "Najoomi | Authentic Islamic Spiritual & Therapy Guidance",
  description:
    "Najoomi offers authentic Islamic spiritual guidance, dream interpretation, ruqyah, and faith-based therapy. Connect with certified practitioners and therapists for clarity, healing, and support.",
  keywords: [
    "Najoomi", "Islamic guidance", "spirituality", "dream interpretation", "ruqyah", "therapy", "counseling", "faith-based", "mental health", "astrology", "healing", "practitioners", "therapists", "New Delhi", "India", "online consultation", "Muslim counselors", "Quranic healing"
  ],
  openGraph: {
    title: "Najoomi | Authentic Islamic Spiritual & Therapy Guidance",
    description:
      "Najoomi connects you to certified Islamic practitioners and therapists for spiritual and mental well-being. Book a consultation for dream interpretation, ruqyah, and more.",
    url: "https://najoomi.in",
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
    title: "Najoomi | Authentic Islamic Spiritual & Therapy Guidance",
    description:
      "Najoomi connects you to certified Islamic practitioners and therapists for spiritual and mental well-being. Book a consultation for dream interpretation, ruqyah, and more.",
    images: ["https://najoomi.in/najoomi-logo.png"]
  },
  metadataBase: new URL("https://najoomi.in"),
  alternates: {
    canonical: "https://najoomi.in"
  },
  themeColor: "#fde68a",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 }
  },
  icons: {
    icon: "/najoomi-logo.png",
    shortcut: "/najoomi-logo.png",
    apple: "/najoomi-logo.png"
  },
  other: {
    "contact:email": email,
    "contact:address": address,
    "contact:phone": phone,
    "contact:hours": hours
  }
};

import Footer from "./components/Footer";
import NavbarV2 from "./components/NavbarV2";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/najoomi-logo.png" type="image/png" />
        {/* <script src="https://sdk.cashfree.com/js/v3/cashfree.js"></script> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarV2 />
        <ClarityProvider projectId="rlhzu2thj4" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
