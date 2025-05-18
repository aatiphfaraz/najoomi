import Link from "next/link";
import React from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  subTitle: string
  href: string;
}

export default function ServiceCard({ icon, title, description, subTitle, href }: ServiceCardProps) {
  return (
    <Link href={`/services/${href}`}>
      <div
        className="bg-white/60 backdrop-blur-lg rounded-2xl border border-[#eab308]/20 shadow-lg p-8 flex flex-col gap-4 min-h-[340px] max-h-[380px] h-full hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-200"
        style={{ boxShadow: '0 8px 32px 0 rgba(34, 40, 49, 0.07)' }}
      >
        <div className="flex items-center justify-center mb-2">
          <span className="w-14 h-14 flex items-center justify-center rounded-full bg-[#fef9c3] shadow-inner">
            {icon}
          </span>
        </div>
        <div className="font-extrabold text-xl tracking-wide text-[#15577a] text-center mb-0 drop-shadow-sm z-10">
          {title}
        </div>
        {subTitle && (
          <div className="text-sm text-[#b6894a] text-center italic mb-2 font-medium z-10">
            {subTitle}
          </div>
        )}
        {/* Divider */}
        {subTitle && (
          <div className="flex justify-center mb-2 z-10">
            <span className="inline-block w-10 h-[2px] rounded-full bg-gradient-to-r from-[#fef9c3] via-[#eab308] to-[#b6894a] opacity-60" />
          </div>
        )}
        <div className="text-sm text-gray-600 text-center">{description}</div>
        {<div className="flex justify-center mt-auto">
          <div className="text-[#15577a] font-medium underline underline-offset-4 decoration-[#b6894a] hover:text-[#b6894a] transition-colors flex items-center gap-1 group mt-auto">
            Read more
            <svg className="w-4 h-4 text-[#b6894a] group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>}
      </div>
    </Link>
  );
}
