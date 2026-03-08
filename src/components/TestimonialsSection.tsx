import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Transformaron completamente nuestra imagen de marca. El nuevo sitio web se ve moderno y funciona impecablemente. ¡Superaron todas las expectativas!",
    name: "Sarah Lim",
    role: "Marketing Manager",
    color: "bg-[hsl(270,60%,65%)]",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&q=60",
    position: "top-0 left-[5%]",
    rotation: "-rotate-3",
  },
  {
    quote: "Trabajar con este equipo fue muy fácil. Entendieron nuestra visión de inmediato y entregaron diseños que capturaron nuestra marca perfectamente.",
    name: "Jonathan Reyes",
    role: "Founder",
    color: "bg-accent",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=60",
    position: "top-0 right-[5%]",
    rotation: "rotate-2",
  },
  {
    quote: "Del branding al diseño web, todo se sintió cohesivo y de primer nivel. Los recomiendo para cualquier proyecto digital.",
    name: "Kevin Lau",
    role: "CEO",
    color: "bg-[hsl(185,50%,55%)]",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&q=60",
    position: "bottom-0 left-[5%]",
    rotation: "-rotate-2",
  },
  {
    quote: "Profesionales, responsivos e increíblemente creativos. Su trabajo de UI/UX mejoró nuestro engagement de usuarios en más del 40%.",
    name: "Maya Putri",
    role: "Product Lead",
    color: "bg-[hsl(140,55%,75%)]",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&q=60",
    position: "bottom-0 right-[5%]",
    rotation: "rotate-3",
  },
];

const decorativeImages = [
  { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop&q=60", position: "top-[8%] left-[32%]", rotation: "rotate-6", size: "w-28 h-28" },
  { src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=200&fit=crop&q=60", position: "top-[8%] right-[32%]", rotation: "-rotate-3", size: "w-24 h-24" },
  { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop&q=60", position: "bottom-[12%] left-[28%]", rotation: "-rotate-6", size: "w-28 h-28" },
  { src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&h=200&fit=crop&q=60", position: "bottom-[8%] right-[30%]", rotation: "rotate-4", size: "w-24 h-24" },
];

const ScrollChar = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}: {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
}) => {
  const isSpace = char === " ";
  const dist = index - centerIndex;
  const x = useTransform(scrollYProgress, [0, 0.4], [dist * 45, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [dist * 40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0.3, 1]);

  return (
    <motion.span
      className={`inline-block text-foreground ${isSpace ? "w-3 sm:w-5" : ""}`}
      style={{ x, rotateX, opacity }}
    >
      {char}
    </motion.span>
  );
};

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  const title = "Historias de nuestros clientes";
  const chars = title.split("");
  const center = Math.floor(chars.length / 2);

  return (
    <section id="testimonials" ref={sectionRef} className="relative">
      {/* Scroll-animated title */}
      <div className="h-[150vh] relative">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-6">
          <h2 className="flex flex-wrap justify-center text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none">
            {chars.map((char, i) => (
              <ScrollChar
                key={i}
                char={char}
                index={i}
                centerIndex={center}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </h2>
        </div>
      </div>

      {/* Bento / post-it style layout */}
      <div ref={cardsRef} className="px-6 pb-28 -mt-[30vh]">
        <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] text-center mb-16">
          Descubre cómo hemos ayudado a marcas a crecer con estrategia, diseño e innovación.
        </p>

        <div className="relative max-w-6xl mx-auto min-h-[700px] md:min-h-[600px]">
          {/* Center title */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              animate={cardsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground/10 text-center leading-[0.95]"
            >
              Creamos contenido<br />que transforma marcas
            </motion.h3>
          </div>

          {/* Decorative images scattered */}
          {decorativeImages.map((img, i) => (
            <motion.div
              key={`deco-${i}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={cardsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`absolute ${img.position} ${img.rotation} ${img.size} hidden md:block z-10`}
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover rounded-xl shadow-lg"
                loading="lazy"
              />
            </motion.div>
          ))}

          {/* Testimonial cards as post-its */}
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className={`absolute ${t.position} ${t.rotation} ${t.color} rounded-2xl p-5 max-w-[280px] hover:rotate-0 transition-transform duration-300 z-20 shadow-lg`}
            >
              <p className="text-xs sm:text-sm font-bold uppercase leading-relaxed text-foreground">
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
      </div>
    </section>
  );
};

export default TestimonialsSection;
