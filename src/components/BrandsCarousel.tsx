import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import yiss from "@/assets/brands/yiss.svg";
import mg21 from "@/assets/brands/mg21.svg";
import bermellon from "@/assets/brands/bermellon.svg";
import soishop from "@/assets/brands/soishop.svg";
import dcars from "@/assets/brands/dcars.svg";
import moratos from "@/assets/brands/moratos.svg";
import iconik from "@/assets/brands/iconik.svg";

const brands = [
  { id: "iconik", name: "Iconik", image: iconik },
  { id: "yiss", name: "Yiss Shop", image: yiss },
  { id: "mg21", name: "MG21", image: mg21 },
  { id: "bermellon", name: "Bermellón", image: bermellon },
  { id: "soishop", name: "Soishop", image: soishop },
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
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl 3xl:max-w-[1600px] mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center">
            {looped.map((brand, i) => (
              <div
                key={`${brand.id}-${i}`}
                className="flex-shrink-0 px-8 sm:px-14 flex items-center justify-center group"
                aria-label={brand.name}
              >
                <div
                  className="h-16 sm:h-20 md:h-24 w-28 sm:w-36 md:w-44 bg-muted-foreground/80 group-hover:bg-transparent group-hover:bg-gradient-to-r group-hover:from-[hsl(80,70%,50%)] group-hover:to-[hsl(50,95%,60%)] transition-all duration-300"
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
