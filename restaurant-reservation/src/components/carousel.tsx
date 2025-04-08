"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

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
    <div className="bg-[#080808] w-full mx-auto py-20 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={30}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={8000} 
        grabCursor={false}
      >
        {images.map((src, index) => (
          <SwiperSlide
            key={index}
            className="!w-[300px]" 
          >
            <img
              src={src}
              alt={`Imagem ${index + 1}`}
              className="w-full h-[500px] object-cover rounded-lg shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}