import { useI18n } from "@/hooks/use-i18n";

const TestimonialsHeader = () => {
  const { t } = useI18n();
  return (
    <section id="testimonials" className="pt-16 sm:pt-28 px-4 sm:px-6">
      <div className="max-w-6xl 3xl:max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none text-foreground text-center mb-4">
          {t.testimonials.scrollTitle}
        </h2>
        <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] text-center">
          {t.testimonials.subtitle}
        </p>
      </div>
    </section>
  );
};

export default TestimonialsHeader;
