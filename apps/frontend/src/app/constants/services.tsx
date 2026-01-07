import { Article } from "@/types/articleType";
import { JSX } from "react";
import {
  FaRegLightbulb,
  FaHandHoldingMedical,
  FaBook,
  FaUserFriends,
  FaQuran,
  FaHeart,
  FaHandsHelping,
  FaLeaf,
} from "react-icons/fa";

export interface Service {
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
  ILM_E_RAMAL = "ilm-e-ramal",
}

export const allServices: Service[] = [
  {
    icon: <FaBook className="text-2xl text-brand-gold" />,
    title: "Ramal Reading",
    subTitle: "Love ya career – poochho taqdeer se seedha jawab",
    description:
      "Shaadi, job ya life ka koi bada faisla? Ramal ek purana Islami tareeqa hai jo batata hai kya raasta sahi hai aapke liye.",
    href: Services.ILM_E_RAMAL,
  },
  // {
  //     icon: <FaBook className="text-2xl text-brand-gold" />,
  //     title: "Islamic Numerology",
  //     subTitle: "Naam aur DOB ke numbers kuch kehte hain",
  //     description: "Aapka naam aur paidaish ki tareekh batate hain aapki personality, challenges aur life purpose. Islamic method se jaaniye.",
  //     href: Services.ILM_E_ADAD,
  // },
  {
    icon: <FaHandHoldingMedical className="text-2xl text-brand-gold" />,
    title: "Roohani Amal",
    subTitle: "Nazar, fikr, ya gham – Qurani dua se sukoon paayein",
    description:
      "Duaon aur Qurani ilaj ke zariye roohani dard, nazar aur fikr se paayein shifa aur sukoon",
    href: Services.ROOHANI_REQUESTS,
  },
  // {
  //     icon: <FaQuran className="text-2xl text-brand-gold" />,
  //     title: "Quran Khani",
  //     subTitle: "Tilawat se ghar mein barakah aur sukoon",
  //     description: "Personal Quran Khani – aapke ghar ke liye, kisi khaas wajah ya yaad ke liye tilawat ka intazam.",
  //     href: Services.QURAN_KHANI_AND_RECITATION,
  // },
  // {
  //     icon: <FaLeaf className="text-2xl text-brand-gold" />,
  //     title: "Prophetic Healing",
  //     subTitle: "Natural ilaaj – Sunnat ke nuskhe ke saath",
  //     description: "Kalonji, honey, ajwain – Prophet Muhammad (PBUH) ke nuskhe, aaj bhi sehat aur sukoon ke liye.",
  //     href: Services.TIBB_E_NABWI,
  // },
  // {
  //     icon: <FaUserFriends className="text-2xl text-brand-gold" />,
  //     title: "Spiritual Baby Names",
  //     subTitle: "Naye mehmaan ke liye roohani naam",
  //     description: "Qurani aur roohani naam jo aapke baby ki zindagi mein barakah laayein. Naam ek dua hota hai.",
  //     href: Services.BABY_NAMING,
  // },
  {
    icon: <FaHeart className="text-2xl text-brand-gold" />,
    title: "Rishta & Shaadi Guidance",
    subTitle: "Behtar rishtay, behtar zindagi",
    description:
      "Mohabbat ho ya shaadi ka faisla – roohani guidance se samajh paayein sahi raasta.",
    href: Services.MARRIAGE_AND_RELATIONSHIP_GUIDANCE,
  },
  {
    icon: <FaHandsHelping className="text-2xl text-brand-gold" />,
    title: "Dua & Quranic Healing",
    subTitle: "Har problem ke liye personal Qurani dua",
    description:
      "Aapki need ke hisaab se tayyar ki gayi duaayein aur healing, sirf aapke liye.",
    href: Services.PERSONALISED_DUA_AND_QURANIC_HEALING,
  },
  {
    icon: <FaRegLightbulb className="text-2xl text-brand-gold" />,
    title: "Islamic Counseling",
    subTitle: "Zehni aur roohani sukoon – deen ke zariye",
    description:
      "Depression, stress, confusion – Quran aur Sunnat se madad aur mashwara paayein.",
    href: Services.ISLAMIC_COUNSELING,
  },
  // {
  //     icon: <span className="text-2xl" role="img" aria-label="dream">🌙</span>,
  //     title: "Khwabon Ki Tabeer",
  //     subTitle: "Sapno ka matlab samajhna zaroori hai",
  //     description: "Ajeeb sapne ya signals mil rahe hain? Islamic dream interpretation se khud ko samjhiye.",
  //     href: Services.ISLAMIC_DREAM_INTERPRETATION,
  // },
  // {
  //     icon: <FaQuran className="text-2xl text-brand-gold" />,
  //     title: "Ruqyah & Cleansing",
  //     subTitle: "Nazar aur jadoo ka Qurani ilaj",
  //     description: "Qurani ayat se kiya gaya spiritual protection – nazar, jadoo, aur negative energy se bachao.",
  //     href: Services.RUQYYAH_AND_SPIRITUAL_CLEANSING,
  // },
  {
    icon: (
      <span className="text-2xl" role="img" aria-label="istikhara">
        🤲
      </span>
    ),
    title: "Istikhara Guidance",
    subTitle: "Confused ho? Allah se raasta poochhiye",
    description:
      "Rishta, job, ya koi life decision – Allah se roshni paane ka Islami tareeqa: Istikhara.",
    href: Services.ISTIKHARA_GUIDANCE,
  },
  {
    icon: (
      <span className="text-2xl" role="img" aria-label="sparkle">
        ✨
      </span>
    ),
    title: "Religious Advice",
    subTitle: "Islami Maslo Ka Hal",
    description:
      "Quran aur Sunnat ki roshni mein apni life ke mod par sahi guidance lein. Har problem ka spiritual angle.",
    href: Services.SPIRITUAL_GUIDANCE,
  },
];

// export const allServices: Service[] = [
//     {
//         icon: <FaBook className="text-2xl text-brand-gold" />, // Ilm-e-Adad (Book = knowledge)
//         title: "Ilm-e-Ramal",
//         description: "Love, career, rishte or faisle - zindagi se jude har sawaal ka jawab paiye or hal jaaniye  ilm e ramal ke zariye",
//         subTitle: "Ramal Se Poochho – Kya Kehte Hain Aapke Raaste?",
//         href: Services.ILM_E_RAMAL,
//     },
//     {
//         icon: <FaBook className="text-2xl text-brand-gold" />, // Ilm-e-Adad (Book = knowledge)
//         title: "Ilm-e-Adad",
//         description: "Naam aur date of birth se apki zindagi, challenges aur purpose ko samajhne ka Islami tareeqa",
//         subTitle: "Roohani Raaste Numbers Ke Zariye",
//         href: Services.ILM_E_ADAD,
//     },
//     {
//         icon: <FaHandHoldingMedical className="text-2xl text-brand-gold" />, // Rohani Requests (Healing hand)
//         title: "Roohani Requests",
//         description: "Duaon aur Qurani ilaj ke zariye roohani dard, nazar aur fikr se paayein shifa aur sukoon",
//         subTitle: "Sukoon aur Hifazat Qurani Ilaj ke Saath",
//         href: Services.ROOHANI_REQUESTS,
//     },
//     {
//         icon: <FaQuran className="text-2xl text-brand-gold" />,
//         title: "Quran Khani and Recitation",
//         subTitle: "Har Ayat Mein Barakah",
//         description: "Tilawat ke zariye paayein roohani sukoon aur barkat, personal Quran Khani ka intazam aapke liye",
//         href: Services.QURAN_KHANI_AND_RECITATION,
//     },
//     {
//         icon: <FaLeaf className="text-2xl text-brand-gold" />, // Tibb-e-Nabwi (Leaf = natural healing)
//         title: "Tibb-e-Nabawi",
//         subTitle: "Natural ilaaj se apni sehat ka khayal rakhein",
//         description: "Prophet Muhammad (PBUH) ke ilaj ke tareeqon se roohani aur jismani sehat ko behtar banayein",
//         href: Services.TIBB_E_NABWI,
//     },
//     {
//         icon: <FaUserFriends className="text-2xl text-brand-gold" />, // Baby Naming (Friends = community, new life)
//         title: "Baby Naming",
//         subTitle: "Naye mehman ke liy roohani naam",
//         description: "Qurani aur roohani naam se apne naye mehmaan ki zindagi aur taqdeer ko roshan karein",
//         href: Services.BABY_NAMING,
//     },
//     {
//         icon: <FaHeart className="text-2xl text-brand-gold" />, // Marriage & Relationship (Heart = love)
//         title: "Marriage & Relationship Guidance",
//         subTitle: "Behtar rishtay, behtar zindagi",
//         description: "Nikah aur rishtay ki roohani rehnumai se apni zindagi mein mohabbat aur samajhdari laayein",
//         href: Services.MARRIAGE_AND_RELATIONSHIP_GUIDANCE,
//     },
//     {
//         icon: <FaHandsHelping className="text-2xl text-brand-gold" />, // Personalised Dua (Helping hands)
//         title: "Personalised Dua & Quranic Healing",
//         subTitle: "Aapke liye, aapki roohani shifa",
//         description: "Har dard aur mushkil ke liye aapki zarurat ke mutabiq tayyar duaayein aur Qurani ilaj",
//         href: Services.PERSONALISED_DUA_AND_QURANIC_HEALING,
//     },
//     {
//         icon: <FaRegLightbulb className="text-2xl text-brand-gold" />,
//         title: "Islamic Counseling",
//         subTitle: "Islamic Hikmat aur Rehnumai ke Zariye Raasta Paaiye",
//         description: "Zehni aur roohani musibat ka hal Qurani hikmat aur Sunnat ke roshni mein, aapke liye, sukoon aur raahdari",
//         href: Services.ISLAMIC_COUNSELING,
//     },
//     {
//         icon: <span className="text-2xl" role="img" aria-label="dream">🌙</span>,
//         title: "Islamic Dream Interpretation",
//         subTitle: "Khwabon Ki Zubaan Se Zindagi Ki Manzil Tak",
//         description: "Aapke khwabon ki roohani taabeer, apne khwabon ko samjhiye, aur zindagi ke chhupay hue raaste dhoondhiye",
//         href: Services.ISLAMIC_DREAM_INTERPRETATION,
//     },
//     {
//         icon: <FaQuran className="text-2xl text-brand-gold" />,
//         title: "Ruqyah and Spiritual Cleansing",
//         subTitle: "Jadoo, Nazar Aur Manfi Taqaton Se Hifazat",
//         description: "Qurani ayaton aur roohani tareeqon se apne dil aur rooh ki hifazat karein — har manfi taqat se bachao aur sukoon paaiye",
//         href: Services.RUQYYAH_AND_SPIRITUAL_CLEANSING,
//     },
//     {
//         icon: <span className="text-2xl" role="img" aria-label="istikhara">🤲</span>,
//         title: "Istikhara Guidance",
//         subTitle: "Faislay mein roshni, Allah ke ishare se paayiye",
//         description: "Faislon mein uljhan ho, toh humse Istikhara karwaiye, Allah ke ishareon se apna raasta paaiye",
//         href: Services.ISTIKHARA_GUIDANCE,
//     },
//     {
//         icon: <span className="text-2xl" role="img" aria-label="sparkle">✨</span>, // Spiritual Guidance (Sparkle = enlightenment)
//         title: "Spiritual Guidance",
//         subTitle: "Zindagi ke mod par rahnumaai paiye",
//         description: "Quran ki roshni mein apna safar aasaan banaayiye",
//         href: Services.SPIRITUAL_GUIDANCE,
//     }
// ];

