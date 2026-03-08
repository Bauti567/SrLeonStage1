import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

const igPosts = [
  "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=400&fit=crop&q=60",
  "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=400&fit=crop&q=60",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&q=60",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop&q=60",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&q=60",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=400&fit=crop&q=60",
];

const InstagramSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  // Section 1 (title) transforms — shrinks & rotates away
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, -5]);

  // Section 2 (grid) transforms — grows & straightens in
  const scale2 = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <section id="instagram" ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Section 1 — Title with scale/rotate out */}
        <motion.div
          style={{ scale: scale1, rotate: rotate1 }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 gap-4 z-10 origin-center"
        >
          <div className="inline-flex items-center gap-3">
            <Instagram className="w-6 h-6 text-foreground" />
            <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              @srleon.agency
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none text-foreground text-center">
            Síguenos en<br />
            <span className="text-gradient-brand">Instagram</span>
          </h2>
        </motion.div>

        {/* Section 2 — Grid with scale/rotate in */}
        <motion.div
          ref={gridRef}
          style={{ scale: scale2, rotate: rotate2 }}
          className="absolute inset-0 flex items-center justify-center px-6 z-20 origin-center"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-4xl w-full">
            {igPosts.map((src, i) => (
              <motion.a
                key={i}
                href="https://instagram.com/srleon.agency"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={gridInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.08 * i }}
                className="group relative aspect-square overflow-hidden rounded-lg"
              >
                <img
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
