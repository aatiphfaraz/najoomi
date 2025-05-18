const testimonials = [
  {
    rating: 5,
    text: "The dream interpretation service was incredibly accurate. The practitioner explained the Islamic context behind my recurring dream and provided me with practical guidance that helped me find peace!",
    name: "Farah Khan",
    location: "Mumbai",
    initials: "FK"
  },
  {
    rating: 5,
    text: "I was going through a difficult time making a life-changing decision. The Istikhara guidance I received helped me find clarity and confidence in my choice. Truly blessed to have found this service!",
    name: "Ahmed Patel",
    location: "Hyderabad",
    initials: "AP"
  },
  {
    rating: 5,
    text: "The Ruqyah service helped my family during a time of spiritual difficulty. The practitioner was compassionate, knowledgeable, and provided us with ongoing support even after our session!",
    name: "Zainab Ali",
    location: "Delhi",
    initials: "ZA"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-gradient-to-br from-white to-[#F1E1C6] py-20 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#15577a] mb-2">What Our Clients Say</h2>
      <p className="mb-10 text-gray-700 text-center max-w-2xl">
        Hear from those who have experienced the transformative guidance and support from our practitioners
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-white rounded-2xl shadow-md border border-[#eab308]/10 p-6 flex flex-col min-h-[260px]"
          >
            <div className="flex items-center mb-2">
              {[...Array(t.rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#eab308] mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.382 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.382-2.454a1 1 0 00-1.175 0l-3.382 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.382-2.454c-.784-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              ))}
            </div>
            <div className="text-gray-700 text-sm mb-6 italic">&quot;{t.text}&quot;</div>
            <div className="flex items-center gap-3 mt-auto">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f3ead7] text-[#15577a] font-bold text-sm">
                {t.initials}
              </span>
              <div>
                <div className="font-semibold text-[#15577a] text-sm leading-tight">{t.name}</div>
                <div className="text-xs text-gray-400">{t.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
