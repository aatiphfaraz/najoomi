import React from "react";

const standards = [
  {
    icon: '📚',
    title: 'Authentic Islamic Knowledge',
    description: 'All our practitioners have formal education in Islamic sciences from recognized institutions and continue their studies through established scholarly networks'
  },
  {
    icon: '🏅',
    title: 'Extensive Experience',
    description: 'Every practitioner has a minimum of 5 years of experience providing spiritual guidance and has demonstrated a track record of positive client outcomes'
  },
  {
    icon: '🛡️',
    title: 'Ethical Standards',
    description: 'Our practitioners adhere to a strict code of ethics that ensures client confidentiality, respectful practice, and guidance that aligns with authentic Islamic teachings'
  },
  {
    icon: '🌱',
    title: 'Continued Learning',
    description: 'We require all practitioners to engage in ongoing education to refine their skills and deepen their knowledge in their areas of specialization'
  },
];

const PractitionerStandardsGrid: React.FC = () => (
  <div className="relative w-full max-w-6xl mx-auto mt-24 mb-6">
    {/* Gold gradient accent background */}
    <div className="absolute -top-10 left-0 w-full h-40 rounded-2xl z-0 pointer-events-none" />
    <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center mb-14 tracking-tight relative z-10">
      Our Practitioner Standards
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
      {/* Decorative gold sparkle in background */}
      <svg className="absolute -top-6 right-10 opacity-20 pointer-events-none" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="8" fill="#FFD700" /><circle cx="40" cy="12" r="2" fill="#E5C07B" /><circle cx="10" cy="40" r="1.5" fill="#F6E27A" /></svg>
      {standards.map((std, idx) => (
        <div key={idx} className="bg-white/95 rounded-2xl shadow-2xl border-l-4 border-[#15577a] p-8 animate-fade-in-up relative">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl md:text-3xl select-none">{std.icon}</span>
            <span className="font-bold text-xl text-primary">{std.title}</span>
          </div>
          <div className="text-gray-700 text-base">{std.description}</div>
        </div>
      ))}
    </div>
  </div>
);

export default PractitionerStandardsGrid;
