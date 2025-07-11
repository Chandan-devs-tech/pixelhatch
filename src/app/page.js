"use client";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import CTAAndFooter from "../components/CTAAndFooter";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <CTAAndFooter />
    </main>
  );
}
