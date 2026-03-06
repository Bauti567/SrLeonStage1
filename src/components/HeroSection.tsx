import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import logoNegro from "@/assets/logo_negro.png";
import SplitText from "./SplitText";

const BeamBackground = lazy(() => import("./BeamBackground"));

const heroNavItems = [
  { label: "Producción", href: "#services" },
  { label: "Estrategia", href: "#services" },
  { label: "Social Media", href: "#services" },
  { label: "Contáctanos", href: "#contact" },
];

const HeroSection = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background pt-24"
    >
      <Suspense fallback={null}>
        <BeamBackground />
      </Suspense>

      {/* Top content area */}
      <div className="mx-auto max-w-7xl w-full px-6 flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-12">
        {/* Left side - date */}
        <div className="flex items-center gap-12 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span>{year}</span>
          <span>{month}—{day}</span>
        </div>

        {/* Right side - tagline + badge */}
        <div className="max-w-sm text-right space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground leading-tight">
            Alcanza resultados poderosos con{" "}
            <span className="text-gradient-brand">contenido digital</span>
          </h2>
          <div className="flex items-center justify-end gap-3">
            <img
              src={logoNegro}
              alt="Sr Leon Agencia logo"
              className="w-8 h-8 object-contain dark:invert"
            />
            <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground leading-tight">
              cambiemos el mundo
              <br />
              con contenido
            </span>
          </div>
        </div>
      </div>

      {/* Bottom: Giant agency name with SplitText */}
      <div className="w-full px-4 pb-6 overflow-hidden">
        <h1 className="text-[12vw] md:text-[11vw] lg:text-[10vw] font-black uppercase tracking-tighter text-foreground leading-[0.85] whitespace-nowrap text-center flex items-center justify-center">
          <SplitText
            text="SR"
            delay={40}
            duration={0.8}
            from={{ opacity: 0, y: -120, rotateX: 45 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
          />
          <SplitText
            text="LEON"
            letterClassName="text-gradient-brand"
            delay={40}
            duration={0.8}
            from={{ opacity: 0, y: -120, rotateX: 45 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
          />
          <SplitText
            text="AGENCIA"
            delay={40}
            duration={0.8}
            from={{ opacity: 0, y: -120, rotateX: 45 }}
            to={{ opacity: 1, y: 0, rotateX: 0 }}
          />
        </h1>
      </div>

      {/* Bottom categories bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="border-t border-border"
      >
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          {heroNavItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.href)}
              className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
