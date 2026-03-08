import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

const budgetOptions = [
  "Menos de $3K",
  "$3K-$5K",
  "$5K-$10K",
  "$10K-$20K",
  "Más de $20K",
];

const inquiryOptions = [
  "Creación de contenido",
  "Estrategia digital",
  "Branding",
  "Social Media",
  "Otro",
];

interface WaveInputProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  type?: string;
  required?: boolean;
}

const WaveInput = ({ label, value, onChange, type = "text", required = false }: WaveInputProps) => {
  return (
    <div className="wave-group w-full">
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="wave-input w-full border-b border-border bg-transparent py-3 text-foreground text-sm focus:outline-none"
      />
      <label className="wave-label">
        {(label).split("").map((char, i) => (
          <span
            key={i}
            className="label-char"
            style={{ "--index": i } as React.CSSProperties}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </label>
      <span className="wave-bar" />
    </div>
  );
};

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
  </svg>
);

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    budget: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    setForm({ name: "", email: "", phone: "", company: "", inquiry: "", budget: "", details: "" });
  };

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-foreground leading-[1.05] uppercase tracking-tight">
              Hablemos de tu{" "}
              <span className="text-gradient-brand">proyecto</span>.
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Cuéntanos qué te frena, lo convertiremos en tu próxima ventaja competitiva.
            </p>
          </motion.div>

          {/* Right side - Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            <WaveInput label="Nombre completo *" value={form.name} onChange={(v) => setForm({ ...form, name: v })} required />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <WaveInput label="Email *" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" required />
              <WaveInput label="Teléfono" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <WaveInput label="Empresa" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
              <div className="wave-group w-full">
                <select
                  value={form.inquiry}
                  onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                  required
                  className="wave-input w-full border-b border-border bg-transparent py-3 text-foreground text-sm focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="" disabled>Motivo de consulta *</option>
                  {inquiryOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                <span className="wave-bar" />
              </div>
            </div>

            {/* Budget */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">
                Presupuesto del proyecto *
              </p>
              <div className="flex flex-wrap gap-2">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setForm({ ...form, budget: opt })}
                    className={`px-4 py-2 rounded-full border text-xs font-medium transition-all ${
                      form.budget === opt
                        ? "border-foreground bg-foreground text-background"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="wave-group w-full">
              <textarea
                value={form.details}
                onChange={(e) => setForm({ ...form, details: e.target.value })}
                required
                rows={4}
                className="wave-input w-full border-b border-border bg-transparent py-3 text-foreground text-sm focus:outline-none resize-none"
              />
              <label className="wave-label">
                {"Detalles del proyecto *".split("").map((char, i) => (
                  <span key={i} className="label-char" style={{ "--index": i } as React.CSSProperties}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </label>
              <span className="wave-bar" />
            </div>

            {/* Animated Submit Button */}
            <button type="submit" className="animated-btn">
              <ArrowIcon />
              <span className="animated-btn-text">Conectemos</span>
              <span className="animated-btn-circle" />
              <ArrowIcon />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
