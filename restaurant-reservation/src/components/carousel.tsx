"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-10">
      <Swiper
        slidesPerView={3}  // Exibe 3 imagens por vez
        spaceBetween={20}   // Espaço entre as imagens
        loop={true}         // Loop infinito
        navigation={true}   // Botões de navegação
        pagination={{ clickable: true }} // Paginação clicável
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Imagem ${index + 1}`} className="w-full rounded-lg shadow-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
