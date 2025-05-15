import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "underline" | "golden";
  className?: string;
}

/**
 * Reusable Button component
 * - `primary` variant: filled, blue background, white text
 * - `secondary` variant: outlined, neutral
 * - `golden` variant: large, gold-gradient background, bold deep blue text, rounded-xl, text-2xl, soft shadow, for special CTAs.
 *
 * Only renders a <button> element.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", className = "", children, ...props },
    ref
  ) => {
    const base =
      "font-bold flex items-center gap-2 text-md rounded-lg transition-all duration-200 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-60 disabled:pointer-events-none active:scale-[0.97] select-none min-h-[42px] cursor-pointer justify-center";
    const variants = {
      primary:
        "bg-gradient-to-r from-[#15577a] via-[#217ebd] to-[#1e90c7] text-white px-6 py-2 shadow-md hover:scale-105 hover:shadow-lg active:scale-95",

      secondary:
        "bg-transparent border-1 border-white text-white px-6 py-2 rounded-lg hover:bg-[white]/10 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200",

      underline:
        "bg-transparent border-none text-[#15577a] px-2 py-1 font-medium underline underline-offset-4 decoration-[#eab308] hover:decoration-2 hover:text-[#eab308] transition-all duration-150 cursor-pointer",

      golden:
        "px-5 py-2 rounded-lg font-semibold shadow transition-all duration-200 border focus:outline-none focus:ring-2 focus:ring-primary/50 transform hover:scale-[1.04] active:scale-[0.98] hover:shadow-lg focus:shadow-lg bg-gradient-to-r from-[#e6b44a] to-[#f6d980] text-[#015a8c] border-none",
    };

    const classes = clsx(base, variants[variant], className);

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export default Button;
