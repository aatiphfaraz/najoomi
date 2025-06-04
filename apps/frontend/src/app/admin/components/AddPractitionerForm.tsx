import React from "react";

export interface Review {
  text: string;
  name: string;
}

export type PractitionerType = "therapist" | "najoomi";


import AvailabilityManager, { WeeklyAvailability } from './AvailabilityManager';
import { Practitioner } from "@/app/constants/practitioners";
import { defaultWeekly } from "./PractitionersTable";

interface AddPractitionerFormProps {
  newPractitioner: Practitioner;
  setNewPractitioner: React.Dispatch<React.SetStateAction<Practitioner>>;
  handleAddPractitioner: (e: React.FormEvent<HTMLFormElement>) => void;
  onCancel: () => void;
  loading?: boolean;
  error?: string | null;
}

const AddPractitionerForm: React.FC<AddPractitionerFormProps> = ({
  newPractitioner,
  setNewPractitioner,
  handleAddPractitioner,
  onCancel,
  loading = false,
  error = null,
}) => {
  // --- Add inside AddPractitionerForm component ---
  const [specialtyInput, setSpecialtyInput] = React.useState("");

  function handleAddSpecialty() {
    const val = specialtyInput.trim();
    if (val && !newPractitioner.specialties.includes(val)) {
      setNewPractitioner(p => ({ ...p, specialties: [...p.specialties, val] }));
      setSpecialtyInput("");
    }
  }

  function handleRemoveSpecialty(idx: number) {
    setNewPractitioner(p => ({ ...p, specialties: p.specialties.filter((_, i) => i !== idx) }));
  }

  return (
    <div className="relative">
      {/* Decorative sparkles */}
      <svg className="absolute right-2 top-2 w-8 h-8 opacity-20 text-yellow-300" viewBox="0 0 32 32"><circle cx="8" cy="8" r="2" fill="currentColor" /><circle cx="24" cy="24" r="1.5" fill="currentColor" /><circle cx="20" cy="12" r="1" fill="currentColor" /></svg>
      <svg className="absolute left-2 bottom-2 w-8 h-8 opacity-10 text-blue-400" viewBox="0 0 32 32"><circle cx="8" cy="8" r="2" fill="currentColor" /><circle cx="24" cy="24" r="1.5" fill="currentColor" /><circle cx="20" cy="12" r="1" fill="currentColor" /></svg>
      <h3 className="text-xl font-bold mb-4 text-blue-800 flex items-center gap-2">
        <svg width="22" height="22" fill="none" className="inline-block"><circle cx="11" cy="11" r="10" stroke="currentColor" strokeWidth="2" /></svg>
        Add Practitioner
      </h3>
      {error && <div className="text-red-600 py-2 text-sm font-medium">{error}</div>}
      <form onSubmit={handleAddPractitioner} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="flex flex-col gap-1">
            <span className="text-blue-700 font-medium">Name</span>
            <input type="text" value={newPractitioner.name} onChange={e => setNewPractitioner(p => ({ ...p, name: e.target.value }))} className="border rounded px-2 py-1" required />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-blue-700 font-medium">Email</span>
            <input type="email" value={newPractitioner.email || ''} onChange={e => setNewPractitioner(p => ({ ...p, email: e.target.value }))} className="border rounded px-2 py-1" required />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-blue-700 font-medium">Phone</span>
            <input type="tel" value={newPractitioner.phone || ''} onChange={e => setNewPractitioner(p => ({ ...p, phone: e.target.value }))} className="border rounded px-2 py-1" pattern="[0-9\-\+\s]{10,15}" placeholder="e.g. +91 9876543210" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-blue-700 font-medium">Title</span>
            <input type="text" value={newPractitioner.title} onChange={e => setNewPractitioner(p => ({ ...p, title: e.target.value }))} className="border rounded px-2 py-1" required />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-blue-700 font-medium">Image URL</span>
            <input type="text" value={newPractitioner.image} onChange={e => setNewPractitioner(p => ({ ...p, image: e.target.value }))} className="border rounded px-2 py-1" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-blue-700 font-medium">Experience</span>
            <input type="text" value={newPractitioner.experience} onChange={e => setNewPractitioner(p => ({ ...p, experience: e.target.value }))} className="border rounded px-2 py-1" required />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-blue-700 font-medium">Specialties</span>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={specialtyInput}
                  onChange={e => setSpecialtyInput(e.target.value)}
                  className="border rounded px-2 py-1 flex-1"
                  placeholder="Add a specialty (e.g. Astrology)"
                  onKeyDown={e => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddSpecialty();
                    }
                  }}
                />
                <button
                  type="button"
                  className="bg-brand-gold text-white rounded px-3 py-1 font-bold shadow hover:bg-yellow-500 transition"
                  onClick={handleAddSpecialty}
                  aria-label="Add specialty"
                >
                  +
                </button>
              </div>
              <div className="flex flex-wrap gap-2 mt-1">
                {newPractitioner.specialties.map((spec, idx) => (
                  <span key={spec + idx} className="flex items-center bg-[#fdf6e3] border border-[#fde68a] text-brand-gold font-semibold text-xs rounded-full px-3 py-1 shadow-sm">
                    {spec}
                    <button
                      type="button"
                      className="ml-2 text-red-500 hover:text-red-700 focus:outline-none"
                      onClick={() => handleRemoveSpecialty(idx)}
                      aria-label={`Remove ${spec}`}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-blue-700 font-medium">Rating</span>
            <input type="number" min={1} max={5} step={0.1} value={newPractitioner.rating} onChange={e => setNewPractitioner(p => ({ ...p, rating: parseFloat(e.target.value) }))} className="border rounded px-2 py-1" required />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-blue-700 font-medium">Price</span>
            <input type="text" value={newPractitioner.price} onChange={e => setNewPractitioner(p => ({ ...p, price: e.target.value }))} className="border rounded px-2 py-1" required />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-blue-700 font-medium">Discount Price</span>
            <input type="text" value={newPractitioner.discountPrice} onChange={e => setNewPractitioner(p => ({ ...p, discountPrice: e.target.value }))} className="border rounded px-2 py-1" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-blue-700 font-medium">Type</span>
            <select value={newPractitioner.type} onChange={e => setNewPractitioner(p => ({ ...p, type: e.target.value as PractitionerType }))} className="border rounded px-2 py-1" required>
              <option value="therapist">Therapist</option>
              <option value="najoomi">Najoomi</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-blue-700 font-medium">Duration (minutes)</span>
            <input type="text" value={newPractitioner.duration} onChange={e => setNewPractitioner(p => ({ ...p, duration: e.target.value }))} className="border rounded px-2 py-1" required />
          </label>
        </div>
        <label className="flex flex-col gap-1">
          <span className="text-blue-700 font-medium">Description</span>
          {/*
          WARNING: If newPractitioner.description contains user input, ensure it is sanitized to prevent XSS attacks.
        */}
          <input type="text" value={newPractitioner.description} onChange={e => setNewPractitioner(p => ({ ...p, description: e.target.value }))} className="border rounded px-2 py-1" required />
          {/* <div
          className="border rounded px-2 py-1 min-h-[40px] bg-white"
          dangerouslySetInnerHTML={{ __html: newPractitioner.description || '' }}
        /> */}
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={!!newPractitioner.starPractitioner} onChange={e => setNewPractitioner(p => ({ ...p, starPractitioner: e.target.checked }))} />
          <span className="text-yellow-700 font-medium">Star Practitioner</span>
        </label>
        {/* Reviews dynamic array */}
        <div className="border rounded p-3 bg-yellow-50/30">
          <div className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
            <svg width="18" height="18" fill="none" className="inline-block text-yellow-400"><circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" /></svg>
            Reviews
          </div>
          {newPractitioner.reviews.map((rev, idx) => (
            <div key={idx} className="flex gap-2 mb-2">
              <input type="text" placeholder="Review text" value={rev.text} onChange={e => setNewPractitioner(p => ({ ...p, reviews: p.reviews.map((r, i) => i === idx ? { ...r, text: e.target.value } : r) }))} className="border rounded px-2 py-1 flex-1" />
              <input type="text" placeholder="Reviewer name" value={rev.name} onChange={e => setNewPractitioner(p => ({ ...p, reviews: p.reviews.map((r, i) => i === idx ? { ...r, name: e.target.value } : r) }))} className="border rounded px-2 py-1 w-32" />
              <button type="button" className="text-red-400 hover:text-red-700" onClick={() => setNewPractitioner(p => ({ ...p, reviews: p.reviews.filter((_, i) => i !== idx) }))}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="mt-2 px-3 py-1 rounded bg-blue-100 text-blue-800 hover:bg-blue-200" onClick={() => setNewPractitioner(p => ({ ...p, reviews: [...p.reviews, { text: '', name: '' }] }))}>
            + Add Review
          </button>
        </div>
        {/* Availability Section */}
        <div className="my-6">
          <h4 className="text-lg font-semibold mb-2 text-blue-800 flex items-center gap-2">
            <svg width="18" height="18" fill="none" className="inline-block text-blue-400"><circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" /></svg>
            Availability
          </h4>
          <AvailabilityManager
            weekly={newPractitioner.availability || defaultWeekly}
            handleAvailability={(weekly: WeeklyAvailability) => setNewPractitioner(p => ({ ...p, availability: weekly }))}
          />
        </div>
        <div className="flex gap-2 justify-end mt-4">
          <button type="button" className="px-3 py-1 rounded bg-gray-100 text-gray-600 hover:bg-gray-200" onClick={onCancel} disabled={loading}>Cancel</button>
          <button
            type="submit"
            className="px-4 py-1 rounded bg-gradient-to-r from-blue-400 to-yellow-300 text-white font-semibold hover:from-blue-500 hover:to-yellow-400 flex items-center gap-2 disabled:opacity-60"
            disabled={loading}
          >
            {loading && (
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
            )}
            Add Practitioner
          </button>
        </div>
      </form>
    </div>
  )
};



export default AddPractitionerForm;

