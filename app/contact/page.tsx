import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="hero-section relative h-[300px] w-full">
        <div className="hero-content container flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">CONTACT US</h1>
        </div>
      </section>

      {/* Methods of Contact */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Methods of Contact</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <Image src="/images/book-online.png" alt="Book Online" width={60} height={60} />
                </div>
                <CardTitle className="text-xl text-primary">Book Online</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  Fill out our online booking form to request our services at your convenience.
                </p>
                <Button className="bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Book</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <Image src="/images/request-quote.png" alt="Request A Quote" width={60} height={60} />
                </div>
                <CardTitle className="text-xl text-primary">Request A Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  Get a personalized quote for your specific cleaning needs without any obligation.
                </p>
                <Button className="bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Quote</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  <Clock className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">Hours of Operation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  View our working hours and schedule your cleaning service at a time that suits you.
                </p>
                <Button className="bg-primary text-secondary hover:bg-primary/90">
                  <Link href="/book">Schedule</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <Mail className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4 text-xl text-primary">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  <a href="mailto:info@melodycleaningservices.co.uk" className="hover:text-primary">
                    info@melodycleaningservices.co.uk
                  </a>
                </p>
                <p className="mt-2 text-sm text-gray-500">We aim to respond to all emails within 24 hours.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-col items-center">
                <Phone className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4 text-xl text-primary">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  <a href="tel:+441234567890" className="hover:text-primary">
                    +44 123 456 7890
                  </a>
                </p>
                <p className="mt-2 text-sm text-gray-500">Available during our business hours.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-col items-center">
                <MapPin className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4 text-xl text-primary">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  123 Cleaning Street
                  <br />
                  London, UK
                  <br />
                  SW1A 1AA
                </p>
                <p className="mt-2 text-sm text-gray-500">By appointment only.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map and Hours */}
      <section className="bg-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-md">
              <Image src="/images/uk-map.png" alt="Map" fill className="object-cover" />
            </div>

            <div>
              <h3 className="mb-6 text-2xl font-bold text-primary">Opening Hours</h3>
              <div className="mb-8 space-y-2">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium">Monday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium">Tuesday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium">Wednesday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium">Thursday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium">Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-medium">Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>

              <h3 className="mb-4 text-2xl font-bold text-primary">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/profile.php?id=61575544748505"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary/10 p-3 text-primary hover:bg-primary hover:text-white"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/melodycleaningservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary/10 p-3 text-primary hover:bg-primary hover:text-white"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/melodycleaningservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary/10 p-3 text-primary hover:bg-primary hover:text-white"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://www.tiktok.com/@melodycleaningservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary/10 p-3 text-primary hover:bg-primary hover:text-white"
                >
                  <FaTiktok className="h-6 w-6" />
                  <span className="sr-only">TikTok</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-primary">Send Us a Message</h2>
            <div className="form-container rounded-lg bg-white p-8 shadow-md">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="john.doe@example.com"
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
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full rounded-md border border-gray-300 p-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-primary text-secondary hover:bg-primary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
