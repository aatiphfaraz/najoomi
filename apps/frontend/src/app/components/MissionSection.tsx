import Image from "next/image";
export default function MissionSection() {
  return (
    <section className="w-full py-20 px-4 flex flex-col items-center bg-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Guidance Rooted in Faith</h2>
          <p className="mb-4 text-gray-700">
            Najoomi is a new beginning — a platform built to serve the Muslim ummah with trusted, Qurani-led spiritual services. From Istikhara to Ruqyah, dream interpretation to roohani healing, we connect you with knowledgeable and compassionate guides rooted in Islamic tradition
          </p>
          <p className="mb-8 text-gray-600 text-sm">
            Wherever you are, you now have a space to seek clarity, healing, and divine direction — all from the comfort of your home, with sincerity and faith at the core
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
