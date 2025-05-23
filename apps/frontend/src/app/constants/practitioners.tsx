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
    description: string;
    starPractitioner?: boolean;
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
        discountPrice: "299",
        type: "najoomi",
        duration: "15 minutes",
        description: "Discover the ancient science of Ilm-e-Ramal with Dr Anees Ahmad — one of the region’s foremost practitioners. Dr Anees offers in-depth Ramal readings rooted in centuries-old Islamic tradition, providing profound spiritual insights and practical guidance for life’s challenges. Alongside Ramal, he specializes in holistic naturopathy, dream interpretation, and compassionate marriage & family advice. With over a decade of experience, Dr Anees blends authentic spiritual wisdom with modern care, helping you find clarity, healing, and harmony in every aspect of your journey.",
        starPractitioner: true
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
        discountPrice: "299",
        type: "najoomi",
        duration: "15 minutes",
        description: "Offers authentic Islamic guidance and solutions for challenges such as black magic, evil eye, and various spiritual ailments, drawing upon traditional wisdom and compassionate support."
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
        discountPrice: "199",
        type: "najoomi",
        duration: "15 minutes",
        description: "Mufti Saqib is a learned scholar with deep expertise in Islamic jurisprudence and spiritual sciences. With years of experience in providing ethical, faith-based guidance, they offer personalized support through spiritual consultations, helping individuals make decisions aligned with divine wisdom and Islamic principles."
    },
    {
        id: "ed867891-a66f-4771-be06-e9d47cddbb80",
        name: "Saleha Visal",
        duration: "45 minutes",
        description: "My name is Saleha Visal. I'm a Counselling Psychologist, CBT Practitioner and a Graphologist. I've previously worked with organizations like Cheshire Home (organization for people with disabilities) and National association for blind women (NAB India).My work experience includes preparing case studies of people with various disabilities and providing them counselling therapy accordingly. I've also worked as a Research Psychologist at GoodPsyche (Mental Health Organization). Currently I'm working as a Counselling Psychologist ( private practice) and taking online therapy session. Along with all this I'm conducting workshops with young school going children to raise awareness about Mental Health.",
        title: "Islamic Counselor",
        image: "/practitioners/saleha-visal.jpg",
        experience: "3+ years",
        specialties: ["CBT", "Anxiety", "Depression"],
        rating: 5,
        price: "1200",
        discountPrice: "999",
        type: "therapist",
        starPractitioner: true
    },
    {
        id: "84cc6628-2ba4-4472-992c-65da7eea8ad0",
        name: "Irfana Begum",
        title: "Islamic Counselor",
        image: "/practitioners/irfana-begum.jpg",
        experience: "1+ years",
        specialties: ["SFBT", "CBT", "Psychodynamic Principles", "Islamic Faith-Based Perspectives"],
        rating: 5,
        price: "800",
        discountPrice: "499",
        type: "therapist",
        duration: "45 minutes",
        description: "Passionate Counseling Psychologist with a Master’s in Psychology, practicing for over a year. My approach blends CBT, SFBT, psychodynamic principles, and Islamic faith-based perspectives,p focusing on emotional well-being and fostering self-reliance in diverse populations."
    },
    {
        id: "8ae2b138-f7d6-4dda-98ab-7acb1cf03e23",
        name: "Asifa Bano",
        duration: "45 minutes",
        description: "As a compassionate islamic psychologist, I provide a safe and non-judgmental space for individuals to explore their thoughts, feelings, and experiences. With empathy and expertise, I help clients navigate life's challenges, build resilience, and foster emotional well-being according to Quran and Sunnah.",
        title: "Islamic Counselor",
        image: "/practitioners/asifa-bano.jpg",
        experience: "1+ years",
        specialties: ["CBT", "Anxiety", "Depression"],
        rating: 5,
        price: "800",
        discountPrice: "499",
        type: "therapist",
    },
    {
        id: "8761a981-83e8-4b14-b9f1-cf0ac66bedf9",
        name: "Abdul Rehman",
        duration: "45 minutes",
        description: "Abdul Rehman is a postgraduate in Applied Psychology with a deep interest in faith-integrated counselling. He brings a compassionate, non-judgmental approach rooted in both psychological principles and Islamic values. He aims to support individuals through empathetic listening, practical guidance, and a spiritually grounded perspective.",
        title: "Islamic Counselor",
        image: "/practitioners/abdul-rehman.jpg",
        experience: "3+ years",
        specialties: ["Anxiety", "Family Therapy", "Behavioral Issues", "Stress Management"],
        rating: 5,
        price: "1200",
        discountPrice: "999",
        type: "therapist"
    },


];