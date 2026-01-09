"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/Button";

export default function ChatBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [query, setQuery] = useState("");
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  // Auto-open after 5 seconds on page load (only once per session)
  useEffect(() => {
    // Check if already auto-opened in this session (with safe sessionStorage access)
    let hasAutoOpenedThisSession = false;

    hasAutoOpenedThisSession =
      sessionStorage.getItem("chatBubbleAutoOpened") === "true";

    if (hasAutoOpenedThisSession) {
      setHasAutoOpened(true);
      return;
    }

    const timer = setTimeout(() => {
      if (!hasAutoOpened) {
        setIsOpen(true);
        setHasAutoOpened(true);

        sessionStorage.setItem("chatBubbleAutoOpened", "true");
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasAutoOpened]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        phone,
        query,
        timestamp: new Date().toISOString(),
        pageUrl: typeof window !== "undefined" ? window.location.href : "",
      };

      const response = await fetch("/api/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit query");
      }

      // Success - close bubble immediately and show toast
      console.log("Support Query Submitted:", payload);

      // Reset form and close bubble immediately
      setPhone("");
      setQuery("");
      setIsOpen(false);

      // Show toast notification
      setShowToast(true);

      // Auto-hide toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    } catch (error) {
      console.error("Error submitting query:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = phone.trim() !== "" && query.trim() !== "";

  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 md:bottom-6 md:left-auto md:right-6 md:translate-x-0 z-[60] ">
          <div className="bg-white rounded-lg shadow-2xl border border-green-200 p-3 md:p-4 max-w-sm w-[calc(100vw-2rem)] md:w-auto flex items-start gap-3">
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm md:text-base font-semibold text-gray-800">
                Query submit ho gaya!
              </p>
              <p className="text-xs md:text-sm text-gray-600 mt-1">
                Hum jald hi WhatsApp pe reply karenge.
              </p>
            </div>
            <button
              onClick={() => setShowToast(false)}
              className="flex-shrink-0 p-1 hover:bg-gray-100 rounded-full transition-colors mt-0.5"
              aria-label="Close notification"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Chat Bubble Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-r from-[#15577a] via-[#217ebd] to-[#1e90c7] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 active:scale-95 z-50"
          aria-label="Support chat kholo"
        >
          <svg
            className="w-7 h-7 md:w-8 md:h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 md:hidden z-40"
          onClick={() => {
            setIsOpen(false);
            setSubmitError(null);
          }}
          aria-hidden="true"
        />
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 md:bottom-6 md:left-auto md:right-6 md:w-96 md:max-h-[600px] bg-white rounded-t-2xl md:rounded-2xl shadow-2xl flex flex-col animate-slide-up md:animate-fade-in max-h-[75vh] md:max-h-[600px] z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#15577a] via-[#217ebd] to-[#1e90c7] text-white p-3 md:p-4 rounded-t-2xl md:rounded-t-2xl flex items-center justify-between">
            <div className="flex-1 pr-2">
              <h3 className="font-bold text-base md:text-lg">
                Koi sawaal hai?
              </h3>
              <p className="text-xs md:text-sm text-white/90 mt-0.5 md:mt-1">
                Apna number aur sawaal chhor dijye, hum WhatsApp pe reply
                karenge.
              </p>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setSubmitError(null);
              }}
              className="ml-2 md:ml-4 p-1 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
              aria-label="Chat band karo"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col p-3 md:p-6 overflow-y-auto"
          >
            {/* WhatsApp Phone Number Field */}
            <div className="mb-3 md:mb-4">
              <label
                htmlFor="phone"
                className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2"
              >
                Apka WhatsApp Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                required
              />
              <p className="mt-0.5 md:mt-1 text-xs text-gray-500">
                Hum isi number pe reply karenge
              </p>
            </div>

            {/* User Query Field */}
            <div className="mb-3 md:mb-6">
              <label
                htmlFor="query"
                className="block text-xs md:text-sm font-semibold text-gray-700 mb-1.5 md:mb-2"
              >
                Apka Sawaal
              </label>
              <textarea
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Yahan apna sawaal likhein…"
                rows={3}
                className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                required
              />
            </div>

            {/* Error Message */}
            {submitError && (
              <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-xs md:text-sm text-red-600">{submitError}</p>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              disabled={!isFormValid || isSubmitting}
              className="w-full text-sm md:text-base py-2 md:py-2.5"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
