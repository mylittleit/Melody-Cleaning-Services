"use client";

     import { useEffect } from "react";

     declare global {
       interface Window {
         gtag: (...args: any[]) => void;
       }
     }

     export default function FormTracker() {
       useEffect(() => {
         const handleFormSubmit = (event: Event) => {
           const form = event.target as HTMLFormElement;
           const formId = form.id;

           if (typeof window !== "undefined" && window.gtag) {
             if (formId === "contact-form") {
               window.gtag("event", "conversion", {
                 send_to: "AW-17036896370/contact_conversion",
                 value: 1.0,
                 currency: "GBP",
               });
               window.gtag("event", "contact_form_submit", {
                 event_category: "Lead",
                 event_label: "Contact Form Submission - Melody Cleaning",
                 value: 1,
               });
               console.log("📧 Contact form submitted");
             } else if (formId === "booking-form") {
               window.gtag("event", "conversion", {
                 send_to: "AW-17036896370/booking_conversion",
                 value: 1.0,
                 currency: "GBP",
               });
               window.gtag("event", "booking_form_submit", {
                 event_category: "Lead",
                 event_label: "Booking Form Submission - Melody Cleaning",
                 value: 1,
               });
               console.log("📅 Booking form submitted");
             }
           }
         };

         const contactForm = document.getElementById("contact-form");
         const bookingForm = document.getElementById("booking-form");

         if (contactForm) {
           contactForm.addEventListener("submit", handleFormSubmit);
         }
         if (bookingForm) {
           bookingForm.addEventListener("submit", handleFormSubmit);
         }

         return () => {
           if (contactForm) {
             contactForm.removeEventListener("submit", handleFormSubmit);
           }
           if (bookingForm) {
             bookingForm.removeEventListener("submit", handleFormSubmit);
           }
         };
       }, []);

       return null;
     }
