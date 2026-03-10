import { motion } from "framer-motion";
import { lazy, Suspense, useState, useEffect, useMemo } from "react";
import logoNegro from "@/assets/logo_negro.png";
import SplitText from "./SplitText";
import { useI18n } from "@/hooks/use-i18n";

const BeamBackground = lazy(() => import("./BeamBackground"));

const HeroSection = () => {
  const { t } = useI18n();
  const { year, month, day } = useMemo(() => {
    const now = new Date();
    return {
      year: now.getFullYear(),
      month: String(now.getMonth() + 1).padStart(2, "0"),
      day: String(now.getDate()).padStart(2, "0"),
    };
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const heroNavItems = [
    { label: t.hero.nav.production, href: "#services" },
    { label: t.hero.nav.strategy, href: "#services" },
    { label: t.hero.nav.socialMedia, href: "#services" },
    { label: t.hero.nav.contactUs, href: "#contact" },
  ];

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!mounted) return <section id="hero" className="relative min-h-screen bg-background" />;

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background pt-24">
      <Suspense fallback={null}>
        <BeamBackground />
      </Suspense>

      <div className="mx-auto max-w-7xl 3xl:max-w-[1600px] w-full px-6 flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 py-12">
        <div className="flex items-center gap-12 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <span>{year}</span>
          <span>{month}—{day}</span>
        </div>

        <div className="max-w-sm text-right space-y-6">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-foreground leading-tight">
            {t.hero.tagline}{" "}
            <span className="text-gradient-brand">{t.hero.taglineHighlight}</span>
          </h2>
          <div className="flex items-center justify-end gap-3">
            <img src={logoNegro} alt="Sr Leon Agencia logo" className="w-8 h-8 object-contain dark:invert" />
            <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground leading-tight">
              {t.hero.motto1}<br />{t.hero.motto2}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full px-4 pb-6 overflow-hidden">
        <h1 className="text-[15vw] sm:text-[12vw] md:text-[11vw] lg:text-[10vw] font-black uppercase tracking-tighter text-foreground leading-[0.85] text-center flex flex-wrap items-center justify-center gap-x-[0.15em]">
          <SplitText text="SR" delay={40} duration={0.8} from={{ opacity: 0, y: -120, rotateX: 45 }} to={{ opacity: 1, y: 0, rotateX: 0 }} />
          <SplitText text="LEON" letterClassName="text-gradient-brand" delay={40} duration={0.8} from={{ opacity: 0, y: -120, rotateX: 45 }} to={{ opacity: 1, y: 0, rotateX: 0 }} />
          <SplitText text="AGENCIA" delay={40} duration={0.8} from={{ opacity: 0, y: -120, rotateX: 45 }} to={{ opacity: 1, y: 0, rotateX: 0 }} />
        </h1>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          {heroNavItems.map((item) => (
            <button key={item.label} onClick={() => handleScroll(item.href)} className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              {item.label}
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
