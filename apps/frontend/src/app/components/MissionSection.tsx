import Image from "next/image";
export default function MissionSection() {
  return (
    <section className="w-full py-20 px-4 flex flex-col items-center bg-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <div className="mb-2 text-[#eab308] font-semibold">Our Mission</div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Guidance Rooted in Faith</h2>
          <p className="mb-4 text-gray-700">
            Najoomi was created with a vision to provide the Muslim community with authentic, spiritually enriching guidance rooted in the timeless wisdom of Islam. We are dedicated to offering personalized, faith-centered support for those seeking clarity, healing, and spiritual growth.
          </p>
          <p className="mb-8 text-gray-600 text-sm">
            Our platform connects individuals with knowledgeable practitioners who combine deep religious understanding with compassionate guidance, creating a space where spiritual needs are addressed with respect, authenticity, and care.
          </p>
          <div className="flex gap-8 mt-6">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">1000+</div>
              <div className="text-xs text-gray-500">Consultations</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">12+</div>
              <div className="text-xs text-gray-500">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary">100%</div>
              <div className="text-xs text-gray-500">Authentic Guidance</div>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="flex justify-end">
          <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-lg">
            <Image width={500} height={500} src="/missions.png" alt="Mosque domes" className="object-cover w-full h-[28rem] md:h-[40rem]" />
          </div>
        </div>
      </div>
    </section>
  );
}
