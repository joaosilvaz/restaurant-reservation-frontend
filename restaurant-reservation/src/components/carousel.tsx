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
    <div className="bg-[#080808] w-full mx-auto py-20 px-4">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
      
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="!w-[320px]">
            <img
              src={src}
              alt={`Imagem ${index + 1}`}
              className="w-full h-[500px] object-cover rounded-lg shadow-md transition-all duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
