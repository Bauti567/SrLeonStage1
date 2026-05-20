import { useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/hooks/use-i18n";

type Item = {
  brand: string;
  handle: string;
  videoId: string;
};

const portfolioItems: Item[] = [
  { brand: "Yiss Shop", handle: "@yiss.shop.off", videoId: "7632095150193265941" },
  { brand: "Yiss Shop", handle: "@yiss.shop.off", videoId: "7631347868778990869" },
  { brand: "Soishop", handle: "@soishop_", videoId: "7624552701770190101" },
  { brand: "Soishop", handle: "@soishop_", videoId: "7609100144478293269" },
  { brand: "Moratos", handle: "@moratosmacstore", videoId: "7626160839086640404" },
  { brand: "MG21", handle: "@mg21urban", videoId: "7623176453412130068" },
  { brand: "DCARS Tuning", handle: "@dcarstuning", videoId: "7632094903916367124" },
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {portfolioItems.map((item, i) => (
            <div
              key={item.videoId}
              className="group rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-foreground/30 transition-all duration-500"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <div className="relative w-full" style={{ aspectRatio: "9 / 16" }}>
                <iframe
                  src={`https://www.tiktok.com/embed/v2/${item.videoId}?lang=es-ES`}
                  title={`${item.brand} TikTok`}
                  loading="lazy"
                  allow="encrypted-media; autoplay; clipboard-write; fullscreen; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                />
              </div>
              <div className="p-4">
                <p className="text-foreground font-bold text-sm sm:text-base leading-tight">{item.brand}</p>
                <a
                  href={`https://www.tiktok.com/${item.handle}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors text-xs mt-0.5 inline-block"
                >
                  {item.handle}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
