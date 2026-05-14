import { useEffect } from "react";

// ── Declare gtag globally so TypeScript recognises it ──────────────────────────
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const GA_MEASUREMENT_ID = "G-S152RKH7CX";
const GOOGLE_ADS_ID = "AW-11175451542";

/** Injects the Google Analytics 4 + Google Ads base tags into <head>. */
export function GoogleAnalytics() {
  useEffect(() => {
    // Avoid double-injection (e.g. React Strict Mode)
    if (document.getElementById("gtag-base")) return;

    // 1 – GA4 script
    const scriptGA = document.createElement("script");
    scriptGA.id = "gtag-base";
    scriptGA.async = true;
    scriptGA.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(scriptGA);

    // 2 – Google Ads script (uses the same gtag.js loader)
    const scriptAds = document.createElement("script");
    scriptAds.async = true;
    scriptAds.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
    document.head.appendChild(scriptAds);

    // 3 – Initialise dataLayer and gtag()
    window.dataLayer = window.dataLayer || [];
    window.gtag = function (...args: unknown[]) {
      window.dataLayer.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);
    window.gtag("config", GOOGLE_ADS_ID);
  }, []);

  return null;
}

/**
 * Call this function whenever the visitor clicks a WhatsApp button.
 * It fires the Google Ads conversion event "Botão do Whatsapp".
 */
export function trackWhatsAppConversion() {
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-11175451542/QMqTCK2UhLcYEJa379Ap",
    });
  }
}
