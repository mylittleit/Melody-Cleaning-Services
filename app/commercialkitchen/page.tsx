'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const HeroSection = () => (
  <section className="relative w-full h-[80vh] bg-black">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
    >
      <source src="/videos/hero-video.mp4" type="video/mp4" />
    </video>
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
      <h1 className="text-4xl font-bold">Commercial Kitchen Cleaning Services</h1>
      <p className="mt-4">Hygiene you can trust, results you can see.</p>
      <div className="mt-6 flex gap-4">
        <a href="#contact" className="bg-primary px-6 py-3 rounded-md text-white">Get a Quote</a>
        <a href="#why" className="border border-white px-6 py-3 rounded-md text-white">Learn More</a>
      </div>
    </div>
  </section>
);

const StickyNav = () => (
  <nav className="sticky top-0 bg-white z-50 shadow-sm border-b">
    <div className="container mx-auto flex justify-center gap-8 py-2 text-sm font-medium">
      <a href="#services" className="hover:text-primary">WHAT WE DO</a>
      <a href="#why" className="hover:text-primary">WHY CHOOSE US</a>
      <a href="#gallery" className="hover:text-primary">GALLERY</a>
      <a href="#faqs" className="hover:text-primary">FAQs</a>
      <a href="#contact" className="hover:text-primary">CONTACT US</a>
    </div>
  </nav>
);

const services = [
  "Tile & Floor Cleaning",
  "Oven & Cooking Equipment Cleaning",
  "Grease Trap Cleaning",
  "Hood & Extraction System Cleaning",
  "Cold Room & Freezer Cleaning",
  "Worktops & Food Prep Surfaces",
  "Sink & Drain Cleaning",
  "Wall Cladding Cleaning",
  "Appliance Exterior Detailing",
  "Waste Area Sanitisation",
];

const ServicesSection = () => (
  <section id="services" className="py-16 bg-gray-50 text-center">
    <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 justify-center">
      {services.map((service, index) => (
        <div
          key={index}
          className="w-36 h-36 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm hover:scale-105 transition duration-300 relative group shadow-lg"
        >
          <span>{service}</span>
          <div className="absolute top-full mt-2 bg-white text-black p-2 rounded-md shadow hidden group-hover:block text-xs">
            Details about {service.toLowerCase()}.
          </div>
        </div>
      ))}
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section id="why" className="py-16 bg-white text-center">
    <h2 className="text-3xl font-semibold mb-10">Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {["Certified and Insured", "Compliant with Food Safety Protocols", "24hr Scheduling", "Affordable Pricing"].map((reason, i) => (
        <div
          key={i}
          className="p-6 bg-gray-100 rounded-lg shadow-md flex flex-col items-center justify-center transform rotate-1 hover:rotate-0 transition duration-300"
        >
          <div className="bg-purple-600 w-12 h-12 rounded-[40%] flex items-center justify-center text-white text-xl font-bold mb-4">
            {reason.charAt(0)}
          </div>
          <p>{reason}</p>
        </div>
      ))}
    </div>
  </section>
);

const GallerySection = () => (
  <section id="gallery" className="py-16 bg-gray-50 text-center">
    <h2 className="text-3xl font-semibold mb-8">Gallery</h2>
    <div className="flex overflow-x-auto gap-4 px-4">
      {[1, 2, 3, 4, 5].map((n) => (
        <Image
          key={n}
          src={`/images/gallery${n}.jpg`}
          alt={`Gallery ${n}`}
          width={300}
          height={200}
          className="rounded-lg shadow-md"
        />
      ))}
      {["video1.mp4", "video2.mp4"].map((src, i) => (
        <video key={i} controls className="w-80 h-48 rounded-lg">
          <source src={`/videos/${src}`} type="video/mp4" />
        </video>
      ))}
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-16 bg-white text-center">
    <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
    <div className="overflow-hidden w-full max-w-xl mx-auto text-lg font-medium">
      <marquee behavior="scroll" direction="left" scrollamount="5">
        “The team at Melody Cleaning transformed our kitchen. Spotless and professional!” &nbsp;&nbsp;&nbsp; “Reliable and efficient – I wouldn’t trust anyone else with my kitchen!” &nbsp;&nbsp;&nbsp; “Affordable and fast, thank you Melody Cleaning Services!”
      </marquee>
      <div className="mt-4">
        <video controls className="w-full max-w-md mx-auto">
          <source src="/videos/testimonial.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
);

const faqs = [
  {
    q: "What areas do you cover?",
    a: "We currently serve Commercial kitchens and Restaurants across London and surrounding regions in the UK. For larger projects, we’re happy to travel beyond.",
  },
  {
    q: "Do I need to be home or on-site during the cleaning?",
    a: "Not at all! Many of our clients give us access and go about their day. We’re fully insured and trustworthy. You’re also welcome to stay if you prefer.",
  },
  // Add rest of FAQs here
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section id="faqs" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((item, i) => (
          <div key={i} className="mb-4">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left p-4 bg-white shadow rounded-md flex justify-between items-center"
            >
              <span>{item.q}</span>
              <span>{openIndex === i ? "−" : "+"}</span>
            </button>
            {openIndex === i && <div className="p-4 bg-white mt-1 rounded-md text-sm">{item.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-16 bg-white">
    <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <iframe
        src="https://www.google.com/maps?q=London,+UK&output=embed"
        width="100%"
        height="300"
        className="border-0 rounded-md"
        allowFullScreen
        loading="lazy"
      ></iframe>
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-medium mb-4">Request A Quote</h3>
        <a href="/book" className="text-primary underline mb-2">Fill Our Booking Form</a>
        <p className="mb-1">Call us: <a href="https://wa.me/447000000000" className="text-primary">+44 7000 000000</a></p>
        <p>Email: <a href="mailto:info@melodycleaningservices.com" className="text-primary">info@melodycleaningservices.com</a></p>
      </div>
    </div>
  </section>
);

export default function CommercialKitchenCleaningPage() {
  return (
    <div>
      <HeroSection />
      <StickyNav />
      <ServicesSection />
      <WhyChooseUs />
      <GallerySection />
      <Testimonials />
      <FAQSection />
      <ContactSection />
    </div>
  );
}

