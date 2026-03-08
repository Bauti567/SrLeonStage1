import { lazy, Suspense, useRef, useState } from "react";
import { useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import LoadingScreen from "@/components/LoadingScreen";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const CeoSection = lazy(() => import("@/components/CeoSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const InstagramSection = lazy(() => import("@/components/InstagramSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [loading, setLoading] = useState(true);
  const contactRef = useRef(null);
  const contactVisible = useInView(contactRef, { once: true, margin: "-200px" });

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
        <AboutSection />
        <ServicesSection />
        <CeoSection />
        <TestimonialsSection />
        <InstagramSection />
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
