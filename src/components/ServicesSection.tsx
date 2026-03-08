import { useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState, memo } from "react";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";

const serviceImages = [
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop&auto=format&q=60",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format&q=60",
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop&auto=format&q=60",
];

interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
}

const ServiceCard = memo(({ service, image, isActive, learnMore }: { service: ServiceItem; image: string; isActive: boolean; learnMore: string }) => (
  <div
    className="absolute inset-0 flex items-center transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[opacity,transform]"
    style={{
      opacity: isActive ? 1 : 0,
      transform: isActive ? "translate3d(0,0,0)" : "translate3d(0,40px,0)",
      pointerEvents: isActive ? "auto" : "none",
    }}
  >
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center px-6 md:px-12">
      <div className="md:col-span-5 space-y-6">
        <div className="space-y-2">
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            ({service.id}) — {service.tag}
          </span>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter text-foreground leading-[0.9] whitespace-pre-line">
            {service.title}
          </h3>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{service.description}</p>
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors"
        >
          {learnMore}
          <span className="inline-flex items-center justify-center rounded-full border border-foreground w-8 h-8 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
            <ArrowRight className="h-4 w-4" />
          </span>
        </button>
      </div>
      <div className="md:col-span-7">
        <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
          <img src={image} alt={service.title.replace('\n', ' ')} className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </div>
  </div>
));

ServiceCard.displayName = "ServiceCard";

const ServicesSection = () => {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const itemCount = t.services.items.length;

  useMotionValueEvent(scrollYProgress, "change", useCallback((latest: number) => {
    const index = Math.min(Math.floor(latest * itemCount), itemCount - 1);
    setActiveIndex((prev) => prev !== index ? index : prev);
  }, [itemCount]));

  return (
    <section id="services" ref={containerRef} style={{ height: `${(itemCount + 1) * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        <div className="absolute top-8 left-8 z-10">
          <p className="text-[10px] uppercase tracking-[0.3em] font-semibold text-muted-foreground">{t.services.label}</p>
        </div>
        <div className="absolute top-8 right-8 z-10">
          <span className="text-xs font-mono text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(itemCount).padStart(2, "0")}
          </span>
        </div>
        <div className="relative h-full flex flex-col justify-end pb-12 px-6 md:px-12">
          {t.services.items.map((service, i) => (
            <ServiceCard key={service.id} service={service} image={serviceImages[i]} isActive={activeIndex === i} learnMore={t.services.learnMore} />
          ))}
          <div className="relative z-10 flex items-center gap-3 mx-auto">
            {t.services.items.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all duration-500 ${activeIndex === i ? "w-8 bg-foreground" : "w-2 bg-muted-foreground/30"}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
