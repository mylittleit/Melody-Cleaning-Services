"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default function EnhancedPhoneTracker() {
  useEffect(() => {
    const handlePhoneClick = (event: Event) => {
      const target = event.target as HTMLAnchorElement;
      const phoneNumber = target.href.replace("tel:", "");

      if (typeof window !== "undefined" && window.gtag) {
        // Fire Google Ads conversion for phone calls
        window.gtag("event", "conversion", {
          send_to: "AW-17036896370/phone_call_conversion",
          value: 1.0,
          currency: "GBP",
        });

        // Track as custom event for Google Analytics
        window.gtag("event", "phone_click", {
          event_category: "Lead",
          event_label: `Phone Call - ${phoneNumber}`,
          value: 1,
        });

        console.log(`📞 Phone click tracked: ${phoneNumber}`);
      }
    };

    const handleWhatsAppClick = (event: Event) => {
      if (typeof window !== "undefined" && window.gtag) {
        // Fire Google Ads conversion for WhatsApp
        window.gtag("event", "conversion", {
          send_to: "AW-17036896370/whatsapp_conversion",
          value: 1.0,
          currency: "GBP",
        });

        // Track as custom event for Google Analytics
        window.gtag("event", "whatsapp_click", {
          event_category: "Lead",
          event_label: "WhatsApp Contact - Melody Cleaning",
          value: 1,
        });

        console.log("💬 WhatsApp click tracked");
      }
    };

    // Add event listeners to phone links
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach((link) => {
      link.addEventListener("click", handlePhoneClick);
    });

    // Add event listeners to WhatsApp links
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp.com"]');
    whatsappLinks.forEach((link) => {
      link.addEventListener("click", handleWhatsAppClick);
    });

    // Cleanup function
    return () => {
      phoneLinks.forEach((link) => {
        link.removeEventListener("click", handlePhoneClick);
      });
      whatsappLinks.forEach((link) => {
        link.removeEventListener("click", handleWhatsAppClick);
      });
    };
  }, []);

  return null;
}
