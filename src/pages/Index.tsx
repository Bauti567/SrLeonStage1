import { lazy, Suspense, useRef } from "react";
import { useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatsAppBubble from "@/components/WhatsAppBubble";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ServicesGrid = lazy(() => import("@/components/ServicesGrid"));
const CeoSection = lazy(() => import("@/components/CeoSection"));
const TestimonialsHeader = lazy(() => import("@/components/TestimonialsHeader"));
const BrandsCarousel = lazy(() => import("@/components/BrandsCarousel"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const TestimonialsCards = lazy(() => import("@/components/TestimonialsCards"));
const InstagramSection = lazy(() => import("@/components/InstagramSection"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const contactRef = useRef(null);
  const contactVisible = useInView(contactRef, { once: true, margin: "-200px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
        <AboutSection />
        <ServicesSection />
        <ServicesGrid />
        <CeoSection />
        <TestimonialsHeader />
        <BrandsCarousel />
        <TestimonialsCards />
        <PortfolioSection />
        <InstagramSection />
        <FaqSection />
        <div ref={contactRef}>
          <ContactSection />
        </div>
        <Footer />
      </Suspense>
      <WhatsAppBubble visible={contactVisible} />
    </div>
  );
};

export default Index;
