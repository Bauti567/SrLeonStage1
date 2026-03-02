import { motion } from "framer-motion";
import { useInView } from "framer-motion";
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
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-4">
            Sobre Nosotros
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Creatividad con <span className="text-gradient-gold">propósito</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Somos un equipo de creativos apasionados por contar historias.
            Combinamos arte, tecnología y estrategia para crear contenido que
            transforma marcas y conecta con personas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group rounded-2xl border border-border bg-card p-8 hover:border-primary/30 transition-all duration-500"
            >
              <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-secondary p-3">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">
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
