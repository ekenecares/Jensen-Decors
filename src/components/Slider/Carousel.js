import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillRightCircle } from "react-icons/ai";
import { AiFillLeftCircle } from "react-icons/ai";

import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

import "swiper/css";

const Carousel = () => {
  return (
    <div className="brands-carousel">
      <Swiper
        className="swiper_container"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={4}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1.5,
        }}
        // autoplay={{
        //   // delay: 4000,
        //   disableOnInteraction: false,
        // }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        methods={[]}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      >
        <SwiperSlide className="swiper-slides">
          <img src="images/carousel2.jpeg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img src="images/carousel1.jpeg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img src="images/carousel 7.jpeg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img src="images/carousel4.jpeg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img src="images/carousel5.jpg" />
          {/* <div className="swiper-design"></div> */}
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img src="images/carousel6.jpeg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img src="images/carousel9.jpg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img src="images/carousel8.jpeg" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img src="images/carousel10.jpeg" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow ">
            <AiFillLeftCircle name="arrow-back-outline" className="prev" />
          </div>
          <div className="swiper-pagination"></div>

          <div className="swiper-button-next slider-arrow">
            <AiFillRightCircle name="arrow-forward-outline" className="next" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
