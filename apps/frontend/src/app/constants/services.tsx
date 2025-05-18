import { Article } from "@/types/articleType";
import { JSX } from "react";
import { FaRegLightbulb, FaHandHoldingMedical, FaBook, FaUserFriends, FaQuran, FaHeart, FaHandsHelping, FaLeaf } from "react-icons/fa";

interface Service {
    icon: JSX.Element;
    title: string;
    description: string;
    subTitle: string;
    href: string;
}

enum Services {
    ILM_E_ADAD = "ilm-e-adad",
    ROOHANI_REQUESTS = "rohani-requests",
    QURAN_KHANI_AND_RECITATION = "quran-khani-and-recitation",
    TIBB_E_NABWI = "tibb-e-nabwi",
    BABY_NAMING = "baby-naming",
    MARRIAGE_AND_RELATIONSHIP_GUIDANCE = "marriage-and-relationship-guidance",
    PERSONALISED_DUA_AND_QURANIC_HEALING = "personalised-dua-and-quranic-healing",
    ISLAMIC_COUNSELING = "islamic-counseling",
    ISLAMIC_DREAM_INTERPRETATION = "islamic-dream-interpretation",
    RUQYYAH_AND_SPIRITUAL_CLEANSING = "ruqyah-and-spiritual-cleansing",
    ISTIKHARA_GUIDANCE = "istikhara-guidance",
    SPIRITUAL_GUIDANCE = "spiritual-guidance",
}

export const allServices: Service[] = [
    {
        icon: <FaBook className="text-2xl text-[#eab308]" />, // Ilm-e-Adad (Book = knowledge)
        title: "Ilm-e-Adad",
        description: "Naam aur date of birth se apki zindagi, challenges aur purpose ko samajhne ka Islami tareeqa",
        subTitle: "Roohani Raaste Numbers Ke Zariye",
        href: Services.ILM_E_ADAD,
    },
    {
        icon: <FaHandHoldingMedical className="text-2xl text-[#eab308]" />, // Rohani Requests (Healing hand)
        title: "Rohani Requests",
        description: "Duaon aur Qurani ilaj ke zariye roohani dard, nazar aur fikr se paayein shifa aur sukoon",
        subTitle: "Sukoon aur Hifazat Qurani Ilaj ke Saath",
        href: Services.ROOHANI_REQUESTS,
    },
    {
        icon: <FaQuran className="text-2xl text-[#eab308]" />,
        title: "Quran Khani and Recitation",
        subTitle: "Har Ayat Mein Barakah",
        description: "Tilawat ke zariye paayein roohani sukoon aur barkat, personal Quran Khani ka intazam aapke liye",
        href: Services.QURAN_KHANI_AND_RECITATION,
    },
    {
        icon: <FaLeaf className="text-2xl text-[#eab308]" />, // Tibb-e-Nabwi (Leaf = natural healing)
        title: "Tibb-e-Nabwi",
        subTitle: "Natural ilaaj se apni sehat ka khayal rakhein",
        description: "Prophet Muhammad (PBUH) ke ilaj ke tareeqon se roohani aur jismani sehat ko behtar banayein",
        href: Services.TIBB_E_NABWI,
    },
    {
        icon: <FaUserFriends className="text-2xl text-[#eab308]" />, // Baby Naming (Friends = community, new life)
        title: "Baby Naming",
        subTitle: "Roohani naam se apni fitrat aur taqdeer ko samjhein",
        description: "Qurani aur roohani naam se apne naye mehmaan ki zindagi aur taqdeer ko roshan karein",
        href: Services.BABY_NAMING,
    },
    {
        icon: <FaHeart className="text-2xl text-[#eab308]" />, // Marriage & Relationship (Heart = love)
        title: "Marriage & Relationship Guidance",
        subTitle: "Behtar rishtay, behtar zindagi",
        description: "Nikah aur rishtay ki roohani rehnumai se apni zindagi mein mohabbat aur samajhdari laayein",
        href: Services.MARRIAGE_AND_RELATIONSHIP_GUIDANCE,
    },
    {
        icon: <FaHandsHelping className="text-2xl text-[#eab308]" />, // Personalised Dua (Helping hands)
        title: "Personalised Dua & Quranic Healing",
        subTitle: "Aapke liye, aapki roohani shifa",
        description: "Har dard aur mushkil ke liye aapki zarurat ke mutabiq tayyar duaayein aur Qurani ilaj",
        href: Services.PERSONALISED_DUA_AND_QURANIC_HEALING,
    },
    {
        icon: <FaRegLightbulb className="text-2xl text-[#eab308]" />,
        title: "Islamic Counseling",
        subTitle: "Islamic Hikmat aur Rehnumai ke Zariye Raasta Paaiye",
        description: "Zehni aur roohani musibat ka hal Qurani hikmat aur Sunnat ke roshni mein, aapke liye, sukoon aur raahdari",
        href: Services.ISLAMIC_COUNSELING,
    },
    {
        icon: <span className="text-2xl" role="img" aria-label="dream">🌙</span>,
        title: "Islamic Dream Interpretation",
        subTitle: "Khwabon Ki Zubaan Se Zindagi Ki Manzil Tak",
        description: "Aapke khwabon ki roohani taabeer, Quran aur Sunnat ki roshni mein, apne khwabon ko samjhiye, aur zindagi ke chhupay hue raaste dhoondhiye",
        href: Services.ISLAMIC_DREAM_INTERPRETATION,
    },
    {
        icon: <FaQuran className="text-2xl text-[#eab308]" />,
        title: "Ruqyah and Spiritual Cleansing",
        subTitle: "Jadoo, Nazar Aur Manfi Taqaton Se Hifazat, Qurani Ilaj Ke Saath",
        description: "Qurani ayaton aur roohani tareeqon se apne dil aur rooh ki hifazat karein — har manfi taqat se bachao aur sukoon paaiye",
        href: Services.RUQYYAH_AND_SPIRITUAL_CLEANSING,
    },
    {
        icon: <span className="text-2xl" role="img" aria-label="istikhara">🤲</span>,
        title: "Istikhara Guidance",
        subTitle: "Faislay mein roshni, Allah ke ishare se paayiye",
        description: "Faislon mein uljhan ho, toh humse Istikhara karwaiye — Allah ke ishareon se apna raasta paaiye, aur har faisla ho jaaye aasan",
        href: Services.ISTIKHARA_GUIDANCE,
    },
    {
        icon: <span className="text-2xl" role="img" aria-label="sparkle">✨</span>, // Spiritual Guidance (Sparkle = enlightenment)
        title: "Spiritual Guidance",
        subTitle: "",
        description: "",
        href: Services.SPIRITUAL_GUIDANCE,
    }
];

