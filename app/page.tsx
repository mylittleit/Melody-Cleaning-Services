import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Clock, Phone, Mail, Facebook, Instagram, Linkedin, Leaf, Users } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="hero-section relative h-[600px] w-full overflow-hidden">
        <video 
          className="absolute top-0 left-0 h-full w-full object-cover"
          src="/Hero.mp4" 
          autoPlay
          loop
          muted
          playsInline
        />
      </section>

      {/* Dual Button Section */}
      <section className="bg-white py-8">
        <div className="container flex flex-col items-center justify-center space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button
            size="lg"
            variant="outline"
            className="w-full border-primary text-primary hover:bg-primary hover:text-secondary sm:w-auto"
          >
            <Link href="/contact">We Are Hiring</Link>
          </Button>
          <Button size="lg" className="w-full bg-primary text-secondary hover:bg-primary/90 sm:w-auto">
            <Link href="/services">Our Services</Link>
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
              <Image src="/About.png" alt="About Melody Cleaning Services" fill className="object-cover" />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-4 text-3xl font-bold text-primary">About Us</h2>
              <p className="mb-6 text-gray-700">
                Melody Cleaning Services is a premier cleaning company in the UK, dedicated to providing exceptional
                cleaning solutions for both residential and commercial clients. With our team of experienced
                professionals and commitment to quality, we ensure spotless results every time.
              </p>
              <Button className="self-start bg-primary text-secondary hover:bg-primary/90">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-white py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">Our Services</h2>

          {/* Embedded Stylish Services Section */}
          <section className="services grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div
              className="service-column rounded-lg shadow-lg overflow-hidden h-80 flex flex-col justify-end p-6 text-white"
              style={{
                backgroundImage: "url('/end-of-tenancy.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-2xl font-bold mb-2">End of Tenancy</h3>
              <p>Professional move-out cleaning to help you secure your deposit refund.</p>
            </div>

            <div
              className="service-column rounded-lg shadow-lg overflow-hidden h-80 flex flex-col justify-end p-6 text-white"
              style={{
                backgroundImage: "url('/end-of-construction.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-2xl font-bold mb-2">End of Construction</h3>
              <p>Post-construction cleanup services to make your property ready to use.</p>
            </div>

            <div
              className="service-column rounded-lg shadow-lg overflow-hidden h-80 flex flex-col justify-end p-6 text-white"
              style={{
                backgroundImage: "url('/restaurants-hotels.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-2xl font-bold mb-2">Restaurants and Hotels</h3>
              <p>Specialized hospitality cleaning for flawless guest experiences.</p>
            </div>

            <div
              className="service-column rounded-lg shadow-lg overflow-hidden h-80 flex flex-col justify-end p-6 text-white"
              style={{
                backgroundImage: "url('/deep-clean.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-2xl font-bold mb-2">Deep Clean</h3>
              <p>Extensive deep cleaning to reach every corner and crevice of your space.</p>
            </div>

            <div
              className="service-column rounded-lg shadow-lg overflow-hidden h-80 flex flex-col justify-end p-6 text-white"
              style={{
                backgroundImage: "url('/carpet-cleaning.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-2xl font-bold mb-2">Carpet Cleaning</h3>
              <p>Thorough carpet care to eliminate dirt, stains, and allergens.</p>
            </div>

            <div
              className="service-column rounded-lg shadow-lg overflow-hidden h-80 flex flex-col justify-end p-6 text-white"
              style={{
                backgroundImage: "url('/pre-post-event.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h3 className="text-2xl font-bold mb-2">Pre/Post Event</h3>
              <p>Venue cleaning before and after your special events for a spotless experience.</p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
