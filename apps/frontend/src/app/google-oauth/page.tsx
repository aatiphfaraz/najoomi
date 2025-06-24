"use client";
import React from "react";

const GOOGLE_CLIENT_ID = "727044951118-214r44g2kprv9c4eapjngghtpo7i73te.apps.googleusercontent.com";
const SCOPES = [
  "https://www.googleapis.com/auth/calendar",
  "https://www.googleapis.com/auth/calendar.events",
].join(" ");

function getAuthUrl() {
  // if (typeof window === "undefined") return "#";
  const redirectUri = "https://www.najoomi.in/api/auth/callback/google";
  const params = new URLSearchParams({
    client_id: GOOGLE_CLIENT_ID || "",
    redirect_uri: redirectUri,
    response_type: "code",
    access_type: "offline",
    prompt: "consent",
    scope: SCOPES,
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
}

export default function GoogleOAuthPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100">
      <div className="bg-white/80 rounded-xl shadow-lg p-8 mt-16 border border-yellow-200 max-w-lg w-full flex flex-col items-center">
        <div className="mb-4 text-3xl font-bold text-yellow-900 flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="inline-block align-middle text-yellow-400" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a9.93 9.93 0 0 0-4.36.98A10 10 0 1 0 22 12c0-.34-.02-.67-.05-1a8 8 0 1 1-7.95-9z" fill="currentColor" opacity="0.7" /><circle cx="18.5" cy="6.5" r="1.5" fill="#fbbf24" /></svg>
          Google Calendar OAuth
        </div>
        <p className="mb-6 text-yellow-800 text-center">Login with your Google account to generate a fresh token for Najoomi's calendar integration.<br /><span className="text-xs opacity-70">(You will copy the token JSON and paste it into your .env file.)</span></p>
        <a
          href={getAuthUrl()}
          className="px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-semibold rounded-lg shadow flex items-center gap-2 transition"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="inline-block align-middle" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#fff" /><path d="M21.805 12.082c0-.638-.057-1.252-.164-1.84H12v3.481h5.495a4.7 4.7 0 0 1-2.037 3.085v2.56h3.295c1.93-1.779 3.052-4.398 3.052-7.286z" fill="#4285F4" /><path d="M12 22c2.43 0 4.47-.81 5.96-2.19l-3.295-2.56c-.91.61-2.07.97-3.365.97-2.587 0-4.782-1.75-5.57-4.09H2.57v2.58A9.998 9.998 0 0 0 12 22z" fill="#34A853" /><path d="M6.43 13.13A5.996 5.996 0 0 1 6 12c0-.39.07-.77.13-1.13v-2.58H2.57A9.998 9.998 0 0 0 2 12c0 1.64.39 3.19 1.07 4.53l3.36-2.58z" fill="#FBBC05" /><path d="M12 6.68c1.32 0 2.5.45 3.43 1.33l2.57-2.57C16.47 3.81 14.43 3 12 3A9.998 9.998 0 0 0 2.57 7.87l3.36 2.58C7.22 8.43 9.41 6.68 12 6.68z" fill="#EA4335" /></svg>
          Login with Google
        </a>
      </div>
    </div>
  );
}