export const serviceInfo: Article[] = [
    {
        id: "islamic-dream-interpretation",
        title: "Islamic Dream Interpretation",
        description: "In-depth interpretations based on classical Islamic texts and scholarly opinions.",
        date: "2025-01-01",
        image: "/dream-interpretation.jpg",
        publisher: "Najoomi",
        category: "Spiritual Services",
        keywords: "Islamic dream interpretation, Najoomi, spiritual guidance, dreams, Islam",
        rating: "general",
        audience: "all",
        subject: "Islamic Dream Interpretation",
        summary: "A spiritual service for interpreting dreams based on Islamic tradition.",
        classification: "Religion, Spirituality, Guidance",
        appleMobileWebAppCapable: "yes",
        appleMobileWebAppTitle: "Najoomi",
        appleMobileWebAppStatusBarStyle: "black-translucent",
        contentLanguage: "en",
        xUaCompatible: "IE=edge",
        dcTitle: "Islamic Dream Interpretation",
        dcDescription: "In-depth interpretations based on classical Islamic texts and scholarly opinions.",
        dcPublisher: "Najoomi",
        dcLanguage: "en",
        dcSubject: "Islamic Dream Interpretation",
        contentBody: (
            <>
                <p>
                    Our Islamic Dream Interpretation service provides in-depth interpretations based on classical Islamic texts and scholarly opinions. Gain clarity and spiritual insight into your dreams with guidance rooted in authentic sources.
                </p>
            </>
        ),
        faqs: [
            {
                question: "What is Islamic dream interpretation?",
                answer: "It is the analysis of dreams based on principles found in the Quran, Sunnah, and classical Islamic literature."
            },
            {
                question: "Who performs the interpretation?",
                answer: "Qualified scholars and practitioners with deep knowledge of Islamic tradition."
            }
        ]
    },
];