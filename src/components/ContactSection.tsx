import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useI18n } from "@/hooks/use-i18n";
import AnimatedSelect from "@/components/AnimatedSelect";

interface WaveInputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
  required?: boolean;
}

const WaveInput = ({ label, value, onChange, type = "text", required = false }: WaveInputProps) => (
  <div className="wave-group w-full">
    <input type={type} value={value} onChange={(e) => onChange(e.target.value)} required={required} className="wave-input w-full border-b border-border bg-transparent py-3 text-foreground text-sm focus:outline-none" />
    <label className="wave-label">
      {label.split("").map((char, i) => (
        <span key={i} className="label-char" style={{ "--index": i } as React.CSSProperties}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </label>
    <span className="wave-bar" />
  </div>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/>
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
  </svg>
);

const RECIPIENT = "Santileoncardona@gmail.com";
const WHATSAPP_NUMBER = "573054342448";

const ContactSection = () => {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", inquiry: "", budget: "", details: "" });

  const buildBody = () =>
    `Nombre: ${form.name}\nEmail: ${form.email}\nTeléfono: ${form.phone}\nEmpresa: ${form.company}\nMotivo: ${form.inquiry}\nPresupuesto: ${form.budget}\n\nDetalles:\n${form.details}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Nuevo contacto — ${form.name || "Sin nombre"}`;
    const mailto = `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildBody())}`;
    window.location.href = mailto;
    toast.success(t.contact.form.success);
  };

  const handleWhatsApp = () => {
    const text = `Hola Sr. León, soy ${form.name || "[nombre]"}. ${form.details || "Quiero hablar sobre un proyecto."}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 sm:py-28 px-4 sm:px-6" ref={ref}>
      <div className="mx-auto max-w-6xl 3xl:max-w-7xl">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-start">
          <div
            className="space-y-6 transition-all duration-700"
            style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateX(0)" : "translateX(-30px)" }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-[1.05] uppercase tracking-tight">
              {t.contact.heading}{" "}<span className="text-gradient-brand">{t.contact.headingHighlight}</span>.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">{t.contact.subtitle}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 transition-all duration-700 delay-200"
            style={{ opacity: isInView ? 1 : 0, transform: isInView ? "translateX(0)" : "translateX(30px)" }}
          >
            <WaveInput label={t.contact.form.name} value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <WaveInput label={t.contact.form.email} value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" required />
              <WaveInput label={t.contact.form.phone} value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <WaveInput label={t.contact.form.company} value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
              <AnimatedSelect
                value={form.inquiry}
                onChange={(v) => setForm({ ...form, inquiry: v })}
                options={t.contact.inquiryOptions}
                placeholder={t.contact.form.inquiry}
                required
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">{t.contact.form.budget}</p>
              <div className="flex flex-wrap gap-2">
                {t.contact.budgetOptions.map((opt) => (
                  <button key={opt} type="button" onClick={() => setForm({ ...form, budget: opt })} className={`px-4 py-2 rounded-full border text-xs font-medium transition-all ${form.budget === opt ? "border-foreground bg-foreground text-background" : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"}`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div className="wave-group w-full">
              <textarea value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} required rows={4} className="wave-input w-full border-b border-border bg-transparent py-3 text-foreground text-sm focus:outline-none resize-none" />
              <label className="wave-label">
                {t.contact.form.details.split("").map((char, i) => (
                  <span key={i} className="label-char" style={{ "--index": i } as React.CSSProperties}>{char === " " ? "\u00A0" : char}</span>
                ))}
              </label>
              <span className="wave-bar" />
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button type="submit" className="animated-btn">
                <ArrowIcon />
                <span className="animated-btn-text">{t.contact.form.submit}</span>
                <span className="animated-btn-circle" />
                <ArrowIcon />
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300"
                aria-label="Contactar por WhatsApp"
              >
                <WhatsAppIcon />
                <span>WhatsApp</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
