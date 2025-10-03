import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard, { type Produto } from "./ProductCard";

import "swiper/css";
import "swiper/css/pagination";

type ProdutosMobileProps = {
  produtos: Produto[];
};

const ProdutosMobile = ({ produtos }: ProdutosMobileProps) => {
  return (
    <div className="relative mt-10">
      <Swiper
        slidesPerView="auto"
        centeredSlides
        spaceBetween={15}
        loop={false}
        slideToClickedSlide
        pagination={{ clickable: true }}
        grabCursor
        modules={[Pagination]}
        className="mySwiper !pb-10"
      >
        {produtos.map((produto, index) => (
          <SwiperSlide 
            key={index} 
            className="flex justify-center !w-[85%] md:!w-[70%]"
          >
            <ProductCard produto={produto} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProdutosMobile;
