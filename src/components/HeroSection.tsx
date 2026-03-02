import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
    >
      {/* Decorative crosshairs */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 text-foreground opacity-40">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <line x1="16" y1="0" x2="16" y2="32" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="1" />
          <rect x="12" y="12" width="8" height="8" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 text-foreground opacity-40">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <line x1="16" y1="0" x2="16" y2="32" stroke="currentColor" strokeWidth="1" />
          <line x1="0" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="1" />
          <rect x="12" y="12" width="8" height="8" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Main title */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-foreground leading-[0.9]"
        >
          Señorleon
          <br />
          <span className="relative inline-block">
            agencia
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-2 left-0 w-full h-1.5 bg-primary origin-left"
            />
          </span>
        </motion.h1>
      </div>

      {/* Bottom categories bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-0 left-0 right-0 border-t border-border"
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
          {/* Mobile: show fewer */}
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
