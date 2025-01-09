import styled from "styled-components";

const VideoSliderWrapper = styled.div`
  .swiper {
    margin: 9.75rem 0rem;
    width: 100%;
    height: 20.625rem;
  }

  .swiper .swiper-wrapper {
    transition-timing-function: linear;
  }

  .swiper-slide {
    min-width: 380px;
  }

  @media (max-width: 780px) {
    .swiper {
      height: fit-content;
    }
    .swiper-slide {
      height: fit-content;
    }
  }

  .swiper img {
    width: 100%;
  }

  .frame-image {
    padding: 20px;
    position: relative;
    right: 0;
    border-radius: 10px;
    transition: var(--transition);
    height: 100%;
    background-color: var(--color-blackest);
  }

  .frame-player {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .bg-flashlight {
    background: #0f1021;
    border: 1px solid #202d3d;
    transition: background 0.2s ease;
  }
`;

export default VideoSliderWrapper;
