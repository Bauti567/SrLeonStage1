import { useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/hooks/use-i18n";

// Video grid — replace `src` values with your hosted videos (mp4) and optional `poster` thumbnails.
const portfolioItems = [
  { src: "", poster: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=1000&fit=crop&auto=format&q=70", aspect: "aspect-[4/5]" },
  { src: "", poster: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=800&fit=crop&auto=format&q=70", aspect: "aspect-square" },
  { src: "", poster: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=1000&fit=crop&auto=format&q=70", aspect: "aspect-[4/5]" },
  { src: "", poster: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&h=800&fit=crop&auto=format&q=70", aspect: "aspect-square" },
  { src: "", poster: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=1000&fit=crop&auto=format&q=70", aspect: "aspect-[4/5]" },
  { src: "", poster: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=800&fit=crop&auto=format&q=70", aspect: "aspect-square" },
];

const PortfolioSection = () => {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-16 sm:py-28 px-4 sm:px-6">
      <div className="max-w-7xl 3xl:max-w-[1600px] mx-auto">
        <div
          className="mb-10 sm:mb-14 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-none">
            {t.portfolio.title}
          </h3>
          <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] mt-3">{t.portfolio.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5">
          {portfolioItems.map((item, i) => (
            <div
              key={i}
              className={`${item.aspect} relative overflow-hidden rounded-xl group cursor-pointer bg-card transition-all duration-500`}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {item.src ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play().catch(() => {})}
                  onMouseLeave={(e) => {
                    const v = e.currentTarget as HTMLVideoElement;
                    v.pause();
                    v.currentTime = 0;
                  }}
                />
              ) : (
                <img
                  src={item.poster}
                  alt={`Portfolio ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
