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
      // Google Ads Conversion - Create a separate conversion action for WhatsApp clicks
      window.gtag("event", "conversion", {
        send_to: "AW-17036896370/whatsapp_contact", // You'll need to create this conversion action
        value: 25.0, // Lower value than booking form
        currency: "GBP",
        transaction_id: `whatsapp_${Date.now()}`,
      })

      // Enhanced Conversion Event for GA4
      window.gtag("event", "contact", {
        method: "whatsapp",
        currency: "GBP",
        value: 25.0,
        event_category: "engagement",
        event_label: "whatsapp_click",
      })

      // GTM Custom Event
      if (window.dataLayer) {
        window.dataLayer.push({
          event: "whatsapp_contact",
          contact_method: "whatsapp",
          conversion_value: 25,
          currency: "GBP",
        })
      }

      console.log("Conversion tracking fired for WhatsApp click")
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
