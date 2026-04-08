import { useRef } from "react";
import { useInView } from "framer-motion";
import { Sparkles, Video, Palette, TrendingUp } from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";

const icons = [Video, Palette, TrendingUp, Sparkles];

const AboutSection = () => {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl 3xl:max-w-7xl">
        <div className="mb-20">
          <p
            className="text-xs uppercase tracking-[0.3em] font-semibold text-muted-foreground mb-2 text-center transition-all duration-700"
            style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(20px)" }}
          >
            {t.about.label}
          </p>

          <div className="relative max-w-5xl mx-auto">
            <span
              className="absolute -top-3 left-[5%] sm:left-[8%] z-10 inline-block bg-background text-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm border border-border transition-all duration-700 delay-300"
              style={{ opacity: isInView ? 1 : 0, transform: isInView ? "rotate(-12deg)" : "rotate(0deg) scale(0.8)" }}
            >
              <span className="text-gradient-brand">{t.about.badge}</span>
            </span>

            <h2
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] text-center uppercase tracking-tight pt-4 transition-all duration-700 delay-100"
              style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(40px)" }}
            >
              {t.about.heading}
            </h2>
          </div>

          <p
            className="text-xs sm:text-sm uppercase tracking-[0.15em] text-muted-foreground text-center mt-12 max-w-md mx-auto leading-relaxed transition-all duration-700 delay-500"
            style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateY(0)" : "translateY(20px)" }}
          >
            {t.about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.services.map((service, index) => {
            const Icon = icons[index];
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-8 hover:border-foreground/20 hover:-translate-y-2 transition-all duration-500"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateY(0)" : "translateY(30px)",
                  transitionDelay: `${300 + index * 100}ms`,
                }}
              >
                <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-secondary p-3">
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
