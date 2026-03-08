import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ceoDalton from "@/assets/ceo-dalton.jpeg";

const CeoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
        >
          {/* Circular photo */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-30 blur-xl" />
            <img
              src={ceoDalton}
              alt="Santiago León - CEO"
              className="relative w-full h-full rounded-full object-cover border-2 border-border"
              loading="lazy"
            />
          </div>

          {/* Name + bio */}
          <div className="text-center md:text-left">
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground uppercase tracking-tight leading-[0.95]">
              <span className="text-gradient-brand">CEO</span> Santiago
              <br />
              León
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
