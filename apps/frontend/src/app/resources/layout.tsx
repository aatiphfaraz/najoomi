import UpsellBanner from "../components/UpsellBanner";


import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resources & Knowledge | Najoomi",
    description: "Explore Najoomi's collection of articles, guides, and insights on Islamic spiritual practices, dream interpretation, and personal development.",
    keywords: [
        "Islamic", "Spirituality", "Dream", "Ruqyah", "Istikhara", "Guidance", "Healing", "Faith", "Najoomi", "Resources"
    ],
    openGraph: {
        title: "Resources & Knowledge | Najoomi",
        description: "Explore Najoomi's collection of articles, guides, and insights on Islamic spiritual practices, dream interpretation, and personal development.",
        url: "https://najoomi.in/resources",
        type: "website",
        siteName: "Najoomi",
        images: [
            {
                url: "https://najoomi.in/seo-resources-banner.png",
                width: 1200,
                height: 630,
                alt: "Najoomi Resources Banner"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Resources & Knowledge | Najoomi",
        description: "Explore Najoomi's collection of articles, guides, and insights on Islamic spiritual practices, dream interpretation, and personal development.",
        images: ["https://najoomi.in/seo-resources-banner.png"]
    },
    metadataBase: new URL("https://najoomi.in"),
    themeColor: "#fde68a"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="relative min-h-screen bg-gradient-to-br from-white to-[#F1E1C6] pb-20 overflow-x-hidden px-4 flex flex-col items-center">
            {children}
            <UpsellBanner />
        </main>
    );
}
