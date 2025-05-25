"use client"
import React, { useState, useEffect, useRef, TouchEvent } from "react";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";

const slides = [
    {
        image: "/hero/ramal.jpg",
        alt: "Ilm-e-Ramal, Islamic numerology with subtle geometric accents",
        title: (
            <>
                Kya aapke naam <span className="text-brand-gold">ya date of birth</span> mein chhupa hai koi Raaz?
            </>
        ),
        description:
            "Ilm-e-Ramal se jaaniye apni spiritual energy or life path",
        actions: (
            <>
                <Link href="/booking/a549f587-5e1c-4ad6-9f62-15567b856ba7">
                    <Button variant="primary">Get a Ramal Reading</Button>
                </Link>
                <Link href="/services">
                    <Button variant="secondary">Explore All Services</Button>
                </Link>
            </>
        ),
    },
    {
        image: "/hero/therapy.jpg",
        alt: "Mosque domes background with subtle crescent and star",
        title: (
            <>
                Dil to ro raha hai, par chehra <span className="text-brand-gold">muskura raha hai</span>... kya karun?
            </>
        ),
        description:
            "Islamic Counselling lo — sukoon paao rooh se.",
        actions: (
            <>
                <Link href="/practitioners/therapists">
                    <Button variant="primary">Book a Consultation</Button>
                </Link>
                <Link href="/services">
                    <Button variant="secondary">Explore All Services</Button>
                </Link>
            </>
        ),
    },
    {
        image: "/hero/dreams.jpg",
        alt: "Dream interpretation, crescent moon and Quranic stars",
        title: (
            <>
                Bar-bar ek hi <span className="text-brand-gold">sapna</span> aata hai... iska kya matlab hota hai?
            </>
        ),
        description:
            "Najoomi par paayiye Quran aur Sunnah par mabni dream interpretation – by trusted experts",
        actions: (
            <>
                <Link href="/practitioners/najoomis">
                    <Button variant="primary">Interpret My Dream</Button>
                </Link>
                <Link href="/services">
                    <Button variant="secondary">Explore All Services</Button>
                </Link>
            </>
        ),
    },
    {
        image: "/hero/ruqyah.jpg",
        alt: "Ruqyah, protection from magic and nazar with Islamic motifs",
        title: (
            <>
                Lagta hai sab kuch <span className="text-brand-gold">theek hote hote ruk jaata hai</span>?
            </>
        ),
        description:
            "Check karayein Ruqyah se. Qurani tareeqa hai – bina kisi dar ke, sirf Allah par bharosa",
        actions: (
            <>
                <Link href="/practitioners/najoomis">
                    <Button variant="primary">Check Nazar</Button>
                </Link>
                <Link href="/services">
                    <Button variant="secondary">Explore All Services</Button>
                </Link>
            </>
        ),
    },
    {
        image: "/hero/dream.jpg",
        alt: "Najoomi platform, subtle Islamic archway and sparkles",
        title: (
            <>
                Sab sawaalon ka ek <span className="text-brand-gold">roohani platform</span>
            </>
        ),
        description:
            "Najoomi.in – One place for all your spiritual questions",
        actions: (
            <>
                <Link href="/practitioners">
                    <Button variant="primary">View Practitioners</Button>
                </Link>
                <Link href="/services">
                    <Button variant="secondary">Explore Services</Button>
                </Link>
            </>
        ),
    },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    // Auto-advance every 5s
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearTimeout(timer);
    }, [current]);

    // Keyboard navigation
    useEffect(() => {
        const handleKey = (e: globalThis.KeyboardEvent) => {
            if (e.key === "ArrowLeft") setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
            if (e.key === "ArrowRight") setCurrent((prev) => (prev + 1) % slides.length);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    // Touch swipe navigation
    const onTouchStart = (e: TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const onTouchMove = (e: TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };
    const onTouchEnd = () => {
        if (touchStartX.current !== null && touchEndX.current !== null) {
            const diff = touchStartX.current - touchEndX.current;
            if (Math.abs(diff) > 40) {
                if (diff > 0) setCurrent((prev) => (prev + 1) % slides.length);
                else setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
            }
        }
        touchStartX.current = null;
        touchEndX.current = null;
    };

    const slide = slides[current];

    return (
        <div
            className="relative min-h-[340px] sm:min-h-[480px] px-2 sm:px-4 flex items-center overflow-hidden transition-all duration-500"
            tabIndex={0}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            aria-label="Hero carousel"
        >
            {/* Background image and overlay */}
            <div className="absolute inset-0 -z-10 transition-all duration-700">
                <Image
                    fill
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/10" />
            </div>
            {/* Decorative Islamic/magical elements (placeholder) */}

            <section className="max-w-xl py-10 sm:py-16 px-3 sm:px-6 text-white lg:ml-16">
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2">
                    {slide.title}
                </h1>
                <p className="mb-5 text-md sm:text-lg md:text-xl text-gray-200 max-w-lg">
                    {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    {slide.actions}
                </div>
            </section>
        </div>
    );
}

