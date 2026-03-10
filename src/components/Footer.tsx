import logoNegro from "@/assets/logo_negro.png";
import developerIcon from "@/assets/developer-icon.svg";
import { useI18n } from "@/hooks/use-i18n";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="border-t border-border py-16 px-6">
      <div className="mx-auto max-w-6xl 3xl:max-w-7xl">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground max-w-xs leading-relaxed">
            {t.footer.description}
          </p>
          <div className="flex items-center gap-8">
            {["#about", "#services", "#contact"].map((href, i) => (
              <button
                key={href}
                onClick={() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.footer.navLinks[i]}
              </button>
            ))}
          </div>
        </div>

        {/* Giant logo + name */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="flex items-center justify-center gap-4">
            <img src={logoNegro} alt="Señorleon Agencia" className="w-16 h-16 md:w-24 md:h-24 object-contain dark:invert" />
            <h2 className="text-[12vw] md:text-[8vw] 3xl:text-[6vw] font-black uppercase tracking-tighter text-foreground leading-none">
              SR<span className="text-gradient-brand">LEON</span>
            </h2>
          </div>

          {/* Co-branding */}
          <a
            href="https://www.instagram.com/bautii.__8/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="text-xs text-muted-foreground">{t.footer.madeBy}</span>
            <img src={developerIcon} alt="Developer" className="w-14 h-14 brightness-0 invert" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wide">
              {t.footer.copyright}<br />{t.footer.rights}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-3">{t.footer.contactTitle}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{t.footer.phone}<br />{t.footer.email}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-3">{t.footer.locationTitle}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{t.footer.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
