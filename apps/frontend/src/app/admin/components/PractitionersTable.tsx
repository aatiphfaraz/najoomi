import React, { useState } from "react";
import AddPractitionerForm from "./AddPractitionerForm";
import { Practitioner } from "../../constants/practitioners";
import { WeeklyAvailability } from "./AvailabilityManager";
import Image from "next/image";

interface PractitionersTableProps {
  practitioners: Practitioner[];
  onSaveEdit: (practitioner: Practitioner) => void;
  onAddPractitioner: (practitioner: Practitioner) => Promise<void> | void;
}

export const defaultWeekly: WeeklyAvailability = {
  sun: { unavailable: true, slots: [] },
  mon: { unavailable: false, slots: [{ start: "09:00 AM", end: "05:00 PM" }] },
  tue: { unavailable: false, slots: [{ start: "09:00 AM", end: "05:00 PM" }] },
  wed: { unavailable: false, slots: [{ start: "09:00 AM", end: "05:00 PM" }] },
  thu: { unavailable: false, slots: [{ start: "09:00 AM", end: "05:00 PM" }] },
  fri: { unavailable: false, slots: [{ start: "09:00 AM", end: "05:00 PM" }] },
  sat: { unavailable: true, slots: [] },
};

const defaultBlankPractitioner: Omit<Practitioner, "_id"> = {
  name: '',
  title: '',
  image: '',
  experience: '',
  specialties: [],
  rating: 5,
  price: '',
  discountPrice: '',
  type: 'therapist',
  duration: '',
  description: '',
  starPractitioner: false,
  reviews: [],
  availability: defaultWeekly,
  email: "",
  phone: ""
};

const PractitionersTable: React.FC<PractitionersTableProps> = ({ practitioners, onSaveEdit, onAddPractitioner }) => {
  const [practionerData, setPractionerData] = useState<Practitioner>(defaultBlankPractitioner as Practitioner);
  const [showAddForm, setShowAddForm] = useState(false);

  if (showAddForm || practionerData._id) {
    return (
      <div className="my-6">
        <AddPractitionerForm
          newPractitioner={practionerData}
          setNewPractitioner={setPractionerData}
          handleAddPractitioner={async (e) => {
            e.preventDefault();
            if (!practionerData?._id && onAddPractitioner) {
              await onAddPractitioner(practionerData);
            } else if (practionerData?._id && onSaveEdit) {
              console.log(practionerData)
              await onSaveEdit(practionerData);
            }
            setShowAddForm(false);
            setPractionerData(defaultBlankPractitioner as Practitioner);
          }}
          onCancel={() => {
            setPractionerData(defaultBlankPractitioner as Practitioner);
            setShowAddForm(false);
          }}
        />
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow border border-blue-100 my-6 relative">
      {/* Decorative Islamic geometric pattern */}
      <svg className="absolute left-4 top-2 w-8 h-8 opacity-10 text-yellow-300 pointer-events-none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" stroke="currentColor" strokeDasharray="4 4" /></svg>
      <div className="flex items-center justify-between px-4 pt-4 pb-2">
        <span className="font-semibold text-lg text-blue-900">Practitioners</span>

        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center gap-2 px-4 py-1 rounded bg-gradient-to-r from-blue-400 to-yellow-300 text-white font-semibold shadow hover:from-blue-500 hover:to-yellow-400 transition disabled:opacity-60"
        >
          {/* Decorative crescent moon */}
          <svg width="20" height="20" fill="none" className="inline-block text-yellow-100 -ml-1"><path d="M16 10c0 3-2.5 6-6 6 2-1.5 3.5-3.5 3.5-6S12 5.5 10 4c3.5 0 6 3 6 6z" fill="currentColor" /></svg>
          Add Practitioner
        </button>

      </div>

      <table className="min-w-full text-sm text-blue-900">
        <thead className="bg-blue-50">
          <tr>
            <th className="px-4 py-2 font-semibold text-left">Image</th>
            <th className="px-4 py-2 font-semibold text-left">Name</th>
            <th className="px-4 py-2 font-semibold text-left">Title</th>
            <th className="px-4 py-2 font-semibold text-left">Type</th>
            <th className="px-4 py-2 font-semibold text-left">Experience</th>
            <th className="px-4 py-2 font-semibold text-left">Specialties</th>
            <th className="px-4 py-2 font-semibold text-left">Rating</th>
            <th className="px-4 py-2 font-semibold text-left">Price</th>
            <th className="px-4 py-2 font-semibold text-left">Star</th>
          </tr>
        </thead>


        <tbody>
          {practitioners.map((p) => (
            <tr
              key={p._id}
              className="border-b border-blue-100 hover:bg-yellow-50 transition cursor-pointer"
              onClick={() => {
                setPractionerData({ ...p });
              }}
            >
              <td className="px-4 py-2"><Image src={p.image} alt={p.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover border border-blue-200" /></td>
              <td className="px-4 py-2 font-semibold">{p.name}</td>
              <td className="px-4 py-2">{p.title}</td>
              <td className="px-4 py-2 capitalize">{p.type}</td>
              <td className="px-4 py-2">{p.experience}</td>
              <td className="px-4 py-2 max-w-[200px]">
                <div className="flex flex-wrap gap-1">
                  {p.specialties.map((s, i) => (
                    <span key={i} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs">{s}</span>
                  ))}
                </div>
              </td>
              <td className="px-4 py-2 text-yellow-700 font-bold">{p.rating}★</td>
              <td className="px-4 py-2">
                <span className="font-medium">₹{p.price}</span>
                {p.discountPrice && p.discountPrice !== "1" && (
                  <span className="ml-2 text-xs text-green-700 bg-green-50 px-2 py-0.5 rounded-full">₹{p.discountPrice}</span>
                )}
              </td>
              <td className="px-4 py-2 text-center">
                {p.starPractitioner && (
                  <span title="Star Practitioner" className="text-yellow-500 text-xl">★</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Decorative crescent moon */}
      <svg className="absolute right-4 bottom-2 w-6 h-6 opacity-20 text-blue-400 pointer-events-none" viewBox="0 0 32 32"><path d="M24 16c0 5-4 9-9 9 3-2 5-5 5-9s-2-7-5-9c5 0 9 4 9 9z" fill="currentColor" /></svg>
    </div>
  );
}

export default PractitionersTable;
