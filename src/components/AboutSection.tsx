import { useRef } from "react";
import { useInView } from "framer-motion";
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

        {/* Cards with scale + translate entrance */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.services.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-8 hover:border-foreground/20 hover:-translate-y-2 transition-all duration-500"
                style={{
                  opacity: cardsInView ? 1 : 0,
                  transform: cardsInView ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
                  transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`,
                }}
              >
                {/* Icon with delayed pop-in */}
                <div
                  className="mb-5 inline-flex items-center justify-center rounded-xl bg-secondary p-3"
                  style={{
                    opacity: cardsInView ? 1 : 0,
                    transform: cardsInView ? "scale(1)" : "scale(0)",
                    transition: `opacity 0.3s ease-out ${0.3 + index * 0.12}s, transform 0.4s cubic-bezier(0.34,1.56,0.64,1) ${0.3 + index * 0.12}s`,
                  }}
                >
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
