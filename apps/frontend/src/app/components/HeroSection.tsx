import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";
export default function HeroSection() {
    return (
        <>
            {/* Background image */}
            <div className="absolute inset-0 -z-10">
                <Image
                    width={100}
                    height={100}
                    src="/missions.png"
                    alt="Mosque domes background"
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/60" />
            </div>
            <section className="max-w-2xl ml-12 py-24 px-6 text-white">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                    Guidance Beyond <span className="text-primary">Boundaries</span>
                </h1>
                <p className="mb-8 text-base md:text-lg text-gray-200 max-w-xl">
                    Authentic Islamic spiritual guidance connecting you with trusted practitioners for personalized consultations, dream interpretations, and spiritual healing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/book">
                        <Button variant="primary">Book a Consultation</Button>
                    </Link>
                    <Link href="/services">
                        <Button variant="secondary">Explore Services</Button>
                    </Link>
                </div>
            </section>
        </>
    );
}
