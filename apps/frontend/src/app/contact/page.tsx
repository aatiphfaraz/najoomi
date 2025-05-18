"use client";
import React, { JSX, useState } from "react";
import UpsellBanner from "../components/UpsellBanner";
import { CONTACT_FAQS, CONTACT_DETAILS } from "../constants/contact";
import Button from "../components/ui/Button";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailto = `mailto:najoomi.in@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.open(mailto, '_blank');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#F1E1C6] to-[#f7ecd flex flex-col px-2 pb-20">
      <main className="flex-1 w-full max-w-6xl mx-auto pt-12 md:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#15577a] mb-2 drop-shadow-lg">Get in Touch</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Have questions about our services or need assistance? We're here to help you on your spiritual journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white/90 rounded-3xl border border-[#fde68a]/40 p-8 shadow-sm flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-[#15577a]">Send Us a Message</h2>
            {submitted ? (
              <div className="text-green-600 font-medium text-center py-8">
                Thank you for reaching out! We'll get back to you soon.
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-xs font-medium mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-[#fde68a] focus:outline-none bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-[#fde68a] focus:outline-none bg-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-[#fde68a] focus:outline-none bg-white"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-xl border border-gray-200 px-3 py-2 text-sm focus:ring-2 focus:ring-[#fde68a] focus:outline-none bg-white"
                    placeholder="Your message..."
                  />
                </div>
                <Button type="submit" variant="primary" className="mt-2 self-start">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  Send via Email
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info & FAQ */}
          <div className="flex flex-col gap-8">
            <div className="bg-white/90 rounded-3xl border border-[#fde68a]/40 p-8 flex-1 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-[#15577a]">Contact Information</h2>
              <ul className="text-sm text-gray-700 space-y-4">
                {CONTACT_DETAILS.map((detail: { type: string; icon: string; value: string | string[] }) => {
                  const icons: Record<string, JSX.Element> = {
                    email: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 12v1a4 4 0 01-8 0v-1" /><path d="M12 17v.01" /><path d="M12 3a9 9 0 00-9 9v4a9 9 0 0018 0v-4a9 9 0 00-9-9z" /></svg>,
                    phone: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 5h2l.4 2M7 13h10l4-8H5.4" /><circle cx="7" cy="21" r="1" /><circle cx="17" cy="21" r="1" /></svg>,
                    office: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5" /><circle cx="12" cy="7" r="4" /></svg>,
                    hours: <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>,
                  };
                  return (
                    <li key={detail.type} className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#f7ecd7] text-[#b6894a]">
                        {icons[detail.icon]}
                      </span>
                      <div>
                        <div className="font-semibold">{detail.type}</div>
                        <div className="text-gray-500">
                          {Array.isArray(detail.value)
                            ? (detail.value as string[]).map((v: string, i: number) => <span key={i}>{v}{i !== (detail.value as string[]).length - 1 && <br />}</span>)
                            : detail.value}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="bg-white/90 rounded-3xl border border-[#fde68a]/40 p-8 flex-1 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 text-[#15577a]">Frequently Asked Questions</h2>
              <ul className="text-sm text-gray-700 space-y-4">
                {CONTACT_FAQS.map(faq => (
                  <li key={faq.question}>
                    <div className="font-semibold text-gray-900 mb-1">{faq.question}</div>
                    <div className="text-gray-600">{faq.answer}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


      </main>
      <UpsellBanner primaryCtaHref="/consultation" secondaryCtaHref="/services" />
    </div>
  );
}
