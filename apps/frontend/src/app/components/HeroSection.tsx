import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";
export default function HeroSection() {
    return (
        <div className="relative min-h-[600px] sm:min-h-[700px] px-4 flex items-center">
            {/* Background image and overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    fill
                    src="/missions.png"
                    alt="Mosque domes background"
                    className="w-full h-full object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/10" />
            </div>
            {/* Decorative Islamic/magical elements */}

            <section className="max-w-2xl py-24 px-6 text-white lg:ml-20">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 drop-shadow-lg">
                    Guidance Beyond <span className="text-brand-gold">Boundaries</span>
                </h1>
                <p className="mb-8 text-base md:text-lg text-gray-200 max-w-xl drop-shadow">
                    Authentic Islamic spiritual guidance connecting you with trusted practitioners for personalized consultations, dream interpretations, and spiritual healing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/practitioners">
                        <Button variant="primary">Book a Consultation</Button>
                    </Link>
                    <Link href="/services">
                        <Button variant="secondary">Explore Services</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
