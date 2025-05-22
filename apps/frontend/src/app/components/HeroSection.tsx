"use client"
import React, { useState, useEffect, useRef, TouchEvent } from "react";
import Button from "./ui/Button";
import Link from "next/link";
import Image from "next/image";

const slides = [
    {
        image: "/hero-section.jpg",
        alt: "Mosque domes background",
        title: (
            <>
                Guidance Beyond <span className="text-brand-gold">Boundaries</span>
            </>
        ),
        description:
            "Embrace the light of divine guidance. Najoomi offers soulful healing and faith-rooted counselling to help you reconnect with your purpose, peace, and the blessings of Allah",
        actions: (
            <>
                <Link href="/practitioners">
                    <Button variant="primary">Book a Consultation</Button>
                </Link>
                <Link href="/services">
                    <Button variant="secondary">Explore Services</Button>
                </Link>
            </>
        ),
    },
    // {
    //     image: "/missions.png",
    //     alt: "Crescent moon and stars",
    //     title: (
    //         <>
    //             Discover <span className="text-brand-gold">Spiritual Wisdom</span>
    //         </>
    //     ),
    //     description:
    //         "Unlock ancient Islamic knowledge and magical insights for a harmonious life. Our guides share wisdom tailored to your journey.",
    //     actions: (
    //         <>
    //             <Link href="/wisdom">
    //                 <Button variant="primary">Learn More</Button>
    //             </Link>
    //         </>
    //     ),
    // },
    // {
    //     image: "/slide3.jpg",
    //     alt: "Geometric Islamic pattern",
    //     title: (
    //         <>
    //             <span className="text-brand-gold">Healing</span> Through Faith
    //         </>
    //     ),
    //     description:
    //         "Experience soulful healing and support rooted in Islamic tradition. Our practitioners blend faith and compassion for your well-being.",
    //     actions: (
    //         <>
    //             <Link href="/healing">
    //                 <Button variant="primary">Start Healing</Button>
    //             </Link>
    //         </>
    //     ),
    // },
    // {
    //     image: "/slide4.jpg",
    //     alt: "Magical sparkles and calligraphy",
    //     title: (
    //         <>
    //             <span className="text-brand-gold">Enchanted</span> Guidance
    //         </>
    //     ),
    //     description:
    //         "Step into a world of subtle magic and spiritual beauty. Our platform is designed to enchant and uplift your soul.",
    //     actions: (
    //         <>
    //             <Link href="/about">
    //                 <Button variant="primary">Our Story</Button>
    //             </Link>
    //         </>
    //     ),
    // },
    // {
    //     image: "/slide5.jpg",
    //     alt: "Subtle Islamic archway",
    //     title: (
    //         <>
    //             <span className="text-brand-gold">Join</span> the Najoomi Community
    //         </>
    //     ),
    //     description:
    //         "Connect with like-minded souls and practitioners. Share, learn, and grow together in a spiritual community.",
    //     actions: (
    //         <>
    //             <Link href="/community">
    //                 <Button variant="primary">Join Now</Button>
    //             </Link>
    //         </>
    //     ),
    // },
];

export default function HeroSection() {
    const [current, setCurrent] = useState(0);
    const touchStartX = useRef<number | null>(null);
    const touchEndX = useRef<number | null>(null);

    // Auto-advance every 5s
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3500);
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
                <p className="mb-5 text-sm sm:text-base md:text-lg text-gray-200 max-w-lg">
                    {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    {slide.actions}
                </div>
            </section>
        </div>
    );
}

