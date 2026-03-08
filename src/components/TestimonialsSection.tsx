import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Transformaron completamente nuestra imagen de marca. El nuevo sitio web se ve moderno y funciona impecablemente. ¡Superaron todas las expectativas!",
    name: "Sarah Lim",
    role: "Marketing Manager",
    color: "bg-[hsl(270,60%,65%)]",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&q=60",
    rotation: "-rotate-2",
  },
  {
    quote: "Trabajar con este equipo fue muy fácil. Entendieron nuestra visión de inmediato y entregaron diseños que capturaron nuestra marca perfectamente.",
    name: "Jonathan Reyes",
    role: "Founder",
    color: "bg-accent",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=60",
    rotation: "rotate-1",
  },
  {
    quote: "Del branding al diseño web, todo se sintió cohesivo y de primer nivel. Los recomiendo para cualquier proyecto digital.",
    name: "Kevin Lau",
    role: "CEO",
    color: "bg-[hsl(185,50%,55%)]",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&q=60",
    rotation: "-rotate-1",
  },
  {
    quote: "Profesionales, responsivos e increíblemente creativos. Su trabajo de UI/UX mejoró nuestro engagement de usuarios en más del 40%.",
    name: "Maya Putri",
    role: "Product Lead",
    color: "bg-[hsl(140,55%,75%)]",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&q=60",
    rotation: "rotate-2",
  },
];

const decorImages = [
  { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=200&fit=crop&q=60", pos: "top-[5%] left-[30%]", rotation: "rotate-6", size: "w-28 h-28 sm:w-36 sm:h-36" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=200&fit=crop&q=60", pos: "top-[8%] right-[18%]", rotation: "-rotate-3", size: "w-24 h-24 sm:w-32 sm:h-32" },
  { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&h=200&fit=crop&q=60", pos: "bottom-[15%] left-[38%]", rotation: "-rotate-6", size: "w-28 h-28 sm:w-36 sm:h-36" },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-28 px-6 overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl relative">
        {/* Center title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 relative z-10"
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground uppercase tracking-tight leading-[1]">
            Historias de
            <br />
            nuestros clientes
          </h2>
          <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mt-4">
            Descubre cómo hemos ayudado a marcas a crecer con estrategia, diseño e innovación.
          </p>
        </motion.div>

        {/* Bento grid of testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className={`${t.color} ${t.rotation} rounded-2xl p-6 flex flex-col justify-between min-h-[220px] hover:rotate-0 transition-transform duration-300`}
            >
              <p className="text-sm font-bold uppercase leading-relaxed text-foreground">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-8 h-8 rounded-full object-cover"
                  loading="lazy"
                />
                <span className="text-xs font-mono uppercase text-foreground/80">
                  {t.name}, {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative floating images - hidden on mobile */}
        {decorImages.map((img, i) => (
          <div
            key={i}
            className={`absolute ${img.pos} ${img.rotation} ${img.size} rounded-xl overflow-hidden shadow-lg hidden lg:block opacity-60 pointer-events-none`}
          >
            <img src={img.src} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
