import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";
import { useI18n } from "@/hooks/use-i18n";

const igPosts = [
  "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=400&fit=crop&q=60",
  "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=400&fit=crop&q=60",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&q=60",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop&q=60",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&q=60",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop&q=60",
];

const InstagramSection = () => {
  const { t } = useI18n();
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  return (
    <section id="instagram" className="py-16 sm:py-28 px-4 sm:px-6">
      <div className="max-w-6xl 3xl:max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-3">
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
            <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-muted-foreground">{t.instagram.handle}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none text-foreground text-center">
            {t.instagram.title1}<br />
            <span className="text-gradient-brand">{t.instagram.title2}</span>
          </h2>
        </div>

        <div ref={gridRef} className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-4xl 3xl:max-w-5xl w-full">
            {igPosts.map((src, i) => (
              <a
                key={i}
                href="https://instagram.com/srleon.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-lg transition-all duration-500"
                style={{
                  opacity: gridInView ? 1 : 0,
                  transform: gridInView ? "scale(1)" : "scale(0.95)",
                  transitionDelay: `${i * 60}ms`,
                }}
              >
                <img src={src} alt={`Instagram post ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
