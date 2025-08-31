import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import img1 from "../assets/cementArticles1.jpeg";
import img2 from "../assets/cementArticles2.jpg";
import img3 from "../assets/cementArticles3.jpeg";
import img4 from "../assets/cementArticles4.webp";

const HomeSlider = () => {
  const slider = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
  ];

  return (
    <div className="h-screen w-full">
      <div className="swiper h-full w-full relative">
        <Swiper
          pagination={{ clickable: true, el: ".custom-Bullets" }}
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="flex items-center justify-center"
        >
          {slider.map((slide, index) => (
              <SwiperSlide
                key={index}
                className="flex items-center justify-center"
              >
                <img src={slide.img} className="h-full w-full object-cover" />
                <div className="text-white absolute top-[60vh] left-[10vw] flex flex-col items-start justify-center gap-6">
                    <h1 className="text-5xl font-semibold">Product is a Visual Art.</h1>
                    <h3 className="text-2xl">The Product speaks for itself.</h3>
                    <button className="bg-amber-500 cursor-pointer hover:bg-neutral-600 font-semibold text-white py-2 px-4 rounded-4xl transition-all duration-300">Check Products</button>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
