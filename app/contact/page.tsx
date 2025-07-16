"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Clock, Facebook, Instagram, Linkedin, CalendarRange, FileText, MapPin } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    if (searchParams.get("success") === "true") {
      setShowSuccess(true)
    }
    if (searchParams.get("error") === "true") {
      setShowError(true)
    }
  }, [searchParams])

  return (
    <>
      {/* Hero Banner */}
      <section className="page-header">
        <Image src="/placeholder.svg?height=800&width=1600" alt="Contact Us" fill className="object-cover" />
        <div className="page-header-content">
          <h1 className="text-4xl font-bold text-white md:text-5xl">CONTACT US</h1>
        </div>
      </section>

      {/* Methods of Contact */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Methods of Contact</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <CalendarRange className="h-12 w-12 text-primary" />
                <CardTitle className="text-xl text-primary">Book Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  Fill out our online booking form to request our services at your convenience.
                </p>
                <Button className="bg-primary text-mint hover:bg-primary/90">
                  <Link href="/book-online">Book</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <FileText className="h-12 w-12 text-primary" />
                <CardTitle className="text-xl text-primary">Request A Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  Get a personalised quote for your specific cleaning needs without any obligation.
                </p>
                <Button className="bg-primary text-mint hover:bg-primary/90">
                  <Link href="/book-online">Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <Clock className="h-12 w-12 text-primary" />
                <CardTitle className="text-xl text-primary">Hours of Operation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  Monday - Sunday
                  <br />
                  8:00am - 10:00pm
                </p>
                <Button className="bg-primary text-mint hover:bg-primary/90">
                  <Link href="/book-online">Schedule</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Details - Moved Email and Call Us under the Methods of Contact */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card>
              <CardHeader className="flex items-center">
                <Mail className="mr-2 h-6 w-6 text-primary" />
                <CardTitle className="text-xl text-primary">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  <a href="mailto:contactmelodycleaning@gmail.com" className="hover:text-primary">
                    contactmelodycleaning@gmail.com
                  </a>
                </p>
                <p className="mt-2 text-sm text-gray-500">We aim to respond to all emails within 24 hours.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex items-center">
                <Phone className="mr-2 h-6 w-6 text-primary" />
                <CardTitle className="text-xl text-primary">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  <a href="tel:07453581984" className="hover:text-primary">
                    07453581984
                  </a>
                </p>
                <p className="mt-2 text-sm text-gray-500">Available during our business hours.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map and Hours */}
      <section className="bg-white py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4865204.804292891!2d-7.7218376684090815!3d54.12416090494634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2sus!4v1714665600000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div>
              <div className="flex items-center">
                <MapPin className="mr-2 h-6 w-6 text-primary" />
                <h3 className="mb-6 text-2xl font-bold text-primary">Our Service Area</h3>
              </div>
              <p className="mb-4 text-gray-600">We provide our cleaning services in:</p>
              <ul className="mb-8 space-y-2 text-gray-600">
                <li>• London</li>
                <li>• Kent</li>
                <li>• M25</li>
              </ul>
              <p className="mb-8 text-gray-600">
                We also cater to clients further afield, ensuring flexibility and availability wherever our expertise is
                needed.
              </p>
              <div className="flex items-center">
                <Clock className="mr-2 h-6 w-6 text-primary" />
                <h3 className="mb-4 text-2xl font-bold text-primary">Opening Hours</h3>
              </div>
              <p className="text-gray-600">
                Monday - Sunday
                <br />
                8:00am - 10:00pm
              </p>
              <div className="mt-8">
                <h3 className="mb-4 flex items-center text-2xl font-bold text-primary">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61575544748505"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary p-3 text-mint hover:bg-primary/90"
                  >
                    <Facebook className="h-6 w-6" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="https://www.instagram.com/melodycleaningservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary p-3 text-mint hover:bg-primary/90"
                  >
                    <Instagram className="h-6 w-6" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/melodycleaningservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary p-3 text-mint hover:bg-primary/90"
                  >
                    <Linkedin className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@melodycleaningservices"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary p-3 text-mint hover:bg-primary/90"
                  >
                    <FaTiktok className="h-6 w-6" />
                    <span className="sr-only">TikTok</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-primary">Send Us a Message</h2>

            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4 text-center">
                <p className="text-green-700 font-semibold">Thank you! Your message has been sent successfully.</p>
                <p className="text-green-600 text-sm">We'll get back to you within 24 hours.</p>
              </div>
            )}

            {/* Error Message */}
            {showError && (
              <div className="mb-6 rounded-lg bg-red-50 border border-red-200 p-4 text-center">
                <p className="text-red-700 font-semibold">Sorry, there was an error sending your message.</p>
                <p className="text-red-600 text-sm">Please try again or contact us directly.</p>
              </div>
            )}

            <div className="form-container rounded-lg bg-white p-8 shadow-md">
              <form className="space-y-6" action="/api/submit-contact" method="POST">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <Button type="submit" className="rounded-full bg-primary px-8 py-2 text-mint hover:bg-primary/90">
                    SUBMIT
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
