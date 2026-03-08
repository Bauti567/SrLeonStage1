import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
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

  const inputClass =
    "w-full border-b border-border bg-transparent py-3 text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none transition-colors text-sm";

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
              <span className="text-gradient-green">proyecto</span>.
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
            className="space-y-6"
          >
            {/* Full name */}
            <input
              type="text"
              placeholder="Nombre completo*"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />

            {/* Email + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="email"
                placeholder="Email*"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              <input
                type="tel"
                placeholder="Teléfono"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
            </div>

            {/* Company + Inquiry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Empresa"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className={inputClass}
              />
              <select
                value={form.inquiry}
                onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                required
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                <option value="" disabled>
                  Motivo de consulta*
                </option>
                {inquiryOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget */}
            <div>
              <p className="text-sm font-semibold text-foreground mb-3">
                Presupuesto del proyecto*
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

            {/* Project details */}
            <textarea
              placeholder="Detalles del proyecto*"
              rows={4}
              required
              value={form.details}
              onChange={(e) => setForm({ ...form, details: e.target.value })}
              className={`${inputClass} resize-none`}
            />

            {/* Submit */}
            <button
              type="submit"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-bold uppercase tracking-wide text-sm hover:opacity-90 transition-opacity"
            >
              Conectemos
              <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
