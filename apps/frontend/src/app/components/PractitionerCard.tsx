import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import Link from "next/link";

interface PractitionerCardProps {
  id?: string;
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

const PractitionerCard: React.FC<PractitionerCardProps> = ({ id, image, name, title, experience, specialties, rating, price, discountPrice, starPractitioner }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-[#fde68a]/40 flex flex-col overflow-hidden min-h-[390px] relative transition-transform hover:scale-[1.025] hover:shadow-2xl group">
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
        <Image
          src={image}
          width={500}
          height={500}
          alt={name}
          className="object-cover w-full h-full rounded-t-2xl border-b border-[#fde68a]/30"
        />
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
          <div className="text-xs text-gray-400">Experience: {experience}</div>
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
          {id ? (
            <Link href={`/booking/${id}`}>
              <Button variant="primary" className="w-full text-sm py-1.5">Book a Session</Button>
            </Link>
          ) : (
            <Button variant="primary" className="w-full text-sm py-1.5" disabled>Coming Soon</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PractitionerCard;
