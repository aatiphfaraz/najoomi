"use client";
import ServicesSection from "./components/ServicesSection";
import HeroSection from "./components/HeroSection";
import MissionSection from "./components/MissionSection";
import PractitionersSection from "./components/PractitionersSection";
import TestimonialsSection from "./components/TestimonialsSection";

import React, { useState } from "react";

export default function HomePage() {
  // State for API testing
  const [scheduleId, setScheduleId] = useState("");
  const [orgUri, setOrgUri] = useState("");
  const [availabilityResult, setAvailabilityResult] = useState<any>(null);
  const [usersResult, setUsersResult] = useState<any>(null);
  const [schedulingLinkResult, setSchedulingLinkResult] = useState<any>(null);
  const [schedulingPayload, setSchedulingPayload] = useState({
    owner: "",
    max_event_count: 1,
    owner_type: "user",
    event_type: "",
  });

  // API call handlers
  const handleAvailability = async () => {
    setAvailabilityResult("Loading...");
    const userId = "de340638-e06c-4ed4-ba5b-007b023b8ab4"
    const res = await fetch(`/api/calendly/availability?userId=${userId}`);
    setAvailabilityResult(await res.json());
  };
  const handleUsers = async () => {
    setUsersResult("Loading...");
    const params = new URLSearchParams({ orgUri });
    const res = await fetch(`/api/calendly/users?${params}`);
    setUsersResult(await res.json());
  };
  const handleSchedulingLink = async () => {
    setSchedulingLinkResult("Loading...");
    const userId = "de340638-e06c-4ed4-ba5b-007b023b8ab4"
    const res = await fetch(`/api/calendly/scheduling-link?userId=${userId}`);
    setSchedulingLinkResult(await res.json());
  };

  return (
    <main className="relative min-h-[60vh] flex flex-col items-stretch justify-start bg-black/70">
      {/* Calendly API Test UI */}
      <section className="bg-white/80 border-b border-brand-gold p-6 mb-8 rounded-xl max-w-2xl mx-auto mt-8 shadow-lg">
        <h2 className="text-xl font-bold mb-3 text-brand-gold">Calendly API Test</h2>
        {/* Availability Test */}
        <div className="mb-4">
          <label className="block font-semibold">Schedule ID:</label>
          <input value={scheduleId} onChange={e => setScheduleId(e.target.value)} className="border px-2 py-1 rounded mr-2" />
          <button onClick={handleAvailability} className="bg-brand-gold text-white px-3 py-1 rounded">Test Availability</button>
          <pre className="bg-gray-100 rounded p-2 mt-2 text-xs overflow-auto max-h-40">{availabilityResult && JSON.stringify(availabilityResult, null, 2)}</pre>
        </div>
        {/* Users Test */}
        <div className="mb-4">
          <label className="block font-semibold">Org URI:</label>
          <input value={orgUri} onChange={e => setOrgUri(e.target.value)} className="border px-2 py-1 rounded mr-2" />
          <button onClick={handleUsers} className="bg-brand-gold text-white px-3 py-1 rounded">Test Users</button>
          <pre className="bg-gray-100 rounded p-2 mt-2 text-xs overflow-auto max-h-40">{usersResult && JSON.stringify(usersResult, null, 2)}</pre>
        </div>
        {/* Scheduling Link Test */}
        <div className="mb-4">
          <label className="block font-semibold">Scheduling Link Payload:</label>
          <input placeholder="Owner URI" value={schedulingPayload.owner} onChange={e => setSchedulingPayload(p => ({ ...p, owner: e.target.value }))} className="border px-2 py-1 rounded mr-2 mb-1" />
          <input placeholder="Event Type URI" value={schedulingPayload.event_type} onChange={e => setSchedulingPayload(p => ({ ...p, event_type: e.target.value }))} className="border px-2 py-1 rounded mr-2 mb-1" />
          <input placeholder="Max Event Count" type="number" value={schedulingPayload.max_event_count} onChange={e => setSchedulingPayload(p => ({ ...p, max_event_count: Number(e.target.value) }))} className="border px-2 py-1 rounded mr-2 mb-1" />
          <select value={schedulingPayload.owner_type} onChange={e => setSchedulingPayload(p => ({ ...p, owner_type: e.target.value }))} className="border px-2 py-1 rounded mr-2 mb-1">
            <option value="user">user</option>
            <option value="organization">organization</option>
          </select>
          <button onClick={handleSchedulingLink} className="bg-brand-gold text-white px-3 py-1 rounded">Create Scheduling Link</button>
          <pre className="bg-gray-100 rounded p-2 mt-2 text-xs overflow-auto max-h-40">{schedulingLinkResult && JSON.stringify(schedulingLinkResult, null, 2)}</pre>
        </div>
      </section>
      {/* Main homepage content */}
      <HeroSection />
      <ServicesSection />
      <MissionSection />
      <PractitionersSection />
      <TestimonialsSection />
    </main>
  );
}

