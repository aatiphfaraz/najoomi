import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import SpecialtiesTooltip from "./ui/SpecialtiesTooltip";

interface PractitionerCardMiniProps {
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



const PractitionerCardMini: React.FC<PractitionerCardMiniProps> = ({ _id, image = "/missions.png", name, title, experience, specialties, rating, price, discountPrice, starPractitioner }) => {
  const isComingSoon = _id === "coming-soon";
  return (
    <Link href={`/booking/${_id}`} className="bg-white rounded-xl shadow border border-[#fde68a]/30 flex flex-row items-center gap-3 px-2 py-2 sm:py-3 w-full min-h-[92px] relative overflow-hidden">
      {/* Price badge */}
      {(price || discountPrice) && (
        <div className="absolute top-2 right-2 z-10">
          {discountPrice ? (
            <span className="bg-[#fffde6] text-brand-gold font-bold text-xs px-2 py-0.5 rounded-full shadow border border-[#fde68a] flex items-center">
              <span className="mr-1">₹</span>{discountPrice}
              <span className="ml-1 text-[10px] font-normal text-gray-400 line-through">₹{price}</span>
            </span>
          ) : (
            <span className="bg-[#eaf4fb] text-[#217ebd] font-bold text-xs px-2 py-0.5 rounded-full shadow border border-[#b6e0fe]">
              <span className="mr-1">₹</span>{price}
            </span>
          )}
        </div>
      )}
      {/* Star badge */}
      {/* {starPractitioner && (
        <span className="absolute top-2 left-2 z-10">
          <svg className="w-4 h-4 text-[#eab308] drop-shadow" viewBox="0 0 20 20" fill="currentColor">
            <polygon points="10,2 12,8 18,8.2 13,12 14.5,18 10,15 5.5,18 7,12 2,8.2 8,8" />
          </svg>
        </span>
      )} */}
      {starPractitioner && (
        <span className="absolute -top-[2px] -left-[15px] z-20 select-none pointer-events-none">
          <span className="block transform -rotate-30">
            <span className="bg-[#217ebd] text-white font-bold text-xs rounded shadow border-2 border-[#eab308] flex items-center justify-center drop-shadow-md">
              <svg className="w-12 h-3 text-[#fde68a]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="12,2 15,9 22,9.2 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.2 9,9" />
              </svg>
            </span>
          </span>
        </span>)}

      {/* Avatar */}
      <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-[#fde68a] bg-white flex items-center justify-center">
        <Image src={image} width={56} height={56} alt={name} className="rounded-full object-cover w-full h-full" />
      </div>
      {/* Info */}
      <div className="flex flex-col flex-1 min-w-0">
        <div className="flex items-center gap-1">
          <span className="font-semibold text-[#15577a] text-sm truncate">{name}</span>
          <span className="flex items-center ml-1">
            {[...Array(rating)].map((_, i) => (
              <svg key={i} className="w-3 h-3 text-[#eab308]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.382-2.454a1 1 0 00-1.175 0l-3.382 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.382-2.454c-.784-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
              </svg>
            ))}
          </span>
        </div>
        <div className="text-xs text-[#217ebd] truncate">{title}</div>
        <div className="text-[10px] text-gray-400 truncate">{experience}+ years</div>
        <div className="flex flex-wrap gap-0.5 mt-0.5 items-center">
          {specialties.slice(0, 2).map((s) => (
            <span key={s} className="bg-[#fffde6] text-[#b68900] px-1.5 py-0.5 rounded-full text-[10px] font-semibold border border-[#fde68a] shadow-sm truncate">
              {s}
            </span>
          ))}
          {specialties.length > 2 && (
            <SpecialtiesTooltip specialties={specialties.slice(2)} count={specialties.length - 2} />
          )}
        </div>
      </div>
      {/* Book button */}
      {!isComingSoon && (
        // <Link href={`/booking/${id}`}>
        <Button variant="primary" className="ml-2 mt-[2rem]" >Book</Button>
        // </Link>
      )}
    </Link>
  );
};

export default PractitionerCardMini;
