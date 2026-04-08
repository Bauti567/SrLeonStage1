import { useInView } from "framer-motion";
import { useRef, memo } from "react";

interface SplitTextProps {
  text: string;
  className?: string;
  letterClassName?: string;
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
  letterClassName = "",
  delay = 40,
  duration = 0.8,
  splitType = "chars",
}: SplitTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1, margin: "-50px" as `${number}px` });

  const items = splitType === "words" ? text.split(" ") : text.split("");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={{ perspective: "800px" }}>
      {items.map((item, i) => (
        <span
          key={i}
          className={`inline-block ${letterClassName}`}
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView
              ? "translate3d(0,0,0) rotateX(0deg)"
              : "translate3d(0,-120px,0) rotateX(45deg)",
            transitionProperty: "opacity, transform",
            transitionDuration: `${duration * 1000}ms`,
            transitionDelay: `${i * delay}ms`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            transformOrigin: "center bottom",
            whiteSpace: item === " " ? "pre" : undefined,
            willChange: isInView ? "auto" : "transform, opacity",
          }}
        >
          {item === " " ? "\u00A0" : item}
          {splitType === "words" && i < items.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </span>
  );
});

SplitText.displayName = "SplitText";

export default SplitText;
