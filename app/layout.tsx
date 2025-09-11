import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import EnhancedPhoneTracker from "@/components/enhanced-phone-tracker"
import ConversionDebugPanel from "@/components/conversion-debug-panel"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import ScrollToTop from "@/components/scroll-to-top"

// Ensure NEXT_PUBLIC_SITE_URL always has a protocol for URL() calls
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.melodycleaningservices.co.uk"
const siteUrl = rawSiteUrl.startsWith("http") ? rawSiteUrl : `https://${rawSiteUrl}`

const inter = Inter({ subsets: ["latin"] })
const poppins = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "Melody Cleaning Services | Professional Cleaning in UK",
    template: "%s | Melody Cleaning Services",
  },
  description:
    "Professional cleaning services across the UK. Trusted residential & commercial cleaners with same-day service and 100% satisfaction guarantee.",
  keywords:
    "cleaning services near me, office cleaning UK, deep cleaning services UK, residential cleaning, commercial cleaning, end of tenancy cleaning, Melody Cleaning Services",
  authors: [{ name: "Melody Cleaning Services" }],
  creator: "Melody Cleaning Services",
  publisher: "Melody Cleaning Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Melody Cleaning Services",
    title: "Melody Cleaning Services | Professional Cleaning in UK",
    description: "Professional cleaning services across the UK. Trusted residential & commercial cleaners with same-day service and 100% satisfaction guarantee.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Melody Cleaning Services - Professional Cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Melody Cleaning Services | Professional Cleaning in UK",
    description: "Professional cleaning services across the UK. Trusted residential & commercial cleaners with same-day service and 100% satisfaction guarantee.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TZCBR87T');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Google Ads (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17036896370" strategy="afterInteractive" />
        <Script
          id="google-ads-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17036896370');
            `,
          }}
        />

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-7CNRYTB05B" strategy="afterInteractive" />
        <Script
          id="ga-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-7CNRYTB05B');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} ${poppins.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TZCBR87T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop />
        </Suspense>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Suspense fallback={<div>Loading navbar...</div>}>
              <Navbar />
            </Suspense>
            <main className="flex-1">
              <Suspense fallback={<div>Loading content...</div>}>{children}</Suspense>
            </main>
            <Footer />
            <Suspense fallback={<div>Loading WhatsApp...</div>}>
              <WhatsAppButton />
            </Suspense>
            <Suspense fallback={<div>Loading Phone Tracker...</div>}>
              <EnhancedPhoneTracker />
            </Suspense>
            <ConversionDebugPanel />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
