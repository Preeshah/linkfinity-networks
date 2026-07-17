"use client";

import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consentGiven = localStorage.getItem("linkfinity-cookie-consent");
    if (!consentGiven) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("linkfinity-cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-gray-200 bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
            <CheckCircle2 className="h-4 w-4 text-blue-600" />
            Your privacy matters
          </div>
          <p className="mt-1 text-sm text-gray-600">
            We use cookies to enhance your experience, remember your preferences, and understand how visitors use our site.
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> Secure and essential
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-green-600" /> Improved site performance
            </span>
          </div>
        </div>

        <button
          onClick={accept}
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Accept Cookies
        </button>
      </div>
    </div>
  );
}
