'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const services = [
  {
    title: "Tile & Floor Cleaning",
    detail: "We deep-clean tiles and floors to remove grease, stains, and build-up.",
  },
  {
    title: "Oven & Cooking Equipment Cleaning",
    detail: "Sanitising ovens, grills, and equipment to meet health standards.",
  },
  {
    title: "Grease Trap Cleaning",
    detail: "Thorough degreasing and cleaning of grease traps to prevent clogs.",
  },
  {
    title: "Hood & Extraction System Cleaning",
    detail: "Remove grime and improve airflow by cleaning hoods and ducts.",
  },
  {
    title: "Cold Room & Freezer Cleaning",
    detail: "We sanitise cold storage to prevent bacteria and odor buildup.",
  },
  {
    title: "Worktops & Food Prep Surfaces",
    detail: "Disinfection and wipe-down of all preparation areas.",
  },
  {
    title: "Sink & Drain Cleaning",
    detail: "We clear and clean sinks and drains to ensure hygiene.",
  },
  {
    title: "Wall Cladding Cleaning",
    detail: "Degrease and shine wall cladding for a spotless kitchen.",
  },
  {
    title: "Appliance Exterior Detailing",
    detail: "Wipe down and polish appliance exteriors for presentation.",
  },
  {
    title: "Waste Area Sanitisation",
    detail: "Cleaning and disinfection of waste bins and disposal areas.",
  },
];

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
    <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
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

const ServicesSection = () => (
  <section id="services" className="py-16 bg-gray-50 text-center px-4">
    <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
    <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative w-36 h-36 bg-purple-600 text-white rounded-full flex items-center justify-center text-center text-sm font-medium shadow-md hover:scale-105 transition-transform duration-300 group"
        >
          <span>{service.title}</span>
          <div className="absolute inset-0 bg-white text-black rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-xs px-3 text-center">
            {service.detail}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const WhyChooseUs = () => (
  <section id="why" className="py-16 bg-white text-center px-4">
    <h2 className="text-3xl font-semibold mb-10">Why Choose Us</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {["Certified and Insured", "Compliant with Food Safety Protocols", "24hr Scheduling", "Affordable Pricing"].map((text, i) => (
        <div
          key={i}
          className="bg-gray-100 p-6 transform skew-y-3 rounded-[1300px] hover:skew-y-0 transition-all duration-300 shadow-lg"
        >
          <div className="bg-purple-600 text-white text-xl w-12 h-12 flex items-center justify-center rounded-[40%] mx-auto mb-4">
            {text.charAt(0)}
          </div>
          <p>{text}</p>
        </div>
      ))}
    </div>
  </section>
);
