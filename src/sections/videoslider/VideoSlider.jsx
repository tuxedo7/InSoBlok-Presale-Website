import VideoSliderWrapper from "./VideoSlider.style.jsx";
import ReactPlayer from "react-player/youtube";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const VideoSlider = () => {
  return (
    <VideoSliderWrapper>
      <Swiper
        direction="horizontal"
        loop={true}
        modules={[Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={3}
        speed={4000}
        freeMode={true}
        allowTouchMove={false}
        autoplay={{
          delay: 0,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1280: {
            slidesPerView: 3,
          },
          960: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 1,
          },
        }}
        className="swiper"
      >
        <SwiperSlide>
          <div className="frame-image bg-flashlight">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=IpYJjVw6wjU&ab_channel=fotios"
              width={"100%"}
              height={"100%"}
              controls
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="frame-image bg-flashlight">
            <ReactPlayer
              url="https://youtu.be/zGnZPeHv_Mc"
              width={"100%"}
              height={"100%"}
              controls
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="frame-image bg-flashlight">
            <ReactPlayer
              url="https://youtu.be/0WQ45Dry4wc"
              className="frame-player"
              width={"100%"}
              height={"100%"}
              controls
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="frame-image bg-flashlight">
            <ReactPlayer
              url="https://youtu.be/aPpQImCZiqA"
              width={"100%"}
              height={"100%"}
              controls
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="frame-image bg-flashlight">
            <ReactPlayer
              url="https://youtu.be/Xf0CxMrpPvA"
              width={"100%"}
              height={"100%"}
              controls
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="frame-image bg-flashlight">
            <ReactPlayer
              url="https://youtu.be/5zgnzfo1rCA"
              width={"100%"}
              height={"100%"}
              controls
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </VideoSliderWrapper>
  );
};

export default VideoSlider;
