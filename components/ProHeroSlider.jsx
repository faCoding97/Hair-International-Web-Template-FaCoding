"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  Thumbs,
  EffectFade,
  
  
  
  FreeMode,
  Parallax,
  
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "swiper/css/effect-fade";

// items: [{ src, alt, title?, caption?, ctaText?, ctaHref? }]
export default function ProHeroSlider({ items }) {
  const [thumbs, setThumbs] = useState(null);
  const [main, setMain] = useState(null);

  if (!items || items.length === 0) {
    return (
      <div className="hero-slider bg-gray-200 flex items-center justify-center">
        <p className="text-gray-600">Add images to <code>/public/images/slider</code> to see the slider.</p>
      </div>
    );
  }

  return (
    <section aria-label="Featured salon images">
      <div className="relative hero-slider overflow-hidden">
        <Swiper
          modules={[Autoplay,Pagination,Navigation,Thumbs,EffectFade,Parallax]}
          loop
          speed={900}
          effect="fade"
          parallax
          autoplay={{ delay: 3800, disableOnInteraction: false, pauseOnMouseEnter: true }}
          
          pagination={{ type: "bullets", clickable: true, dynamicBullets: true }}
          thumbs={{ swiper: thumbs }}
          className="h-full" onSwiper={setMain}
        >
          {items.map((it, idx) => (
            <SwiperSlide key={it.src}>
              <div className="absolute inset-0" data-swiper-parallax="-20%">
                <Image
                  src={it.src}
                  alt={it.alt || `Salon showcase image ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className="hero-slide-image kenburns"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent pointer-events-none" />
              </div>

              <div className="relative h-full">
                <div className="absolute left-4 right-4 md:left-10 md:right-10 bottom-6 md:bottom-10 text-white max-w-3xl z-10"
                     data-swiper-parallax="-80">
                  {it.title && <h2 className="text-2xl md:text-4xl font-extrabold drop-shadow-md">{it.title}</h2>}
                  {it.caption && <p className="mt-2 md:mt-3 text-sm md:text-base opacity-95">{it.caption}</p>}
                  {(it.ctaText && it.ctaHref) && (
                    <a href={it.ctaHref} className="inline-block mt-3 md:mt-4 px-5 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold">
                      {it.ctaText}
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Edge click hotspots */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="pointer-events-auto absolute inset-y-0 left-0 w-1/4 md:w-1/5 cursor-w-resize"
            aria-label="Previous slide area"
            onClick={() => main && main.slidePrev()}
          />
          <div
            className="pointer-events-auto absolute inset-y-0 right-0 w-1/4 md:w-1/5 cursor-e-resize"
            aria-label="Next slide area"
            onClick={() => main && main.slideNext()}
          />
        </div>


        {/* Progress bar */}
        <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-1 bg-black/20">
          <div className="h-full bg-green-600 animate-autoplay-progress" />
        </div>
      </div>

      {/* Thumbnails (hidden on small screens) */}
      <div className="hidden md:block mt-2">
        <Swiper
          modules={[FreeMode,Thumbs]}
          onSwiper={setThumbs}
          watchSlidesProgress
          freeMode
          slidesPerView={6}
          spaceBetween={8}
          className="container-responsive"
        >
          {items.map((it) => (
            <SwiperSlide key={`thumb-${it.src}`} className="!w-40 cursor-pointer">
              <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg border">
                <img src={it.src} alt={it.alt || "thumbnail"} className="w-full h-full object-cover" loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
