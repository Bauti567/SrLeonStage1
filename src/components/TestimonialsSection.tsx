import { useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/hooks/use-i18n";

const testimonialMeta = [
  { color: "bg-[hsl(270,60%,65%)]", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&q=60", position: "top-0 left-[5%]", rotation: "-rotate-3" },
  { color: "bg-accent", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&q=60", position: "top-0 right-[5%]", rotation: "rotate-2" },
  { color: "bg-[hsl(185,50%,55%)]", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face&q=60", position: "bottom-0 left-[5%]", rotation: "-rotate-2" },
  { color: "bg-[hsl(140,55%,75%)]", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face&q=60", position: "bottom-0 right-[5%]", rotation: "rotate-3" },
];

const TestimonialsSection = () => {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="py-28 px-6">
      <div className="max-w-6xl 3xl:max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none text-foreground text-center mb-4">
          {t.testimonials.scrollTitle}
        </h2>
        <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] text-center mb-16">
          {t.testimonials.subtitle}
        </p>

        <div ref={ref} className="relative max-w-6xl 3xl:max-w-7xl mx-auto min-h-[700px] md:min-h-[600px]">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-foreground/10 text-center leading-[0.95] whitespace-pre-line">
              {t.testimonials.centerTitle}
            </h3>
          </div>

          {t.testimonials.items.map((item, i) => {
            const meta = testimonialMeta[i];
            return (
              <div
                key={item.name}
                className={`absolute ${meta.position} ${meta.rotation} ${meta.color} rounded-2xl p-5 max-w-[280px] hover:rotate-0 transition-all duration-500 z-20 shadow-lg`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? undefined : "translateY(30px)",
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <p className="text-xs sm:text-sm font-bold uppercase leading-relaxed text-foreground">"{item.quote}"</p>
                <div className="flex items-center gap-3 mt-4">
                  <img src={meta.image} alt={item.name} className="w-8 h-8 rounded-full object-cover" loading="lazy" />
                  <span className="text-xs font-mono uppercase text-foreground/80">{item.name}, {item.role}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
