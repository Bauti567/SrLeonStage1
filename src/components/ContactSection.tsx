import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("¡Mensaje enviado! Te contactaremos pronto.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 px-6" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm uppercase tracking-[0.3em] font-medium mb-4">
            Contacto
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Hablemos de tu <span className="text-gradient-gold">proyecto</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-muted-foreground leading-relaxed">
              ¿Tienes una idea en mente? Nos encantaría escucharte. Cuéntanos
              sobre tu proyecto y juntos crearemos algo extraordinario.
            </p>
            <div className="space-y-5">
              {[
                { icon: Mail, text: "hola@luminastudio.com" },
                { icon: Phone, text: "+57 300 123 4567" },
                { icon: MapPin, text: "Bogotá, Colombia" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4">
                  <div className="rounded-lg bg-secondary p-2.5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-secondary-foreground">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Tu nombre"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border border-border bg-card px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Tu email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl border border-border bg-card px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Cuéntanos sobre tu proyecto..."
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl border border-border bg-card px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              Enviar mensaje
              <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
