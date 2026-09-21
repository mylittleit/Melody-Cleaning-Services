'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => (
  <section className="relative w-full h-[100vh] bg-black">
    <a href="https://www.melodycleaningservices.com/book" target="_blank" rel="noopener noreferrer">
      <video
        autoPlay
        loop
        muted
        playsInline
       className="absolute inset-0 w-full h-full object-cover object-center cursor-pointer"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_75Dz9qHqODAxHFcKpcyqPaNRNNnS/y5A_2ee1WAEZIW8YrllUFF/public/CommercialKitchenHero.mp4" type="video/mp4" />
      </video>
    </a>
  </section>
);

const StickyNav = () => (
  <nav className="sticky top-0 bg-white z-50 shadow-sm border-b">
    <div className="container mx-auto flex justify-center gap-8 py-2 text-sm font-medium">
      <a href="#services" className="hover:text-primary text-[#3a0162]">WHAT WE DO</a>
      <a href="#why" className="hover:text-primary text-[#3a0162]">WHY CHOOSE US</a>
      <a href="#gallery" className="hover:text-primary text-[#3a0162]">GALLERY</a>
      <a href="#faqs" className="hover:text-primary text-[#3a0162]">FAQs</a>
      <a href="#contact" className="hover:text-primary text-[#3a0162]">CONTACT US</a>
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
  <section
    id="services"
    className="py-24 text-center bg-[url('/FAQsBG.png')] bg-cover bg-center bg-no-repeat relative"
  >
    <div className="absolute inset-0 bg-white bg-opacity-70 z-0"></div>
    <div className="relative z-10">
      <h2 className="text-3xl font-semibold mb-8 text-[#3a0162] poppins-bold">OUR SERVICES</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="relative w-32 h-32 mx-auto group">
            <div className="absolute inset-0 bg-[#3a0162] text-[#9aedb6] rounded-full flex items-center justify-center text-xs text-center transition-opacity duration-300 group-hover:opacity-0">
              <span className="px-2">{service.title}</span>
            </div>
            <div className="absolute inset-0 bg-white text-[#3a0162] rounded-full flex items-center justify-center text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2">
              <span>{service.details}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Certified and Insured",
      icon: "/CKCInsured.png"
    },
    {
      title: "Compliant with Food Safety Protocols",
      icon: "/CKCFood.png"
    },
    {
      title: "24hr Scheduling",
      icon: "/CKCHour.png"
    },
    {
      title: "Affordable Pricing",
      icon: "/CKCPrice.png"
    }
  ];

  return (
    <section id="why" className="py-24 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-10 text-[#3a0162] poppins-bold">WHY CHOOSE US</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
        {reasons.map((reason, i) => (
          <div
            key={i}
            className="bg-[#3a0162] text-white rounded-[1300px] shadow-lg p-6 flex flex-col items-center justify-center transform hover:scale-105 transition duration-300"
          >
            <div className="w-16 h-16 mb-4">
              <img src={reason.icon} alt={reason.title} className="w-full h-full object-contain rounded-full" />
            </div>
            <p className="text-sm font-semibold">{reason.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const GallerySection = () => {
  const [index, setIndex] = useState(0);
  const galleryItems = [
    <video key="v1" controls className="w-full h-[60vh] rounded-lg">
      <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_75Dz9qHqODAxHFcKpcyqPaNRNNnS/O5shTX2Z07rd1MfzAOCmJl/public/Gallery1.mp4" type="video/mp4" />
    </video>,
    <Image key="img2" src="/Gallery2.jpeg" alt="Gallery 2" width={800} height={400} className="rounded-lg" />,
    <Image key="img3" src="/Gallery3.jpeg" alt="Gallery 3" width={800} height={400} className="rounded-lg" />,
    <Image key="img4" src="/Gallery4.jpeg" alt="Gallery 4" width={800} height={400} className="rounded-lg" />,
    <Image key="img5" src="/Gallery5.jpeg" alt="Gallery 5" width={800} height={400} className="rounded-lg" />,
    <Image key="img5" src="/Gallery6.jpeg" alt="Gallery 5" width={800} height={400} className="rounded-lg" />,
    <Image key="img5" src="/Gallery7.jpeg" alt="Gallery 5" width={800} height={400} className="rounded-lg" />,
    <Image key="img5" src="/Gallery8.jpeg" alt="Gallery 5" width={800} height={400} className="rounded-lg" />,
    <Image key="img5" src="/Gallery9.jpeg" alt="Gallery 5" width={800} height={400} className="rounded-lg" />,
    <Image key="img5" src="/Gallery10.jpeg" alt="Gallery 5" width={800} height={400} className="rounded-lg" />,
    <Image key="img5" src="/Gallery11.jpeg" alt="Gallery 5" width={800} height={400} className="rounded-lg" />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % galleryItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" className="py-24 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-8 text-[#3a0162] poppins-bold">GALLERY</h2>
      <div className="max-w-4xl mx-auto">{galleryItems[index]}</div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      text: "I’m convinced Melody Cleaning Services doesn’t just clean, they perform miracles.",
      name: "Chef Marco V., Owner of The Midnight Spoon"
    },
    {
      text: "Between flour storms and sugar glazes, our kitchen is a disaster nightly. Melody’s team arrives like a cleaning ballet—swift, spotless, and utterly charming. Even our ovens sparkle like tiaras. Five stars!",
      name: "Lady Brioche du Pan, Owner, The Royal Crumb Bakery"
    },
    {
      text: "I run one of the busiest open-flame kitchens. The grease buildup alone could terrify health inspectors. Melody Cleaning Services handled it like pros. By sunrise, the kitchen looked like it was built yesterday. Brilliant work!",
      name: "Gordon Flames, Executive Chef, Hell’s Ember Kitchen"
    },
    {
      text: "We cater to 300 guests a night, and the kitchen looks like a war zone afterward. Melody Cleaning doesn’t flinch. They arrive with smiles and leave behind a space cleaner than a Michelin showroom. Impeccable service.",
      name: "Chef Lorenzo Blaze, Head Chef, Inferno Bistro"
    },
    {
      text: "Being plant-based doesn’t mean being mess-free 😂. Between turmeric, beetroot, and coconut oil, our kitchen gets stained fast. Melody Cleaning handled it like artists. Even our cold press area gleamed!",
      name: "Ms. Peaches Gold, Restaurateur, Vegan Queens London"
    },
    {
      text: "We run 24 hours. Our grills are ancient. Our staff are messy. Melody Cleaning came in at 2AM and by 5AM we were health-inspector-ready. Can’t recommend them enough.",
      name: "Nigel Steam, Head Chef, The Industrial Grubhouse"
    },
    {
      text: "Melody Cleaning arrived in silence and left in sparkle. We barely noticed them working, but noticed the transformation. Every silver surface now doubles as a mirror. Elite service for elite spaces.",
      name: "Baroness Fifi du Fork, Owner, Le Luxe Supper Club"
    }
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 text-black text-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/git-blob/prj_75Dz9qHqODAxHFcKpcyqPaNRNNnS/DwSxqmnCKQ0VX-gztH5ZN5/public/Testimonial.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-white/20 z-10"></div>

      <div
        className="relative z-20 max-w-xl mx-auto px-4 transition-opacity duration-500 cursor-pointer"
        onMouseEnter={() => {
          setFade(false);
          setTimeout(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
            setFade(true);
          }, 200);
        }}
        style={{ opacity: fade ? 1 : 0 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-[#9AEDB6] poppins-bold">
          WHY OUR CLIENTS CHOOSE US
        </h2>
        <div className="text-6xl text-[#3a0162] mb-4">“</div>
        <p className="text-lg">{testimonials[index].text}</p>
        <p className="mt-4 font-bold text-[#3a0162]">{testimonials[index].name}</p>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const faqs = [
    { q: "What areas do you cover?", a: "We currently serve Commercial kitchens and Restaurants across London..." },
    { q: "Do I need to be home or on-site during the cleaning?", a: "Not at all!..." },
    { q: "How long does cleaning usually take?", a: "It depends on the size and services booked..." },
    { q: "Are your products eco-friendly?", a: "Yes, we use certified eco-friendly..." },
    { q: "Do you offer weekend or night cleaning?", a: "Absolutely! We work 24/7..." },
    { q: "What’s your pricing model?", a: "We provide customized quotes..." },
    { q: "Is your team trained?", a: "All our cleaners are trained, certified..." },
    { q: "Can I schedule recurring cleanings?", a: "Yes, we offer flexible recurring packages." },
    { q: "Do you handle emergency cleanups?", a: "Yes, we offer rapid-response emergency services." },
    { q: "What if I’m not satisfied?", a: "We guarantee satisfaction..." },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="relative py-24 text-[#3a0162] overflow-hidden">
      <Image
        src="/FAQsBG.png"
        alt="Background"
        fill
        className="object-cover opacity-100 z-0"
      />
      <div className="absolute inset-0 bg-white bg-opacity-60 z-0" />
      <div className="relative z-10">
        <h2 className="text-3xl font-semibold text-center mb-8 poppins-bold">FREQUENTLY ASKED QUESTIONS</h2>
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
              {openIndex === i && (
                <div className="p-4 bg-white mt-1 rounded-md text-sm">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section id="contact" className="py-24 bg-[#3a0162] text-white">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <iframe
        src="https://www.google.com/maps?q=London,+UK&output=embed"
        width="100%"
        height="300"
        className="border-0 rounded-md"
        allowFullScreen
        loading="lazy"
      ></iframe>
      <div>
        <h2 className="text-3xl font-semibold mb-6 text-[#9aedb6] poppins-bold">CONTACT US</h2>
        <h3 className="text-xl font-medium mb-4">Request A Quote</h3>
        <a href="/book" className="text-white underline mb-2 inline-block">Fill Our Booking Form</a>
        <p className="mb-1">Call us: <a href="https://wa.me/447000000000" className="text-white">07453581984</a></p>
        <p>Email: <a href="mailto:info@melodycleaningservices.com" className="text-white">contactmelodycleaning@gmail.com</a></p>
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
