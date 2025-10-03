import { useRef } from "react";
import ProductCard, { type Produto } from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

type ProdutosDesktopProps = {
  produtos: Produto[];
};

const ProdutosDesktop = ({ produtos }: ProdutosDesktopProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.clientWidth * 0.8;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative mt-12">
      <div
        ref={carouselRef}
        className="flex gap-6 px-4 sm:px-8 overflow-x-auto snap-x snap-mandatory cursor-grab scrollbar-hide"
      >
        {produtos.map((produto, index) => (
          <ProductCard key={index} produto={produto} />
        ))}
      </div>
      <div>
        <button
          onClick={() => scroll('left')}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-3 text-[#3d2b1f] z-10 transition-transform duration-200 hover:scale-110"
          aria-label="Anterior"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 hover:bg-white rounded-full p-3 text-[#3d2b1f] z-10 transition-transform duration-200 hover:scale-110"
          aria-label="Próximo"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

export default ProdutosDesktop;