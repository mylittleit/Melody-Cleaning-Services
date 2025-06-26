'use client'; // Remove if using Pages Router

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CommercialKitchenCleaning() {
  const [faqStates, setFaqStates] = useState<{ [key: number]: boolean }>({});
  const toggleFAQ = (index: number) => {
    setFaqStates((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    const slider = document.querySelectorAll('.testimonial');
    let index = 0;
    const rotate = () => {
      slider.forEach((el) => (el as HTMLElement).style.display = 'none');
      if (slider[index]) (slider[index] as HTMLElement).style.display = 'block';
      index = (index + 1) % slider.length;
      setTimeout(rotate, 4000);
    };
    if (slider.length) rotate();
  }, []);

  const services = [
    { title: 'Hood & Duct Cleaning', desc: 'We remove grease, soot, and contaminants from kitchen ventilation systems.' },
    { title: 'Appliance Cleaning', desc: 'Thorough cleaning of ovens, fryers, and other kitchen equipment.' },
    { title: 'Surface Sanitisation', desc: 'We disinfect countertops, prep stations, and cooking surfaces.' },
    { title: 'Cold Room Cleaning', desc: 'Deep clean for walk-in fridges and freezers with safe methods.' }
  ];

  const faqs = [
    { q: 'What is included in your service?', a: 'We handle all major kitchen components, including ducts, surfaces, and appliances.' },
    { q: 'Do you clean at night?', a: 'Yes. We provide overnight services to minimize business disruption.' },
    { q: 'Is the service certified?', a: 'Yes, we meet all UK hygiene and compliance regulations.' }
  ];

  return (
    <main className="font-sans text-gray-800 bg-white">
      {/* Hero */}
      <section className="bg-[url('/images/kitchen-hero.jpg')] bg-cover bg-center text-center py-24 px-4 relative">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Commercial Kitchen Cleaning</h1>
        <p className="text-lg text-white mb-6">Certified. Compliant. Spotless Results.</p>
        <div className="flex justify-center gap-4">
          <a href="#contact" className="bg-[#6c3483] text-white px-6 py-3 rounded">Get a Quote</a>
          <a href="#overview" className="border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-black transition">Learn More</a>
        </div>
      </section>

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-10 bg-white shadow py-3">
        <ul className="flex justify-center space-x-6 text-sm font-medium">
          {['overview', 'services', 'why-us', 'gallery', 'testimonials', 'faq', 'contact'].map((id) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-purple-600 capitalize">{id.replace('-', ' ')}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Overview */}
      <section id="overview" className="py-16 text-center px-6">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="max-w-3xl mx-auto text-base">
          Melody Cleaning Services provides top-tier commercial kitchen cleaning services designed for hygiene and compliance in UK food service operations.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-16 px-6 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="group bg-white p-6 rounded-full text-sm shadow relative overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="text-primary font-semibold group-hover:text-purple-600">{s.title}</div>
              <div className="absolute inset-0 p-6 bg-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-gray-700 rounded-full flex items-center justify-center">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-10">Why Choose Us</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {['Certified & Compliant', 'Eco-Friendly Cleaning', 'Trained Staff', 'Flexible Scheduling'].map((t, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded shadow text-sm">{t}</div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-16 px-6 text-center bg-gray-50">
        <h2 className="text-2xl font-semibold mb-8">Gallery</h2>
        <div className="relative w-full max-w-4xl mx-auto h-64 overflow-hidden rounded">
          {[1, 2, 3].map((n) => (
            <img key={n} src={`/images/gallery${n}.jpg`} className="w-full h-full object-cover absolute slide hidden" />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-6 text-center">
        <h2 className="text-2xl font-semibold mb-8">Testimonials</h2>
        <div className="text-lg italic font-medium max-w-3xl mx-auto">
          <div className="testimonial animate-fade">“They deep cleaned our kitchen overnight. Zero disruption!”</div>
          <div className="testimonial animate-fade hidden">“Very professional, certified, and on time.”</div>
          <div className="testimonial animate-fade hidden">“Our kitchen passed inspection after Melody Cleaning's visit.”</div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-6 bg-gray-100 text-left">
        <h2 className="text-2xl font-semibold text-center mb-10">FAQs</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <div key={i}>
              <button onClick={() => toggleFAQ(i)} className="w-full flex items-center justify-between text-left font-medium border-b py-2">
                <span>{faqStates[i] ? '−' : '+'} {f.q}</span>
              </button>
              {faqStates[i] && <p className="text-sm mt-2 text-gray-700">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-6">
        <h2 className="text-2xl font-semibold text-center mb-10">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <iframe
            src="https://www.google.com/maps?q=London,+UK&output=embed"
            className="rounded w-full h-64"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
          <div>
            <h3 className="text-lg font-semibold mb-4">Request A Quote</h3>
            <a href="/book" className="inline-block bg-purple-700 text-white px-6 py-3 rounded mb-4 hover:bg-purple-800">Book Now</a>
            <p>Call Us: <a href="https://wa.me/447123456789" className="text-purple-600">+44 7123 456 789</a></p>
            <p>Email: <a href="mailto:info@melodycleaningservices.com" className="text-purple-600">info@melodycleaningservices.com</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}

