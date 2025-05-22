"use client"
import React from "react";

interface SpecialtiesTooltipProps {
  specialties: string[];
  count: number;
}

const SpecialtiesTooltip: React.FC<SpecialtiesTooltipProps> = ({ specialties, count }) => {
  const [open, setOpen] = React.useState(false);
  const [isTouch, setIsTouch] = React.useState(false);
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    // Detect if this is a touch device
    const checkTouch = () => setIsTouch(('ontouchstart' in window) || navigator.maxTouchPoints > 0);
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    function handle(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  return (
    <span
      ref={ref}
      className="relative group cursor-pointer bg-[#f7f7fa] text-[#b68900] px-1.5 py-0.5 rounded-full text-[10px] font-semibold border border-[#fde68a] shadow-sm ml-0.5 select-none"
      tabIndex={0}
      onPointerDown={e => { e.preventDefault(); e.stopPropagation(); }}
      onMouseDown={e => { e.preventDefault(); e.stopPropagation(); }}
      onClick={e => { e.preventDefault(); e.stopPropagation(); setOpen(v => !v); }}
      {...(!isTouch && {
        onMouseEnter: (e: React.MouseEvent) => { e.stopPropagation(); setOpen(true); },
        onMouseLeave: (e: React.MouseEvent) => { e.stopPropagation(); setOpen(false); },
        onFocus: (e: React.FocusEvent) => { e.stopPropagation(); setOpen(true); },
        onBlur: (e: React.FocusEvent) => { e.stopPropagation(); setOpen(false); },
      })}
      aria-label={`More specialties: ${specialties.join(', ')}`}
    >
      +{count}
      <span
        className={`absolute left-1/2 -translate-x-1/2 bottom-full mb-1 w-max min-w-[120px] max-w-[200px] bg-white text-brand-gold text-xs rounded-lg shadow-lg border border-[#eaeaea] px-3 py-2 z-30 transition-opacity duration-200 whitespace-pre-line ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        role="tooltip"
      >
        {specialties.join(', ')}
      </span>
    </span>
  );
};

export default SpecialtiesTooltip;
