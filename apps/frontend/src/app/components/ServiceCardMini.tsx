import Link from "next/link";
import React from "react";

interface ServiceCardMiniProps {
  title: string;
  subtitle?: string;
  href: string;
} // icon removed, subtitle optional

// Mini variant: icon + title only, compact for mobile carousels
export default function ServiceCardMini({ title, subtitle, href }: ServiceCardMiniProps) {
  // If title contains 'and' or '&' as a separate word, display only the left portion
  const displayTitle = title;
  // if (displayTitle) {
  //   const splitRegex = /\s+(and|&)\s+/i;
  //   const parts = displayTitle.split(splitRegex);
  //   if (parts.length > 1) {
  //     displayTitle = parts[0].trim();
  //   }
  // }
  return (
    <Link href={`/services/${href}`}>
      <div
        className="bg-white/80 rounded-xl border border-[#b6894a]/20 shadow p-1.5 pt-2 flex flex-col items-center justify-between gap-1 w-[110px] sm:w-[120px] min-h-[106px] max-h-[160px] mx-auto hover:shadow-lg transition-all duration-150 relative"
        style={{ boxShadow: '0 2px 8px 0 rgba(180, 137, 74, 0.06)' }}
      >
        {/* Subtle geometric accent */}
        {/* <span className="absolute right-[2px] top-[2px] opacity-10 pointer-events-none select-none">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#b6894a" strokeWidth="1.1" /><circle cx="9" cy="9" r="3" stroke="#eab308" strokeWidth="0.7" /></svg>
        </span> */}
        {/* Subtle Clickable/Navigation Indicator */}
        <span className="absolute right-[3px] top-[84px] z-20 select-none pointer-events-none">
          <svg
            width="15" height="15" viewBox="0 0 15 15" fill="none"
            className="opacity-50 group-hover:opacity-90 group-hover:drop-shadow-[0_0_4px_rgba(234,179,8,0.25)] transition-all duration-150"
            style={{ pointerEvents: 'none' }}
          >
            <circle cx="7.5" cy="7.5" r="6" stroke="#eab308" strokeWidth="1.1" fill="none" />
            <path d="M6.5 5.5l3 2-3 2" stroke="#b6894a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center w-full flex-1 min-h-0">
          <div className="font-bold text-xs text-[#15577a] text-center break-words leading-snug max-h-[2.7em] overflow-hidden">
            {displayTitle}
          </div>
          {subtitle && (
            <div className="text-[11px] text-[#b6894a] text-center mt-0.5 leading-snug max-h-[4em] overflow-hidden italic">
              {subtitle}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
