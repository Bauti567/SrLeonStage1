import { useRef } from "react";
import { useInView } from "framer-motion";
import { useI18n } from "@/hooks/use-i18n";

const AboutSection = () => {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 sm:py-28 px-4 sm:px-6" ref={ref}>
      <div className="mx-auto max-w-6xl 3xl:max-w-7xl">
        <div className="mb-20">
          {/* Label fade in */}
          <p
            className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-2 text-center"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            {t.about.label}
          </p>

          <div className="relative max-w-5xl mx-auto">
            {/* Badge with spring-like rotation */}
            <span
              className="absolute -top-3 left-[5%] sm:left-[8%] z-10 inline-block bg-background text-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm border border-border"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "rotate(-12deg) scale(1)" : "rotate(0deg) scale(0.8)",
                transition: "opacity 0.5s ease-out 0.6s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s",
              }}
            >
              <span className="text-gradient-brand">{t.about.badge}</span>
            </span>

            {/* Heading with clip-path reveal */}
            <h2
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] text-center uppercase tracking-tight pt-4"
              style={{
                opacity: isInView ? 1 : 0,
                clipPath: isInView ? "inset(0% 0 0 0)" : "inset(100% 0 0 0)",
                transform: isInView ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, clip-path 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s",
              }}
            >
              {t.about.heading}
            </h2>
          </div>

          {/* Description fade in */}
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.15em] text-muted-foreground text-center mt-12 max-w-md mx-auto leading-relaxed"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease-out 0.8s, transform 0.6s ease-out 0.8s",
            }}
          >
            {t.about.description}
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
