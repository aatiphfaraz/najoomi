
import PractitionerStandardsGrid from "../components/PractitionerStandardsGrid";

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
