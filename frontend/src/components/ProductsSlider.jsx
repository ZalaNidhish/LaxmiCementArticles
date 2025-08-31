import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import background from "../assets/background.jpg";

import img1 from "../assets/cementArticles1.jpeg";
import img2 from "../assets/cementArticles2.jpg";
import img3 from "../assets/cementArticles3.jpeg";
import img4 from "../assets/cementArticles4.webp";
const ProductsSlider = () => {
  const slider = [
    {
      img: img1,
      title: "Cement Articles 1",
      description: "Learn more",
    },
    {
      img: img2,
      title: "Cement Articles 2",
      description: "Learn more",
    },
    {
      img: img3,
      title: "Cement Articles 3",
      description: "Learn more",
    },
    {
      img: img4,
      title: "Cement Articles 4",
      description: "Learn more",
    },
  ];

  return (
    <div className="text-3xl font-bold h-screen w-full relative pb-10">
      <div className="h-[60vh] w-full absolute -z-1 bg-neutral-900/10">
        <img src={background} alt="" className="h-full w-full object-cover" />
      </div>
      <h1 className="text-white text-5xl font-bold text-center py-20">
        Products
      </h1>
      <div className="productslider">
        <Swiper
          spaceBetween={20} // gap between slides (px)
          slidesPerView={3} // number of slides visible
          pagination={{ clickable: true, el: ".custom-Bullets" }}
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="flex items-center justify-center"
        >
          {slider.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center gap-4 px-4shadow-lg hover:shadow-2xl cursor-pointer group">
                <div className="h-50 w-full flex flex-col items-center justify-center group overflow-hidden ">
                  <img
                    src={slide.img}
                    alt={`Slide ${index}`}
                    className="h-full w-full object-cover rounded-md group-hover:scale-120 transition-transform duration-300"
                  />
                </div>
                <h1 className="text-lg font-semibold text-center group-hover:text-amber-500 transition-colors duration-300">
                  {slide.title}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full flex items-center justify-center px-10">
        <button className="text-white bg-amber-500 cursor-pointer px-2 py-1 text-lg font-semibold rounded mt-10 hover:bg-amber-600 transition-colors duration-300">
          View All
        </button>
      </div>
    </div>
  );
};

export default ProductsSlider;
