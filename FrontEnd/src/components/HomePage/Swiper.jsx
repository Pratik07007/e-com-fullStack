import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          className="h-[60vh] w-full"
          src=" https://images.pexels.com/photos/15672781/pexels-photo-15672781/free-photo-of-cloud-over-mountain-peak-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[60vh] w-full"
          src="https://images.pexels.com/photos/18820290/pexels-photo-18820290/free-photo-of-pier-on-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[60vh] w-full"
          src="https://images.pexels.com/photos/25682344/pexels-photo-25682344/free-photo-of-colors.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="h-[60vh] w-full"
          src="https://images.pexels.com/photos/25020012/pexels-photo-25020012/free-photo-of-close-up-of-a-woman-leaning-against-a-rail.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}
