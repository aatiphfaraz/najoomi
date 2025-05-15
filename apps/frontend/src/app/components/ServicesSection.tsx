import { FaRegLightbulb, FaRegComments, FaRegCompass, FaRegChartBar, FaRegGem, FaHandHoldingMedical } from "react-icons/fa";

const services = [
  {
    icon: <FaRegLightbulb className="text-2xl text-[#eab308]" />,
    title: "Islamic Dream Interpretation",
    description: "In-depth interpretations based on classical Islamic texts and scholarly opinions.",
  },
  {
    icon: <FaRegComments className="text-2xl text-[#eab308]" />,
    title: "Spiritual Counseling",
    description: "Personalized advice for navigating life's challenges through an Islamic lens.",
  },
  {
    icon: <FaRegCompass className="text-2xl text-[#eab308]" />,
    title: "Ruqyah & Spiritual Cleansing",
    description: "Protection from evil influences through Quranic recitations and spiritual purification.",
  },
  {
    icon: <FaRegChartBar className="text-2xl text-[#eab308]" />,
    title: "Istikhara Guidance",
    description: "Assistance in performing Istikhara and interpreting the signs that follow.",
  },
  {
    icon: <FaRegGem className="text-2xl text-[#eab308]" />,
    title: "Ilm-e-Adad (Numerology)",
    description: "Guidance on using numerological insights rooted in Islamic traditions.",
  },
  {
    icon: <FaHandHoldingMedical className="text-2xl text-[#eab308]" />,
    title: "Rohani Healing",
    description: "Prayers and spiritual interventions to address personal and family issues.",
  },
];

import Button from "./ui/Button";
import ServiceCard from "./ServiceCard";
import Link from "next/link";
export default function ServicesSection() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-[#F1E1C6] py-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#15577a] mb-2">Our Services</h2>
      <p className="mb-10 text-gray-700 text-center max-w-2xl">
        Discover our range of authentic spiritual services designed to provide guidance, healing, and clarity through an Islamic perspective.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {services.map((service, idx) => (
          <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/services" className="text-[#15577a] text-lg font-semibold underline underline-offset-4 decoration-[#b6894a] hover:decoration-2 hover:text-[#b6894a] transition-all duration-150">
          View All Services
        </Link>
      </div>
    </section>
  );
}
