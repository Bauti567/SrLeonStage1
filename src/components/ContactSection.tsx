import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useI18n } from "@/hooks/use-i18n";

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

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
  </svg>
);

const ContactSection = () => {
  const { t } = useI18n();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", inquiry: "", budget: "", details: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(t.contact.form.success);
    setForm({ name: "", email: "", phone: "", company: "", inquiry: "", budget: "", details: "" });
  };

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl 3xl:max-w-7xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
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
              <div className="wave-group w-full relative">
                <select
                  value={form.inquiry}
                  onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                  required
                  className="wave-input w-full border-b border-border bg-transparent py-3 text-foreground text-sm focus:outline-none appearance-none cursor-pointer pr-8"
                  style={{ WebkitAppearance: "none" }}
                >
                  <option value="" disabled className="bg-background text-muted-foreground">{t.contact.form.inquiry}</option>
                  {t.contact.inquiryOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-background text-foreground py-2">{opt}</option>
                  ))}
                </select>
                <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="wave-bar" />
              </div>
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
            <button type="submit" className="animated-btn">
              <ArrowIcon />
              <span className="animated-btn-text">{t.contact.form.submit}</span>
              <span className="animated-btn-circle" />
              <ArrowIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
