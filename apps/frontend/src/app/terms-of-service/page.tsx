import React from "react";

export const metadata = {
  title: "Terms & Conditions | Najoomi.in",
  description: "Read the terms and conditions for using Najoomi.in. Understand your rights, responsibilities, and the limitations of our spiritual and astrological guidance platform.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="w-full bg-gradient-to-br from-white to-[#F1E1C6] px-4 pb-12">
      <div className="max-w-6xl mx-auto pt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-12 tracking-tight drop-shadow-lg">
          Terms &amp; Conditions
        </h1>
        <div>
          <p className="mb-4">Welcome to Najoomi.in. By accessing our website or services, you agree to be bound by the following Terms and Conditions:</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">1. Eligibility</h2>
          <p className="mb-4">By using this website, you confirm that you are above the legal age of 18 or have parental consent, and you are a resident of India.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">2. Services Offered</h2>
          <p className="mb-4">Najoomi.in provides spiritual and astrological insights based on traditional Islamic and cultural principles. We do not sell any physical or digital products, and all guidance is for informational purposes only.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
          <ul className="list-disc list-inside mb-4">
            <li>To provide accurate information during interactions</li>
            <li>Not to misuse or distort the content provided</li>
            <li>To avoid using the platform for unlawful or unethical purposes</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">4. Prohibited Conduct</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Promote hate speech, black magic, voodoo, or harmful rituals</li>
            <li>Upload or share inappropriate, misleading, or offensive content</li>
            <li>Impersonate others or attempt to disrupt the website's operation</li>
          </ul>
          <p className="mb-4">Any such behavior may result in account restriction or removal.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Intellectual Property</h2>
          <p className="mb-4">All content (including text, images, and design) on Najoomi.in is owned by us or licensed for use. Unauthorized copying, reproduction, or commercial use is strictly prohibited.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Disclaimers</h2>
          <ul className="list-disc list-inside mb-4">
            <li>All guidance is spiritual in nature and not a substitute for professional or medical advice.</li>
            <li>We do not guarantee results from spiritual or astrological advice.</li>
            <li>We make no claims about curing or resolving life problems through our platform.</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Any indirect, incidental, or consequential damages</li>
            <li>Decisions made based on the information provided on this site</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">8. Governing Law &amp; Jurisdiction</h2>
          <p className="mb-4">These Terms shall be governed by the laws of India. Any disputes arising will be subject to the exclusive jurisdiction of courts located in New Delhi, India.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">9. Amendments</h2>
          <p className="mb-4">Najoomi.in reserves the right to modify these Terms at any time. Updates will be published on this page, and continued use implies acceptance.</p>
          <div className="mt-8 flex justify-center">
            <span className="inline-block text-2xl text-brand-gold">★</span>
          </div>
        </div>
      </div>
    </main>
  );
}
