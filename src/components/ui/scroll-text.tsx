"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollTextProps {
  text: string;
  className?: string;
  charClassName?: string;
}

const ScrollTextCharacter = ({
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

  const x = useTransform(scrollYProgress, [0, 0.5], [dist * 50, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [dist * 50, 0]);

  return (
    <motion.span
      className={cn("inline-block", isSpace && "w-3 sm:w-4", className)}
      style={{ x, rotateX }}
    >
      {char}
    </motion.span>
  );
};

export function ScrollText({ text, className, charClassName }: ScrollTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const chars = text.split("");
  const center = Math.floor(chars.length / 2);

  return (
    <div ref={ref} className="h-[200vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className={cn("flex flex-wrap justify-center", className)}>
          {chars.map((char, i) => (
            <ScrollTextCharacter
              key={i}
              char={char}
              index={i}
              centerIndex={center}
              scrollYProgress={scrollYProgress}
              className={charClassName}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
