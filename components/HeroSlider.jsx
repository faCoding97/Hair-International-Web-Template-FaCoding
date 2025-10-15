"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function HeroSlider({ images }) {
  if (!images || images.length === 0) {
    return (
      <div className="hero-slider bg-gray-200 flex items-center justify-center">
        <p className="text-gray-600">Add images to <code>/public/images/slider</code> to see the slider.</p>
      </div>
    );
  }

  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={src} className="relative w-full h-full">
            <div className="absolute inset-0">
              <Image
                src={src}
                alt={`Salon showcase image ${idx + 1}`}
                fill
                priority={idx === 0}
                className="hero-slide-image"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
