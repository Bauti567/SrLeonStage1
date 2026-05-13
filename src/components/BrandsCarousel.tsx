import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import yiss from "@/assets/brands/yiss.svg";
import mg21 from "@/assets/brands/mg21.svg";
import bermellon from "@/assets/brands/bermellon.svg";
import soishop from "@/assets/brands/soishop.svg";
import ceo from "@/assets/brands/ceo.svg";
import dcars from "@/assets/brands/dcars.svg";
import moratos from "@/assets/brands/moratos.svg";

const brands = [
  { id: "yiss", name: "Yiss Shop", image: yiss },
  { id: "mg21", name: "MG21", image: mg21 },
  { id: "bermellon", name: "Bermellón", image: bermellon },
  { id: "soishop", name: "Soishop", image: soishop },
  { id: "ceo", name: "CEO", image: ceo },
  { id: "dcars", name: "DCARS", image: dcars },
  { id: "moratos", name: "Moratos Iphone", image: moratos },
];

const looped = [...brands, ...brands, ...brands];

const BrandsCarousel = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [AutoScroll({ playOnInit: true, speed: 0.8, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  return (
    <div className="py-6 sm:py-10">
      <div className="max-w-6xl 3xl:max-w-7xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center">
            {looped.map((brand, i) => (
              <div
                key={`${brand.id}-${i}`}
                className="flex-shrink-0 px-6 sm:px-10 flex items-center justify-center"
                aria-label={brand.name}
              >
                <div
                  className="h-14 sm:h-16 w-24 sm:w-28 bg-muted-foreground/70 hover:bg-foreground transition-colors duration-300"
                  style={{
                    WebkitMaskImage: `url(${brand.image})`,
                    maskImage: `url(${brand.image})`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandsCarousel;
