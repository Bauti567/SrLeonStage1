import { motion } from "framer-motion";
import logoNegro from "@/assets/logo_negro.png";
import BeamBackground from "./BeamBackground";

const heroNavItems = [
  { label: "Producción", href: "#services" },
  { label: "Estrategia", href: "#services" },
  { label: "Social Media", href: "#services" },
  { label: "Contáctanos", href: "#contact" },
];

const letterVariants = {
  hidden: { y: -120, opacity: 0, rotateX: 45 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      delay: 0.3 + i * 0.04,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const HeroSection = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const titleText = "SR";
  const brandText = "LEON";
  const suffixText = "AGENCIA";

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background pt-24"
    >
      <BeamBackground />
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

      {/* Bottom: Giant agency name with falling letters */}
      <div className="w-full px-4 pb-6 overflow-hidden">
        <h1 className="text-[12vw] md:text-[11vw] lg:text-[10vw] font-black uppercase tracking-tighter text-foreground leading-[0.85] whitespace-nowrap text-center flex items-center justify-center" style={{ perspective: "800px" }}>
          {titleText.split("").map((char, i) => (
            <motion.span
              key={`sr-${i}`}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
          {brandText.split("").map((char, i) => (
            <motion.span
              key={`leon-${i}`}
              custom={titleText.length + i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="inline-block text-gradient-brand"
            >
              {char}
            </motion.span>
          ))}
          {suffixText.split("").map((char, i) => (
            <motion.span
              key={`agencia-${i}`}
              custom={titleText.length + brandText.length + i}
              initial="hidden"
              animate="visible"
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
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
