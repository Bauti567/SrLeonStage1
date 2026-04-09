import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight } from "lucide-react";
import logoNegro from "@/assets/logo_negro.png";
import { useI18n } from "@/hooks/use-i18n";

const Navbar = () => {
  const { t, lang, toggleLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navItems = [
    { label: t.nav.home, href: "#hero" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.branding, href: "#services" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current && !menuRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  const handleClick = useCallback((href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-surface border-b border-border shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-5 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-6">
          <img src={logoNegro} alt="Sr Leon Agencia" className="w-7 h-7 sm:w-8 sm:h-8 object-contain dark:invert" />
          <button
            ref={buttonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground hover:text-muted-foreground transition-colors"
          >
            {menuOpen ? t.nav.close : t.nav.menu}
          </button>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={toggleLang}
            className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors border border-border rounded-full px-2 sm:px-3 py-1"
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
          <button
            onClick={() => handleClick("#contact")}
            className="group flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors"
          >
            <span className="hidden xs:inline">{t.nav.letsTalk}</span>
            <span className="inline-flex items-center justify-center rounded-full border border-foreground w-6 h-6 sm:w-7 sm:h-7 group-hover:bg-foreground group-hover:text-background transition-all duration-300">
              <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            </span>
          </button>
        </div>
      </div>

      <div
        ref={menuRef}
        className="overflow-hidden border-b border-border bg-background transition-all duration-400 ease-in-out"
        style={{
          maxHeight: menuOpen ? "500px" : "0",
          opacity: menuOpen ? 1 : 0,
        }}
      >
        <div className="px-4 sm:px-6 py-8 sm:py-10 max-w-7xl mx-auto">
          <ul className="flex flex-col gap-4 sm:gap-6">
            {navItems.map((item, i) => (
              <li
                key={item.label + item.href}
                className="transition-all duration-300"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateX(0)" : "translateX(-20px)",
                  transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                }}
              >
                <button
                  onClick={() => handleClick(item.href)}
                  className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground hover:text-primary transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
