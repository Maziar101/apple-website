import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Slider1 from "../../assets/Slider1.jpg";
import Slider1Small from "../../assets/Slider1Small.jpg";
import Slider2Small from "../../assets/Slider2Small.jpg";
import Slider3Small from "../../assets/Slider3Small.jpg";
import Slider4Small from "../../assets/Slider4Small.jpg";
import Slider2 from "../../assets/Slider2.jpg";
import Slider3 from "../../assets/Slider3.jpg";
import Slider4 from "../../assets/Slider4.jpg";

import Slide from "../Slide";
export default function Slider({isMobile}) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Swiper
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={30}
      allowTouchMove={false}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      modules={[Autoplay, Pagination]}
      className="myCustomSwiper"
    >
      {[
        {
          id: 0,
          image: Slider1,
          smallImage: Slider1Small,
          buttonText: "See the schedule",
          description: "Watch Messi, every club, and every match--lives.",
        },
        {
          id: 1,
          image: Slider2,
          smallImage: Slider2Small,
          buttonText: "See the schedule",
          description: "Watch Messi, every club, and every match--lives.",
        },
        {
          id: 2,
          image: Slider3,
          smallImage: Slider3Small,
          buttonText: "Stream now",
          description: "<strong>Drama</strong> • Serve.Rescue.Survive",
        },
        {
          id: 3,
          image: Slider4,
          smallImage: Slider4Small,
          buttonText: "See the schedule",
          description: "Watch Messi, every club, and every match--lives.",
        },
      ].map((slide, index) => (
        <SwiperSlide key={slide.id} className="swiper-slide-custom">
          <Slide slide={slide} activeIndex={activeIndex} isMobile={isMobile} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
