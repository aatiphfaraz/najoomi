"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "./ui/Button";
import Image from "next/image";
export default function NavbarV2() {
  // Floating stars config
  const stars = [
    { left: '2%', top: '12px', size: 12, delay: '0s', duration: '6s', opacity: 0.4 },
    { left: '95%', top: '28px', size: 7, delay: '1.5s', duration: '5s', opacity: 0.3 }
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky h-[66px] top-0 w-full bg-white/80 border-b border-gray-200 px-8 py-2 flex items-center justify-between z-50 shadow-md backdrop-blur-md">
      {/* Floating Stars Overlay */}
      <div className="pointer-events-none absolute left-0 top-0 w-full h-[66px] z-50 select-none">
        {stars.map((star, i) => (
          <svg
            key={i}
            className="floating-star"
            style={{
              position: 'absolute',
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `floatStar ${star.duration} ease-in-out infinite`,
              animationDelay: star.delay,
              zIndex: 51
            }}
            viewBox="0 0 24 24"
            fill="#b6894a"
            aria-hidden="true"
          >
            <polygon points="12,2 15,9 22,9.5 17,14.5 18.5,22 12,18 5.5,22 7,14.5 2,9.5 9,9" />
          </svg>
        ))}
      </div>
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0 group" aria-label="Najoomi Home">
          <span className="relative flex items-center">
            <Image width={100} height={100} src="/najoomi-logo.png" alt="Najoomi Logo" className="h-10 w-auto object-contain pr-2 drop-shadow-md transition-transform group-hover:scale-105" />
          </span>
          <span className="text-2xl font-bold text-primary transition group-hover:text-[#0c3750]">Najoomi</span>
          <span className="text-2xl font-bold text-[#b6894a] tracking-tight">.in</span>
        </Link>
        {/* Divider */}
        <div className="hidden min-[1078px]:block h-8 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-6" />
        {/* Desktop Nav Links */}
        <div className="hidden min-[1078px]:flex flex-1 justify-end">
          <ul className="flex space-x-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/practitioners', label: 'Practitioners' },
              { href: '/resources', label: 'Resources' },
              { href: '/about', label: 'About' }
            ].map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 py-2 rounded-lg font-semibold text-gray-700 hover:text-primary hover:bg-[#15577a]/10 transition-all duration-200 tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b6894a]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Desktop Book Consultation Button */}
        <div className="hidden min-[1078px]:block ml-6">
          <Link href="/practitioners">
            <Button variant="primary">
              <span className="relative inline-block w-5 h-5 align-middle mr-1">
                <svg aria-hidden="true" className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="moonShineGradientDesk" x1="0" y1="0" x2="24" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="white" stopOpacity="0" />
                      <stop offset="40%" stopColor="white" stopOpacity="0.7" />
                      <stop offset="60%" stopColor="white" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"></path>
                  <rect className="moon-shine-sweep" x="-10" y="2" width="12" height="20" fill="url(#moonShineGradientDesk)" rx="6" />
                </svg>
              </span>
              <span>Book a Consultation</span>

            </Button>
          </Link>
        </div>
        {/* Hamburger menu button (mobile) */}
        <button
          className="max-[1077px]:block min-[1078px]:hidden ml-auto p-2 rounded"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-xl max-[1077px]:block min-[1078px]:hidden animate-fade-in z-40 backdrop-blur-md px-6">
            <ul className="flex flex-col items-start py-4 space-y-2">
              {/* Add usePathname to highlight active links */}
              {(() => {
                // Import usePathname at the top: import { usePathname } from "next/navigation";
                // Place this in the component body:
                // const pathname = usePathname();
                // Active class: text-brand-gold underline underline-offset-8 decoration-2
                const pathname = typeof window !== "undefined" ? window.location.pathname : "";
                const navLinks = [
                  { href: "/", label: "Home" },
                  { href: "/services", label: "Services" },
                  { href: "/practitioners", label: "Practitioners" },
                  { href: "/resources", label: "Resources" },
                  { href: "/about", label: "About" },
                ];
                return navLinks.map(({ href, label }) => {
                  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        className={
                          `block w-full text-left py-2 text-lg font-bold tracking-wide transition-colors underline-offset-4 ` +
                          (isActive
                            ? "text-brand-gold underline decoration-brand-gold decoration-2"
                            : "text-gray-700 hover:text-primary hover:underline")
                        }
                        onClick={() => setMenuOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                });
              })()}

              <li className="w-full mt-2 flex justify-center">
                <Link href="/practitioners" className="block w-full" onClick={() => setMenuOpen(false)}>
                  <Button variant="primary" className="w-full py-2 rounded-md">
                    <svg aria-hidden="true" className="w-5 h-5 text-brand-gold" fill="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"></path></svg>
                    <span className="text-lg font-bold w-full">
                      Book a Consultation
                    </span>
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

