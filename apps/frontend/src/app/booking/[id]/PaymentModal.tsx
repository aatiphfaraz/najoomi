import React from "react";
import Button from "@/app/components/ui/Button";
import { load } from "@cashfreepayments/cashfree-js";


interface PaymentModalProps {
  onClose: () => void;
  price: string;
  practitionerId: string;
  date: string;
  slot: string;
}

let cashfree: { checkout: (arg0: { paymentSessionId: string; redirectTarget: string; }) => void; };

const initializeSDK = async function () {
  cashfree = await load({
    mode: "production"
  });
}
initializeSDK();

const PLATFORM_FEE = 10;

const PaymentModal: React.FC<PaymentModalProps> = ({

  onClose,
  price,
  practitionerId,
  date,
  slot,
}) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  // Phone validation: Accepts Indian (+91XXXXXXXXXX, XXXXXXXXXX) and International (+<countrycode><number>)
  // function isPhoneValid(phone: string): boolean {
  //   // Remove spaces, dashes, parentheses
  //   const sanitized = phone.replace(/[\s\-()]/g, "");
  //   // Indian: +91XXXXXXXXXX or XXXXXXXXXX (10 digits, may start with 0)
  //   const indian = /^(\+91)?[6-9]\d{9}$/;
  //   // International: +<countrycode><number> (min 10 digits after +)
  //   const intl = /^\+\d{10,15}$/;
  //   return indian.test(sanitized) || intl.test(sanitized);
  // }

  // Optionally sanitize phone before sending to backend
  // function sanitizePhone(phone: string): string {
  //   return phone.replace(/[\s\-()]/g, "");
  // }
  const [touched, setTouched] = React.useState<{ name: boolean; email: boolean; phone: boolean }>({ name: false, email: false, phone: false });

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // function isEmailValid(email: string): boolean {
  //   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // }
  function isFormValid(): boolean {
    return name.trim() !== "" && phone !== "";
  }

  async function handlePayment() {
    setLoading(true);
    // Sanitize phone before sending
    // const safePhone = sanitizePhone(phone);
    // if (!isPhoneValid(safePhone)) {
    //   setError("Please enter a valid phone number. Example: +919090407368, 9090407368, or +16014635923");
    //   setLoading(false);
    //   return;
    // }
    setError(null);
    try {
      const res = await fetch('/api/payment-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          amount: Number(price) + PLATFORM_FEE,
          practitioner_id: practitionerId,
          date,
          slot,
          // Add other required fields if needed
        }),
      });
      const data = await res.json();
      if (res.ok && data.payment_session_id) {
        const checkoutOptions = {
          paymentSessionId: data.payment_session_id,
          redirectTarget: "_self",
        };
        cashfree.checkout(checkoutOptions);
        // Redirect to payment link (adjust if your backend returns a different URL)
        // window.location.href = `https://pay.najoomi.in/pay?session_id=${data.payment_session_id}`;
      } else {
        setError(data.error || 'Failed to create payment session.');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl border border-[#f6e9c0] max-w-md w-full p-8 animate-fade-in flex flex-col gap-6">
        {/* Decorative Islamic/Magical Touches */}
        <svg className="absolute -top-4 -left-4 opacity-30" width="48" height="48" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="2" fill="#FFD700" /><g opacity="0.7"><circle cx="8" cy="40" r="1" fill="#E5C07B" /><circle cx="44" cy="8" r="1.5" fill="#F6E27A" /></g></svg>
        <svg className="absolute -bottom-4 -right-4 opacity-30" width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="1.2" fill="#FFD700" /><g opacity="0.6"><circle cx="28" cy="6" r="0.8" fill="#E5C07B" /></g></svg>
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold text-[#15577a] mb-2 text-center">Complete Your Booking</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={e => {
            if (typeof window.gtag === 'function') {
              window.gtag('event', 'PaymentInitiated', {
                'send_to': 'AW-17124744565/2p2SCPjk_s4aEPW62-U_',
                'value': 1.0,
                name,
                email,
                phone
              });
            }
            if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
              window.fbq('trackCustom', 'PaymentInitiated', {
                name,
                email,
                phone
              });
            }
            e.preventDefault();
            setTouched({ name: true, email: true, phone: true });
            if (isFormValid()) {
              handlePayment();
            }
          }}
        >
          <div>
            <label className="block text-sm font-semibold text-primary mb-1">Name <span className="text-red-500">*</span></label>
            <input
              className={`w-full px-4 py-2 rounded-lg border ${touched.name && !name ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-gold`}
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              onBlur={() => setTouched({ ...touched, name: true })}
              required
            />
            {touched.name && !name && (
              <div className="text-xs text-red-500 mt-1">Name is required.</div>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-1">Email</label>
            <input
              className={`w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-gold`}
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onBlur={() => setTouched({ ...touched, email: true })}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-1">Phone Number <span className="text-red-500">*</span></label>
            <input
              className={`w-full px-4 py-2 rounded-lg border ${touched.phone && !phone ? 'border-red-400' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-brand-gold`}
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              onBlur={() => setTouched({ ...touched, phone: true })}
              required
            />
            {touched.phone && !phone && (
              <div className="text-xs text-red-500 mt-1">Phone number is required.</div>
            )}
            {/* {touched.phone && phone && !isPhoneValid(phone) && (
              <div className="text-xs text-red-500 mt-1">Please enter a valid phone number. Example: +919090407368, 9090407368, or +16014635923</div>
            )} */}
          </div>
          {/* Price Summary Card */}
          <div className="bg-[#fffde6] rounded-xl p-4 shadow border border-[#fde68a] flex flex-col gap-2 mt-2">
            <div className="flex justify-between font-semibold text-gray-700">
              <span>Session Fee</span>
              <span>₹{price}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Platform Fee</span>
              <span>₹{PLATFORM_FEE}</span>
            </div>
            <div className="border-t border-[#fde68a] my-1" />
            <div className="flex justify-between font-bold text-lg text-[#15577a]">
              <span>Total</span>
              <span>₹{Number(price) + PLATFORM_FEE}</span>
            </div>
          </div>
          {error && <div className="text-red-600 text-center mb-2">{error}</div>}
          <Button
            variant="primary"
            className="w-full mt-4 text-lg font-bold"
            type="submit"
            disabled={loading}
          >
            {loading ? "Processing..." : "Confirm and Pay"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
