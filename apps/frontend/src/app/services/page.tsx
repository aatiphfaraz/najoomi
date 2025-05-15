import { FaRegLightbulb, FaPrayingHands, FaHandHoldingMedical, FaBook, FaUserFriends, FaQuran, FaHeart, FaHandsHelping, FaGlobeAsia, FaLeaf } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";
import UpsellBanner from "../components/UpsellBanner";

const allServices = [
  {
    icon: <FaRegLightbulb className="text-2xl text-[#eab308]" />, title: "Islamic Dream Interpretation", description: "In-depth interpretations based on classical Islamic texts and scholarly opinions.",
  },
  {
    icon: <FaPrayingHands className="text-2xl text-[#eab308]" />, title: "Istikhara Guidance", description: "Personalized prayer guidance for important life decisions.",
  },
  {
    icon: <FaHandHoldingMedical className="text-2xl text-[#eab308]" />, title: "Rohani Healing", description: "Prayers and spiritual interventions to address personal and family issues.",
  },
  {
    icon: <FaBook className="text-2xl text-[#eab308]" />, title: "Quranic Counseling", description: "Faith-based counseling sessions rooted in Quranic wisdom.",
  },
  {
    icon: <FaUserFriends className="text-2xl text-[#eab308]" />, title: "Family & Marriage Counseling", description: "Guidance and support for couples and families facing challenges.",
  },
  {
    icon: <FaQuran className="text-2xl text-[#eab308]" />, title: "Ruqyah & Cleansing", description: "Spiritual cleansing and protection using Quranic verses.",
  },
  {
    icon: <FaHeart className="text-2xl text-[#eab308]" />, title: "Emotional Healing", description: "Support for emotional well-being through spiritual practices.",
  },
  {
    icon: <FaHandsHelping className="text-2xl text-[#eab308]" />, title: "Community Support", description: "Connecting you with a network of compassionate spiritual practitioners.",
  },
  {
    icon: <FaGlobeAsia className="text-2xl text-[#eab308]" />, title: "Global Consultations", description: "Virtual sessions for clients around the world.",
  },
  {
    icon: <FaLeaf className="text-2xl text-[#eab308]" />, title: "Holistic Wellness", description: "Integrative approaches for mind, body, and soul wellness.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-white to-[#F1E1C6] pb-20 overflow-x-hidden px-4">
      <section className="relative max-w-6xl mx-auto px-4 pt-12 z-10 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-8 tracking-tight drop-shadow-lg">All Services</h1>
        <p className="mb-10 text-gray-700 text-center max-w-2xl">
          Explore our comprehensive range of spiritual and wellness services designed to guide, heal, and empower you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {allServices.map((service) => (
            <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>

        {/* Consultation Process Section */}
        <div className="w-full max-w-6xl mx-auto mt-16 mb-12">
          <div className="bg-white/90 border border-[#e7e4dc] shadow-2xl rounded-2xl py-12 px-6 md:px-12 flex flex-col items-center">
            <div className="flex items-center justify-center mb-4">
              <span className="bg-[#fff7e0] rounded-full p-4 flex items-center justify-center shadow-md">
                <span className="text-3xl text-brand-gold font-bold">ن</span>
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">How Our Consultation Process Works</h2>
            <ol className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-0 w-full">
              <li className="flex flex-col items-center md:w-1/4 text-center relative">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#fff7e0] text-brand-gold font-bold text-xl mb-3 border-4 border-brand-gold shadow">1</span>
                <div className="font-semibold text-primary mb-1">Book Your Session</div>
                <div className="text-gray-600 text-sm">Choose your preferred practitioner and service, select an available time slot, and complete your booking.</div>
              </li>
              <li className="flex flex-col items-center md:w-1/4 text-center relative">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#fff7e0] text-brand-gold font-bold text-xl mb-3 border-4 border-brand-gold shadow">2</span>
                <div className="font-semibold text-primary mb-1">Share Your Concerns</div>
                <div className="text-gray-600 text-sm">Fill out a brief questionnaire to help your practitioner understand your specific situation and needs.</div>
              </li>
              <li className="flex flex-col items-center md:w-1/4 text-center relative">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#fff7e0] text-brand-gold font-bold text-xl mb-3 border-4 border-brand-gold shadow">3</span>
                <div className="font-semibold text-primary mb-1">Consultation Session</div>
                <div className="text-gray-600 text-sm">Connect with your practitioner via video call at your scheduled time for personalized guidance.</div>
              </li>
              <li className="flex flex-col items-center md:w-1/4 text-center relative">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#fff7e0] text-brand-gold font-bold text-xl mb-3 border-4 border-brand-gold shadow">4</span>
                <div className="font-semibold text-primary mb-1">Follow-up Support</div>
                <div className="text-gray-600 text-sm">Receive a summary of your session, recommended practices, and options for follow-up consultations if needed.</div>
              </li>
            </ol>
          </div>
        </div>

      </section>
      <UpsellBanner />
    </main>);
}
