import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillRightCircle } from "react-icons/ai";
import { AiFillLeftCircle } from "react-icons/ai";

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
  Thumbs,
} from "swiper/modules";

import "swiper/css";

const CarouselHome = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <div>
        <Swiper
          className="swipea"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={2}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
          }}
          // autoplay={{
          //   delay: 4500,
          //   disableOnInteraction: false,
          // }}
          pagination={{ el: ".swiper-paginate", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          methods={[]}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide className="slide">
            <img className="slider-img" src="images/carousel2.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img className="slider-img" src="images/carousel1.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img className="slider-img" src="images/hero.webp" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img className="slider-img" src="images/deer-head.jpeg" />
          </SwiperSlide>
          <SwiperSlide className="slide">
            <img className="slider-img" src="images/brown-wallpaper.jpeg" />
            {/* <div className="swiper-design"></div> */}
          </SwiperSlide>
        </Swiper>
      </div>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[Navigation, Thumbs]}
        className="slider-thumb"
      >
        <SwiperSlide>
          <img src="images/carousel2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/carousel1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/hero.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/deer-head.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/brown-wallpaper.jpeg" />
        </SwiperSlide>
      </Swiper>
      <div className="slider-controller">
        <div className="swiper-button-prev slider-arrow ">
          <AiFillLeftCircle name="arrow-back-outline" className="prevs" />
        </div>

        <div className="swiper-button-next slider-arrow">
          <AiFillRightCircle name="arrow-forward-outline" className="nexts" />
        </div>
      </div>
      <div className="swiper-paginate"></div>
    </div>
  );
};

export default CarouselHome;
