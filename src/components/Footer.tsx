const socials = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

const Footer = () => (
  <footer className="border-t border-border py-12 px-6">
    <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
      <span className="text-lg font-black uppercase tracking-tight text-foreground">
        Señorleonagencia
      </span>

      <div className="flex items-center gap-6">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
          >
            {s.label}
          </a>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        © 2026 Señorleonagencia. Todos los derechos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
