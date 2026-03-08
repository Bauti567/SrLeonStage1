import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const CeoSection = lazy(() => import("@/components/CeoSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const InstagramSection = lazy(() => import("@/components/InstagramSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <Suspense fallback={null}>
      <AboutSection />
      <ServicesSection />
      <CeoSection />
      <TestimonialsSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </Suspense>
  </div>
);

export default Index;
