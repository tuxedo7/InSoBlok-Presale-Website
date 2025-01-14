import styled from "styled-components";

const RoadmapWrapper = styled.div`
  margin: 2rem;

  /* Steps Section */
  .roadmap-steps {
  }

  .roadmap-step {
    margin: 1rem 0rem;
    padding: 1.5rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid transparent;
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    background: linear-gradient(#1f1f1f, #0f1021) padding-box,
      linear-gradient(
          to top right,
          transparent 30%,
          #3d4dcc 50%,
          transparent 70%
        )
        border-box;
    width: 29rem;
    flex-shrink: 0;
    align-self: start;
  }

  @media (max-width: 750px) {
    .roadmap-step {
      width: calc(100vw - 5rem);
      max-width: 22rem;
    }
  }

  .roadmap-step:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  }

  .splide__arrow--prev {
    left: 0rem;
  }

  .splide__arrow--next {
    right: 0rem;
  }

  .splide__arrow svg {
    fill: #ccceef;

    &:hover {
      fill: #e43292;
    }
  }

  .splide__pagination {
    bottom: -4rem;
    gap: 0.5rem;
  }

  .splide__pagination__page {
    background: #ccc;
    border: 0;
    border-radius: 2.5px;
    display: inline-block;
    height: 2px;
    padding: 0;
    position: relative;
    transition: background-color 0.2s linear;
    transform: scale(1.1);
    width: 28px;
    flex: 1;

    &:hover,
    &.is-active {
      background: linear-gradient(45deg, rgb(59, 130, 246), rgb(147, 51, 234));
    }
  }

  @media (max-width: 750px) {
    .splide__pagination__page {
      width: 20px;
    }
  }

  @media (max-width: 450px) {
    .splide__pagination__page {
      width: 15px;
    }
  }

  .roadmap-step-header {
    .roadmap-step-title {
      color: transparent;
      font-size: 28px;
      font-weight: 700;
      text-align: center;
      background-clip: text;
      background-image: linear-gradient(
        94deg,
        #dd00ac 10.66%,
        #7130c3 63.03%,
        #410093 96.34%,
        rgba(255, 0, 238, 0.26) 191.41%,
        rgba(255, 59, 212, 0) 191.43%
      );
      -webkit-text-fill-color: transparent;
    }

    .roadmap-step-sub-title {
      color: #ccceef;
      font-size: 26px;
      font-weight: 500;
      text-align: center;
    }

    &:hover {
      color: #7064e9;
      cursor: pointer;

      .roadmap-step-title {
        color: #7064e9;
      }
    }
  }

  @media (max-width: 1200px) {
    .roadmap-step-title {
      font-size: 24px !important;
    }

    .roadmap-step-sub-title {
      font-size: 22px !important;
    }
  }

  @media (max-width: 1000px) {
    .roadmap-step-title {
      font-size: 22px !important;
    }

    .roadmap-step-sub-title {
      font-size: 20px !important;
    }
  }

  @media (max-width: 750px) {
    .roadmap-step-title {
      font-size: 20px !important;
    }

    .roadmap-step-sub-title {
      font-size: 18px !important;
    }
  }

  .roadmap-step-description {
    margin-top: 0.375rem;
    color: rgb(129, 131, 161);
    line-height: 1.5;
  }

  .roadmap-step-desc-header {
    font-size: 1rem;
    font-weight: 600;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .roadmap-step-desc-content {
    font-size: 0.875rem;
    font-weight: 400;
    margin-left: 1rem;
    list-style: disc;
  }

  @media (max-width: 750px) {
    .roadmap-step-desc-header {
      font-size: 0.875rem;
    }

    .roadmap-step-desc-content {
      font-size: 0.75rem;
    }
  }

  ._divider_line {
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      hsla(0, 0%, 100%, 0) 0,
      rgba(111, 100, 233, 0.6) 50%,
      transparent
    );
  }
`;

export default RoadmapWrapper;