export const serviceInfo: Article[] = [
  {
    id: Services.ILM_E_RAMAL,
    title: "Ilm-e-Ramal: Unlocking the Hidden Patterns of Fate and Guidance",
    description:
      "Explore one of the most profound ancient sciences for spiritual consultation and clarity. Discover your path through Ilm-e-Ramal — rooted in Islamic mysticism and guided by tradition.",
    date: "2025-05-18",
    image: "/services/ilm-e-ramal.jpg",
    publisher: "Najoomi.in",
    category: "Spiritual Services",
    keywords:
      "Ilm-e-Ramal, Islamic geomancy, spiritual readings Islam, Ramal science, Islamic sand divination, Najoomi Ramal consultation, Ramal for marriage, Ramal for career, Islamic guidance service",
    rating: "general",
    audience: "all",
    subject: "Ilm-e-Ramal: Unlocking the Hidden Patterns of Fate and Guidance",
    summary:
      "Ilm-e-Ramal, or Islamic geomancy, is a sacred symbolic practice used to provide divine guidance through dot patterns and intuitive readings. Najoomi.in offers personalized sessions to support decision-making, marriage compatibility, and spiritual clarity.",
    classification: "Religion, Spirituality, Guidance",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppTitle: "Najoomi",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    contentLanguage: "en",
    xUaCompatible: "IE=edge",
    dcTitle:
      "Ilm-e-Ramal: Unlocking the Hidden Patterns of Fate and Guidance | Najoomi.in",
    dcDescription:
      "Explore one of the most profound ancient sciences for spiritual consultation and clarity. Discover your path through Ilm-e-Ramal — rooted in Islamic mysticism and guided by tradition.",
    dcPublisher: "Najoomi.in",
    dcLanguage: "en",
    dcSubject:
      "Ilm-e-Ramal: Unlocking the Hidden Patterns of Fate and Guidance",
    contentBody: (
      <>
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#b6894a] flex items-center mb-2">
            <span className="mr-2">📜</span> What is Ilm-e-Ramal (Islamic
            Geomancy)?
          </h2>
          <p>
            Ilm-e-Ramal, also known as Islamic geomancy, is a sacred and
            intuitive science practiced for centuries by Islamic scholars and
            mystics. It involves interpreting patterns drawn through dots,
            lines, or sand — traditionally linked to divine signs — to
            understand life events, emotional energies, and possible outcomes.
            <br />
            Often called "the knowledge of the sand," Ilm-e-Ramal was practiced
            by many Islamic sages for guidance in matters of life, marriage,
            travel, conflict, and unseen influences. It offers deep symbolic
            insight and a divine lens into unfolding events.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#b6894a] flex items-center mb-2">
            <span className="mr-2">💫</span> Our Ilm-e-Ramal Services Include
          </h2>
          <ul className="list-disc ml-6">
            <li>
              <b>Spiritual Symbol Reading</b>: Receive interpretations of Ramal
              patterns to understand past influences, present blocks, and
              potential outcomes.
            </li>
            <li>
              <b>Decision-Making Assistance</b>: Use Ilm-e-Ramal to gain clarity
              in decisions related to career, relationships, relocation, or
              financial investments.
            </li>
            <li>
              <b>Blockage & Pathway Reading</b>: Identify unseen obstacles and
              learn spiritual solutions through the energy reflected in your
              Ramal chart.
            </li>
            <li>
              <b>Marriage & Compatibility Consultation</b>: Assess energetic and
              spiritual alignment between potential partners using Ramal signs
              and symbolic insights.
            </li>
            <li>
              <b>Business or Legal Outlook</b>: Explore potential risks,
              opportunities, and divine timing for new ventures or disputes.
            </li>
            <li>
              <b>Life Path Clarity</b>: A comprehensive Ramal reading to uncover
              deeper personal patterns, spiritual lessons, and destiny insights.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#b6894a] flex items-center mb-2">
            <span className="mr-2">🌿</span> Ideal For
          </h2>
          <ul className="list-disc ml-6">
            <li>Those facing confusion or major life decisions</li>
            <li>
              Individuals wanting spiritual clarity on love, career, or personal
              challenges
            </li>
            <li>
              Seekers interested in ancient Islamic sciences and divinatory arts
            </li>
            <li>People affected by unseen obstacles or spiritual blockages</li>
            <li>Couples needing harmony and alignment before marriage</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#b6894a] flex items-center mb-2">
            <span className="mr-2">🕊️</span> How It Works
          </h2>
          <ol className="list-decimal ml-6">
            <li>
              <b>Share Your Request</b>: Share your full name, mother's name,
              and key question or concern.
            </li>
            <li>
              <b>Expert Ramal Casting</b>: A trained practitioner performs a
              traditional Ramal casting (symbol generation).
            </li>
            <li>
              <b>Interpretation & Guidance</b>: Receive a comprehensive analysis
              with meaning, insight, and spiritual advice.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-[#b6894a] flex items-center mb-2">
            <span className="mr-2">🕌</span> Why Choose Najoomi.in for
            Ilm-e-Ramal?
          </h2>
          <ul className="list-disc ml-6">
            <li>
              <b>Islamic Wisdom-Centered:</b> All readings are based on
              authentic spiritual methods—aligned with traditional Islamic
              practice and ethics.
            </li>
            <li>
              <b>Trained & Trusted Experts:</b> Our Ramal practitioners are
              deeply experienced in symbolic reading, numerology, and spiritual
              advisory.
            </li>
            <li>
              <b>Confidential & Ethical Practice:</b> Every session is handled
              with discretion, compassion, and sincere intention to guide, not
              predict.
            </li>
            <li>
              <b>Modern + Traditional:</b> We blend ancient Ramal methodology
              with intuitive insight for relevant, real-life application today.
            </li>
          </ul>
        </section>

        {/* Decorative divider with sparkles and crescent */}
        <div className="flex justify-center items-center my-8">
          <span className="inline-block text-brand-gold text-2xl mx-2">✨</span>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            className="mx-2"
            fill="none"
          >
            <path
              d="M24 16a8 8 0 1 1-8-8c0 4.418 3.582 8 8 8z"
              fill="#fde68a"
            />
          </svg>
          <span className="inline-block text-brand-gold text-2xl mx-2">★</span>
        </div>

        <section className="text-center my-8">
          <h2 className="text-2xl font-semibold mb-2 text-brand-gold">
            ✨ Seek Clarity from the Ancient Signs of Ilm-e-Ramal ✨
          </h2>
          <ul className="my-6 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
            <li className="flex items-center px-5 py-3 rounded-xl bg-gradient-to-br from-[#fde68a]/80 to-[#b6894a]/30 shadow-md border border-[#fbbf24] text-[#15577a] font-semibold gap-2">
              <span className="text-xl">🧿</span>
              Request a Ramal Reading
              <span className="ml-2 text-lg">✨</span>
            </li>
            <li className="flex items-center px-5 py-3 rounded-xl bg-gradient-to-br from-[#e0c97f]/70 to-[#fffbe6]/90 shadow border border-[#fde68a] text-[#15577a] font-semibold gap-2">
              <span className="text-xl">🌙</span>
              Ask a Question Through Ramal
              <span className="ml-2 text-lg">✦</span>
            </li>
            <li className="flex items-center px-5 py-3 rounded-xl bg-gradient-to-br from-[#fde68a]/80 to-[#b6894a]/30 shadow-md border border-[#fbbf24] text-[#15577a] font-semibold gap-2">
              <span className="text-xl">📚</span>
              Get Guidance From This Sacred Science
              <span className="ml-2 text-lg">✨</span>
            </li>
          </ul>
          <blockquote className="italic text-[#1e293b] border-l-4 border-brand-gold pl-4">
            “Say, 'Nothing will happen to us except what Allah has decreed for
            us: He is our protector.'”
            <br />
            <span className="text-sm">— Surah At-Tawbah (9:51)</span>
          </blockquote>
        </section>

        {/* Schema Markup (Article) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Ilm-e-Ramal: Unlocking the Hidden Patterns of Fate and Guidance",
              description:
                "Ilm-e-Ramal, or Islamic geomancy, is a sacred symbolic practice used to provide divine guidance through dot patterns and intuitive readings. Najoomi.in offers personalized sessions to support decision-making, marriage compatibility, and spiritual clarity.",
              author: {
                "@type": "Organization",
                name: "Najoomi.in",
              },
              publisher: {
                "@type": "Organization",
                name: "Najoomi.in",
                logo: {
                  "@type": "ImageObject",
                  url: "https://najoomi.in/najoomi-logo.png",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://najoomi.in/services/ilm-e-ramal",
              },
              datePublished: "2025-05-18",
              dateModified: "2025-05-18",
            }),
          }}
        />
      </>
    ),
    faqs: [
      {
        question: "What is Ilm-e-Ramal in Islam?",
        answer:
          "Ilm-e-Ramal is an ancient Islamic practice of geomancy that interprets divine signs through symbols or dots to guide decisions, reveal spiritual insights, and assess unseen influences.",
      },
      {
        question: "Is Ilm-e-Ramal permissible in Islam?",
        answer:
          "When practiced within the boundaries of Islamic ethics and without fortune-telling or superstition, Ilm-e-Ramal is accepted as a reflective tool used by some scholars and spiritual practitioners.",
      },
      {
        question: "Can Ilm-e-Ramal help with marriage compatibility?",
        answer:
          "Yes, Ilm-e-Ramal is often used to assess emotional and spiritual alignment between potential spouses, helping them understand their energetic harmony.",
      },
      {
        question: "What kind of questions can I ask in a Ramal session?",
        answer:
          "You can seek guidance on marriage, relationships, business, emotional confusion, career decisions, and personal obstacles.",
      },
      {
        question: "How accurate is Ilm-e-Ramal?",
        answer:
          "Ilm-e-Ramal is a spiritual tool for reflection and guidance, not prediction. Its accuracy depends on sincere intention, the practitioner’s knowledge, and alignment with divine will.",
      },
      {
        question: "How can I book an Ilm-e-Ramal reading at Najoomi.in?",
        answer:
          "Visit our Ilm-e-Ramal page and fill out the form with your name, mother’s name, and your query. Our spiritual expert will review and respond with a personalized consultation.",
      },
    ],
  },
  {
    id: Services.QURAN_KHANI_AND_RECITATION,
    title:
      "Quran Khani & Recitation Services — Blessings & Barakah with Quranic Recitations",
    description:
      "Experience the blessings of the Holy Quran through personalized recitations, group khatams, and spiritual gatherings arranged with sincerity and ease.",
    date: "2025-05-18",
    image: "/services/quran-khani.jpg",
    publisher: "Najoomi",
    category: "Spiritual Services",
    keywords:
      "Quran Khani, Quran recitation services, Isale Sawab, Khatam al-Quran, Surah Yaseen, Quran for healing, Ruqyah recitation, Quranic blessings, spiritual gatherings, Quranic recitation online",
    rating: "general",
    audience: "all",
    subject: "Quran Khani & Recitation Services",
    summary:
      "Book Quran Khani services online with Najoomi.in. Arrange spiritual recitations, Khatam al-Quran, and personalized Surah requests for healing, Isale Sawab, blessings, and protection.",
    classification: "Religion, Spirituality, Guidance",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppTitle: "Najoomi",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    contentLanguage: "en",
    xUaCompatible: "IE=edge",
    dcTitle:
      "Quran Khani & Recitation Services — Blessings & Barakah with Quranic Recitations | Najoomi.in",
    dcDescription:
      "Experience the blessings of the Holy Quran through personalized recitations, group khatams, and spiritual gatherings arranged with sincerity and ease.",
    dcPublisher: "Najoomi",
    dcLanguage: "en",
    dcSubject: "Quran Khani & Recitation Services",
    contentBody: (
      <>
        <div className="prose prose-lg max-w-none mx-auto mb-6">
          <h3 className="text-[#1e293b] font-semibold">
            Why Quran Khani Matters
          </h3>
          <p>
            The recitation of the Quran brings light into our lives — it soothes
            the soul, wards off evil, and invites divine mercy. Whether for a
            special occasion, a loved one who has passed, or for your own
            spiritual upliftment, Quran Khani is a source of immense reward. The
            sacred verses bring peace, barakah, and blessings to your home and
            life.
          </p>
          <h3 className="text-brand-gold font-semibold mt-6">
            Our Services Include
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Group Quran Khani (Khatam al-Quran):</b> Organize full Quran
              recitations for occasions like death anniversaries (Isale Sawab),
              house blessings, or special days like Ramadan and Rabi al-Awwal.
            </li>
            <li>
              <b>Personalized Recitation Requests:</b> Request specific surahs
              (e.g., Yaseen, Rahman, Baqarah) to be recited on your behalf or
              your loved one’s.
            </li>
            <li>
              <b>Live or Recorded Recitations:</b> Receive recordings of your
              requested Quranic recitations, or join live sessions for spiritual
              connection.
            </li>
            <li>
              <b>Quran for Healing:</b> Recitations for Ruqyah, emotional
              healing, or protection — done by trained and pious reciters.
            </li>
            <li>
              <b>Weekly or Monthly Programs:</b> Set up recurring khatams for
              consistent spiritual barakah in your life or business.
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">Ideal For</h3>
          <ul className="list-disc ml-6">
            <li>Sending rewards to deceased family members (Isale Sawab)</li>
            <li>
              Seeking barakah in new beginnings (home, marriage, business)
            </li>
            <li>Healing and protection through spiritual presence</li>
            <li>Special days like Jumu’ah, Ramadan, Eid Milad-un-Nabi</li>
            <li>Organizing a community khatam in your area</li>
          </ul>
          <h3 className="text-brand-gold font-semibold mt-6">How It Works</h3>
          <ul className="list-decimal ml-6">
            <li>
              <b>Choose a Service Type:</b> Select from Khatam, specific surah,
              or ruqyah recitation.
            </li>
            <li>
              <b>Specify Your Intention & Recipient:</b> Let us know for whom or
              what purpose the recitation is for.
            </li>
            <li>
              <b>We Organize & Deliver:</b> A certified reciter or team performs
              the recitation.
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">Why Najoomi.in?</h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Qualified, God-Fearing Reciters:</b> Our team includes trained
              hafiz and qaris who recite with sincerity, tajweed, and devotion.
            </li>
            <li>
              <b>Authentic & Purposeful:</b> We follow proper Islamic adab
              (etiquette) and spiritual intention in every recitation.
            </li>
            <li>
              <b>Remote-Friendly & Flexible:</b> You can request services from
              anywhere in the world — for yourself or someone in need.
            </li>
            <li>
              <b>Female-Friendly Options:</b> Women-led Quran Khani services are
              available for ladies-only groups and private intentions.
            </li>
          </ul>
        </div>
        {/* Decorative divider with sparkles and geometric pattern */}
        <div className="flex justify-center items-center my-8">
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x2728;
          </span>
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x25C6;
          </span>
        </div>
        {/* Hadith Quote */}
        <footer className="text-center mt-8">
          <blockquote className="italic text-[#1e293b] border-l-4 border-brand-gold pl-4">
            “The best among you are those who learn the Quran and teach it.”
            <br />
            <span className="text-sm">— (Bukhari)</span>
          </blockquote>
        </footer>
        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Quran Khani & Recitation Services — Bringing Barakah to Your Home and Heart",
              description:
                "Book Quran Khani services online with Najoomi.in. Arrange spiritual recitations, Khatam al-Quran, and personalized Surah requests for healing, Isale Sawab, blessings, and protection.",
              image: "https://www.najoomi.in/images/qurankhani-cover.jpg",
              author: { "@type": "Organization", name: "Najoomi.in" },
              publisher: {
                "@type": "Organization",
                name: "Najoomi.in",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.najoomi.in/najoomi-logo.png",
                },
              },
              datePublished: "2025-05-18",
              dateModified: "2025-05-18",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.najoomi.in/services/qurankhani-services",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Qurankhani?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Qurankhani is the recitation of the Quran for spiritual blessings, especially during events like death anniversaries or family healing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When should I arrange a Qurankhani?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It can be done on any blessed day, including Fridays, Ramadan nights, or for personal intentions like healing or barakah.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can Qurankhani be performed online or remotely?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer live and recorded Qurankhani sessions with verified scholars, accessible from anywhere in the world.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is Qurankhani allowed in Islam?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, with sincere intention and proper method, Quran recitation is a spiritual act of devotion and mercy.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I sponsor a Qurankhani for someone else’s benefit?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. You can dedicate the recitation to a deceased loved one or for someone in need of spiritual healing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide audio or recordings of the Qurankhani?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we can provide audio upon request to let you spiritually connect at your convenience.",
                  },
                },
              ],
            }),
          }}
        />
      </>
    ),
    faqs: [
      {
        question: "What is Qurankhani?",
        answer:
          "Qurankhani is the recitation of the Quran for spiritual blessings, especially during events like death anniversaries or family healing.",
      },
      {
        question: "When should I arrange a Qurankhani?",
        answer:
          "It can be done on any blessed day, including Fridays, Ramadan nights, or for personal intentions like healing or barakah.",
      },
      {
        question: "Can Qurankhani be performed online or remotely?",
        answer:
          "Yes, we offer live and recorded Qurankhani sessions with verified scholars, accessible from anywhere in the world.",
      },
      {
        question: "Is Qurankhani allowed in Islam?",
        answer:
          "Yes, with sincere intention and proper method, Quran recitation is a spiritual act of devotion and mercy.",
      },
      {
        question: "Can I sponsor a Qurankhani for someone else’s benefit?",
        answer:
          "Absolutely. You can dedicate the recitation to a deceased loved one or for someone in need of spiritual healing.",
      },
      {
        question: "Do you provide audio or recordings of the Qurankhani?",
        answer:
          "Yes, we can provide audio upon request to let you spiritually connect at your convenience.",
      },
    ],
  },
  {
    id: Services.TIBB_E_NABWI,
    title:
      "Tibb-e-Nabawi — Prophetic Medicine for Holistic Healing | Sunnah-Based Remedies & Wellness",
    description:
      "Reconnect with the healing traditions of Prophet Muhammad (PBUH) through natural remedies, spiritual guidance, and Sunnah-based wellness practices.",
    date: "2025-05-18",
    image: "/services/tibb-e-nabwi.jpg",
    publisher: "Najoomi",
    category: "Spiritual Services",
    keywords:
      "Tibb-e-Nabawi, Prophetic Medicine, Sunnah remedies, natural cures, healing with Quran, spiritual healing, Islamic medicine, Sunnah diet, black seed, ruqyah healing, Islamic wellness, holistic healing",
    rating: "general",
    audience: "all",
    subject: "Tibb-e-Nabawi (Prophetic Medicine)",
    summary:
      "Discover holistic healing through Tibb-e-Nabawi at Najoomi.in. Explore prophetic remedies like black seed, honey, olive oil, and Sunnah-based lifestyle guidance for mind, body, and soul.",
    classification: "Religion, Spirituality, Guidance",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppTitle: "Najoomi",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    contentLanguage: "en",
    xUaCompatible: "IE=edge",
    dcTitle:
      "Tibb-e-Nabawi — Prophetic Medicine for Holistic Healing | Sunnah-Based Remedies & Wellness",
    dcDescription:
      "Reconnect with the healing traditions of Prophet Muhammad (PBUH) through natural remedies, spiritual guidance, and Sunnah-based wellness practices.",
    dcPublisher: "Najoomi",
    dcLanguage: "en",
    dcSubject: "Tibb-e-Nabawi (Prophetic Medicine)",
    contentBody: (
      <>
        <div className="prose prose-lg max-w-none mx-auto mb-6">
          <h3 className="text-[#1e293b] font-semibold">
            🕋 What is Tibb-e-Nabawi?
          </h3>
          <p>
            Tibb-e-Nabawi (Medicine of the Prophet) is a sacred science rooted
            in the teachings of Rasulullah (PBUH). It emphasizes preventive
            care, natural remedies, spiritual well-being, and divine wisdom —
            offering a balanced path to health for the body, mind, and soul.
            Through Prophetic Medicine, we can achieve optimal wellness and
            healing, all while staying aligned with Islamic principles and
            teachings.
          </p>
          <h3 className="text-brand-gold font-semibold mt-6">
            💊 Our Offerings Include
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Personalized Health Consultations:</b> Guidance for your
              physical and emotional ailments using remedies and lifestyle
              habits from Prophetic traditions.
            </li>
            <li>
              <b>Sunnah Remedies & Natural Cures:</b> Recommendations such as
              black seed (habba sawda), honey, dates, olive oil, and more —
              including usage, dosages, and timing.
            </li>
            <li>
              <b>Spiritual Healing for Physical Illness:</b> Quranic verses,
              ruqyah, and specific duas for ailments like chronic pain, fatigue,
              anxiety, or insomnia.
            </li>
            <li>
              <b>Women’s Health & Fertility Support:</b> Guidance rooted in
              Prophetic wisdom for menstrual issues, pregnancy, and natural
              conception support.
            </li>
            <li>
              <b>Prophetic Nutrition Plans:</b> Diet routines based on Sunnah
              foods, seasonal eating, and healing combinations to improve
              digestion, immunity, and energy.
            </li>
            <li>
              <b>Emotional & Mental Wellness Support:</b> Advice on healing
              depression, sadness, or trauma with a combination of duas,
              Prophetic advice, and natural support.
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">🔍 How It Works</h3>
          <ul className="list-decimal ml-6">
            <li>
              <b>Tell Us Your Symptoms:</b> Share what you’re experiencing —
              whether physical, mental, or spiritual.
            </li>
            <li>
              <b>Our Experts Review:</b> Our panel blends Islamic health
              knowledge with traditional medicine and healing practices.
            </li>
            <li>
              <b>Receive a Sunnah-Based Healing Plan:</b> You get a natural,
              personalized routine: foods, herbs, duas, and lifestyle advice —
              all aligned with the Prophetic model.
            </li>
          </ul>
          <h3 className="text-brand-gold font-semibold mt-6">
            📜 What We Help With
          </h3>
          <ul className="list-disc ml-6">
            <li>Digestion issues (gas, bloating, IBS)</li>
            <li>Low energy, brain fog, and stress</li>
            <li>Women's cycle and hormonal balance</li>
            <li>Skin and hair problems</li>
            <li>Sleep issues and emotional imbalances</li>
            <li>Strengthening immunity and recovery</li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">
            🕌 Why Choose Najoomi.in for Prophetic Healing?
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Sunnah-Centric Guidance:</b> Every suggestion comes directly
              from or is inspired by the practices of Prophet Muhammad (PBUH).
            </li>
            <li>
              <b>Combined Wisdom:</b> Bridging Prophetic teachings with
              practical lifestyle applications for today’s needs.
            </li>
            <li>
              <b>Safe, Holistic & Faithful:</b> No chemicals, no gimmicks — just
              authentic, nourishing care through faith.
            </li>
            <li>
              <b>Ethical & Rooted in Trust:</b> We avoid dubious practices.
              Every remedy is vetted through classical Islamic knowledge.
            </li>
          </ul>
        </div>
        {/* Decorative divider with sparkles */}
        <div className="flex justify-center items-center my-8">
          <span className="inline-block text-brand-gold text-2xl mx-2">✨</span>
          <span className="inline-block text-brand-gold text-2xl mx-2">◆</span>
        </div>
        {/* Prophetic Quote */}
        <footer className="text-center mt-8">
          <blockquote className="italic text-[#1e293b] border-l-4 border-brand-gold pl-4">
            “Allah has not sent down a disease except that He has also sent down
            its cure.”
            <br />
            <span className="text-sm">— (Bukhari)</span>
          </blockquote>
        </footer>
        {/* Schema Markup (Article + FAQPage) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Tibb-e-Nabawi — Prophetic Medicine for Holistic Healing",
              description:
                "Discover holistic healing through Tibb-e-Nabawi at Najoomi.in. Explore prophetic remedies like black seed, honey, olive oil, and Sunnah-based lifestyle guidance for mind, body, and soul.",
              image: "https://www.najoomi.in/images/tibb-e-nabawi-cover.jpg",
              author: { "@type": "Organization", name: "Najoomi.in" },
              publisher: {
                "@type": "Organization",
                name: "Najoomi.in",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.najoomi.in/najoomi-logo.png",
                },
              },
              datePublished: "2025-05-18",
              dateModified: "2025-05-18",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.najoomi.in/services/tibb-e-nabawi",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Tibb-e-Nabawi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Tibb-e-Nabawi refers to the natural healing methods prescribed by Prophet Muhammad ﷺ using herbs, food, and spiritual remedies.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are common Prophetic remedies you suggest?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Black seed (Kalonji), Zamzam water, honey, olive oil, and cupping (Hijama) are among the most recommended.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I use Prophetic medicine along with modern treatment?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Tibb-e-Nabawi complements medical treatments and supports spiritual and emotional healing.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you offer personalized wellness plans based on Sunnah?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We tailor lifestyle and nutrition guidance using Tibb-e-Nabawi principles to support your health goals.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How does black seed help with anxiety or fatigue?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Black seed strengthens the immune system, enhances energy, and promotes mental clarity—beneficial for emotional well-being.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you suggest prophetic sleep and eating habits?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. We guide you on Sunnah-based routines like early sleeping, mindful eating, and fasting for balance.",
                  },
                },
              ],
            }),
          }}
        />
      </>
    ),
    faqs: [
      {
        question: "What is Tibb-e-Nabawi?",
        answer:
          "Tibb-e-Nabawi refers to the natural healing methods prescribed by Prophet Muhammad ﷺ using herbs, food, and spiritual remedies.",
      },
      {
        question: "What are common Prophetic remedies you suggest?",
        answer:
          "Black seed (Kalonji), Zamzam water, honey, olive oil, and cupping (Hijama) are among the most recommended.",
      },
      {
        question: "Can I use Prophetic medicine along with modern treatment?",
        answer:
          "Yes, Tibb-e-Nabawi complements medical treatments and supports spiritual and emotional healing.",
      },
      {
        question: "Do you offer personalized wellness plans based on Sunnah?",
        answer:
          "Yes. We tailor lifestyle and nutrition guidance using Tibb-e-Nabawi principles to support your health goals.",
      },
      {
        question: "How does black seed help with anxiety or fatigue?",
        answer:
          "Black seed strengthens the immune system, enhances energy, and promotes mental clarity—beneficial for emotional well-being.",
      },
      {
        question: "Do you suggest prophetic sleep and eating habits?",
        answer:
          "Yes. We guide you on Sunnah-based routines like early sleeping, mindful eating, and fasting for balance.",
      },
    ],
  },
  {
    id: Services.MARRIAGE_AND_RELATIONSHIP_GUIDANCE,
    title:
      "Marriage & Relationship Guidance — Build Strong Bonds with Faith & Wisdom | Islamic Relationship Advice",
    description:
      "Whether you're seeking a spouse, facing marital challenges, or looking to deepen your relationship, Najoomi.in offers faith-centered advice rooted in the Quran and Sunnah.",
    date: "2025-05-18",
    image: "/services/marriage-guidance.jpg",
    publisher: "Najoomi",
    category: "Spiritual Services",
    keywords:
      "Islamic marriage counseling, relationship advice, pre-marital guidance, conflict resolution, dua for marriage, compatibility analysis, marriage guidance, spiritual support for relationships, Islamic relationship help, trust rebuilding",
    rating: "general",
    audience: "all",
    subject: "Marriage & Relationship Guidance",
    summary:
      "Explore Islamic marital counseling at Najoomi.in. Get pre-marital advice, conflict resolution, compatibility analysis (Ilm-e-Adad), and spiritual solutions based on Quran and Sunnah.",
    classification: "Religion, Spirituality, Guidance",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppTitle: "Najoomi",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    contentLanguage: "en",
    xUaCompatible: "IE=edge",
    dcTitle:
      "Marriage & Relationship Guidance — Build Strong Bonds with Faith & Wisdom | Islamic Relationship Advice",
    dcDescription:
      "Whether you're seeking a spouse, facing marital challenges, or looking to deepen your relationship, Najoomi.in offers faith-centered advice rooted in the Quran and Sunnah.",
    dcPublisher: "Najoomi",
    dcLanguage: "en",
    dcSubject: "Marriage & Relationship Guidance",
    contentBody: (
      <>
        <div className="prose prose-lg max-w-none mx-auto mb-6">
          <h3 className="text-[#1e293b] font-semibold">
            🧕🏽🧔🏽 Why Relationship Guidance Matters in Islam
          </h3>
          <p>
            Islam places immense value on healthy, loving relationships —
            especially within marriage. Navigating emotional challenges,
            compatibility issues, or family expectations can be overwhelming.
            Najoomi.in provides a safe, respectful space to seek Islamic advice
            tailored to your unique situation. Whether you are planning for
            marriage or facing difficulties, our faith-centered counseling
            provides a foundation rooted in the wisdom of the Quran and Sunnah.
          </p>
          <h3 className="text-brand-gold font-semibold mt-6">
            📘 Our Services Include
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Pre-Marital Guidance:</b> Know what to look for in a spouse,
              learn compatibility markers, and understand rights and
              responsibilities in marriage.
            </li>
            <li>
              <b>Conflict Resolution:</b> Address misunderstandings,
              communication breakdowns, and spiritual disconnection with
              compassionate advice.
            </li>
            <li>
              <b>Compatibility Analysis (Based on Ilm-e-Adad):</b> A unique
              numerology-based insight into personality alignment — through an
              Islamic lens.
            </li>
            <li>
              <b>In-Law & Family Dynamics:</b> Learn how to navigate pressure,
              cultural expectations, and boundaries while upholding Islamic
              values.
            </li>
            <li>
              <b>Dua & Spiritual Solutions:</b> Receive specific duas and
              healing practices for love, reconciliation, and emotional
              well-being.
            </li>
            <li>
              <b>Post-Divorce Support:</b> Guidance on healing, self-worth, and
              preparing for the future with faith and dignity.
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">🧭 How It Works</h3>
          <ul className="list-decimal ml-6">
            <li>
              <b>Share Your Situation:</b> Share your case or questions
              privately.
            </li>
            <li>
              <b>Scholarly Review:</b> Our team of spiritual counselors and
              Islamic advisors reviews your scenario with care.
            </li>
            <li>
              <b>Get Tailored Advice:</b> Receive guidance based on the Quran,
              Hadith, and emotional intelligence — plus practical steps and
              recommended duas.
            </li>
            <li>
              <b>Follow-Up Support:</b> Option to schedule sessions for
              continued healing and relationship strengthening.
            </li>
          </ul>
          <h3 className="text-brand-gold font-semibold mt-6">
            📜 Real-Life Situations We Help With
          </h3>
          <ul className="list-disc ml-6">
            <li>Delays in marriage proposals</li>
            <li>Marital communication breakdown</li>
            <li>Seeking emotional intimacy</li>
            <li>Family disapproval or interference</li>
            <li>Divorced or remarried challenges</li>
            <li>Trust rebuilding and forgiveness</li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">
            🌿 Why Choose Najoomi.in?
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Faith-Based:</b> All guidance is Islamically aligned — no
              cultural or non-Islamic practices.
            </li>
            <li>
              <b>Non-Judgmental:</b> We listen without blame. Every situation is
              handled with empathy and confidentiality.
            </li>
            <li>
              <b>Custom Spiritual Support:</b> Includes duas, verses, and
              routines to restore love and trust.
            </li>
            <li>
              <b>Real Solutions:</b> Actionable advice, not just theory —
              grounded in both tradition and emotional awareness.
            </li>
          </ul>
        </div>
        {/* Decorative divider with sparkles */}
        <div className="flex justify-center items-center my-8">
          <span className="inline-block text-brand-gold text-2xl mx-2">✨</span>
          <span className="inline-block text-brand-gold text-2xl mx-2">◆</span>
        </div>
        {/* Hadith Quote */}
        <footer className="text-center mt-8">
          <blockquote className="italic text-[#1e293b] border-l-4 border-brand-gold pl-4">
            “The best among you are those who are best to their wives.”
            <br />
            <span className="text-sm">— Prophet Muhammad (PBUH)</span>
          </blockquote>
        </footer>
        {/* Schema Markup (Article + FAQPage) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Marriage & Relationship Guidance — Strengthen Your Bonds the Islamic Way",
              description:
                "Explore Islamic marital counseling at Najoomi.in. Get pre-marital advice, conflict resolution, compatibility analysis (Ilm-e-Adad), and spiritual solutions based on Quran and Sunnah.",
              image:
                "https://www.najoomi.in/images/marriage-guidance-cover.jpg",
              author: { "@type": "Organization", name: "Najoomi.in" },
              publisher: {
                "@type": "Organization",
                name: "Najoomi.in",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.najoomi.in/najoomi-logo.png",
                },
              },
              datePublished: "2025-05-18",
              dateModified: "2025-05-18",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.najoomi.in/services/marriage-guidance",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How does Najoomi provide Islamic marriage guidance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We offer spiritual and emotional counseling grounded in Islamic teachings, focusing on compatibility, communication, and shared values.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I seek help for relationship issues before marriage (Nikah)?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide pre-marital advice, Istikhara for decisions, and Ilm-e-Adad compatibility checks.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide Islamic solutions for marital conflicts?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our scholars guide couples using the Quran, Sunnah, and Roohani healing techniques to rebuild emotional and spiritual connection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What if I feel spiritually distant in my relationship?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We recommend spiritual practices like joint Dhikr, tailored Duas, and Quranic reflection to rekindle spiritual closeness.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I get a personalized dua to save my marriage?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we provide custom Duas based on your circumstances and emotional state.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is your marriage guidance confidential?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "100%. Your privacy is protected. All consultations are handled with discretion and care.",
                  },
                },
              ],
            }),
          }}
        />
      </>
    ),
    faqs: [
      {
        question: "How does Najoomi provide Islamic marriage guidance?",
        answer:
          "We offer spiritual and emotional counseling grounded in Islamic teachings, focusing on compatibility, communication, and shared values.",
      },
      {
        question:
          "Can I seek help for relationship issues before marriage (Nikah)?",
        answer:
          "Yes, we provide pre-marital advice, Istikhara for decisions, and Ilm-e-Adad compatibility checks.",
      },
      {
        question: "Do you provide Islamic solutions for marital conflicts?",
        answer:
          "Yes, our scholars guide couples using the Quran, Sunnah, and Roohani healing techniques to rebuild emotional and spiritual connection.",
      },
      {
        question: "What if I feel spiritually distant in my relationship?",
        answer:
          "We recommend spiritual practices like joint Dhikr, tailored Duas, and Quranic reflection to rekindle spiritual closeness.",
      },
      {
        question: "Can I get a personalized dua to save my marriage?",
        answer:
          "Yes, we provide custom Duas based on your circumstances and emotional state.",
      },
      {
        question: "Is your marriage guidance confidential?",
        answer:
          "100%. Your privacy is protected. All consultations are handled with discretion and care.",
      },
    ],
  },
  {
    id: Services.BABY_NAMING,
    title:
      "Baby Naming & Life Path Guidance — Meaningful Islamic Names & Life Insights",
    description:
      "Give your child a blessed start with names inspired by Islamic tradition and insights into their life journey through Ilm-e-Adad (Islamic numerology).",
    date: "2025-05-18",
    image: "/services/baby-naming.jpg",
    publisher: "Najoomi",
    category: "Spiritual Services",
    keywords:
      "Islamic baby names, Quranic baby names, baby name meanings, Ilm-e-Adad, numerology for names, Islamic numerology, life path guidance for children, Muslim baby name suggestions, personalized baby names, spiritual meaning in names",
    rating: "general",
    audience: "all",
    subject: "Baby Naming & Life Path Guidance",
    summary:
      "Find spiritually meaningful Islamic names for your newborn at Najoomi.in. Our experts use Ilm-e-Adad and Quranic tradition to offer personalized baby name suggestions and life path guidance.",
    classification: "Religion, Spirituality, Guidance",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppTitle: "Najoomi",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    contentLanguage: "en",
    xUaCompatible: "IE=edge",
    dcTitle:
      "Baby Naming & Life Path Guidance — Meaningful Islamic Names & Life Insights | Najoomi.in",
    dcDescription:
      "Give your child a blessed start with names inspired by Islamic tradition and insights into their life journey through Ilm-e-Adad (Islamic numerology).",
    dcPublisher: "Najoomi",
    dcLanguage: "en",
    dcSubject: "Baby Naming & Life Path Guidance",
    contentBody: (
      <>
        <div className="prose prose-lg max-w-none mx-auto mb-6">
          <h3 className="text-[#1e293b] font-semibold">
            Why Names Matter in Islam
          </h3>
          <p>
            A name is not just an identity — it’s a prayer, a legacy, and a
            reflection of values. The Prophet Muhammad (PBUH) emphasized
            choosing names with good meaning. At Najoomi.in, we help you find
            the perfect name that aligns with spiritual significance, family
            legacy, and Islamic tradition. Naming a child is a crucial aspect of
            their spiritual journey, and the right name can bring blessings,
            guidance, and Barakah into their life.
          </p>
          <h3 className="text-brand-gold font-semibold mt-6">What We Offer</h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Personalized Baby Name Suggestions:</b> Curated names based on
              the child’s birth details, meanings from Arabic roots, and Quranic
              inspiration.
            </li>
            <li>
              <b>Spiritual Meaning & Symbolism:</b> Every name comes with its
              meaning, spiritual resonance, and relevance in Islamic teachings.
            </li>
            <li>
              <b>Name Selection by Ilm-e-Adad (Islamic Numerology):</b> Get
              deeper insight into how a name may influence the child’s life,
              temperament, and blessings using the sacred science of numbers in
              Islam.
            </li>
            <li>
              <b>Life Path Guidance for Newborns:</b> A look into the baby’s
              spiritual strengths, potential challenges, and key milestones —
              with practical dua and parenting tips.
            </li>
            <li>
              <b>Sibling Name Harmony:</b> Suggestions for names that pair well
              with siblings, both in sound and spiritual tone.
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">How It Works</h3>
          <ul className="list-decimal ml-6">
            <li>
              <b>Share Your Request:</b> Share the baby’s birth date, gender,
              and any specific preferences or inspirations you have in mind.
            </li>
            <li>
              <b>Expert Curation:</b> Our spiritual advisors analyze Islamic
              naming traditions, meanings, and numerological influences.
            </li>
            <li>
              <b>Receive Name Options + Life Path Insights:</b> You get a
              selection of names with full meanings, Quranic relevance, and a
              summary of the child’s potential life path.
            </li>
          </ul>
          <h3 className="text-brand-gold font-semibold mt-6">Bonus Support</h3>
          <ul className="list-disc ml-6">
            <li>Recommended duas for newborns</li>
            <li>Sunnah practices for welcoming a child</li>
            <li>Parenting tips aligned with Prophetic traditions</li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">Why Najoomi.in?</h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Islamic Accuracy:</b> Every name is selected using verified
              Islamic sources and spiritual insight.
            </li>
            <li>
              <b>Numerology Enhanced:</b> Integrates Ilm-e-Adad for deeper
              alignment with the child’s destiny.
            </li>
            <li>
              <b>Parent-Centric:</b> We balance meaning, uniqueness, and family
              harmony in every suggestion.
            </li>
            <li>
              <b>Faith-Led, Tech-Enabled:</b> A seamless, personalized digital
              service grounded in sacred tradition.
            </li>
          </ul>
        </div>
        {/* Decorative divider with sparkles */}
        <div className="flex justify-center items-center my-8">
          <span className="inline-block text-brand-gold text-2xl mx-2">✨</span>
          <span className="inline-block text-brand-gold text-2xl mx-2">◆</span>
        </div>
        {/* Quranic Quote */}
        <footer className="text-center mt-8">
          <blockquote className="italic text-[#1e293b] border-l-4 border-brand-gold pl-4">
            “Call them by their [honorable] names. That is more just in the
            sight of Allah.”
            <br />
            <span className="text-sm">— Surah Al-Ahzab (33:5)</span>
          </blockquote>
        </footer>
        {/* Schema Markup (Article + FAQPage) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Baby Naming & Life Path Guidance — Rooted in Faith, Guided by Meaning",
              description:
                "Find spiritually meaningful Islamic names for your newborn at Najoomi.in. Our experts use Ilm-e-Adad and Quranic tradition to offer personalized baby name suggestions and life path guidance.",
              image: "https://www.najoomi.in/images/baby-naming-cover.jpg",
              author: { "@type": "Organization", name: "Najoomi.in" },
              publisher: {
                "@type": "Organization",
                name: "Najoomi.in",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.najoomi.in/najoomi-logo.png",
                },
              },
              datePublished: "2025-05-18",
              dateModified: "2025-05-18",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.najoomi.in/services/baby-naming",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How do you choose an Islamic name for a baby?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We consider meanings, Qur’anic relevance, prophetic names, and numerological harmony (Ilm-e-Adad) to ensure the name brings spiritual positivity.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why is the meaning of a baby’s name important in Islam?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The Prophet ﷺ emphasized choosing good names, as they reflect character and identity. A positive meaning attracts blessings.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I get a personalized baby name based on birth time or Islamic calendar?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we offer custom name suggestions based on the baby’s birth date, Islamic month, and spiritual vibration.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide gender-neutral Islamic baby names?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, we include names that carry beautiful meanings and are suitable for either gender in special cases.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What if I want a unique, modern Islamic name?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We blend tradition and modernity, suggesting rare names with Islamic roots and spiritual significance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you suggest sibling name sets with harmonious meanings?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. We offer matched sibling names that flow well together and share similar spiritual values.",
                  },
                },
              ],
            }),
          }}
        />
      </>
    ),
    faqs: [
      {
        question: "How do you choose an Islamic name for a baby?",
        answer:
          "We consider meanings, Qur’anic relevance, prophetic names, and numerological harmony (Ilm-e-Adad) to ensure the name brings spiritual positivity.",
      },
      {
        question: "Why is the meaning of a baby’s name important in Islam?",
        answer:
          "The Prophet ﷺ emphasized choosing good names, as they reflect character and identity. A positive meaning attracts blessings.",
      },
      {
        question:
          "Can I get a personalized baby name based on birth time or Islamic calendar?",
        answer:
          "Yes, we offer custom name suggestions based on the baby’s birth date, Islamic month, and spiritual vibration.",
      },
      {
        question: "Do you provide gender-neutral Islamic baby names?",
        answer:
          "Yes, we include names that carry beautiful meanings and are suitable for either gender in special cases.",
      },
      {
        question: "What if I want a unique, modern Islamic name?",
        answer:
          "We blend tradition and modernity, suggesting rare names with Islamic roots and spiritual significance.",
      },
      {
        question: "Can you suggest sibling name sets with harmonious meanings?",
        answer:
          "Absolutely. We offer matched sibling names that flow well together and share similar spiritual values.",
      },
    ],
  },
  {
    id: Services.ROOHANI_REQUESTS,
    title: "Roohani Healing & Requests — Divine Protection, Healing, and Peace",
    description:
      "Experience the power of spiritual healing through divine words and Islamic practices. Our personalized Roohani healing and prayer requests provide protection, emotional relief, and spiritual growth.",
    date: "2025-01-01",
    image: "/services/roohani-requests.jpg",
    publisher: "Najoomi",
    category: "Spiritual Services",
    keywords:
      "Roohani Healing, Spiritual Healing, Dua Requests, Quranic Healing, Ayat al-Kursi, Protection from Black Magic, Emotional Healing, Barakah, Spiritual Cleansing, Islamic Healing Services",
    rating: "general",
    audience: "all",
    subject: "Roohani Healing & Requests",
    summary:
      "Experience the power of spiritual healing through divine words and Islamic practices. Our personalized Roohani healing and prayer requests provide protection, emotional relief, and spiritual growth.",
    classification: "Religion, Spirituality, Guidance",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppTitle: "Najoomi",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    contentLanguage: "en",
    xUaCompatible: "IE=edge",
    dcTitle:
      "Roohani Healing & Requests — Divine Protection, Healing, and Peace | Najoomi.in",
    dcDescription:
      "Experience the power of spiritual healing through divine words and Islamic practices. Our personalized Roohani healing and prayer requests provide protection, emotional relief, and spiritual growth.",
    dcPublisher: "Najoomi",
    dcLanguage: "en",
    dcSubject: "Roohani Healing & Requests",
    contentBody: (
      <>
        <div className="prose prose-lg max-w-none mx-auto mb-6">
          <h3 className="text-[#1e293b] font-semibold">
            What is Roohani Healing & Requests?
          </h3>
          <p>
            Roohani Healing is the purification of the soul (rooh) using the
            timeless guidance of the Quran and Sunnah. In Islam, seeking divine
            intervention through supplication (dua) and spiritual cleansing can
            lead to immense peace, protection, and blessings. Through tailored
            Roohani healing and prayer requests, we provide you with the
            spiritual tools needed for overcoming life’s challenges, emotional
            burdens, and seeking guidance from Allah (SWT).
          </p>
          <h3 className="text-brand-gold font-semibold mt-6">
            Our Roohani Healing & Request Services Include
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Spiritual Healing & Cleansing (Tazkiyah al-Nafs):</b> Purify
              your heart and soul from negativity, harmful influences, and
              emotional blockages using powerful Quranic verses, recitations,
              and spiritual practices.
            </li>
            <li>
              <b>Protection Through Quranic Verses:</b> Personalized recitations
              of protective verses (like Ayat al-Kursi, Surah Al-Falaq, and
              Surah An-Naas) to shield you and your loved ones from harm, black
              magic, the evil eye, and negative energies.
            </li>
            <li>
              <b>Request for Divine Intervention (Dua Requests):</b> Submit
              specific dua requests for personal guidance, peace, and blessings.
              Whether you’re seeking relief from hardship, clarity in decisions,
              or ease in personal struggles, we make the dua on your behalf.
            </li>
            <li>
              <b>Healing for Emotional Wounds:</b> Spiritual healing for
              heartaches, anxiety, stress, grief, and trauma — guided by
              prophetic teachings and Quranic remedies.
            </li>
            <li>
              <b>Barakah Activation for Homes & Families:</b> Roohani rituals
              for bringing blessings, peace, and prosperity to your home,
              family, and business. Request prayers for harmony and success.
            </li>
            <li>
              <b>Mental and Spiritual Wellness:</b> Healing prayers for those
              dealing with spiritual confusion, isolation, or lack of
              motivation. We help restore your connection with Allah (SWT).
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">
            Ideal For Those Who Need
          </h3>
          <ul className="list-disc ml-6">
            <li>
              Protection from harm, black magic, evil eye, or negative energies
            </li>
            <li>Healing from emotional pain, anxiety, and personal loss</li>
            <li>
              Guidance for important life decisions (marriage, work, family)
            </li>
            <li>
              Peace in home and family life, especially during times of stress
              or conflict
            </li>
            <li>Spiritual Growth and strengthening of faith</li>
            <li>Barakah in work, finances, and health</li>
          </ul>
          <h3 className="text-brand-gold font-semibold mt-6">How It Works</h3>
          <ul className="list-decimal ml-6">
            <li>
              <b>Share Your Healing Request:</b> Share your concerns, spiritual
              struggles, or needs for protection through our simple form.
            </li>
            <li>
              <b>Personalized Roohani Plan:</b> We craft a customized healing or
              dua plan, drawing from authentic Islamic sources and powerful
              supplications.
            </li>
            <li>
              <b>Healing & Dua Session:</b> Receive your personalized duas and
              healing recitations.
            </li>
            <li>
              <b>Follow-Up Support:</b> We offer follow-up guidance, check-ins,
              and additional dua support to help you maintain peace and
              protection in your life.
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">
            Why Choose Najoomi for Roohani Healing?
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Rooted in Authentic Islamic Teachings:</b> We rely on the
              Quran, Hadith, and scholarly interpretations, ensuring all
              practices are rooted in faith and free from superstition.
            </li>
            <li>
              <b>Experienced Roohani Healers:</b> Our team includes experts in
              Islamic spiritual healing, including trained scholars and
              practitioners who approach every case with care and compassion.
            </li>
            <li>
              <b>Safe, Private, and Confidential:</b> Your healing journey is
              personal and sacred. We respect your privacy and provide a
              judgment-free environment.
            </li>
            <li>
              <b>Comprehensive Spiritual Support:</b> From daily duas to
              long-term healing plans, we guide you every step of the way to
              restore peace, blessings, and protection.
            </li>
          </ul>
        </div>
        {/* Decorative divider with sparkles */}
        <div className="flex justify-center items-center my-8">
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x2728;
          </span>
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x25C6;
          </span>
        </div>
        <footer className="text-center mt-8">
          <blockquote className="italic text-[#1e293b] border-l-4 border-brand-gold pl-4">
            “And We sent down in the Quran such things that have healing and
            mercy for the believers.”
            <br />
            <span className="text-sm">— (Surah Al-Isra, 17:82)</span>
          </blockquote>
        </footer>
      </>
    ),
    faqs: [
      {
        question: "What is Roohani Healing?",
        answer:
          "Roohani healing is the process of using divine names, Quranic verses, and energy alignment to heal spiritual, emotional, and physical issues.",
      },
      {
        question: "What types of issues does Roohani healing help with?",
        answer:
          "It helps with anxiety, fear, spiritual blockage, black magic effects, negative energy, and emotional imbalances.",
      },
      {
        question: "Is Roohani healing supported by Islamic teachings?",
        answer:
          "Yes, the Quran and Sunnah support Ruqyah, Dhikr, and Duas as means of healing through divine connection.",
      },
      {
        question:
          "Do you use personalized spiritual methods in Roohani healing?",
        answer:
          "Yes, we assess your condition and provide targeted recitations, spiritual routines, and energetic protection methods.",
      },
      {
        question: "How soon can I expect results from Roohani healing?",
        answer:
          "It varies. Some feel instant relief; others require consistent practice over days or weeks depending on their state.",
      },
      {
        question: "Is Roohani healing safe and halal?",
        answer:
          "Absolutely. We follow only Shariah-compliant, Quran-based methods—no shirk, superstition, or forbidden practices.",
      },
    ],
  },

  {
    id: Services.ILM_E_ADAD,
    title:
      "Ilm-e-Adad: Islamic Numerology for Life Guidance, Compatibility & Divine Insight",
    description:
      "Discover the hidden meanings of numbers in Islam with Ilm-e-Adad. Decode your name, birth date, and life path using the spiritual science of Islamic numerology to align with your divine destiny.",
    date: "2025-01-01",
    image: "/services/ilm-e-adad.jpg",
    publisher: "Najoomi",
    category: "Spiritual Services",
    keywords:
      "Islamic numerology, Ilm-e-Adad, name numerology in Islam, numerology compatibility, spiritual meaning of numbers, Arabic numerology, life path analysis, Islamic number meanings",
    rating: "general",
    audience: "all",
    subject: "Islamic Numerology (Ilm-e-Adad)",
    summary:
      "Discover the hidden meanings of numbers in Islam with Ilm-e-Adad. Decode your name, birth date, and life path using the spiritual science of Islamic numerology to align with your divine destiny.",
    classification: "Religion, Spirituality, Guidance",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppTitle: "Najoomi",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    contentLanguage: "en",
    xUaCompatible: "IE=edge",
    dcTitle:
      "Ilm-e-Adad: Islamic Numerology for Life Guidance, Compatibility & Divine Insight | Najoomi.in",
    dcDescription:
      "Discover the hidden meanings of numbers in Islam with Ilm-e-Adad. Decode your name, birth date, and life path using the spiritual science of Islamic numerology to align with your divine destiny.",
    dcPublisher: "Najoomi",
    dcLanguage: "en",
    dcSubject: "Islamic Numerology (Ilm-e-Adad)",
    contentBody: (
      <>
        <div className="prose prose-lg max-w-none mx-auto mb-6">
          <h3 className="text-[#1e293b] font-semibold">
            What is Ilm-e-Adad (Islamic Numerology)?
          </h3>
          <p>
            Ilm-e-Adad, or Islamic numerology, is a sacred science that
            interprets the spiritual energy of numbers based on Arabic letters
            and Islamic teachings. Rooted in ancient numerological systems and
            the linguistic power of Arabic, this practice offers deep insight
            into your soul’s journey, relationships, and life purpose.
            <br />
            Each number carries divine meaning—guiding your emotional,
            spiritual, and worldly experiences. By understanding these
            influences, you can make better decisions, align with your destiny,
            and gain clarity on your inner strengths and life challenges.
          </p>
          <h3 className="text-brand-gold font-semibold mt-6">
            Our Islamic Numerology Services Include
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Personal Life Path Analysis:</b> Analyze your birth date, name,
              and personal energies to reveal your spiritual strengths,
              challenges, and divine mission according to Islamic numerology.
            </li>
            <li>
              <b>Compatibility & Relationship Analysis:</b> Assess numerological
              compatibility in marriage, family, or business partnerships for
              improved understanding and harmony.
            </li>
            <li>
              <b>Name Numerology (Ism Ka Ilm):</b> Discover how the numbers
              behind your Islamic name influence your personality, life events,
              and spiritual resonance.
            </li>
            <li>
              <b>Numerology for Decision Making:</b> Get numerological guidance
              for critical decisions in career, marriage, or travel, aligned
              with the most favorable energies.
            </li>
            <li>
              <b>Business & Financial Numerology:</b> Uncover the ideal
              spiritual timing and number-based insights for business launches,
              financial planning, and long-term prosperity.
            </li>
            <li>
              <b>Children’s Numerology Reports:</b> Decode your child’s future
              potential, talents, and challenges through the numerology of their
              name and birth date to support spiritual upbringing.
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">Ideal For</h3>
          <ul className="list-disc ml-6">
            <li>
              Individuals seeking life direction and alignment with divine
              purpose
            </li>
            <li>
              Couples or families wanting relationship compatibility analysis
            </li>
            <li>
              Entrepreneurs needing spiritual insights for business growth
            </li>
            <li>Parents exploring the spiritual nature of their children</li>
            <li>
              Anyone curious about the Islamic significance of names and numbers
            </li>
          </ul>
          <h3 className="text-brand-gold font-semibold mt-6">How It Works</h3>
          <ul className="list-decimal ml-6">
            <li>
              <b>Share Your Details:</b> Provide your full name (Arabic
              preferred), birth date, and any specific questions or concerns.
            </li>
            <li>
              <b>Personalized Numerology Report:</b> We create a detailed
              Islamic numerology profile using Ilm-e-Adad principles, analyzing
              your key numbers and spiritual energy.
            </li>
            <li>
              <b>Result:</b> Our expert will explain your results, helping you
              apply this sacred knowledge to your daily life, goals, and
              challenges.
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">
            Why Choose Najoomi.in for Ilm-e-Adad?
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Authentic Islamic Foundation:</b> All numerology is based on
              the Arabic Abjad system, traditional Islamic knowledge, and
              spiritual ethics.
            </li>
            <li>
              <b>Expert Numerologists:</b> Our numerologists combine classical
              Ilm-e-Adad and modern insights for meaningful and personalized
              analysis.
            </li>
            <li>
              <b>Confidential & Personal Guidance:</b> We treat every session
              with privacy, compassion, and a deep respect for your spiritual
              journey.
            </li>
            <li>
              <b>Tailored Numerology Reports:</b> Every report is customized,
              accurate, and designed to support your decisions with divine
              wisdom.
            </li>
          </ul>
        </div>
        {/* Decorative divider with sparkles */}
        <div className="flex justify-center items-center my-8">
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x2728;
          </span>
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x25C6;
          </span>
        </div>
        <footer className="text-center mt-8">
          <blockquote className="italic text-[#1e293b] border-l-4 border-brand-gold pl-4">
            “And He has created everything in due proportion.”
            <br />
            <span className="text-sm">— (Surah Al-Qamar, 54:49)</span>
          </blockquote>
        </footer>
      </>
    ),
    faqs: [
      {
        question: "What is Ilm-e-Adad in Islam?",
        answer:
          "Ilm-e-Adad is the science of numbers in Arabic letters, used for spiritual analysis, name compatibility, and energy alignment.",
      },
      {
        question: "How is Ilm-e-Adad different from astrology?",
        answer:
          "Ilm-e-Adad is rooted in the Abjad system and spiritual insights—not celestial movements—making it more aligned with Islamic traditions.",
      },
      {
        question: "Can you use Ilm-e-Adad to check marriage compatibility?",
        answer:
          "Yes. We analyze both names to determine spiritual harmony and potential blessings in the union.",
      },
      {
        question:
          "How accurate is Ilm-e-Adad for name changes or business names?",
        answer:
          "It’s highly insightful. We help choose names aligned with positive vibrations to attract success and divine favor.",
      },
      {
        question: "Is Ilm-e-Adad mentioned in Islamic history?",
        answer:
          "Yes. Early Islamic scholars and mystics like Imam Ghazali explored number-letter correlations for spiritual understanding.",
      },
      {
        question: "Can Ilm-e-Adad help with healing or emotional clarity?",
        answer:
          "Yes. We use name vibration and personalized numbers to uncover imbalances and guide healing practices.",
      },
    ],
  },

  {
    id: Services.ISLAMIC_COUNSELING,
    title: "Islamic Counseling — Navigate Life Through the Light of Islam",
    description:
      "Faith-centered support for your emotional, mental, and spiritual well-being — guided by Islamic values, prophetic wisdom, and compassionate care.",
    date: "2025-01-01",
    image: "/services/islamic-councelling.jpg",
    publisher: "Najoomi",
    category: "Spiritual Services",
    keywords:
      "Islamic counseling online, spiritual therapy Islam, Muslim counselor, Quran-based mental health, halal therapy, emotional healing in Islam, marriage counseling Islam, youth identity Islam, grief counseling Muslim, faith-based therapy",
    rating: "general",
    audience: "all",
    subject: "Islamic Spiritual Counseling",
    summary:
      "Faith-centered support for your emotional, mental, and spiritual well-being — guided by Islamic values, prophetic wisdom, and compassionate care.",
    classification: "Religion, Spirituality, Guidance",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppTitle: "Najoomi",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    contentLanguage: "en",
    xUaCompatible: "IE=edge",
    dcTitle: "Spiritual Counseling — Navigate Life Through the Light of Islam",
    dcDescription:
      "Faith-centered support for your emotional, mental, and spiritual well-being — guided by Islamic values, prophetic wisdom, and compassionate care.",
    dcPublisher: "Najoomi",
    dcLanguage: "en",
    dcSubject: "Islamic Spiritual Counseling",
    contentBody: (
      <>
        <div className="prose prose-lg max-w-none mx-auto mb-6">
          <h3 className="text-[#1e293b] font-semibold">
            What Is Islamic Spiritual Counseling?
          </h3>
          <p>
            Life tests us with emotional turbulence, relationship conflict, and
            inner doubts. At Najoomi.in, we provide confidential, judgment-free
            counseling that honors both your faith and your feelings.
            <br />
            Our trained counselors combine Quranic insights, prophetic
            teachings, and modern emotional care to help you find clarity,
            resilience, and healing — all rooted in Islamic tradition.
          </p>
          <h3 className="text-brand-gold font-semibold mt-6">
            Services We Offer
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Emotional and Mental Wellness:</b> Struggling with anxiety, low
              mood, or burnout? We guide you through it using Islamic coping
              tools and mindfulness grounded in the Sunnah.
            </li>
            <li>
              <b>Marriage and Family Support:</b> From marital discord to
              parenting disagreements, we help you strengthen your family
              through compassion, clear communication, and prophetic advice.
            </li>
            <li>
              <b>Parenting Guidance:</b> Raise children with love, discipline,
              and spiritual grounding — customized to your child’s age, needs,
              and Islamic values.
            </li>
            <li>
              <b>Youth & Identity Counseling:</b> We support young Muslims
              navigating identity, peer pressure, spiritual doubt, or life
              purpose — with empathy and relevance.
            </li>
            <li>
              <b>Grief and Trauma Healing:</b> Whether facing loss, heartbreak,
              or trauma, we offer spiritual tools, therapeutic strategies, and
              heartfelt support to reconnect you with Allah ﷻ.
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">
            Why Trust Najoomi.in?
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Authentic Islamic Foundation:</b> No pop-psychology. Every
              session reflects the teachings of the Quran and Hadith.
            </li>
            <li>
              <b>Qualified Counselors:</b> Experts trained in both mental health
              and Islamic spirituality.
            </li>
            <li>
              <b>Culturally Sensitive:</b> Speak in your language, from your
              context, without fear of judgment.
            </li>
            <li>
              <b>Global Access:</b> Virtual sessions available anywhere in the
              world.
            </li>
            <li>
              <b>100% Confidential:</b> A safe space to share and heal.
            </li>
          </ul>
          <h3 className="text-brand-gold font-semibold mt-6">
            What Can We Help With?
          </h3>
          <ul className="list-disc ml-6">
            <li>Stress, anxiety, or emotional overwhelm</li>
            <li>Marital conflict, divorce concerns, communication breakdown</li>
            <li>Teenage issues, identity crisis, and peer pressure</li>
            <li>Parental burnout or child behavior issues</li>
            <li>Feeling spiritually disconnected or low in motivation</li>
            <li>Grief after loss of a loved one or emotional trauma</li>
          </ul>
        </div>
        {/* Decorative divider with sparkles */}
        <div className="flex justify-center items-center my-8">
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x2727;
          </span>
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x2728;
          </span>
        </div>
        <footer className="text-center mt-8">
          <blockquote className="italic text-[#1e293b] border-l-4 border-brand-gold pl-4">
            “Verily, in the remembrance of Allah do hearts find rest.”
            <br />
            <span className="text-sm">— (Surah Ar-Ra’d 13:28)</span>
          </blockquote>
        </footer>
      </>
    ),
    faqs: [
      {
        question: "What is Islamic spiritual counseling?",
        answer:
          "Islamic spiritual counseling integrates emotional well-being with faith-based principles from the Quran and Sunnah. It helps individuals navigate personal struggles with both psychological and spiritual insight.",
      },
      {
        question: "What issues can I discuss in spiritual counseling?",
        answer:
          "You can seek support for anxiety, depression, marriage problems, parenting struggles, identity issues, grief, spiritual doubts, and more — all within the guidance of Islamic teachings.",
      },
      {
        question: "Is my counseling session confidential?",
        answer:
          "Yes, all sessions at Najoomi.in are strictly confidential and handled with professionalism, compassion, and respect for your privacy and dignity.",
      },
      {
        question: "Can I book a session from outside India?",
        answer:
          "Absolutely. Our counseling services are available globally through secure online video calls or voice sessions, tailored to your schedule and time zone.",
      },
      {
        question:
          "Are the counselors trained in both psychology and Islamic knowledge?",
        answer:
          "Yes, our team includes counselors who are qualified in Islamic theology and trained in modern mental health frameworks for holistic healing.",
      },
      {
        question: "How do I book a spiritual counseling session?",
        answer:
          "Visit Najoomi.in, choose the Spiritual Counseling service, and book a session directly through our calendar. You can also speak with a counselor for a consultation first.",
      },
    ],
  },

  {
    id: Services.PERSONALISED_DUA_AND_QURANIC_HEALING,
    title:
      "Personalized Dua & Quranic Healing — Divine Remedies for Every Challenge | Custom Duas for Healing & Protection",
    description:
      "Receive custom-written duas and Quranic supplications tailored to your life circumstances — guided by Islamic scholarship and spiritual wisdom.",
    date: "2025-05-18",
    image: "/services/personalised-dua.jpg",
    publisher: "Najoomi",
    category: "Spiritual Services",
    keywords:
      "Personalized dua, Quranic healing, Islamic healing, duas for protection, spiritual guidance, healing duas, duas for success, duas for marriage, spiritual remedies, Islamic duas",
    rating: "general",
    audience: "all",
    subject: "Personalized Dua & Quranic Healing",
    summary:
      "Request custom-written duas tailored to your needs at Najoomi.in. Receive Quran-based prayers for healing, protection, guidance, and spiritual growth, all reviewed by qualified scholars.",
    classification: "Religion, Spirituality, Guidance",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppTitle: "Najoomi",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    contentLanguage: "en",
    xUaCompatible: "IE=edge",
    dcTitle:
      "Personalized Dua & Quranic Healing — Divine Remedies for Every Challenge | Custom Duas for Healing & Protection",
    dcDescription:
      "Receive custom-written duas and Quranic supplications tailored to your life circumstances — guided by Islamic scholarship and spiritual wisdom.",
    dcPublisher: "Najoomi",
    dcLanguage: "en",
    dcSubject: "Personalized Dua & Quranic Healing",
    contentBody: (
      <>
        <div className="prose prose-lg max-w-none mx-auto mb-6">
          <h3 className="text-[#1e293b] font-semibold">
            What is Personalized Dua & Healing?
          </h3>
          <p>
            Every believer faces unique struggles. At Najoomi.in, we offer
            custom spiritual remedies rooted in the Quran and Hadith. Whether
            you’re seeking healing, protection, guidance, or success, our
            scholars and spiritual advisors provide you with authentic, tailored
            duas that align with your needs — and your faith.
          </p>
          <h3 className="text-brand-gold font-semibold mt-6">How It Works</h3>
          <ul className="list-decimal ml-6">
            <li>
              <b>Tell Your Concern:</b> Share your challenge or request in
              detail (e.g., health, marriage, exams, business, spiritual
              disturbance).
            </li>
            <li>
              <b>Scholarly Review:</b> Our team member consults classical
              Islamic texts and evaluates your case through a spiritual lens.
            </li>
            <li>
              <b>Custom Dua Sent to You:</b> You’ll receive a personalized dua
              along with suggested Quranic verses, recitations, and spiritual
              practices.
            </li>
            <li>
              <b>Ongoing Guidance:</b> You can request follow-ups, updates, or
              new duas as your situation evolves.
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">
            Examples of Personalized Requests
          </h3>
          <ul className="list-disc ml-6">
            <li>Dua for healing from illness</li>
            <li>Protection from envy or evil eye</li>
            <li>Success in business or exams</li>
            <li>Reconciliation between spouses</li>
            <li>Relief from sadness, anxiety, or heartbreak</li>
            <li>Dua for righteous children or marriage proposals</li>
          </ul>
          <h3 className="text-brand-gold font-semibold mt-6">
            What You Receive
          </h3>
          <ul className="list-disc ml-6">
            <li>A unique, personalized dua in Arabic</li>
            <li>Relevant ayat or surahs for recitation</li>
            <li>Time & method of reciting (e.g., after Fajr, before sleep)</li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">Why Najoomi.in?</h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Authentically Islamic:</b> We never use shirk-based or
              unapproved practices
            </li>
            <li>
              <b>Tailored for You:</b> No “copy-paste” duas — each is made just
              for your case
            </li>
            <li>
              <b>Private & Confidential:</b> Your privacy is respected in every
              interaction
            </li>
            <li>
              <b>Scholar Approved:</b> Every request is reviewed and
              authenticated by qualified scholars
            </li>
          </ul>
        </div>
        {/* Decorative divider with sparkles */}
        <div className="flex justify-center items-center my-8">
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x2728;
          </span>
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x25C6;
          </span>
        </div>
        {/* Quranic Quote */}
        <footer className="text-center mt-8">
          <blockquote className="italic text-[#1e293b] border-l-4 border-brand-gold pl-4">
            “Call upon Me; I will respond to you.”
            <br />
            <span className="text-sm">— Surah Ghafir 40:60</span>
          </blockquote>
        </footer>
        {/* Schema Markup (Article + FAQPage) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Personalized Dua & Quranic Healing — Divine Remedies for Every Challenge",
              description:
                "Request custom-written duas tailored to your needs at Najoomi.in. Receive Quran-based prayers for healing, protection, guidance, and spiritual growth, all reviewed by qualified scholars.",
              image: "https://www.najoomi.in/images/personalized-dua-cover.jpg",
              author: { "@type": "Organization", name: "Najoomi.in" },
              publisher: {
                "@type": "Organization",
                name: "Najoomi.in",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.najoomi.in/najoomi-logo.png",
                },
              },
              datePublished: "2025-05-18",
              dateModified: "2025-05-18",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.najoomi.in/services/personalized-dua",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is a personalized dua?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It is a custom-made prayer crafted for your specific needs—whether for healing, guidance, love, or protection.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who makes the dua on my behalf?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "A spiritually experienced person or scholar will make sincere supplication based on your situation.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is personalized dua more effective than general dua?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "While all duas are heard by Allah, personalized ones may resonate more deeply with your condition and intentions.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I request dua for someone else?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, making dua for others is highly recommended and brings blessings to both.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long will you make dua for me?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Duas are typically made daily over a set period (e.g., 7 or 21 days) depending on your request.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What details are needed for personalized dua?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your full name, mother’s name, and the issue you're facing help guide the prayer with sincerity.",
                  },
                },
              ],
            }),
          }}
        />
      </>
    ),
    faqs: [
      {
        question: "What is a personalized dua?",
        answer:
          "It is a custom-made prayer crafted for your specific needs—whether for healing, guidance, love, or protection.",
      },
      {
        question: "Who makes the dua on my behalf?",
        answer:
          "A spiritually experienced person or scholar will make sincere supplication based on your situation.",
      },
      {
        question: "Is personalized dua more effective than general dua?",
        answer:
          "While all duas are heard by Allah, personalized ones may resonate more deeply with your condition and intentions.",
      },
      {
        question: "Can I request dua for someone else?",
        answer:
          "Yes, making dua for others is highly recommended and brings blessings to both.",
      },
      {
        question: "How long will you make dua for me?",
        answer:
          "Duas are typically made daily over a set period (e.g., 7 or 21 days) depending on your request.",
      },
      {
        question: "What details are needed for personalized dua?",
        answer:
          "Your full name, mother’s name, and the issue you're facing help guide the prayer with sincerity.",
      },
    ],
  },

  {
    id: Services.ISTIKHARA_GUIDANCE,
    title: "Istikhara Guidance — Let Faith Lead Your Decision",
    description:
      "Receive expert, Islamic Istikhara guidance online — learn how to perform Salat al-Istikhara, recognize the signs, and make life decisions with confidence and tawakkul (trust in Allah).",
    date: "2025-01-01",
    image: "/services/istikhara.jpg",
    publisher: "Najoomi",
    category: "Spiritual Services",
    keywords:
      "Istikhara, Istikhara guidance, Islamic Istikhara, Istikhara for marriage, Istikhara online, how to perform Istikhara, Istikhara dua, Salat al-Istikhara, Istikhara consultation, Najoomi",
    rating: "general",
    audience: "all",
    subject: "Istikhara Guidance",
    summary:
      "Receive expert, Islamic Istikhara guidance online — learn how to perform Salat al-Istikhara, recognize the signs, and make life decisions with confidence and tawakkul (trust in Allah).",
    classification: "Religion, Spirituality, Guidance",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppTitle: "Najoomi",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    contentLanguage: "en",
    xUaCompatible: "IE=edge",
    dcTitle: "Istikhara Guidance",
    dcDescription:
      "Receive expert, Islamic Istikhara guidance online — learn how to perform Salat al-Istikhara, recognize the signs, and make life decisions with confidence and tawakkul (trust in Allah).",
    dcPublisher: "Najoomi",
    dcLanguage: "en",
    dcSubject: "Istikhara Guidance",
    contentBody: (
      <>
        <div className="prose prose-lg max-w-none mx-auto mb-6">
          <h3 className="text-[#1e293b] font-semibold">What is Istikhara?</h3>
          <p>
            Istikhara is a prophetic Sunnah — a powerful dua and prayer
            performed by Muslims seeking divine help in making a decision.
            Whether it’s about marriage, business, relocation, or any major life
            choice, Salat al-Istikhara connects you to Allah (SWT) for spiritual
            clarity. At Najoomi.in, we offer confidential and guided Istikhara
            consultations based on authentic Islamic sources to help you feel
            confident in the path you choose.
          </p>
          <h3 className="text-brand-gold font-semibold mt-6">
            Our Istikhara Services
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Guided Istikhara Sessions:</b> Book a private online
              consultation with a qualified Islamic advisor who will guide you
              step-by-step on how to perform Istikhara prayer with correct
              intention and duas.
            </li>
            <li>
              <b>Dream & Sign Interpretation:</b> Our experts help you
              understand any dreams or emotional signs that may follow your
              Istikhara, in accordance with traditional Islamic understanding.
            </li>
            <li>
              <b>Personalized Life Decision Support:</b> Get Islamic guidance
              for specific situations like marriage proposals, business
              investments, family issues, or travel decisions.
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">
            When Should You Perform Istikhara?
          </h3>
          <ul className="list-disc ml-6">
            <li>Choosing a spouse or evaluating a marriage proposal</li>
            <li>Making a business or career decision</li>
            <li>Buying property or moving abroad</li>
            <li>Deciding on family or relationship matters</li>
            <li>Any situation where you're unsure of the best path</li>
          </ul>
          <h3 className="text-brand-gold font-semibold mt-6">
            What Istikhara Is Not
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Not fortune-telling or prediction of the future</b>
            </li>
            <li>
              <b>Does not guarantee dreams or supernatural visions</b>
            </li>
            <li>
              <b>Does not replace proper research and consultation</b>
            </li>
            <li>
              <b>It is a dua — a sincere request to Allah for what is best</b>
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">
            Why Choose Najoomi.in for Istikhara Guidance?
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Authentic & Scholarly Backed:</b> Based on sahih (authentic)
              hadith and classical Islamic rulings
            </li>
            <li>
              <b>Confidential & Compassionate Support:</b> We treat every case
              with care, respect, and privacy
            </li>
            <li>
              <b>Global Consultations:</b> Available via phone or video call in
              multiple languages
            </li>
            <li>
              <b>Qualified Islamic Counsellors:</b> Spiritual advisors trained
              in both emotional support and religious understanding
            </li>
          </ul>
        </div>
        {/* Decorative divider with sparkles */}
        <div className="flex justify-center items-center my-8">
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x2727;
          </span>
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x2728;
          </span>
        </div>

        <footer className="text-center mt-8">
          <blockquote className="italic text-[#1e293b] border-l-4 border-brand-gold pl-4">
            “And your Lord creates what He wills and chooses; not for them was
            the choice…”
            <br />
            <span className="text-sm">— Surah Al-Qasas (28:68)</span>
          </blockquote>
        </footer>
      </>
    ),
    faqs: [
      {
        question: "What is Istikhara?",
        answer:
          "Istikhara is a Sunnah prayer and dua performed to seek Allah’s guidance when making important life decisions. It helps you choose what is best for your spiritual and worldly well-being.",
      },
      {
        question: "When should I perform Istikhara?",
        answer:
          "Istikhara is ideal for decisions involving marriage, career changes, travel, moving, business ventures, or resolving personal dilemmas. Any time you're uncertain, Istikhara can bring clarity.",
      },
      {
        question: "Do I need a scholar to do Istikhara?",
        answer:
          "You can perform Istikhara on your own, but having guidance from a qualified advisor helps ensure proper intention, understanding of signs, and peace of mind in the process.",
      },
      {
        question: "Will I see a dream after Istikhara?",
        answer:
          "Not necessarily. Dreams can be a sign, but often the outcome is revealed through events, feelings of ease or discomfort, or clarity in decision-making after the prayer.",
      },
      {
        question: "Is Istikhara like fortune-telling?",
        answer:
          "No. Istikhara is a dua asking Allah for what is best. It does not predict the future or provide guaranteed dreams. It aligns your heart with divine wisdom and tawakkul.",
      },
      {
        question: "Do you offer Istikhara sessions online?",
        answer:
          "Yes, Najoomi.in offers private, online Istikhara consultations with trained Islamic counselors who provide spiritual advice, sign interpretation, and emotional support.",
      },
    ],
  },

  {
    id: Services.ISLAMIC_DREAM_INTERPRETATION,
    title: "Islamic Dream Interpretation — Uncover the Messages from Allah",
    description:
      "Discover the deeper meanings behind your dreams with guidance from the Quran, Hadith, and the insights of scholars like Ibn Sirin (RA).",
    date: "2025-01-01",
    image: "/services/dream-interpretation.jpg",
    publisher: "Najoomi",
    category: "Spiritual Services",
    keywords:
      "Islamic dream interpretation, dream meanings in Islam, interpret dream Islam, Ibn Sirin dream book, ru’ya salihah, dream symbols Islam, nightmares Islamic meaning, flying dream Islam, water dream meaning Islam, Islamic dream analysis online",
    rating: "general",
    audience: "all",
    subject: "Islamic Dream Interpretation",
    summary:
      "Discover the deeper meanings behind your dreams with guidance from the Quran, Hadith, and the insights of scholars like Ibn Sirin (RA).",
    classification: "Religion, Spirituality, Guidance",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppTitle: "Najoomi",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    contentLanguage: "en",
    xUaCompatible: "IE=edge",
    dcTitle: "Islamic Dream Interpretation",
    dcDescription:
      "Discover the deeper meanings behind your dreams with guidance from the Quran, Hadith, and the insights of scholars like Ibn Sirin (RA).",
    dcPublisher: "Najoomi",
    dcLanguage: "en",
    dcSubject: "Islamic Dream Interpretation",
    contentBody: (
      <>
        <div className="prose prose-lg max-w-none mx-auto mb-6">
          <h3 className="text-[#1e293b] font-semibold">
            What Does Islam Say About Dreams?
          </h3>
          <p>
            Dreams are more than passing thoughts — they can be signs, spiritual
            messages, or reflections of our emotional state. In Islam, true
            dreams (<em>ru’ya salihah</em>) are considered a part of
            prophethood. At Najoomi.in, we help you understand your dreams
            through the lens of authentic Islamic teachings, with care, wisdom,
            and confidentiality.
          </p>
          <blockquote className="border-l-4 border-brand-gold pl-4 italic text-[#1e293b] my-4 text-center">
            "The most truthful of you in speech are the most truthful in
            dreams."
            <br />
            <span className="text-sm">— Prophet Muhammad ﷺ (Sahih Muslim)</span>
          </blockquote>
          <h3 className="text-[#1e293b] font-semibold mt-6">
            How Our Interpretation Works
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Share Your Dream:</b> Share your dream in detail — including
              setting, emotions, people, and key symbols.
            </li>
            <li>
              <b>Scholarly Islamic Analysis:</b> Our trained interpreters
              reference Quran, Sahih Hadith, and classical works by scholars
              like Ibn Sirin to analyze your dream's spiritual significance.
            </li>
            <li>
              <b>Personalized Response:</b> You’ll receive a detailed
              interpretation, possible meanings, and recommended duas or Sunnah
              actions for guidance.
            </li>
          </ul>
          <h3 className="text-brand-gold font-semibold mt-6">
            Types of Dreams We Interpret
          </h3>
          <ul className="list-disc ml-6">
            <li>
              Recurring Dreams — Understand what repeating themes may reveal
            </li>
            <li>
              Prophetic Dreams — Spot signs of divine direction or glad tidings
            </li>
            <li>
              Nightmares & Disturbing Dreams — Know how to protect yourself
              spiritually
            </li>
            <li>
              Symbolic Dreams — Interpret symbols like:
              <ul className="list-disc ml-6">
                <li>Water (emotions, purification)</li>
                <li>Snakes (hidden enemies or spiritual warnings)</li>
                <li>Flying (freedom or ambition)</li>
                <li>Marriage/Death (transitions, spiritual meaning)</li>
              </ul>
            </li>
            <li>
              Post-Dream Sunnah Actions — Learn what duas and habits are advised
              by the Prophet ﷺ after dreaming
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">
            Why Choose Najoomi.in?
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Islamically Grounded:</b> Every interpretation is rooted in
              authentic sources
            </li>
            <li>
              <b>No Fabrication or Guesswork:</b> No use of unreliable dream
              books or cultural myths
            </li>
            <li>
              <b>Discreet & Respectful:</b> Every submission is kept 100%
              confidential
            </li>
            <li>
              <b>Global Access:</b> Available to clients worldwide via text,
              call, or video
            </li>
            <li>
              <b>Scholar-Led Team:</b> Interpreters trained in Islamic theology
              and spiritual care
            </li>
          </ul>
        </div>
        {/* Decorative divider with stars and sparkles */}
        <div className="flex justify-center items-center my-8">
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x2727;
          </span>
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x2728;
          </span>
        </div>
        <footer className="text-center mt-8">
          <blockquote className="italic text-[#1e293b] border-l-4 border-brand-gold pl-4">
            “Indeed, Allah will not let a believer’s vision pass without
            purpose.”
            <br />
            <span className="text-sm">— Based on Hadith from Sahih Muslim</span>
          </blockquote>
        </footer>
      </>
    ),
    faqs: [
      {
        question: "Is dream interpretation allowed in Islam?",
        answer:
          "Yes, dream interpretation is part of Islamic tradition. The Prophet Muhammad ﷺ and companions often discussed the meanings of dreams. Scholars like Ibn Sirin (RA) compiled interpretations based on Quran and Hadith.",
      },
      {
        question: "What types of dreams have meaning in Islam?",
        answer:
          "True dreams (ru’ya salihah) are considered meaningful and often contain signs or guidance. Bad dreams are from Shaytan and should be ignored, while common dreams may reflect your daily thoughts or emotions.",
      },
      {
        question: "Can I get my dream interpreted online?",
        answer:
          "Yes, Najoomi.in offers online Islamic dream interpretation services via text, call, or video. All interpretations are based on authentic sources and handled confidentially.",
      },
      {
        question: "How do I know if a dream is a sign from Allah?",
        answer:
          "A dream that is vivid, remembered clearly, and aligns with Islamic values may be a true dream. Repetition, symbols, and emotional clarity can also indicate deeper spiritual meaning.",
      },
      {
        question: "Do you interpret nightmares?",
        answer:
          "Yes, we help you understand spiritual meanings behind disturbing dreams and guide you on Sunnah actions for protection and peace, such as reciting Ayat-ul-Kursi and Surah Falaq before sleep.",
      },
      {
        question: "Is this service confidential?",
        answer:
          "Absolutely. Every dream submission is handled with full confidentiality and respect. We ensure your spiritual experiences remain private and honored.",
      },
    ],
  },

  {
    id: Services.RUQYYAH_AND_SPIRITUAL_CLEANSING,
    title:
      "Ruqyah and Spiritual Cleansing — Protection Through the Power of the Quran",
    description:
      "Experience authentic Ruqyah therapy at Najoomi.in. Quran-based healing for evil eye, black magic, jinn influence, anxiety, and spiritual distress. Private, certified sessions.",
    date: "2025-01-01",
    image: "/services/ruqyah.jpg",
    publisher: "Najoomi",
    category: "Spiritual Services",
    keywords:
      "Ruqyah, Islamic healing, Quranic protection, evil eye cure, black magic removal, Ruqyah for jinn, sihr treatment, Ruqyah audio, Ruqyah sessions online, spiritual cleansing Islam, Najoomi Ruqyah",
    rating: "general",
    audience: "all",
    subject: "Ruqyah and Spiritual Cleansing",
    summary:
      "Quranic healing and protection for emotional, mental, and spiritual well-being.",
    classification: "Religion, Spirituality, Guidance",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppTitle: "Najoomi",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    contentLanguage: "en",
    xUaCompatible: "IE=edge",
    dcTitle: "Ruqyah and Spiritual Cleansing",
    dcDescription:
      "Experience authentic Ruqyah therapy at Najoomi.in. Quran-based healing for evil eye, black magic, jinn influence, anxiety, and spiritual distress. Private, certified sessions.",
    dcPublisher: "Najoomi",
    dcLanguage: "en",
    dcSubject: "Ruqyah and Spiritual Cleansing",
    contentBody: (
      <>
        <div className="prose prose-lg max-w-none mx-auto mb-6">
          <h3 className="text-[#1e293b] font-semibold">What is Ruqyah?</h3>
          <p>
            Ruqyah is an authentic Islamic spiritual healing practice based on
            the Quran and Sunnah, used to treat evil eye (<em>ayn</em>), black
            magic (<em>sihr</em>), jinn possession, and emotional distress. At
            Najoomi.in, we offer Shariah-compliant Ruqyah sessions online with
            experienced and certified practitioners. No amulets, no innovations
            — just pure, Quran-based protection and healing.
          </p>
          <h3 className="text-[#1e293b] font-semibold mt-6">
            Core Features of Our Ruqyah Services
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Personalized Ruqyah Sessions:</b> Virtual one-on-one guidance
              tailored to your unique symptoms and spiritual concerns.
            </li>
            <li>
              <b>Spiritual Assessments:</b> Identify spiritual imbalances or
              afflictions with the help of trained Ruqyah experts.
            </li>
            <li>
              <b>Ongoing Support & Healing Plan:</b> Lifestyle recommendations,
              check-ins, and Islamic mental health support for holistic
              recovery.
            </li>
          </ul>
          <h3 className="text-brand-gold font-semibold mt-6">
            Common Reasons People Seek Ruqyah
          </h3>
          <ul className="list-disc ml-6">
            <li>Recurrent nightmares or unexplained sleep paralysis</li>
            <li>Sudden health issues with no medical explanation</li>
            <li>Frequent misfortune in relationships or livelihood</li>
            <li>Persistent anxiety, depression, or fear without clear cause</li>
            <li>
              Suspected exposure to sihr (magic), evil eye, or jinn activities
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">
            Why Najoomi.in for Ruqyah?
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Quran-Based Healing:</b> 100% Sunnah-compliant; no shirk, no
              innovations
            </li>
            <li>
              <b>Certified Practitioners:</b> Experienced in Islamic theology,
              Ruqyah, and emotional care
            </li>
            <li>
              <b>Safe & Private:</b> All sessions are handled with full
              confidentiality and compassion
            </li>
            <li>
              <b>Available Worldwide:</b> Online Ruqyah services accessible from
              anywhere in the world
            </li>
          </ul>
        </div>
        {/* Decorative divider with sparkles */}
        <div className="flex justify-center items-center my-8">
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x2728;
          </span>
          <span className="inline-block text-brand-gold text-2xl mx-2">
            &#x1F52E;
          </span>
        </div>
      </>
    ),
    faqs: [
      {
        question: "What is Ruqyah in Islam?",
        answer:
          "Ruqyah is the recitation of specific Quranic verses and duas for protection and healing from spiritual ailments like evil eye, sihr (magic), and jinn.",
      },
      {
        question: "Is Ruqyah effective for anxiety and depression?",
        answer:
          "Yes, Ruqyah can aid emotional and mental healing when combined with sincere faith and reliance on Allah.",
      },
      {
        question: "Can Ruqyah be done at home?",
        answer:
          "Yes, self-Ruqyah is encouraged. Recite Ayat-ul-Kursi, Surah Al-Falaq, and Surah An-Naas regularly.",
      },
      {
        question: "What signs show Ruqyah is working?",
        answer:
          "Calmness, clarity, improved sleep, and reduced anxiety are common indicators of positive effects.",
      },
      {
        question: "How often should Ruqyah be performed?",
        answer:
          "Daily or as needed. Consistency and sincerity are key in seeking spiritual relief.",
      },
      {
        question: "Is Ruqyah safe for children?",
        answer:
          "Yes, it is safe and highly beneficial when performed gently with proper intentions and verses.",
      },
    ],
  },
  {
    id: Services.SPIRITUAL_GUIDANCE,
    title: "Spiritual Guidance for Life Decisions",
    description:
      "Reconnect with your inner peace and divine direction through sincere guidance rooted in sacred teachings, heartfelt listening, and personalized spiritual wisdom.",
    date: "2025-05-18",
    image: "/services/spritual-guidance.jpg",
    publisher: "Najoomi",
    category: "Spiritual Services",
    keywords:
      "Spiritual guidance, roohani healing, Islamic life advice, Quranic counseling, emotional healing Islam, faith-based decision support, dua for confusion, Najoomi services",
    rating: "general",
    audience: "all",
    subject: "Spiritual Guidance",
    summary:
      "Discover personalized spiritual guidance rooted in Quranic teachings. Najoomi.in offers confidential, faith-based support to help you heal emotionally, reconnect with your purpose, and make life decisions with clarity and peace.",
    classification: "Religion, Spirituality, Guidance",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppTitle: "Najoomi",
    appleMobileWebAppStatusBarStyle: "black-translucent",
    contentLanguage: "en",
    xUaCompatible: "IE=edge",
    dcTitle:
      "Spiritual Guidance for Life Decisions | Roohani Support by Najoomi.in",
    dcDescription:
      "Reconnect with your inner peace and divine direction through sincere guidance rooted in sacred teachings, heartfelt listening, and personalized spiritual wisdom.",
    dcPublisher: "Najoomi",
    dcLanguage: "en",
    dcSubject: "Spiritual Guidance",
    contentBody: (
      <>
        <div className="prose prose-lg max-w-none mx-auto mb-6">
          <h3 className="text-[#1e293b] font-semibold">
            🌙 What is Spiritual Guidance?
          </h3>
          <p>
            Spiritual guidance is a reflective and faith-centered process that
            helps you understand life’s challenges, emotional blocks, and
            soul-level questions through the lens of divine wisdom. At
            Najoomi.in, we offer compassionate, private support grounded in
            Quranic teachings and Prophetic insights — helping you align with
            purpose, reconnect with faith, and make mindful decisions in both
            personal and spiritual life. Whether you’re seeking clarity in
            relationships, healing after a loss, or spiritual reassurance, our
            advisors walk beside you with sincerity and prayer.
          </p>
          <h3 className="text-brand-gold font-semibold mt-6">
            💡 Our Spiritual Guidance Services Include
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Life Decision Support:</b> Facing confusion about marriage,
              career, or personal direction? Get clarity through Quranic
              reflection, Istikhara guidance, and spiritual insight.
            </li>
            <li>
              <b>Faith & Motivation Renewal:</b> Feeling disconnected from
              prayer, faith, or purpose? Let us help you rediscover your
              spiritual spark.
            </li>
            <li>
              <b>Emotional Healing Through Faith:</b> Receive faith-based coping
              tools for anxiety, overthinking, heartbreak, or emotional
              exhaustion.
            </li>
            <li>
              <b>Reconnecting with Allah (SWT):</b> Personalized routines and
              duas to strengthen your remembrance (dhikr), trust (tawakkul), and
              inner stillness.
            </li>
            <li>
              <b>Spiritual Identity & Growth:</b> Struggling with self-worth,
              guilt, or identity? Our scholars guide you to see yourself through
              the mercy of your Creator.
            </li>
            <li>
              <b>Dreams, Signs & Spiritual Confusion:</b> Understand recurring
              signs, dreams, or spiritual experiences with wisdom — not fear.
            </li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">🧭 How It Works</h3>
          <ul className="list-decimal ml-6">
            <li>
              <b>Share Your Concern:</b> Share your struggle, confusion, or area
              where you need spiritual clarity.
            </li>
            <li>
              <b>Choose a Guide:</b> We connect you with a compassionate advisor
              trained in Islamic spirituality and emotional wellness.
            </li>
            <li>
              <b>Personalized Guidance & Tools:</b> Receive reflections from the
              Quran and Hadith, practical spiritual routines, and recommended
              duas.
            </li>
            <li>
              <b>Optional Follow-Up Support:</b> Schedule future sessions or
              seek additional clarity as your journey evolves.
            </li>
          </ul>
          <h3 className="text-brand-gold font-semibold mt-6">
            📜 We Help With:
          </h3>
          <ul className="list-disc ml-6">
            <li>Inner unrest, sadness, or overthinking</li>
            <li>Loss of faith or motivation to pray</li>
            <li>Repeated mistakes, guilt, or regret</li>
            <li>Decision-making around major life events</li>
            <li>Feeling distant from Allah (SWT)</li>
            <li>Navigating loneliness, heartbreak, or shame</li>
          </ul>
          <h3 className="text-[#1e293b] font-semibold mt-6">
            🌿 Why Choose Najoomi.in for Spiritual Guidance?
          </h3>
          <ul className="list-disc ml-6">
            <li>
              <b>Faith-Aligned & Grounded in the Quran:</b> Every reflection and
              suggestion is rooted in authentic Islamic sources — no
              superstition, no cultural additions.
            </li>
            <li>
              <b>Judgment-Free Space:</b> We listen with compassion — no matter
              your past, doubts, or struggles.
            </li>
            <li>
              <b>Customized Spiritual Support:</b> You receive relevant duas,
              practical steps, and emotional care personalized to your
              situation.
            </li>
            <li>
              <b>Confidential & Respectful:</b> All sessions are private,
              secure, and handled with the utmost adab and care.
            </li>
          </ul>
        </div>
        {/* Decorative divider with sparkles */}
        <div className="flex justify-center items-center my-8">
          <span className="inline-block text-brand-gold text-2xl mx-2">✨</span>
          <span className="inline-block text-brand-gold text-2xl mx-2">◆</span>
        </div>
        {/* Quranic Quote Footer */}
        <footer className="text-center mt-8">
          <blockquote className="italic text-[#1e293b] border-l-4 border-brand-gold pl-4">
            “And whoever relies upon Allah — then He is sufficient for him.”
            <br />
            <span className="text-sm">— Surah At-Talaq (65:3)</span>
          </blockquote>
        </footer>
        {/* Schema Markup (Article + FAQPage) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.najoomi.in/services/spiritual-guidance",
              },
              headline:
                "Spiritual Guidance & Clarity — Navigate Life Through the Light of Faith",
              description:
                "Discover personalized spiritual guidance rooted in Quranic teachings. Najoomi.in offers confidential, faith-based support to help you heal emotionally, reconnect with your purpose, and make life decisions with clarity and peace.",
              image:
                "https://www.najoomi.in/images/spiritual-guidance-cover.jpg",
              author: { "@type": "Organization", name: "Najoomi.in" },
              publisher: {
                "@type": "Organization",
                name: "Najoomi.in",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.najoomi.in/najoomi-logo.png",
                },
              },
              datePublished: "2025-05-18",
              dateModified: "2025-05-18",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is spiritual guidance and how can it help me?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Spiritual guidance is a faith-centered approach to understanding life’s challenges through divine wisdom. At Najoomi, it helps you gain clarity, reconnect with your purpose, and find emotional peace using Quranic teachings and prophetic wisdom.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can I seek spiritual guidance for personal problems?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, spiritual guidance is ideal for personal issues like emotional confusion, life decisions, loss of motivation, or feeling disconnected from your faith.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is this service based on authentic Islamic teachings?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. All advice and healing methods at Najoomi.in are rooted in the Quran, Hadith, and traditional Islamic scholarship — with no unverified or harmful practices.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Who provides the spiritual guidance at Najoomi?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our sessions are led by trained advisors with deep knowledge of Islamic spirituality and emotional care. Each session is personalized and handled with compassion and confidentiality.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How do I know if I need spiritual guidance?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "If you're feeling lost, overwhelmed, distant from your faith, or unsure about your next steps in life — spiritual guidance can help realign your heart and mind with divine direction.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is spiritual guidance available online?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. You can access our sessions from anywhere in the world through private video or voice consultations.",
                  },
                },
              ],
            }),
          }}
        />
      </>
    ),
    faqs: [
      {
        question: "What is spiritual guidance and how can it help me?",
        answer:
          "Spiritual guidance is a faith-centered approach to understanding life’s challenges through divine wisdom. At Najoomi, it helps you gain clarity, reconnect with your purpose, and find emotional peace using Quranic teachings and prophetic wisdom.",
      },
      {
        question: "Can I seek spiritual guidance for personal problems?",
        answer:
          "Yes, spiritual guidance is ideal for personal issues like emotional confusion, life decisions, loss of motivation, or feeling disconnected from your faith.",
      },
      {
        question: "Is this service based on authentic Islamic teachings?",
        answer:
          "Absolutely. All advice and healing methods at Najoomi.in are rooted in the Quran, Hadith, and traditional Islamic scholarship — with no unverified or harmful practices.",
      },
      {
        question: "Who provides the spiritual guidance at Najoomi?",
        answer:
          "Our sessions are led by trained advisors with deep knowledge of Islamic spirituality and emotional care. Each session is personalized and handled with compassion and confidentiality.",
      },
      {
        question: "How do I know if I need spiritual guidance?",
        answer:
          "If you're feeling lost, overwhelmed, distant from your faith, or unsure about your next steps in life — spiritual guidance can help realign your heart and mind with divine direction.",
      },
      {
        question: "Is spiritual guidance available online?",
        answer:
          "Yes. You can access our sessions from anywhere in the world through private video or voice consultations.",
      },
    ],
  },
];
