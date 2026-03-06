import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    tag: "CONTENIDO",
    title: "CREACIÓN DE CONTENIDO",
    description:
      "Producimos contenido audiovisual de alto impacto que conecta con tu audiencia. Videos, fotografía y piezas creativas diseñadas para destacar en todas las plataformas digitales.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "02",
    tag: "ESTRATEGIA",
    title: "ESTRATEGIA DIGITAL",
    description:
      "Diseñamos planes estratégicos basados en datos para maximizar tu presencia digital. Analizamos, planificamos y ejecutamos campañas que generan resultados medibles.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "03",
    tag: "BRANDING",
    title: "BRANDING",
    description:
      "Construimos identidades de marca memorables. Desde el logo hasta la guía de estilo completa, creamos la personalidad visual que hace única a tu marca.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop&auto=format&q=80",
  },
];

const ServiceCard = ({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center py-16 md:py-24 border-t border-border"
    >
      {/* Image - alternating sides */}
      <div className={`${index % 2 !== 0 ? "md:order-2" : ""}`}>
        <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* Content */}
      <div className={`${index % 2 !== 0 ? "md:order-1" : ""}`}>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {service.tag}
        </span>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground mt-2 mb-6 leading-[0.95]">
          {service.title}
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-md mb-8">
          {service.description}
        </p>
        <button
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors"
        >
          Saber más
          <span className="inline-flex items-center justify-center rounded-full border border-foreground w-8 h-8 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
            <ArrowRight className="h-4 w-4" />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="py-20 px-6" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-3">
            Servicios
          </p>
          <h2 className="text-lg sm:text-xl font-bold text-foreground uppercase tracking-wide">
            SR LEON AGENCIA
          </h2>
        </div>

        {/* Service titles preview */}
        <div className="mb-16 space-y-2 text-center">
          {services.map((service) => (
            <div key={service.id} className="flex items-center justify-center gap-4">
              <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-muted-foreground/30 leading-none">
                {service.title}
              </h3>
              <span className="text-xs text-muted-foreground font-mono">
                ({service.id})
              </span>
            </div>
          ))}
        </div>

        {/* Detailed service cards */}
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
