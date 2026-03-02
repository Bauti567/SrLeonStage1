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

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        {/* Bold statement header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-2 text-center">
            Sobre Nosotros
          </p>
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-foreground mb-10 text-center">
            Señorleonagencia
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] text-center max-w-5xl mx-auto uppercase tracking-tight">
            Crees que trabajamos para ti.{" "}
            <span className="relative inline">
              En realidad
              <motion.span
                initial={{ rotate: 0 }}
                animate={isInView ? { rotate: -6 } : {}}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute -top-8 -left-4 bg-foreground text-background text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm hidden md:inline-block"
              >
                Señorleon
              </motion.span>
            </span>{" "}
            jugamos, y de alguna forma eso ayuda a crecer tu negoci
            <span className="relative inline-block">
              o
              <svg className="absolute -bottom-1 -right-6 w-5 h-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <ellipse cx="10" cy="10" rx="8" ry="6" />
              </svg>
            </span>
          </h2>

          <p className="text-xs sm:text-sm uppercase tracking-[0.15em] text-muted-foreground text-center mt-12 max-w-md mx-auto leading-relaxed">
            Agencia de marketing digital que te ayuda a promocionar tus productos o servicios en línea
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
              className="group rounded-2xl border border-border bg-card p-8 hover:border-foreground/20 transition-all duration-500"
            >
              <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-secondary p-3">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
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
