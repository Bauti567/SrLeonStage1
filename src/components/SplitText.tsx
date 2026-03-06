import { motion, useInView } from "framer-motion";
import { useRef, memo } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitType?: "chars" | "words";
  from?: Record<string, number>;
  to?: Record<string, number>;
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
}

const SplitText = memo(({
  text,
  className = "",
  delay = 40,
  duration = 0.6,
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-50px",
  onAnimationComplete,
}: SplitTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold, margin: rootMargin as `${number}px` });

  const items = splitType === "words" ? text.split(" ") : text.split("");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={{ perspective: "800px" }}>
      {items.map((item, i) => (
        <motion.span
          key={i}
          initial={from}
          animate={isInView ? {
            ...to,
            transition: {
              delay: i * (delay / 1000),
              duration,
              ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            },
          } : from}
          onAnimationComplete={i === items.length - 1 ? onAnimationComplete : undefined}
          className="inline-block"
          style={{ whiteSpace: item === " " ? "pre" : undefined }}
        >
          {item === " " ? "\u00A0" : item}
          {splitType === "words" && i < items.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </span>
  );
});

SplitText.displayName = "SplitText";

export default SplitText;
