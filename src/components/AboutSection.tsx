import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Video, Palette, TrendingUp } from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";

const icons = [Video, Palette, TrendingUp, Sparkles];

const AboutSection = () => {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl 3xl:max-w-7xl">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-2 text-center"
          >
            {t.about.label}
          </motion.p>

          <div className="relative max-w-5xl mx-auto">
            <motion.span
              initial={{ rotate: 0, opacity: 0, scale: 0.8 }}
              animate={isInView ? { rotate: -12, opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
              className="absolute -top-3 left-[5%] sm:left-[8%] z-10 inline-block bg-background text-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm border border-border"
            >
              <span className="text-gradient-brand">{t.about.badge}</span>
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 60, clipPath: "inset(100% 0 0 0)" }}
              animate={isInView ? { opacity: 1, y: 0, clipPath: "inset(0% 0 0 0)" } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] text-center uppercase tracking-tight pt-4"
            >
              {t.about.heading}
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-xs sm:text-sm uppercase tracking-[0.15em] text-muted-foreground text-center mt-12 max-w-md mx-auto leading-relaxed"
          >
            {t.about.description}
          </motion.p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.services.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={cardsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group rounded-2xl border border-border bg-card p-8 hover:border-foreground/20 transition-colors duration-500"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={cardsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.12, type: "spring", stiffness: 300 }}
                  className="mb-5 inline-flex items-center justify-center rounded-xl bg-secondary p-3"
                >
                  <Icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
