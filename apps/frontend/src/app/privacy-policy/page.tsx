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
          <p className="mb-4">At Najoomi.in ("we", "our", "us"), your privacy and trust are of utmost importance. We are committed to safeguarding the personal data you share with us. This Privacy Policy explains how we collect, use, share, and protect your information when you interact with our platform. We operate in accordance with applicable Indian data protection laws and uphold principles rooted in transparency, respect, and Islamic ethics.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
          <p className="mb-2">We may collect the following information directly from you:</p>
          <ul className="list-disc list-inside mb-4">
            <li><b>Personal Information:</b> Name, email address, phone number, city, or any other details you submit while:
              <ul className="list-disc list-inside ml-6">
                <li>Booking a session</li>
                <li>Requesting spiritual or astrological guidance</li>
                <li>Submitting questions or feedback</li>
                <li>Signing up for newsletters or offers</li>
              </ul>
            </li>
            <li><b>Sensitive Information:</b> Only when voluntarily provided (e.g., personal concerns for spiritual advice).</li>
            <li><b>Device and Usage Data:</b>
              <ul className="list-disc list-inside ml-6">
                <li>IP address, browser type, device information</li>
                <li>Pages visited, time spent on site</li>
                <li>Referring websites or search terms</li>
              </ul>
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of Information</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Provide you with personalized spiritual or roohani guidance</li>
            <li>Communicate session details, updates, and responses to your queries</li>
            <li>Enhance our website experience based on user activity</li>
            <li>Send occasional newsletters or content, if you’ve opted in</li>
            <li>Maintain platform safety and compliance</li>
          </ul>
          <p className="mb-4">We do not sell or rent your data to third parties.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">3. User Analytics and Tracking</h2>
          <p className="mb-2">We use cookies and analytics tools to monitor website traffic, understand user preferences, and improve our offerings. These tools may collect anonymized data such as:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Page views</li>
            <li>Click patterns</li>
            <li>Geographic trends</li>
            <li>Device/browser usage</li>
          </ul>
          <p className="mb-4">You can manage or disable cookies in your browser settings. However, this may affect website functionality.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">4. Information Sharing</h2>
          <ul className="list-disc list-inside mb-4">
            <li><b>Legal Compliance:</b> If required under Indian law or regulatory obligations</li>
            <li><b>Security or Protection:</b> To detect, prevent, or address fraud, security, or technical issues</li>
            <li><b>Consent-Based Sharing:</b> With your explicit permission (e.g., collaboration with a trusted healer)</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">5. Security Measures</h2>
          <p className="mb-2">While we do not store financial or highly sensitive data, we take reasonable steps to secure your information:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Secure hosting environments</li>
            <li>Restricted administrative access</li>
            <li>Routine data hygiene and monitoring</li>
          </ul>
          <p className="mb-4">No method of transmission over the Internet is 100% secure, but we are committed to responsible data management.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">6. Children’s Privacy</h2>
          <p className="mb-4">Najoomi.in does not knowingly collect or process personal data of children under the age of 13. If you are a parent or guardian and believe your child has submitted personal information, please contact us for immediate deletion.</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">7. Policy Updates</h2>
          <p className="mb-4">We may update this Privacy Policy to reflect changes in our services, laws, or best practices. Revised versions will be posted here with the “Effective Date” updated. Continued use of the site implies your consent to the revised policy.</p>
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
