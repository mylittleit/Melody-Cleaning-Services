"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default function WhatsAppButton() {
  const phoneNumber = "447453581984"
  const message = "Hello! I'm interested in your cleaning services."

  const handleWhatsAppClick = () => {
    // 🎯 CONVERSION TRACKING - WhatsApp Button Click
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      // Google Ads Conversion
      window.gtag("event", "conversion", {
        send_to: "AW-17036896370/whatsapp_click",
        value: 1.0,
        currency: "GBP",
        transaction_id: `whatsapp_${Date.now()}`,
      })

      // Google Analytics Event
      window.gtag("event", "click", {
        event_category: "engagement",
        event_label: "whatsapp_button",
        value: 1,
      })

      // GTM Custom Event
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "whatsapp_click",
          button_type: "whatsapp",
          conversion_value: 1,
        })
      }
    }

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      size="icon"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}
