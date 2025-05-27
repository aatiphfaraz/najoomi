// Types for practitioners
export type PractitionerType = 'najoomi' | 'therapist';

export interface Practitioner {
    id: string;
    name: string;
    title: string;
    image: string;
    experience: string;
    specialties: string[];
    rating: number;
    price: string;
    discountPrice: string;
    type: PractitionerType;
    duration: string;
    description: React.ReactNode;
    starPractitioner?: boolean;
    reviews: { text: string; name: string }[];
}

export const practitioners: Practitioner[] = [
    {
        id: "a549f587-5e1c-4ad6-9f62-15567b856ba7",
        name: "Dr Anees Ahmad",
        title: "Ramal Expert",
        image: "/practitioners/dr-anees.jpg",
        experience: "10+ years",
        specialties: ["Ramal", "Naturopathy", "Dream Interpretation", "Marriage & Family"],
        rating: 5,
        price: "700",
        discountPrice: "Free",
        type: "najoomi",
        duration: "15 minutes",
        description: (
            <span className="block text-[1.01rem] leading-relaxed text-[#3b2f1e] relative">

                <span className="italic text-[#5d4a2f]">Kabhi lagta hai zindagi uljhanon se bhari hai?</span> <br />
                <span className="">Dr. Anees ke <span className="font-semibold text-brand-gold">Ramal readings</span> aapko denge <span className="font-semibold">insight</span> jo sirf future nahi, aapki <span className="underline decoration-brand-gold">rooh tak ko samjhe</span>.</span>
                <br /><br />
                <span className="">With <span className="font-semibold">10+ years of experience</span>, unki guidance <span className="text-brand-gold">Islamic spirituality</span> aur <span className="text-brand-gold">modern wisdom</span> ka perfect blend hai—be it <span className="font-medium">dream interpretation</span>, <span className="font-medium">holistic naturopathy</span>, ya <span className="font-medium">rishton ki samajhdaari bhari salah</span>.</span>
                <br /><br />
                <span className="">Zaroori nahi har raasta akela tay kiya jaye—apni journey ko <span className="font-semibold text-brand-gold">clarity</span>, <span className="font-semibold text-brand-gold">healing</span> aur <span className="font-semibold text-brand-gold">sukoon</span> ke saath jeeyein.</span>
                <span className="absolute right-0 bottom-0 opacity-30 pointer-events-none select-none">
                    {/* Subtle geometric accent */}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="#b6894a" strokeDasharray="4 4" /></svg>
                </span>
            </span>
        ),
        starPractitioner: true,
        reviews: [
            { text: "I came to Dr. Anees for a Ramal reading during a very confusing time. His words were not just answers, they were raah dikhane wali roshni. Today, I feel more at peace and confident in my decisions.", name: "Sameer, Lucknow" },
            { text: "'Doctors gave up on my fatigue, but his naturopathy worked...had been feeling physically drained for years. Dr. Anees’s holistic remedies and duas gave me not just energy, but hope. Jaise zindagi fir se mil gayi ho. He truly treats the soul and body together.", name: "Fatima, Mumbai" }
        ]
    },
    {
        id: "b9601518-0d28-4616-b204-a00b3f9ff6ff",
        name: "Haji Asheqeen",
        title: "Spiritual Guide",
        image: "/practitioners/haji-asheqeen.jpg",
        experience: "6+ years",
        specialties: ["Black Magic", "Evil Eye", "Spiritual Counseling"],
        rating: 5,
        price: "600",
        discountPrice: "Free",
        type: "najoomi",
        duration: "15 minutes",
        description: (
            <span className="block text-[1.01rem] leading-relaxed text-[#3b2f1e] relative">

                <span className="italic text-[#5d4a2f]">Kabhi mehsoos hota hai jaise koi nazar, bandish ya roohani rukawat ho?</span> <br />
                <span>Haji Aasheqeen ke <span className="font-semibold text-brand-gold">Ruqyah</span> aapko denge insight jo sirf future nahi, aapki <span className="underline decoration-brand-gold">rooh tak ko samjhe</span>.</span>
                <br /><br />
                <span>With <span className="font-semibold">years of experience</span>, unki guidance <span className="text-brand-gold">Islamic spirituality</span> aur <span className="text-brand-gold">modern wisdom</span> ka perfect blend hai—be it <span className="font-medium">black magic</span>, <span className="font-medium">evil eye</span>, ya <span className="font-medium">unexplained anxiety</span>.</span>
                <br /><br />
                <span>Zaroori nahi har raasta akela tay kiya jaye—apni journey ko <span className="font-semibold text-brand-gold">clarity</span>, <span className="font-semibold text-brand-gold">protection</span> aur <span className="font-semibold text-brand-gold">inner peace</span> ke saath jeeyein.</span>
                <span className="absolute right-0 bottom-0 opacity-30 pointer-events-none select-none">
                    {/* Subtle geometric accent */}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="#b6894a" strokeDasharray="4 4" /></svg>
                </span>
            </span>
        ),
        reviews: [
            { text: "I was skeptical about Ruqyah, but after my session, I felt a weight lift from my heart. The practitioner’s knowledge and faith-based approach made all the difference.", name: "Imran, Bangalore" },
            { text: "Haji Asheqeen’s advice helped protect my family from nazar and negativity.", name: "Nida, Hyderabad" }
        ]
    },
    {
        id: "e7fa7a3d-9f7c-4c8b-b288-b92cad2418ea",
        name: "Mufti Saqib",
        title: "Islamic Scholar",
        image: "/practitioners/mufti-saqib.jpg",
        experience: "10+ years",
        specialties: ["Spritual Guidance"],
        rating: 5,
        price: "500",
        discountPrice: "Free",
        type: "najoomi",
        duration: "15 minutes",
        description: (
            <span className="block text-[1.01rem] leading-relaxed text-[#3b2f1e] relative">
                <span className="italic text-[#5d4a2f]">Mufti Saqib is a learned scholar with deep expertise in Islamic jurisprudence and spiritual sciences. With years of experience in providing ethical, faith-based guidance, they offer personalized support through spiritual consultations, helping individuals make decisions aligned with divine wisdom and Islamic principles.</span>
                <br />
                <span className="italic text-[#5d4a2f]">Mufti Saqib is a learned scholar with deep expertise in Islamic jurisprudence and spiritual sciences. With years of experience in providing ethical, faith-based guidance, they offer personalized support through spiritual consultations, helping individuals make decisions aligned with divine wisdom and Islamic principles.</span>
                <span className="absolute right-0 bottom-0 opacity-30 pointer-events-none select-none">
                    {/* Subtle geometric accent */}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="#b6894a" strokeDasharray="4 4" /></svg>
                </span>
            </span>
        ),
        reviews: [
            { text: "Mufti Saqib’s consultation brought so much peace to my heart. His advice is always rooted in faith.", name: "Zainab, Delhi" },
            { text: "He helped me resolve a family issue with wisdom and kindness.", name: "Ahmed, Kolkata" }
        ]
    },
    {
        id: "coming-soon",
        name: "Mohammad Riyaz",
        title: "Islamic Scholar",
        image: "/practitioners/mohammad-riyaz.jpg",
        experience: "17+ years",
        specialties: ["Black Magic", "Evil Eye", "Spiritual Consulting"],
        rating: 5,
        price: "500",
        discountPrice: "Free",
        type: "najoomi",
        duration: "15 minutes",
        description: (
            <span className="block text-[1.01rem] leading-relaxed text-[#3b2f1e] relative">
                <span className="italic text-[#5d4a2f]">Aapko lagta hai nazar ya bandish ne zindagi ki raah mein rukawat daal di hai? Ya phir kisi bhi roohani masle ka hal chahiye?</span> <br />
                <span className="">Mohammad Riyaz sahab, ek tajurbekaar Islamic Scholar hain jo Black Magic, Evil Eye aur Spiritual Consulting mein mahir hain. Unki raahnumayi se na sirf roohani masail ka hal milta hai, balki dil ko sukoon bhi milta hai. Quran aur Sunnat ki roshni mein, aapko milegi asli roohani madad—samajhdaari ke saath, bina kisi dar ke.</span>

            </span>
        ),
        reviews: [
            { text: "Riyaz sahab ne meri family par jo bandish thi, uska hal Quranic tareeqe se nikala. Ab ghar mein barkat aur sukoon hai.", name: "Shabana, Kanpur" },
            { text: "Black magic ka asar lag raha tha, lekin unki spiritual consulting ne mujhe himmat di aur cheezein behtar ho gayi.", name: "Khaleel, Delhi" }
        ]
    },
    {
        id: "ed867891-a66f-4771-be06-e9d47cddbb80",
        name: "Saleha Visal",
        duration: "45 minutes",
        description: (
            <span className="block text-[1.01rem] leading-relaxed text-[#3b2f1e] relative">
                <span className="italic text-[#5d4a2f]">My name is Saleha Visal. I'm a Counselling Psychologist, CBT Practitioner and a Graphologist. I've previously worked with organizations like Cheshire Home (organization for people with disabilities) and National association for blind women (NAB India).My work experience includes preparing case studies of people with various disabilities and providing them counselling therapy accordingly. I've also worked as a Research Psychologist at GoodPsyche (Mental Health Organization). Currently I'm working as a Counselling Psychologist ( private practice) and taking online therapy session. Along with all this I'm conducting workshops with young school going children to raise awareness about Mental Health.</span>
                <span className="absolute right-0 bottom-0 opacity-30 pointer-events-none select-none">
                    {/* Subtle geometric accent */}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="#b6894a" strokeDasharray="4 4" /></svg>
                </span>
            </span>
        ),
        title: "Islamic Counselor",
        image: "/practitioners/saleha-visal.jpg",
        experience: "3+ years",
        specialties: ["CBT", "Anxiety", "Depression"],
        rating: 5,
        price: "1200",
        discountPrice: "Free",
        type: "therapist",
        starPractitioner: true,
        reviews: [
            { text: "I was lost after my divorce, but Najoomi’s Islamic counselling helped me find hope and self-worth again. The guidance was gentle, spiritual, and truly healing.", name: "Ayesha, Delhi" },
            { text: "Saleha’s therapy sessions helped me overcome anxiety and build confidence.", name: "Sara, Pune" }
        ]
    },
    // {
    //     id: "84cc6628-2ba4-4472-992c-65da7eea8ad0",
    //     name: "Irfana Begum",
    //     title: "Islamic Counselor",
    //     image: "/practitioners/irfana-begum.jpg",
    //     experience: "1+ years",
    //     specialties: ["SFBT", "CBT", "Psychodynamic Principles", "Islamic Faith-Based Perspectives"],
    //     rating: 5,
    //     price: "800",
    //     discountPrice: "499",
    //     type: "therapist",
    //     duration: "45 minutes",
    //     description: "Passionate Counseling Psychologist with a Master’s in Psychology, practicing for over a year. My approach blends CBT, SFBT, psychodynamic principles, and Islamic faith-based perspectives,p focusing on emotional well-being and fostering self-reliance in diverse populations."
    // },
    {
        id: "eeb19399-c21a-41cb-80b9-7a94d102ae5d",
        name: "Asifa Bano",
        duration: "45 minutes",
        description: (
            <span className="block text-[1.01rem] leading-relaxed text-[#3b2f1e] relative">

                <span className="italic text-[#5d4a2f]">As a compassionate islamic psychologist, I provide a safe and non-judgmental space for individuals to explore their thoughts, feelings, and experiences. With empathy and expertise, I help clients navigate life's challenges, build resilience, and foster emotional well-being according to Quran and Sunnah.</span>
                <span className="absolute right-0 bottom-0 opacity-30 pointer-events-none select-none">
                    {/* Subtle geometric accent */}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="#b6894a" strokeDasharray="4 4" /></svg>
                </span>
            </span>
        ),
        title: "Islamic Counselor",
        image: "/practitioners/asifa-bano.jpg",
        experience: "1+ years",
        specialties: ["CBT", "Anxiety", "Depression"],
        rating: 5,
        price: "800",
        discountPrice: "Free",
        type: "therapist",
        reviews: [
            { text: "Asifa helped me understand my emotions and find peace through Islamic teachings.", name: "Maryam, Bhopal" },
            { text: "Her sessions are safe, supportive, and always confidential.", name: "Sana, Hyderabad" }
        ]
    },
    {
        id: "8761a981-83e8-4b14-b9f1-cf0ac66bedf9",
        name: "Abdul Rehman",
        duration: "45 minutes",
        description: (
            <span className="block text-[1.01rem] leading-relaxed text-[#3b2f1e] relative">

                <span className="italic text-[#5d4a2f]">Abdul Rehman is a postgraduate in Applied Psychology with a deep interest in faith-integrated counselling. He brings a compassionate, non-judgmental approach rooted in both psychological principles and Islamic values. He aims to support individuals through empathetic listening, practical guidance, and a spiritually grounded perspective.</span>
                <span className="absolute right-0 bottom-0 opacity-30 pointer-events-none select-none">
                    {/* Subtle geometric accent */}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="#b6894a" strokeDasharray="4 4" /></svg>
                </span>
            </span>
        ),
        title: "Islamic Counselor",
        image: "/practitioners/abdul-rehman.jpg",
        experience: "3+ years",
        specialties: ["Anxiety", "Family Therapy", "Behavioral Issues", "Stress Management"],
        rating: 5,
        price: "1200",
        discountPrice: "Free",
        type: "therapist",
        reviews: [
            { text: "Abdul Rehman’s therapy sessions helped me understand my thoughts and emotions better. He provided practical guidance and spiritual insights that resonated with me.", name: "Neha, Delhi" },
            { text: "His approach was gentle and non-judgmental, making it easier for me to open up about my struggles.", name: "Mohammed, Mumbai" }
        ]
    },
    {
        id: "ebdec80b-650c-4d8b-bb07-56eeccf6c6df",
        name: "Dr. Wakeel Ahmad",
        duration: "45 minutes",
        description: (
            <span className="block text-[1.01rem] leading-relaxed text-[#3b2f1e] relative">

                <span className="italic text-[#5d4a2f]">Dr. Wakeel Ahmad, PhD in Applied Psychology, blends deep psychological expertise with a heartfelt commitment to faith-integrated counseling. Guided by Islamic values and a spirit of compassion, he offers empathetic listening and practical guidance, helping individuals find clarity, healing, and resilience through a harmonious balance of mind, heart, and soul.</span>
                <span className="absolute right-0 bottom-0 opacity-30 pointer-events-none select-none">
                    {/* Subtle geometric accent */}
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="15" stroke="#b6894a" strokeDasharray="4 4" /></svg>
                </span>
            </span>
        ),
        title: "Islamic Counselor",
        image: "/practitioners/dr-wakeel.jpg",
        experience: "5+ years",
        specialties: ["Anxiety", "Family Therapy", "Relationship Counseling", "Stress Management", "Depression"],
        rating: 5,
        price: "700",
        discountPrice: "Free",
        type: "therapist",
        reviews: [
            { text: "Dr. Wakeel’s guidance helped me navigate a difficult relationship with wisdom and compassion.", name: "Rashid, Mumbai" },
            { text: "His sessions are a perfect blend of psychology and Islamic values.", name: "Amir, Ahmedabad" }
        ]
        ,
    },
    {
        id: "4e5a2996-1060-4e9a-bf8e-d642322e06ed",
        name: "Maliha Naaz",
        duration: "45 minutes",
        description: (
            <span className="block text-[1.01rem] leading-relaxed text-[#3b2f1e] relative">

                <span className="italic text-[#5d4a2f]">Maliha Naaz is a compassionate and experienced Islamic Counsellor dedicated to providing faith-based emotional and psychological support. She specializes in integrating Islamic principles with modern counselling techniques to guide individuals and families through personal, spiritual, and relational challenges. Committed to promoting mental well-being within a culturally and religiously sensitive framework.</span>

            </span>
        ),
        title: "Islamic Counselor",
        image: "/practitioners/maliha-naaz.jpg",
        experience: "2+ years",
        specialties: ["Faith-based Support", "Family Counselling", "Mental Well-being", "Relational Challenges"],
        rating: 5,
        price: "500",
        discountPrice: "Free",
        type: "therapist",
        reviews: [
            { text: "Maliha’s faith-based approach helped me find peace and clarity during a difficult time. Her guidance is both spiritual and practical.", name: "Ayesha, Lucknow" },
            { text: "Her sessions beautifully blend Islamic wisdom with modern counselling. I always feel heard and understood.", name: "Imran, Delhi" }
        ]
        ,
    },


];