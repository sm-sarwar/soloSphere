import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import carasol1 from '../assets/carousel1.jpg'
import carasol2 from '../assets/carousel2.jpg'
import carasol3 from '../assets/carousel3.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const Slider = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className="rounded" src={carasol1} alt="Carasol 1" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="rounded" src={carasol2} alt="Carasol 2" />
        </SwiperSlide>
        <SwiperSlide>
            <img className="rounded" src={carasol3} alt="Carasol 3" /> 
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
