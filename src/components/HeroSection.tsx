import { motion } from "framer-motion";
import logoNegro from "@/assets/logo_negro.png";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background pt-24"
    >
      {/* Top content area */}
      <div className="mx-auto max-w-7xl w-full px-6 flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-12">
        {/* Left side - year & counter */}
        <div className="flex items-center gap-12 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span>2024</span>
          <span>01—06</span>
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

      {/* Bottom: Giant agency name */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full px-4 pb-6"
      >
        <h1 className="text-[12vw] md:text-[11vw] lg:text-[10vw] font-black uppercase tracking-tighter text-foreground leading-[0.85] whitespace-nowrap overflow-hidden text-center">
          SR<span className="text-gradient-brand">LEON</span>AGENCIA
        </h1>
      </motion.div>

      {/* Bottom categories bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="border-t border-border"
      >
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          {["Producción", "Estrategia", "Social Media", "Contáctanos"].map((item) => (
            <span
              key={item}
              className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors cursor-pointer hidden sm:block"
            >
              {item}
            </span>
          ))}
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:hidden">
            Producción
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:hidden">
            Estrategia
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:hidden">
            Contacto
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
