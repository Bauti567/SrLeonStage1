import { motion, useInView } from "framer-motion";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="instagram" className="py-28 px-6" ref={ref}>
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram className="w-6 h-6 text-foreground" />
            <span className="text-sm font-mono uppercase tracking-widest text-muted-foreground">
              @srleon.agency
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground uppercase tracking-tight">
            Síguenos en{" "}
            <span className="text-gradient-brand">Instagram</span>
          </h2>
        </motion.div>

        {/* Grid of IG posts */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {igPosts.map((src, i) => (
            <motion.a
              key={i}
              href="https://instagram.com/srleon.agency"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
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
