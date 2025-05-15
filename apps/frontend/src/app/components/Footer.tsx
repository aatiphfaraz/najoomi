import { FaEnvelope, FaPhoneAlt, FaClock, FaStar } from "react-icons/fa";
import FooterIslamicDecor from "./FooterIslamicDecor";
import "./footerStars.css";
import Image from "next/image";

function FloatingStars() {
  // Array of random positions, sizes, icons, and opacities (mix of stars and moons)
  const floats = [
    { type: 'star', style: 'top-6 left-10 text-[18px] opacity-60', delay: 'animate-delay-0' },
    { type: 'moon', style: 'top-14 right-16 text-[25px] opacity-50', delay: 'animate-delay-200' },
    { type: 'star', style: 'bottom-10 left-1/4 text-[14px] opacity-50', delay: 'animate-delay-400' },
    { type: 'star', style: 'bottom-3 right-10 text-[20px] opacity-30', delay: 'animate-delay-700' },
    { type: 'star', style: 'bottom-1/3 right-1/3 text-[16px] opacity-40', delay: 'animate-delay-500' },
  ];
  return (
    <div className="pointer-events-none select-none absolute inset-0 w-full h-full z-0">
      {floats.map((item, i) => (
        item.type === 'star' ? (
          <FaStar
            key={i}
            className={`text-[#fde68a] absolute ${item.style} animate-float-slow ${item.delay}`}
          />
        ) : (
          <span
            key={i}
            className={`absolute ${item.style} animate-float-slow ${item.delay}`}
            style={{ color: '#ffe6a7', filter: 'drop-shadow(0 1px 2px #eab30844)' }}
            aria-label="Moon"
          >
            {'\u{1F319}'}
          </span>
        )
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#15577a] via-[#217ebd] to-[#1e90c7] text-white pt-12 pb-6 px-4 relative overflow-hidden">
      {/* Floating Stars Decorative Layer */}
      <FloatingStars />
      {/* Islamic/Magical Decorative Layer */}
      <FooterIslamicDecor />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        {/* Brand & Mission */}
        <div>
          <div className="text-2xl font-bold mb-2 flex items-center">
            {/* Logo - replace src if you have a custom logo */}
            <Image width={32} height={32} src="/najoomi-logo.png" alt="Najoomi Logo" className="w-8 h-8 drop-shadow-md mr-2" style={{ minWidth: 32 }} />
            Najoomi<span className="text-brand-gold">.in</span>
          </div>
          <p className="text-sm text-white/80">
            Empowering the Muslim community with authentic, spiritually enriching guidance rooted in the timeless wisdom of Islam.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <div className="font-semibold mb-3 text-brand-gold">Quick Links</div>
          <ul className="space-y-1 text-sm">
            <li><a href="/services" className="hover:text-[#eab308] transition">• Services</a></li>
            <li><a href="/practitioners" className="hover:text-[#eab308] transition">• Practitioners</a></li>
            <li><a href="/consultation" className="hover:text-[#eab308] transition">• Book a Consultation</a></li>
            <li><a href="/about" className="hover:text-[#eab308] transition">• About Us</a></li>
          </ul>
        </div>
        {/* Services */}
        <div>
          <div className="font-semibold mb-3 text-brand-gold">Services</div>
          <ul className="space-y-1 text-sm">
            <li>• Dream Interpretation</li>
            <li>• Spiritual Counseling</li>
            <li>• Ruqyah & Cleansing</li>
            <li>• Istikhara Guidance</li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <div className="font-semibold mb-3 text-brand-gold">Contact</div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2"><FaEnvelope className="text-brand-gold" /> info@najoomi.in</li>
            <li className="flex items-center gap-2"><FaPhoneAlt className="text-brand-gold" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><FaClock className="text-brand-gold" /> 10:00 AM – 7:00 PM IST</li>
          </ul>
        </div>
      </div>
      {/* Footer Bottom Row */}
      <div className="mt-12 border-t border-white/20 pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-white/70">
        <div className="mb-2 md:mb-0">© 2025 <span className="font-semibold text-white">Najoomi.in</span>. All rights reserved.</div>
        <div className="flex space-x-4">
          <a href="/privacy-policy" className="hover:text-[#eab308] transition">Privacy Policy</a>
          <span>|</span>
          <a href="/terms-of-service" className="hover:text-[#eab308] transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
