import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ceoDalton from "@/assets/ceo-dalton.jpeg";

const CeoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Slower split reveal — wider scroll range so text stays visible longer
  const topY = useTransform(scrollYProgress, [0.25, 0.55], ["0%", "-40%"]);
  const bottomY = useTransform(scrollYProgress, [0.25, 0.55], ["0%", "40%"]);
  const clipTop = useTransform(scrollYProgress, [0.25, 0.55], [50, 0]);
  const clipBottom = useTransform(scrollYProgress, [0.25, 0.55], [50, 100]);
  const contentOpacity = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.35, 0.55], [60, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[250vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Split title overlay */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none"
          style={{
            clipPath: useTransform(
              [clipTop, clipBottom],
              ([t, b]: number[]) =>
                `polygon(0 0, 100% 0, 100% ${t}%, 0 ${t}%, 0 ${b}%, 100% ${b}%, 100% 100%, 0 100%)`
            ),
          }}
        >
          <motion.div style={{ y: topY }} className="text-center">
            <h3 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-foreground leading-none">
              <span className="text-gradient-brand">CEO</span>
            </h3>
          </motion.div>
          <motion.div style={{ y: bottomY }} className="text-center">
            <h3 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-foreground leading-none">
              Santiago León
            </h3>
          </motion.div>
        </motion.div>

        {/* Content revealed behind */}
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
          className="relative z-0 flex flex-col md:flex-row items-center gap-10 md:gap-16 px-6 max-w-6xl mx-auto"
        >
          {/* Photo */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-30 blur-xl" />
            <img
              src={ceoDalton}
              alt="Santiago León - CEO"
              className="relative w-full h-full rounded-full object-cover border-2 border-border"
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div className="text-center md:text-left">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground uppercase tracking-tight leading-[0.95]">
              <span className="text-gradient-brand">CEO</span>
              <br />
              Santiago León
            </h3>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground max-w-md">
              <p>🎬 Creación de contenido | Estrategia digital 🧠</p>
              <p>🧑‍💻 + 1000M de reproducciones orgánicas 📲</p>
              <p>Prof. Cine y Tv 🎥 | Esp. En Fotografía 📸</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CeoSection;
