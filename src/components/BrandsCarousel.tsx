import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useI18n } from "@/hooks/use-i18n";
import yissShop from "@/assets/brands/yiss-shop.svg";
import mg21 from "@/assets/brands/mg21.svg";
import bermellon from "@/assets/brands/bermellon.svg";

const brands = [
  { id: "yiss", name: "Yiss Shop", image: yissShop },
  { id: "mg21", name: "MG21", image: mg21 },
  { id: "bermellon", name: "Bermellón", image: bermellon },
];

// Duplicate for seamless loop
const looped = [...brands, ...brands, ...brands, ...brands];

const BrandsCarousel = () => {
  const { t } = useI18n();
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 border-y border-border/50">
      <div className="max-w-6xl 3xl:max-w-7xl mx-auto">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
          {t.brands?.heading ?? "Marcas con las que hemos trabajado"}
        </p>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center">
            {looped.map((brand, i) => (
              <div
                key={`${brand.id}-${i}`}
                className="flex-shrink-0 px-6 sm:px-10 flex items-center justify-center"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-16 sm:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
