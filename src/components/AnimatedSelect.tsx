import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

interface AnimatedSelectProps {
  value: string;
  onChange: (val: string) => void;
  options: string[];
  placeholder: string;
  required?: boolean;
}

const AnimatedSelect = ({ value, onChange, options, placeholder }: AnimatedSelectProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-2 border-b border-border bg-transparent py-3 text-sm text-foreground focus:outline-none transition-colors hover:border-primary"
      >
        <span className={value ? "text-foreground" : "text-muted-foreground"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className="w-4 h-4 text-muted-foreground transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>

      <div
        className="absolute left-0 right-0 z-30 mt-2 rounded-lg border border-border bg-card shadow-lg overflow-hidden origin-top transition-all duration-300"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scaleY(1)" : "translateY(-8px) scaleY(0.95)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <ul className="py-1">
          {options.map((opt, i) => (
            <li key={opt}>
              <button
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className="w-full text-left px-4 py-2.5 text-sm text-foreground hover:bg-secondary transition-all duration-200"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateX(0)" : "translateX(-8px)",
                  transitionDelay: open ? `${i * 40}ms` : "0ms",
                }}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnimatedSelect;
