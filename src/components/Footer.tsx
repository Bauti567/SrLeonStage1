import { Camera } from "lucide-react";

const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-2">
        <Camera className="h-5 w-5 text-primary" />
        <span className="font-display text-lg font-semibold text-foreground">
          Lumina<span className="text-gradient-gold">Studio</span>
        </span>
      </div>

      <div className="flex items-center gap-6">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
          >
            {s.label}
          </a>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        © 2026 LuminaStudio. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
