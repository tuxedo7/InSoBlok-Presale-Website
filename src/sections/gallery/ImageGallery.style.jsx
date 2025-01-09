import styled from "styled-components";

const ImageGalleryWrapper = styled.div`
  margin-top: 9.75rem;
  margin-bottom: 9.75rem;

  .swiper {
    width: 100%;
    height: 38px;
  }

  @media (max-width: 1200px) {
    .swiper {
      height: 56px;
    }
  }

  @media (max-width: 760px) {
    .swiper {
      height: 62px;
    }
  }

  .swiper .swiper-wrapper {
    display:flex;
    align-items: center;
    transition-timing-function: linear;
  }

  .swiper img {
    width: auto;
    height: 100%;
  }
`;

export default ImageGalleryWrapper;
