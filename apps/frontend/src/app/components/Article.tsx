import React from "react";
import Image from "next/image";
import FAQAccordion from "./FAQAccordion";

export interface ArticleProps {
  title: string;
  description: string;

  image: string;
  contentBody: React.ReactNode;
  backHref?: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

const Article: React.FC<ArticleProps> = ({
  title,
  description,
  image,
  contentBody,
  backHref = "/resources",
  faqs,
}) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Bottom Left: Star */}
      <div className="absolute left-8 bottom-6 z-0 opacity-80 pointer-events-none select-none animate-float-reverse">
        <svg width="40" height="40" fill="none" viewBox="0 0 20 20" className="drop-shadow-md">
          <polygon points="10,1 12,7 19,8 13.5,12.5 15,19 10,15.5 5,19 6.5,12.5 1,8 8,7" fill="#b6894a" />
        </svg>
      </div>        {/* Bottom Right: Crescent Moon + Stardust */}
      <div className="absolute right-6 bottom-2 z-0 opacity-80 pointer-events-none select-none animate-float-slow">
        <svg width="54" height="54" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
          <path d="M55 35C55 48.8071 43.8071 60 30 60C25.74 60 21.74 59.04 18.16 57.16C19.7 57.4267 21.2733 57.6 22.88 57.6C39.938 57.6 54 43.538 54 26.48C54 24.8733 53.8267 23.3 53.56 21.76C55.44 25.34 55 30.26 55 35Z" fill="#b6894a" />
        </svg>
        {/* Stardust */}
        <svg width="100" height="36" viewBox="0 0 100 36" className="absolute right-0 bottom-2 opacity-40" fill="none">
          <circle cx="10" cy="12" r="2" fill="#fde68a" />
          <circle cx="40" cy="8" r="1.5" fill="#fffbe6" />
          <circle cx="70" cy="18" r="2.5" fill="#fde68a" />
          <circle cx="90" cy="25" r="1.2" fill="#b6894a" />
        </svg>
      </div>
      <main className="flex-1 w-full max-w-6xl mx-auto pt-16 relative z-10">

        {/* Decorative geometric pattern */}
        <svg className="absolute left-0 top-10 w-32 opacity-10 z-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#b6894a" strokeWidth="1.2">
            <polygon points="100,10 190,60 190,160 100,210 10,160 10,60" fill="none" />
            <polygon points="100,40 160,70 160,150 100,180 40,150 40,70" fill="none" />
          </g>
        </svg>
        {/* Decorative sparkle/star */}
        <svg className="absolute top-20 right-0 w-12 opacity-30 z-0" fill="#fde68a" viewBox="0 0 20 20">
          <polygon points="10,1 12,7 19,8 13.5,12.5 15,19 10,15.5 5,19 6.5,12.5 1,8 8,7" />
        </svg>
        <article className="relative bg-white/90 rounded-3xl shadow-t-lg border border-[#eab308]/20 px-8 py-10 md:px-14 md:py-14 flex flex-col gap-6 z-10 overflow-hidden">
          {/* Magical Floating Decorative Elements (inside article) */}
          {/* Top Left: Crescent + Stardust */}
          <div className="absolute left-0 top-4 z-0 opacity-40 pointer-events-none select-none animate-float-slow">
            <svg width="48" height="48" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
              <path d="M55 35C55 48.8071 43.8071 60 30 60C25.74 60 21.74 59.04 18.16 57.16C19.7 57.4267 21.2733 57.6 22.88 57.6C39.938 57.6 54 43.538 54 26.48C54 24.8733 53.8267 23.3 53.56 21.76C55.44 25.34 55 30.26 55 35Z" fill="#fde68a" />
            </svg>
            {/* Stardust */}
            <svg width="64" height="18" viewBox="0 0 64 18" className="absolute left-10 top-2 opacity-50" fill="none">
              <circle cx="10" cy="10" r="1.2" fill="#fde68a" />
              <circle cx="34" cy="8" r="0.9" fill="#b6894a" />
              <circle cx="54" cy="14" r="1.4" fill="#fffbe6" />
            </svg>
          </div>
          {/* Top Right: Star + Stardust */}
          <div className="absolute right-2 top-2 z-0 opacity-50 pointer-events-none select-none animate-float">
            <svg width="28" height="28" fill="none" viewBox="0 0 20 20" className="drop-shadow-md">
              <polygon points="10,1 12,7 19,8 13.5,12.5 15,19 10,15.5 5,19 6.5,12.5 1,8 8,7" fill="#fde68a" />
            </svg>
            {/* Stardust */}
            <svg width="36" height="12" viewBox="0 0 36 12" className="absolute right-0 top-5 opacity-40" fill="none">
              <circle cx="8" cy="6" r="1" fill="#fde68a" />
              <circle cx="22" cy="3" r="0.7" fill="#b6894a" />
              <circle cx="32" cy="9" r="1.1" fill="#fffbe6" />
            </svg>
          </div>

          {/* Back Link inside card */}
          <a href={backHref} className="mb-4 inline-flex items-center gap-1 text-primary underline underline-offset-4 decoration-[#fde68a] hover:text-[#b6894a] font-medium w-fit">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {backHref === "/services" ? "Back to Services" : "Back to Resources"}
          </a>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#15577a] mb-4 drop-shadow-md leading-tight">
            {title}
          </h1>
          <div className="mb-6">
            <div className="w-full h-64 rounded-3xl overflow-hidden shadow-lg border border-[#fde68a]/30 relative">
              <Image src={image} alt={title} fill className="object-cover w-full h-full" priority />
            </div>
          </div>
          <div className="mb-8">
            <div className="relative bg-[#fcf8ef] border-l-4 border-[#fde68a] rounded-xl px-6 py-4 shadow-sm flex items-center">
              {/* Decorative star accent */}
              <svg className="absolute -left-4 top-4 w-6 h-6 text-[#fde68a] opacity-70" fill="currentColor" viewBox="0 0 20 20">
                <polygon points="10,1 12,7 19,8 13.5,12.5 15,19 10,15.5 5,19 6.5,12.5 1,8 8,7" />
              </svg>
              <span className="text-base md:text-lg text-[#15577a] font-medium italic">{description}</span>
            </div>
          </div>
          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
            {contentBody}
          </div>
          {/* Simple Golden Divider */}
          <div className="w-full flex justify-center mt-8 mb-2">
            <hr className="w-64 h-1 rounded-full border-0 bg-gradient-to-r from-[#fde68a] via-[#eab308] to-[#b6894a] opacity-80 shadow-sm" />
          </div>
        </article>
        {/* FAQ Section */}

        <FAQAccordion faqs={faqs} />

      </main>
    </div>
  );
};

export default Article;
