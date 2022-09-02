import React, { useState, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./Card";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Slider({ slides }) {
  const [slideNumber, setSlideNumber] = useState();
  useEffect(() => {
    if (window.innerWidth < 640) {
      setSlideNumber(1);
    } else if (window.innerWidth < 1024) {
      setSlideNumber(2);
    } else if (window.innerWidth > 1024) {
      setSlideNumber(3);
    }
  }, []);
  return (
    <Swiper
      className="!px-7 py-10"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={slideNumber}
      navigation
      pagination={{ clickable: true }}
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <Card
              img={slide.img}
              name={slide.name}
              likes={slide.likes}
              price={slide.price}
              id={slide.id}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default Slider;
