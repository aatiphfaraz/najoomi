import React from "react";

// Subtle Islamic/magical decorative SVG overlay for carousel backgrounds
export default function CarouselDecorations() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 400 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 1 }}
      aria-hidden="true"
    >
      {/* Crescent moon */}
      <path d="M60 40a20 20 0 1 0 20-20" stroke="#eab308" strokeWidth="1.5" opacity="0.13" />
      {/* Star */}
      <polygon points="120,20 123,29 132,29 125,34 127,43 120,38 113,43 115,34 108,29 117,29" fill="#b6894a" opacity="0.09" />
      {/* Geometric pattern */}
      <circle cx="350" cy="30" r="10" stroke="#15577a" strokeWidth="1.1" opacity="0.09" />
      <circle cx="350" cy="30" r="5" stroke="#b6894a" strokeWidth="0.7" opacity="0.13" />
      {/* Sparkle */}
      <g opacity="0.09">
        <circle cx="200" cy="15" r="2" fill="#eab308" />
        <circle cx="210" cy="50" r="1.5" fill="#b6894a" />
        <circle cx="180" cy="60" r="1.2" fill="#15577a" />
      </g>
      {/* Subtle calligraphy-like curve */}
      <path d="M300 70 Q320 50 340 70" stroke="#b6894a" strokeWidth="0.7" fill="none" opacity="0.08" />
    </svg>
  );
}
