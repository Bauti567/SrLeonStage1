import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Camera, Menu, X } from "lucide-react";

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
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-surface border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <button onClick={() => handleClick("#hero")} className="flex items-center gap-2 group">
          <Camera className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
          <span className="font-display text-xl font-semibold text-foreground">
            Lumina<span className="text-gradient-gold">Studio</span>
          </span>
        </button>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => handleClick(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide uppercase"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-surface border-b border-border px-6 pb-6"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
