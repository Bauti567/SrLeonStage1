import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useI18n } from "@/hooks/use-i18n";
import { Plus, X } from "lucide-react";

const FaqSection = () => {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 px-6" ref={ref}>
      <div className="max-w-6xl 3xl:max-w-7xl mx-auto">
        <h2
          className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-gradient-brand mb-16 transition-all duration-700"
          style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(30px)" }}
        >
          {t.faq.title}
        </h2>

        <div className="space-y-0">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-b border-border transition-all duration-500"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${isOpen ? "text-gradient-brand" : "text-foreground group-hover:text-primary"}`}>
                    {item.question}
                  </span>
                  <span className="flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover:border-primary">
                    {isOpen ? <X className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4 text-muted-foreground" />}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ maxHeight: isOpen ? "200px" : "0", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="pb-6 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
