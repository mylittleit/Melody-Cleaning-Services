"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, Clock, Facebook, Instagram, Linkedin, CalendarRange, FileText, MapPin } from "lucide-react"
import { FaTiktok } from "react-icons/fa"

export default function ContactPage() {
  const [alert, setAlert] = useState<"success" | "error" | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("success")) setAlert("success")
    if (params.get("error")) setAlert("error")
  }, [])

  return (
    <>
      <section className="page-header">
        <Image src="/Contact.png" alt="Contact Us" fill className="object-cover" />
        <div className="page-header-content">
          <h1 className="text-4xl font-bold text-white md:text-5xl">CONTACT US</h1>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Methods of Contact</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Booking, Quote, Hours */}
            {[{
              icon: CalendarRange,
              title: "Book Online",
              desc: "Fill out our online booking form to request our services at your convenience.",
              link: "/book",
              btn: "Book"
            }, {
              icon: FileText,
              title: "Request A Quote",
              desc: "Get a personalised quote for your specific cleaning needs without any obligation.",
              link: "/book",
              btn: "Quote"
            }, {
              icon: Clock,
              title: "Hours of Operation",
              desc: "Monday - Sunday\n8:00am - 10:00pm",
              link: "/book",
              btn: "Schedule"
            }].map(({ icon: Icon, title, desc, link, btn }, i) => (
              <Card className="text-center" key={i}>
                <CardHeader className="flex flex-col items-center">
                  <Icon className="h-12 w-12 text-primary" />
                  <CardTitle className="text-xl text-primary">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-gray-600 whitespace-pre-line">{desc}</p>
                  <Button className="bg-primary text-secondary hover:bg-primary/90">
                    <Link href={link}>{btn}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2">
          {[{
            icon: Mail,
            title: "Email Us",
            value: "melodycleaningservices@yahoo.com",
            href: "mailto:melodycleaningservices@yahoo.com",
            note: "We aim to respond to all emails within 24 hours."
          }, {
            icon: Phone,
            title: "Call Us",
            value: "07453581984",
            href: "tel:07453581984",
            note: "Available during our business hours."
          }].map(({ icon: Icon, title, value, href, note }, i) => (
            <Card key={i}>
              <CardHeader className="flex items-center">
                <Icon className="mr-2 h-6 w-6 text-primary" />
                <CardTitle className="text-xl text-primary">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  <a href={href} className="hover:text-primary">{value}</a>
                </p>
                <p className="mt-2 text-sm text-gray-500">{note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container grid grid-cols-1 gap-8 md:grid-cols-2">
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
            <p className="mb-8 text-gray-600">We also cater to clients further afield.</p>

            <div className="flex items-center">
              <Clock className="mr-2 h-6 w-6 text-primary" />
              <h3 className="mb-4 text-2xl font-bold text-primary">Opening Hours</h3>
            </div>
            <p className="text-gray-600">
              Monday - Sunday<br />8:00am - 10:00pm
            </p>

            <div className="mt-8">
              <h3 className="mb-4 flex items-center text-2xl font-bold text-primary">Connect With Us</h3>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, link: "https://www.facebook.com/profile.php?id=61575544748505" },
                  { icon: Instagram, link: "https://www.instagram.com/melodycleaningservices" },
                  { icon: Linkedin, link: "https://www.linkedin.com/in/melodycleaningservices" },
                  { icon: FaTiktok, link: "https://www.tiktok.com/@melodycleaningservices" },
                ].map(({ icon: Icon, link }, i) => (
                  <Link
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-primary p-3 text-secondary hover:bg-primary/90"
                  >
                    <Icon className="h-6 w-6" />
                    <span className="sr-only">Social</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto max-w-3xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-primary">Send Us a Message</h2>

          {alert === "success" && (
            <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-800">Message sent successfully!</div>
          )}
          {alert === "error" && (
            <div className="mb-6 rounded-lg bg-red-100 p-4 text-red-800">Error sending message. Try again.</div>
          )}

          <form className="space-y-6 bg-white p-8 shadow-md rounded-lg" method="POST" action="/api/submit-contact">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">Your Name</label>
                <input type="text" name="name" required className="w-full rounded border border-gray-300 p-2" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">Your Email</label>
                <input type="email" name="email" required className="w-full rounded border border-gray-300 p-2" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium">Subject</label>
              <input type="text" name="subject" required className="w-full rounded border border-gray-300 p-2" />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
              <textarea name="message" rows={6} required className="w-full rounded border border-gray-300 p-2" />
            </div>
            <div className="text-center">
              <Button type="submit" className="bg-primary text-secondary px-8 py-2 hover:bg-primary/90">SUBMIT</Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
