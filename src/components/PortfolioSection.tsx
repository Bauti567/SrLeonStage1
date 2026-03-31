import { useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/hooks/use-i18n";

const portfolioItems = [
  { image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop&auto=format&q=60", aspect: "aspect-[4/3]" },
  { image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&auto=format&q=60", aspect: "aspect-square" },
  { image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop&auto=format&q=60", aspect: "aspect-[4/3]" },
  { image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=600&fit=crop&auto=format&q=60", aspect: "aspect-square" },
  { image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop&auto=format&q=60", aspect: "aspect-[4/3]" },
  { image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=600&fit=crop&auto=format&q=60", aspect: "aspect-square" },
];

const PortfolioSection = () => {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="pb-28 px-6">
      <div className="max-w-6xl 3xl:max-w-7xl mx-auto">
        <div
          className="mb-12 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-foreground leading-none">
            {t.portfolio.title}
          </h3>
          <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mt-3">{t.portfolio.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              className={`${item.aspect} overflow-hidden rounded-lg group cursor-pointer transition-all duration-500`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <img
                src={item.image}
                alt={`Portfolio ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
