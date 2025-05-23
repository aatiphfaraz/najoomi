import Link from "next/link";
import React from "react";

interface ServiceCardMiniProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

// Mini variant: icon + title only, compact for mobile carousels
export default function ServiceCardMini({ icon, title, href }: ServiceCardMiniProps) {
  // If title contains 'and' or '&' as a separate word, display only the left portion
  let displayTitle = title;
  if (displayTitle) {
    const splitRegex = /\s+(and|&)\s+/i;
    const parts = displayTitle.split(splitRegex);
    if (parts.length > 1) {
      displayTitle = parts[0].trim();
    }
  }
  return (
    <Link href={`/services/${href}`}>
      <div
        className="bg-white/80 rounded-xl border border-[#b6894a]/20 shadow p-3 flex flex-col items-center justify-center gap-2 w-[110px] sm:w-[120px] min-h-[110px] max-h-[140px] mx-auto hover:shadow-lg transition-all duration-150 relative"
        style={{ boxShadow: '0 2px 8px 0 rgba(180, 137, 74, 0.06)' }}
      >
        {/* Subtle geometric accent */}
        <span className="absolute right-2 top-2 opacity-10 pointer-events-none select-none">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#b6894a" strokeWidth="1.1" /><circle cx="9" cy="9" r="3" stroke="#eab308" strokeWidth="0.7" /></svg>
        </span>
        {/* Subtle Clickable/Navigation Indicator */}
        <span className="absolute right-2.5 top-2.5 z-20 select-none pointer-events-none">
          <svg
            width="15" height="15" viewBox="0 0 15 15" fill="none"
            className="opacity-50 group-hover:opacity-90 group-hover:drop-shadow-[0_0_4px_rgba(234,179,8,0.25)] transition-all duration-150"
            style={{ pointerEvents: 'none' }}
          >
            <circle cx="7.5" cy="7.5" r="6" stroke="#eab308" strokeWidth="1.1" fill="none" />
            <path d="M6.5 5.5l3 2-3 2" stroke="#b6894a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <span className="w-9 h-9 flex items-center justify-center rounded-full bg-[#fef9c3] shadow-inner">
          {icon}
        </span>
        <div className="font-bold text-xs text-[#15577a] text-center mt-1 break-words leading-tight max-h-[2.5em] overflow-hidden">{displayTitle}</div>
      </div>
    </Link>
  );
}
