import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-surface border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        {/* Left: MENU toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:text-muted-foreground transition-colors"
        >
          {menuOpen ? "CERRAR" : "MENÚ"}
        </button>

        {/* Right: CTA */}
        <button
          onClick={() => handleClick("#contact")}
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors"
        >
          Hablemos
          <span className="inline-flex items-center justify-center rounded-full border border-foreground w-7 h-7 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
            <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </button>
      </div>

      {/* Overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden border-b border-border bg-background"
          >
            <div className="px-6 py-10 max-w-7xl mx-auto">
              <ul className="flex flex-col gap-6">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <button
                      onClick={() => handleClick(item.href)}
                      className="text-3xl md:text-5xl font-bold text-foreground hover:text-primary transition-colors uppercase tracking-wide"
                    >
                      {item.label}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
