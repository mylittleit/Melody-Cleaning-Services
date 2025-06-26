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
      <source src="/CommercialKitchenHero.mp4" type="video/mp4" />
    </video>
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
        <a href="#why" className="border border-white px-6 py-3 rounded-md text-white">Learn More</a>
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
  { title: "Tile & Floor Cleaning", details: "Deep cleaning and polishing of tiled and non-slip floors." },
  { title: "Oven & Cooking Equipment Cleaning", details: "Degreasing and sanitizing of ovens, fryers, and grills." },
  { title: "Grease Trap Cleaning", details: "Thorough grease trap pumping and odor elimination." },
  { title: "Hood & Extraction System Cleaning", details: "Cleaning of hoods, filters, and ductwork for fire safety." },
  { title: "Cold Room & Freezer Cleaning", details: "Mold, spill, and odor control in cold storage areas." },
  { title: "Worktops & Food Prep Surfaces", details: "Sanitization of prep counters to meet food hygiene standards." },
  { title: "Sink & Drain Cleaning", details: "Unclogging and disinfection of sinks and drains." },
  { title: "Wall Cladding Cleaning", details: "Removal of grease, splashes, and buildup on kitchen walls." },
  { title: "Appliance Exterior Detailing", details: "Wiping and polishing of all visible appliance surfaces." },
  { title: "Waste Area Sanitisation", details: "Cleaning and disinfection of bins and disposal zones." },
];

const ServicesSection = () => (
  <section id="services" className="py-16 bg-gray-50 text-center">
    <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 justify-center max-w-6xl mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative w-32 h-32 bg-[#3a0162] text-[#9aedb6] rounded-full flex items-center justify-center text-sm hover:scale-105 transition duration-300 group"
        >
          <span className="z-10 cursor-pointer text-center px-2">{service.title}</span>
          <div className="absolute inset-0 bg-white text-[#3a0162] opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 rounded-full flex items-center justify-center text-xs text-center">
            {service.details}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section id="why" className="py-16 bg-white text-center">
    <h2 className="text-3xl font-semibold mb-10" style={{ color: '#9aedb6' }}>Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {["Certified and Insured", "Compliant with Food Safety Protocols", "24hr Scheduling", "Affordable Pricing"].map((reason, i) => (
        <div
          key={i}
          className="p-6 bg-[#3a0162] rounded-[1300px] shadow-md flex flex-col items-center justify-center transform rotate-1 hover:rotate-0 transition duration-300"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden mb-4">
            <img src={`/images/icon${i + 1}.png`} alt={reason} className="w-full h-full object-cover" />
          </div>
          <p className="text-[#9aedb6]">{reason}</p>
        </div>
      ))}
    </div>
  </section>
);

);

const GallerySection = () => (
  <section id="gallery" className="py-16 bg-gray-50 text-center">
    <h2 className="text-3xl font-semibold mb-8">Gallery</h2>
    <div className="flex overflow-x-scroll gap-4 px-4 scrollbar-hide">
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

const testimonials = [
  {
    text: "I’m convinced Melody Cleaning Services doesn’t just clean, they perform miracles. Our kitchen looked like it survived a cooking tornado after a 250-guest wedding prep. By morning, it sparkled like it had never been used. If I didn’t own the place, I would’ve thought we moved venues!",
    name: "Chef Marco V., Owner of The Midnight Spoon"
  },
  {
    text: "I planned every inch of my wedding, except the cleanup. I thought I’d cry walking into the venue the next day. Instead, Melody Cleaning had it looking better than when I booked it! Even the confetti in my husband’s shoe was gone. 10 stars if I could!",
    name: "Mirabel A., Bridezilla turned Believer"
  },
  {
    text: "My Airbnb guests left ketchup in places I can’t legally describe. Melody Cleaning came in like a SWAT team and handled everything while I drank coffee in fear. Now the place smells like eucalyptus and success.",
    name: "Jordan K., Airbnb Superhost (barely)"
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  return (
    <section className="relative overflow-hidden py-16 text-white text-center">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/TestimonialHeader.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (for contrast if needed) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-xl mx-auto cursor-pointer px-4" onMouseEnter={() => setIndex((prev) => (prev + 1) % testimonials.length)}>
        <h2 className="text-3xl font-semibold mb-6">Why Our Clients Choose Us</h2>
        <div className="text-6xl text-[#9AEDB6] mb-4">“</div>
        <p className="text-lg italic">{testimonials[index].text}</p>
        <p className="mt-4 font-bold text-[#9AEDB6]">{testimonials[index].name}</p>
      </div>
    </section>
  );
};

const faqs = [
  { q: "What areas do you cover?", a: "We currently serve Commercial kitchens and Restaurants across London and surrounding regions in the UK. For larger projects, we’re happy to travel beyond." },
  { q: "Do I need to be home or on-site during the cleaning?", a: "Not at all! Many of our clients give us access and go about their day. We’re fully insured and trustworthy. You’re also welcome to stay if you prefer." },
  { q: "How long does cleaning usually take?", a: "It depends on the size and services booked, but most jobs are completed within a few hours." },
  { q: "Are your products eco-friendly?", a: "Yes, we use certified eco-friendly and food-safe cleaning products." },
  { q: "Do you offer weekend or night cleaning?", a: "Absolutely! We work 24/7 to meet your needs." },
  { q: "What’s your pricing model?", a: "We provide customized quotes based on scope and frequency." },
  { q: "Is your team trained?", a: "All our cleaners are trained, certified and undergo regular updates." },
  { q: "Can I schedule recurring cleanings?", a: "Yes, we offer flexible recurring cleaning packages." },
  { q: "Do you handle emergency cleanups?", a: "Yes, we offer rapid-response emergency services." },
  { q: "What if I’m not satisfied?", a: "We guarantee satisfaction – we’ll make it right or refund." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section
      id="faqs"
      className="py-16 bg-gray-100 bg-[url('/images/faq-bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <h2 className="text-3xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {faqs.map((item, i) => (
          <div key={i}>
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
  <section id="contact" className="py-16 bg-[#3a0162] text-white">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <h3 className="text-xl font-medium mb-4">Request A Quote</h3>
        <a href="/book" className="text-white underline mb-2 inline-block">Fill Our Booking Form</a>
        <p className="mb-1">Call us: <a href="https://wa.me/447000000000" className="text-white">+44 7000 000000</a></p>
        <p>Email: <a href="mailto:info@melodycleaningservices.com" className="text-white">info@melodycleaningservices.com</a></p>
      </div>
      <iframe
        src="https://www.google.com/maps?q=London,+UK&output=embed"
        width="100%"
        height="300"
        className="border-0 rounded-md"
        allowFullScreen
        loading="lazy"
      ></iframe>
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
