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

const ScrollChar = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
  className,
}: {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: any;
  className?: string;
}) => {
  const isSpace = char === " ";
  const dist = index - centerIndex;
  const x = useTransform(scrollYProgress, [0, 0.4], [dist * 45, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.4], [dist * 40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0.3, 1]);

  return (
    <motion.span
      className={`inline-block ${isSpace ? "w-3 sm:w-5" : ""} ${className || ""}`}
      style={{ x, rotateX, opacity }}
    >
      {char}
    </motion.span>
  );
};

const InstagramSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });

  const title = "Síguenos en Instagram";
  const chars = title.split("");
  const center = Math.floor(chars.length / 2);

  return (
    <section id="instagram" ref={sectionRef} className="relative">
      {/* Scroll-animated title */}
      <div className="h-[150vh] relative">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden px-6 gap-4">
          <div className="inline-flex items-center gap-3">
            <Instagram className="w-6 h-6 text-foreground" />
            <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              @srleon.agency
            </span>
          </div>
          <h2 className="flex flex-wrap justify-center text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
            {chars.map((char, i) => (
              <ScrollChar
                key={i}
                char={char}
                index={i}
                centerIndex={center}
                scrollYProgress={scrollYProgress}
                className="text-foreground"
              />
            ))}
          </h2>
        </div>
      </div>

      {/* Grid of IG posts */}
      <div ref={gridRef} className="px-6 pb-28 -mt-[30vh]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-7xl mx-auto">
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
      </div>
    </section>
  );
};

export default InstagramSection;
