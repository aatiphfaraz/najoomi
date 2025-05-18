import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Najoomi",
  description: "Contact Najoomi for spiritual consultations, support, and answers to your questions. We're here to help you on your spiritual journey.",
  openGraph: {
    title: "Contact Us | Najoomi",
    description: "Contact Najoomi for spiritual consultations, support, and answers to your questions. We're here to help you on your spiritual journey.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
