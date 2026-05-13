import { useRef } from "react";
import { useInView } from "framer-motion";
import { Sparkles, Video, Palette, TrendingUp } from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";

const icons = [Video, Palette, TrendingUp, Sparkles];

const ServicesGrid = () => {
  const { t } = useI18n();
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-60px" });

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl 3xl:max-w-7xl">
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

export default ServicesGrid;
