import { useInView } from "framer-motion";
import { useRef } from "react";
import ceoDalton from "@/assets/ceo-dalton.jpeg";
import { useI18n } from "@/hooks/use-i18n";

const CeoSection = () => {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-28 px-4 sm:px-6">
      <div
        className="max-w-6xl 3xl:max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 transition-all duration-700"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(40px)",
        }}
      >
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex-shrink-0">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-30 blur-xl" />
          <img src={ceoDalton} alt={`${t.ceo.name} - ${t.ceo.role}`} className="relative w-full h-full rounded-full object-cover border-2 border-border" loading="lazy" />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground uppercase tracking-tight leading-[0.95]">
            <span className="text-gradient-brand">{t.ceo.role}</span><br />{t.ceo.name}
          </h3>
          <p className="mt-4 text-lg sm:text-xl font-bold text-gradient-brand">{t.ceo.stats}</p>
          <p className="mt-2 text-sm font-semibold text-foreground uppercase tracking-wide">{t.ceo.profession}</p>
          <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">{t.ceo.description}</p>
        </div>
      </div>
    </section>
  );
};

export default CeoSection;
