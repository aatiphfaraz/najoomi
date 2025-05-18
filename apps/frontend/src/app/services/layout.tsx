
import { Metadata } from "next";
import UpsellBanner from "../components/UpsellBanner";

export const metadata: Metadata = {
    title: "All Services | Najoomi",
    description: "Explore our comprehensive range of spiritual and wellness services designed to guide, heal, and empower you",
    openGraph: {
        title: "All Services | Najoomi",
        description: "Explore our comprehensive range of spiritual and wellness services designed to guide, heal, and empower you",
    },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="relative min-h-screen bg-gradient-to-br from-white to-[#F1E1C6] pb-20 overflow-x-hidden px-2">
            {children}
            <UpsellBanner />
        </main>
    );
}
