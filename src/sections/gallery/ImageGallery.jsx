import ImageGalleryWrapper from "./ImageGallery.style.jsx";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import AD_IMG1 from "../../assets/images/partners/1.png";
import AD_IMG2 from "../../assets/images/partners/2.png";
import AD_IMG3 from "../../assets/images/partners/3.png";
import AD_IMG4 from "../../assets/images/partners/4.png";
import AD_IMG5 from "../../assets/images/partners/5.png";
import AD_IMG6 from "../../assets/images/partners/6.png";
import AD_IMG7 from "../../assets/images/partners/7.png";
import AD_IMG8 from "../../assets/images/partners/8.png";

const images = [
  {
    id: 1,
    url: AD_IMG1,
  },
  {
    id: 2,
    url: AD_IMG2,
  },
  {
    id: 3,
    url: AD_IMG3,
  },
  {
    id: 4,
    url: AD_IMG4,
  },
  {
    id: 5,
    url: AD_IMG5,
  },
  {
    id: 6,
    url: AD_IMG6,
  },
  {
    id: 7,
    url: AD_IMG7,
  },
  {
    id: 8,
    url: AD_IMG8,
  },
];
const ImageGallery = () => {
  return (
    <ImageGalleryWrapper>
      <Swiper
        direction="horizontal"
        loop={true}
        modules={[Autoplay]}
        spaceBetween={60}
        centeredSlides={true}
        slidesPerView={3}
        speed={2000}
        freeMode={true}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1400: {
            slidesPerView: 9,
          },
          1000: {
            slidesPerView: 7,
          },
          760: {
            slidesPerView: 5,
          },
          460: {
            slidesPerView: 3,
          },
        }}
        className="swiper"
      >
        {images.map((image, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="frame-image bg-flashlight">
                <img src={image.url} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </ImageGalleryWrapper>
  );
};

export default ImageGallery;
