import logoNegro from "@/assets/logo_negro.png";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6">
    <div className="mx-auto max-w-6xl">
      {/* Top row: nav + description */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground max-w-xs leading-relaxed">
          Agencia de marketing digital que te ayuda a impulsar tus productos o servicios en línea
        </p>
        <div className="flex items-center gap-8">
          {["#about", "#services", "#contact"].map((href, i) => {
            const labels = ["Nosotros", "Servicios", "Contacto"];
            return (
              <button
                key={href}
                onClick={() =>
                  document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {labels[i]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Giant logo + name */}
      <div className="flex items-center justify-center gap-4 mb-16">
        <img
          src={logoNegro}
          alt="Señorleon Agencia"
          className="w-16 h-16 md:w-24 md:h-24 object-contain dark:invert"
        />
        <h2 className="text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter text-foreground leading-none">
          SR<span className="text-gradient-brand">LEON</span>
        </h2>
      </div>

      {/* Bottom row: copyright, contact, location */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-border">
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            © 2026 — Copyright
            <br />
            Todos los derechos reservados
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-3">
            Contáctanos
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            +57 300 123 4567
            <br />
            hola@senorleonagencia.com
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-3">
            Ubicación
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Bogotá, Colombia
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
