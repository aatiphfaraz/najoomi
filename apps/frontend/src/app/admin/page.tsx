"use client"
import React, { useState, useEffect } from 'react';
import PractitionersTable from './components/PractitionersTable';
import Button from '../components/ui/Button';
import { Practitioner } from '../constants/practitioners';
import BookingsTable from './components/BookingsTable';

type TabType = 'bookings' | 'availability';

const AdminDashboard = () => {
  const [tab, setTab] = useState<TabType>('bookings');
  const [practitioners, setPractitioners] = useState<Practitioner[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch practitioners from API on mount
  useEffect(() => {
    async function fetchPractitioners() {
      setLoading(true);
      try {
        const res = await fetch('/api/practitioners');
        const data = await res.json();
        setPractitioners(data.practitioners);
        setError(null);
      } catch {
        setError('Failed to load practitioners');
      }
      setLoading(false);
    }
    fetchPractitioners();
  }, []);

  async function handleAddPractitioner(practitioner: Practitioner) {
    const practitionerToAdd = { ...practitioner };
    setLoading(true);
    try {
      const res = await fetch('/api/practitioners', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(practitionerToAdd),
      });
      if (!res.ok) throw new Error('Failed to add practitioner');
      // Refetch practitioners
      const updated = await fetch('/api/practitioners');
      const data = await updated.json();
      setPractitioners(data.practitioners);
      setTab('availability');
      setError(null);
    } catch {
      setError('Failed to add practitioner');
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 relative">
      {/* Decorative SVGs */}
      <div className="max-w-6xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-800 flex items-center justify-center gap-2 relative">
          Admin Dashboard
          <span className="text-2xl">🌙✨</span>
          {/* Decorative geometric SVG */}
          <svg className="absolute left-0 top-1 w-8 h-8 opacity-10 text-yellow-300 pointer-events-none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="15" stroke="currentColor" strokeDasharray="4 4" /></svg>
        </h1>
        <div className="flex justify-center mb-6 gap-2 relative">
          <Button
            variant={tab === 'bookings' ? 'primary' : 'secondary'}
            className={`rounded-l-lg ${tab === 'bookings' ? '' : 'border-blue-300 bg-white text-blue-700'}`}
            onClick={() => setTab('bookings')}
          >
            <svg width="18" height="18" fill="none" className="inline-block text-yellow-400"><circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" /></svg>
            Bookings
          </Button>
          <Button
            variant={tab === 'availability' ? 'primary' : 'secondary'}
            className={`${tab === 'availability' ? '' : 'border-blue-300 bg-white text-blue-700'}`}
            onClick={() => setTab('availability')}
          >
            <svg width="18" height="18" fill="none" className="inline-block text-blue-300"><path d="M13 9c0 2.5-2 5-5 5 1.5-1.2 2.5-2.8 2.5-5S9.5 4.2 8 3c2.5 0 5 2.5 5 6z" fill="currentColor" /></svg>
            Availability
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8 min-h-[400px] relative">
          {/* Decorative floating star */}
          <svg className="absolute right-8 -top-6 w-8 h-8 text-yellow-200 opacity-30 pointer-events-none" viewBox="0 0 32 32"><polygon points="16,3 20,14 32,14 22,20 26,31 16,24 6,31 10,20 0,14 12,14" fill="currentColor" /></svg>
          {tab === 'bookings' && <BookingsTable />}
          {tab === 'availability' && <div className="mt-10">
            <h3 className="text-xl font-bold mb-4 text-blue-800 flex items-center gap-2 relative">
              <svg width="24" height="24" fill="none" className="inline-block text-yellow-400"><circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" /></svg>
              Practitioners List
              {/* Decorative sparkle */}
              <svg width="16" height="16" className="inline-block ml-2 text-blue-200" viewBox="0 0 16 16"><path d="M8 0l1.5 4.5L14 6l-4.5 1.5L8 12l-1.5-4.5L2 6l4.5-1.5z" fill="currentColor" /></svg>
            </h3>
            {loading ? (
              <div className="text-blue-600 py-8 flex items-center justify-center gap-2">
                <svg className="animate-spin h-6 w-6 text-blue-400" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg>
                Loading practitioners...
              </div>
            ) : error ? (
              <div className="text-red-600 py-8">{error}</div>
            ) : (
              <PractitionersTable
                practitioners={practitioners}
                onSaveEdit={async (edited) => {
                  try {
                    const res = await fetch('/api/practitioners', {
                      method: 'PUT',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(edited),
                    });
                    const data = await res.json();
                    if (res.ok && data.success) {
                      setPractitioners(prev => prev.map(p => p._id === edited._id ? data.practitioner : p));
                    } else {
                      alert(data.error || 'Failed to update practitioner.');
                    }
                  } catch {
                    alert('Network error while updating practitioner.');
                  }
                }}
                onAddPractitioner={handleAddPractitioner}
              />
            )}
          </div>}
        </div>
      </div>

      {/* Practitioners List Table */}

    </div>
  );
};

export default AdminDashboard;
