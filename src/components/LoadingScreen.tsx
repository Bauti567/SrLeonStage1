import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import logoNegro from "@/assets/logo_negro.png";
import developerIcon from "@/assets/developer-icon.svg";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState<"logos" | "exit">("logos");

  useEffect(() => {
    const timer = setTimeout(() => setPhase("exit"), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {phase !== "exit" && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <div className="flex items-center gap-6">
            {/* SR Leon logo */}
            <motion.img
              src={logoNegro}
              alt="SR Leon"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain dark:invert"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* X separator */}
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4, type: "spring" }}
              className="text-muted-foreground text-lg font-bold"
            >
              ×
            </motion.span>

            {/* Developer icon */}
            <motion.img
              src={developerIcon}
              alt="Developer"
              className="w-14 h-14 sm:w-18 sm:h-18 brightness-0 invert"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-border rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-foreground rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.4, ease: "linear" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
