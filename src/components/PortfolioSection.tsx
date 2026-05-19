import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Eye } from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";

// TikTok account cards. To embed a specific viral video, replace `tiktokUrl` with a
// full video URL like https://www.tiktok.com/@user/video/123... and update `views` + `poster`.
type Item = {
  brand: string;
  handle: string;
  tiktokUrl: string;
  views: string;
  poster: string;
};

const portfolioItems: Item[] = [
  {
    brand: "Iconik",
    handle: "@iconik_collection",
    tiktokUrl: "https://www.tiktok.com/@iconik_collection",
    views: "1.2M",
    poster: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=900&fit=crop&auto=format&q=70",
  },
  {
    brand: "Soishop",
    handle: "@soishop_",
    tiktokUrl: "https://www.tiktok.com/@soishop_",
    views: "850K",
    poster: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=900&fit=crop&auto=format&q=70",
  },
  {
    brand: "Moratos",
    handle: "@moratosmacstore",
    tiktokUrl: "https://www.tiktok.com/@moratosmacstore",
    views: "2.1M",
    poster: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=900&fit=crop&auto=format&q=70",
  },
  {
    brand: "DCARS Tuning",
    handle: "@dcarstuning",
    tiktokUrl: "https://www.tiktok.com/@dcarstuning",
    views: "3.4M",
    poster: "https://images.unsplash.com/photo-1542362567-b07e54358753?w=600&h=900&fit=crop&auto=format&q=70",
  },
  {
    brand: "Yiss Shop",
    handle: "@yiss.shop.off",
    tiktokUrl: "https://www.tiktok.com/@yiss.shop.off",
    views: "920K",
    poster: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=900&fit=crop&auto=format&q=70",
  },
  {
    brand: "Bermellón",
    handle: "@bermellon.arte",
    tiktokUrl: "https://www.tiktok.com/@bermellon.arte",
    views: "640K",
    poster: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&h=900&fit=crop&auto=format&q=70",
  },
  {
    brand: "MG21",
    handle: "@mg21urban",
    tiktokUrl: "https://www.tiktok.com/@mg21urban",
    views: "1.8M",
    poster: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=900&fit=crop&auto=format&q=70&sat=-100",
  },
  {
    brand: "Blueshop 333",
    handle: "@blueshop333",
    tiktokUrl: "https://www.tiktok.com/@blueshop333",
    views: "500K",
    poster: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=900&fit=crop&auto=format&q=70&hue=200",
  },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {portfolioItems.map((item, i) => (
            <a
              key={item.handle}
              href={item.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-foreground/30 transition-all duration-500"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 70}ms`,
              }}
            >
              <img
                src={item.poster}
                alt={item.brand}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Bottom dark gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                </div>
              </div>

              {/* Views badge */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                <Eye className="w-3 h-3 text-white" />
                <span className="text-[10px] sm:text-xs font-semibold text-white">{item.views}</span>
              </div>

              {/* Brand info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                <p className="text-white font-bold text-sm sm:text-base leading-tight">{item.brand}</p>
                <p className="text-white/70 text-[10px] sm:text-xs mt-0.5">{item.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
