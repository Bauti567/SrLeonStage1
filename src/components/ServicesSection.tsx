import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "01",
    tag: "CONTENIDO",
    title: "CREACIÓN DE\nCONTENIDO",
    description:
      "Producimos contenido audiovisual de alto impacto que conecta con tu audiencia. Videos, fotografía y piezas creativas diseñadas para destacar en todas las plataformas digitales.",
    image:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&auto=format&q=80",
  },
  {
    id: "02",
    tag: "ESTRATEGIA",
    title: "ESTRATEGIA\nDIGITAL",
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

const ServicesSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to active service index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * services.length),
      services.length - 1
    );
    setActiveIndex(index);
  });

  return (
    <section id="services" ref={containerRef} style={{ height: `${(services.length + 1) * 100}vh` }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        {/* Section label */}
        <div className="absolute top-8 left-8 z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-muted-foreground">
            Servicios — SR LEON
          </p>
        </div>

        {/* Service counter */}
        <div className="absolute top-8 right-8 z-10">
          <span className="text-xs font-mono text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
          </span>
        </div>

        {/* Giant background titles (all stacked, fading in/out) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {services.map((service, i) => (
            <motion.h2
              key={service.id}
              className="absolute text-[14vw] md:text-[12vw] font-black uppercase tracking-tighter text-foreground/[0.04] leading-[0.85] text-center whitespace-pre-line"
              animate={{
                opacity: activeIndex === i ? 1 : 0,
                scale: activeIndex === i ? 1 : 0.9,
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {service.title}
            </motion.h2>
          ))}
        </div>

        {/* Main content area */}
        <div className="relative h-full flex flex-col justify-end pb-12 px-6 md:px-12">
          {/* Service cards */}
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              className="absolute inset-0 flex items-center"
              animate={{
                opacity: activeIndex === i ? 1 : 0,
                y: activeIndex === i ? 0 : activeIndex > i ? -60 : 60,
              }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ pointerEvents: activeIndex === i ? "auto" : "none" }}
            >
              <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-6 md:px-12">
                {/* Left: Title + info */}
                <div className="md:col-span-5 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      ({service.id}) — {service.tag}
                    </span>
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-[0.9] whitespace-pre-line">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                  <button
                    onClick={() =>
                      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors"
                  >
                    Saber más
                    <span className="inline-flex items-center justify-center rounded-full border border-foreground w-8 h-8 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </button>
                </div>

                {/* Right: Image */}
                <div className="md:col-span-7">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      initial={{ scale: 1.1 }}
                      animate={{
                        scale: activeIndex === i ? 1 : 1.1,
                      }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bottom progress dots */}
          <div className="relative z-10 flex items-center gap-3 mx-auto">
            {services.map((_, i) => (
              <div
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  activeIndex === i
                    ? "w-8 bg-foreground"
                    : "w-2 bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
