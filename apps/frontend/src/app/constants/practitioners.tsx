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
        id: "de340638-e06c-4ed4-ba5b-007b023b8ab4",
        name: "Alim Aatif Faraz",
        title: "Islamic Scholar & Spiritual Guide",
        image: "/missions.png",
        experience: "5+ years",
        specialties: ["Dream Interpretation", "Istikhara", "Spiritual Counseling"],
        rating: 5,
        price: "599",
        discountPrice: "1",
        starPractitioner: true,
        type: "najoomi",
        duration: "15 minutes",
        description: "Book a 1:1 session with Alim Aatif Faraz for dream interpretation, istikhara, and spiritual guidance rooted in Islamic wisdom. Experience clarity and peace through authentic spiritual counsel."
    },
    {
        id: "",
        name: "Haji Asheqeen",
        title: "Spiritual Guide",
        image: "/practitioners/haji-asheqeen.jpg",
        experience: "6+ years",
        specialties: ["Black Magic", "Evil Eye", "Spiritual Counseling"],
        rating: 5,
        price: "599",
        discountPrice: "399",
        type: "najoomi",
        duration: "15 minutes",
        description: "Offers authentic Islamic guidance and solutions for challenges such as black magic, evil eye, and various spiritual ailments, drawing upon traditional wisdom and compassionate support."
    },
    {
        id: "",
        name: "Saleha Visal",
        duration: "45 minutes",
        description: "My name is Saleha Visal. I'm a Counselling Psychologist, CBT Practitioner and a Graphologist. I've previously worked with organizations like Cheshire Home (organization for people with disabilities) and National association for blind women (NAB India).My work experience includes preparing case studies of people with various disabilities and providing them counselling therapy accordingly. I've also worked as a Research Psychologist at GoodPsyche (Mental Health Organization). Currently I'm working as a Counselling Psychologist ( private practice) and taking online therapy session. Along with all this I'm conducting workshops with young school going children to raise awareness about Mental Health.",
        title: "Islamic Counselor",
        image: "/missions.png",
        experience: "3+ years",
        specialties: ["CBT", "Anxiety", "Depression"],
        rating: 5,
        price: "1200",
        discountPrice: "1000",
        type: "therapist",
    },
    {
        id: "",
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
        id: "",
        name: "Abdul Rehman",
        duration: "45 minutes",
        description: "Abdul Rehman is a postgraduate in Applied Psychology with a deep interest in faith-integrated counselling. He brings a compassionate, non-judgmental approach rooted in both psychological principles and Islamic values. He aims to support individuals through empathetic listening, practical guidance, and a spiritually grounded perspective.",
        title: "Islamic Counselor",
        image: "/missions.png",
        experience: "3+ years",
        specialties: ["Anxiety", "Family Therapy", "Behavioral Issues", "Stress Management"],
        rating: 5,
        price: "1200",
        discountPrice: "1000",
        type: "therapist"
    },
    {
        id: "",
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

];