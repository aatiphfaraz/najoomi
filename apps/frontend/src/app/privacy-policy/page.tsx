import React from "react";

export const metadata = {
  title: "Privacy Policy | Najoomi.in",
  description: "Najoomi.in respects your privacy and is committed to protecting your personal information. Read our privacy policy to learn how we collect, use, and safeguard your data in accordance with Indian law and Islamic values.",
};

import { CONTACT_DETAILS } from "../constants/contact";

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-gradient-to-br from-white to-[#F1E1C6] px-4 pb-12">
      <div className="max-w-6xl mx-auto pt-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-12 tracking-tight drop-shadow-lg">
          Privacy Policy
        </h1>
        <div>
          <p className="mb-4">Najoomi.in ("we", "our", or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data in compliance with applicable Indian laws and ethical principles that align with Islamic values.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Sign up or interact with our platform (e.g., name, email, mobile number)</li>
            <li>Request guidance or submit queries</li>
            <li>Participate in surveys or provide feedback</li>
          </ul>
          <p className="mb-4">We do not collect or store sensitive personal data unless explicitly provided by the user for guidance purposes.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Information</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Providing astrological or spiritual guidance</li>
            <li>Improving the services we offer</li>
            <li>Sending you updates (if opted-in)</li>
            <li>Responding to your inquiries</li>
          </ul>
          <p className="mb-4">We do not sell, trade, or misuse your data.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Information</h2>
          <ul className="list-disc list-inside mb-4">
            <li>When required by Indian law or regulatory authorities</li>
            <li>To comply with a legal obligation or in good faith belief such disclosure is necessary</li>
          </ul>
          <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies and Analytics</h2>
          <p className="mb-4">Our website may use cookies and minimal analytics tools to understand user behavior and enhance your experience. You can choose to disable cookies via your browser settings.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2">5. Security</h2>
          <p className="mb-4">While we don't store large volumes of sensitive data, we implement basic technical and organizational measures to safeguard the information we do collect.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2">6. Children's Privacy</h2>
          <p className="mb-4">Najoomi.in does not knowingly collect data from individuals under the age of 13. Parents or guardians may contact us if they believe their child has provided us with personal data.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2">7. Changes to This Policy</h2>
          <p className="mb-4">We may revise this policy as our platform grows. Updates will be posted here, and your continued use signifies acceptance.</p>
          <h2 className="text-xl font-semibold mt-6 mb-2">8. Contact Us</h2>
          <p className="mb-2">If you have questions about this Privacy Policy, contact us at:</p>
          <ul className="list-disc list-inside">
            {CONTACT_DETAILS.find((d: { type: string }) => d.type === "Email")?.value.map((email: string, i: number) => (
              <li key={"email-" + i}>Email: {email}</li>
            ))}
            {CONTACT_DETAILS.find((d: { type: string }) => d.type === "Office")?.value.map((address: string, i: number) => (
              <li key={"address-" + i}>Address: {address}</li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <span className="inline-block text-2xl text-brand-gold">★</span>
          </div>
        </div>
      </div>
    </main>
  );
}
