import ServiceCard from "./ServiceCard";
import Link from "next/link";
import { allServices } from "../constants/services";
export default function ServicesSection() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-[#F1E1C6] py-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#15577a] mb-2">Our Services</h2>
      <p className="mb-10 text-gray-700 text-center max-w-2xl">
        Discover our range of authentic spiritual services designed to provide guidance, healing, and clarity through an Islamic perspective
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {allServices.slice(0, 6).map((service) => (
          <ServiceCard key={service.title} icon={service.icon} title={service.title} description={service.description} subTitle={service.subTitle} href={service.href} />
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
