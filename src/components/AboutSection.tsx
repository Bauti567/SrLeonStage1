import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Video, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "Producción Audiovisual",
    description:
      "Creamos videos cinematográficos que capturan la esencia de tu marca con calidad profesional.",
  },
  {
    icon: Palette,
    title: "Diseño Creativo",
    description:
      "Identidad visual, branding y piezas gráficas que destacan en cualquier plataforma.",
  },
  {
    icon: TrendingUp,
    title: "Estrategia Digital",
    description:
      "Planificamos y ejecutamos estrategias de contenido que generan resultados medibles.",
  },
  {
    icon: Sparkles,
    title: "Social Media",
    description:
      "Gestionamos tus redes sociales con contenido auténtico que conecta y fideliza.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* Bold statement header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-2 text-center"
          >
            Sobre Nosotros
          </motion.p>

          <div className="relative max-w-5xl mx-auto">
            <motion.span
              initial={{ rotate: 0, opacity: 0, scale: 0.8 }}
              animate={isInView ? { rotate: -12, opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              className="absolute -top-3 left-[5%] sm:left-[8%] z-10 inline-block bg-background text-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm border border-border"
            >
              <span className="text-gradient-brand">Señorleon</span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" }}
              animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] text-center uppercase tracking-tight pt-4"
            >
              Crees que trabajamos para ti. En realidad jugamos, y de alguna forma eso ayuda a crecer tu negoci
              <span className="relative inline-block">
                o
                <motion.svg
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1, duration: 0.4, type: "spring" }}
                  className="absolute -bottom-1 -right-6 w-5 h-5 text-primary"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <ellipse cx="10" cy="10" rx="8" ry="6" />
                </motion.svg>
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xs sm:text-sm uppercase tracking-[0.15em] text-muted-foreground text-center mt-12 max-w-md mx-auto leading-relaxed"
          >
            Agencia de marketing digital que te ayuda a promocionar tus productos o servicios en línea
          </motion.p>
        </div>

        {/* Services grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={cardsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group rounded-2xl border border-border bg-card p-8 hover:border-foreground/20 transition-colors duration-500"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={cardsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + index * 0.12, type: "spring", stiffness: 300 }}
                className="mb-5 inline-flex items-center justify-center rounded-xl bg-secondary p-3"
              >
                <service.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <h3 className="text-lg font-bold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
