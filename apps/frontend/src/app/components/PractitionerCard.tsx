import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import Link from "next/link";

interface PractitionerCardProps {
  _id: string;
  image: string;
  name: string;
  title: string;
  experience: string;
  specialties: string[];
  rating: number;
  price?: string;
  discountPrice?: string;
  starPractitioner?: boolean;
}

const PractitionerCard: React.FC<PractitionerCardProps> = ({ _id, image = "/missions.png", name, title, experience, specialties, rating, price, discountPrice, starPractitioner }) => {
  const isComingSoon = _id === "coming-soon";
  return (

    <div className={`bg-white rounded-2xl shadow-xl border border-[#fde68a]/40 flex flex-col overflow-hidden min-h-[390px] relative transition-transform hover:scale-[1.025] hover:shadow-2xl group`}>
      <Link href={`/booking/${_id}`} className={`flex flex-col h-full`}>
        <div className="relative h-44 bg-[#fafafa] flex items-center justify-center overflow-hidden rounded-t-2xl">
          {/* Floating magical accent */}
          {starPractitioner && (
            <span className="absolute -top-0 -left-[2rem] z-20 select-none pointer-events-none">
              <span className="block transform -rotate-30">
                <span className="bg-[#217ebd] text-white font-bold text-xs px-5 py-1 rounded shadow border-2 border-[#eab308] flex items-center justify-center drop-shadow-md">
                  <svg className="w-20 h-5 text-[#fde68a]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <polygon points="12,2 15,9 22,9.2 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.2 9,9" />
                  </svg>
                </span>
              </span>
            </span>
          )}
          {/* Price badge */}
          {(price || discountPrice) && (
            <div className="absolute top-2 right-2 z-10">
              {discountPrice ? (
                <span className="bg-[#fffde6] text-brand-gold font-extrabold text-base px-3 py-1 rounded-full shadow border border-[#fde68a] flex items-center animate-twinkle">
                  <span className="mr-1">₹</span>{discountPrice}
                  <span className="ml-1 text-xs font-normal text-gray-400 line-through">₹{price}</span>
                </span>
              ) : (
                <span className="bg-[#eaf4fb] text-[#217ebd] font-bold text-base px-3 py-1 rounded-full shadow border border-[#b6e0fe]">
                  <span className="mr-1">₹</span>{price}
                </span>
              )}
            </div>
          )}
          <div className="relative flex flex-col items-center justify-center w-full h-44 bg-[#fafafa] rounded-t-2xl overflow-hidden">
            {/* Premium magical/Islamic rectangle background accents */}
            <svg className="absolute left-4 top-3 w-20 h-20 text-[#fde68a]/70 opacity-50" viewBox="0 0 100 100" fill="none" style={{ zIndex: 1 }}>
              <polygon points="50,10 61,39 92,39 66,59 76,89 50,71 24,89 34,59 8,39 39,39" fill="currentColor" />
            </svg>
            <svg className="absolute right-6 bottom-2 w-14 h-14 text-[#217ebd]/30 opacity-60" viewBox="0 0 32 32" fill="none" style={{ zIndex: 1 }}>
              <path d="M28 16c0 6.627-5.373 12-12 12a12 12 0 0 1 0-24c.343 0 .682.017 1.018.05C13.34 5.576 12 8.632 12 12c0 5.523 4.477 10 10 10 1.37 0 2.676-.276 3.882-.779A11.985 11.985 0 0 1 28 16z" fill="currentColor" />
            </svg>
            {/* Optionally add more subtle sparkles or patterns here */}
            <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#fde68a] bg-white z-10 flex items-center justify-center mt-4 mb-2">
              <Image
                src={image}
                width={144}
                height={144}
                alt={name}
                className="rounded-full object-cover w-full h-full"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-1">
          {/* Info block */}
          <div className="flex flex-col gap-0.5 mb-2">
            <div className="flex items-center mb-1">
              {[...Array(rating)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-[#eab308] mr-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.382-2.454a1 1 0 00-1.175 0l-3.382 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
            </div>
            <div className="font-semibold text-[#15577a] text-[1.04rem] font-display tracking-wide">{name}</div>
            <div className="text-xs text-[#217ebd] font-medium">{title}</div>
            <div className="text-xs text-gray-400">Experience: {experience}+ years</div>
          </div>
          {/* Divider */}
          <div className="border-t border-[#fde68a]/30 my-2" />
          {/* Specialties */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {specialties.map((s) => (
              <span key={s} className="bg-[#fffde6] text-[#b68900] px-2 py-0.5 rounded-full text-[11px] font-semibold border border-[#fde68a] flex items-center gap-1 shadow-sm">
                {s}
              </span>
            ))}
          </div>
          <div className="mt-auto">
            {isComingSoon ? (
              <Button variant="primary" className="w-full text-sm py-1.5" disabled>Coming Soon</Button>
            ) : (
              <Button variant="primary" className="w-full text-sm py-1.5">Book a Session</Button>
            )}
          </div>
        </div>
      </Link>
    </div>

  );
};

export default PractitionerCard;
