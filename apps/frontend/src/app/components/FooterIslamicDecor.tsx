// Decorative SVG and calligraphy for the footer
export default function FooterIslamicDecor() {
  return (
    <>
      {/* Bottom left geometric pattern */}
      <svg className="absolute bottom-0 left-0 w-32 md:w-48 opacity-25 z-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#fde68a" strokeWidth="1.4">
          <polygon points="100,10 190,60 190,160 100,210 10,160 10,60" fill="none" />
          <polygon points="100,40 160,70 160,150 100,180 40,150 40,70" fill="none" />
        </g>
      </svg>
      {/* Top right sparkle/magic dust */}
      <svg className="absolute top-2 right-10 w-16 md:w-24 opacity-40 z-0 animate-spin-slow" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="30" cy="30" r="2" fill="#fde68a" />
          <circle cx="15" cy="20" r="1.2" fill="#fffde6" />
          <circle cx="45" cy="18" r="1" fill="#fffde6" />
          <circle cx="50" cy="35" r="0.8" fill="#fde68a" />
          <circle cx="40" cy="50" r="1.1" fill="#fde68a" />
        </g>
      </svg>

    </>
  );
}
