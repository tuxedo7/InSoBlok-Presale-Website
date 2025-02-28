import styled from "styled-components";

const RoadmapWrapper = styled.div`
  /* General Container */
  .roadmap-inner {
    position: relative;
    color: #fff;
    margin-top: 2px;
    margin-bottom: 2px;
    padding: 2.25rem 3rem;
    border-radius: 32px;
    text-align: center;
    max-width: 1200px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
    transition: border-color 0.3s ease;
    background: #0f1021;
    // background: linear-gradient(rgb(18, 29, 40), rgb(18, 29, 40)) border-box padding-box, linear-gradient(274deg, rgba(215, 246, 167, 0.05) 0%, rgba(108, 207, 244, 0.05) 94.08%) padding-box, linear-gradient(89deg, rgb(28, 197, 225) 0.21%, rgb(199, 242, 132) 115.96%) border-box;

    &::before {
      content: "";
      position: absolute;
      top: -1px;
      bottom: -1px;
      right: -1px;
      left: -1px;
      z-index: -1;
      border: 1px solid transparent;
      border-radius: inherit; /* !importanté */
      border-color: #6c5ce7; /* Highlight border color */
      outline: none; /* Remove default outline */
      animation: pulse 1s infinite alternate;
    }
  }

  @keyframes pulse {
    0% {
      border-color: #6c5ce7;
    }
    25% {
      border-color: rgb(141, 92, 231);
    }
    50% {
      border-color: rgb(192, 92, 231);
    }
    75% {
      border-color: rgb(231, 92, 208);
    }
    100% {
      border-color: #e43292;
    }
  }

  /* Header Section */
  .roadmap-header {
    display: flex;
    justify-content: center;
  }

  .roadmap-header .roadmap-center {
    max-width: 39rem;
  }

  .roadmap-header .roadmap-center .roadmap-tag {
    font-weight: 600;
    letter-spacing: 0.5px;
    line-height: 18px;
    font-size: 16px;
    border-radius: 4px;
    margin-bottom: 12px;
    display: inline-block;
    padding: 7px 14px;
    background-color: #080912;
    box-shadow: 4px 4px 20px 20px rgba(0, 0, 0, 0.01);
  }

  .roadmap-header .roadmap-center .roadmap-tag span {
    background: linear-gradient(90deg, #12b5de -30%, #7130c3 30%, #ff3bd4 90%);
    text-transform: capitalize;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .roadmap-header .roadmap-center h1 {
    font-size: 2.25rem;
    font-weight: 600;
    color: #ccceef;
    margin: 0.5rem 0;
  }

  .roadmap-header .roadmap-center .highlight {
    background: linear-gradient(
        89.83deg,
        rgb(228, 50, 146) 12.22%,
        rgb(102, 53, 223) 92.05%
      )
      text;
    -webkit-text-fill-color: transparent;
  }

  .roadmap-header .roadmap-center p {
    font-size: 1.125rem;
    font-weight: 400;
    color: #7376aa;
  }

  .roadmap-division-bar {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 2px;
    margin: 2.75rem 0rem;
    background: linear-gradient(
      90deg,
      transparent,
      hsla(0, 0%, 100%, 0) 0,
      rgba(111, 100, 233, 0.6) 50%,
      transparent
    );

    &::before {
      content: "";
      position: absolute;
      width: 5%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        hsla(0, 0%, 100%, 0) 0,
        rgba(111, 100, 233, 0.9) 50%,
        transparent
      );
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);
      animation: separateline2 5s ease-in-out infinite;
    }
  }

  @keyframes separateline2 {
    0% {
      margin-left: -550px;
    }
    100% {
      margin-left: 550px;
    }
  }

  @media (max-width: 800px) {
    @keyframes separateline2 {
      0% {
        margin-left: -400px;
      }
      100% {
        margin-left: 400px;
      }
    }
  }

  @media (max-width: 450px) {
    @keyframes separateline2 {
      0% {
        margin-left: -225px;
      }
      100% {
        margin-left: 225px;
      }
    }
  }

  /* Steps Section */
  .roadmap-steps {
    padding-top: 0rem;
  }

  .roadmap-step {
    background: transparent;
    margin: 1rem 0.5rem;
    border-radius: 12px;
    position: relative;
    text-align: left;
    border: none;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
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
    bottom: -1.5rem;
  }

  .splide__pagination__page {
    background: #ccc;
    border: 0;
    border-radius: 2.5px;
    display: inline-block;
    height: 2px;
    margin: 5px;
    padding: 0;
    position: relative;
    transition: background-color 0.2s linear;
    width: 20px;

    &:hover,
    &.is-active {
      background: #e43292;
    }
  }

  .roadmap-step-header {
    .roadmap-step-number {
      width: 2.25rem;
      height: 2.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.125rem;
      font-weight: 700;
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke: 1px #7376aa;
      background: none;
      border: 1px solid #7376aa;
      border-radius: 0.375rem;
    }

    .roadmap-step-title {
      margin-top: 0.375rem;
      font-size: 1.5rem;
      font-weight: 600;
      color: #ccceef;
    }

    &:hover {
      color: #7064e9;
      cursor: pointer;

      .roadmap-step-number {
        border-color: #7064e9;
        -webkit-text-stroke: 1px #7064e9;
      }

      .roadmap-step-title {
        color: #7064e9;
      }
    }
  }

  .roadmap-step-description {
    margin-top: 0.375rem;
    font-size: 1rem;
    font-weight: 400;
    color: #7376aa;
    line-height: 1.5;
  }

  .roadmap-step.highlight .roadmap-step-number {
    border-color: #e43292;
    -webkit-text-stroke: 1px #e43292;
  }

  .roadmap-step.highlight .roadmap-step-title {
    background: linear-gradient(90deg, #e43292 0%, #6635df 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Footer Section */
  .roadmap-footer {
    margin-top: 3.5rem;
  }

  .see-roadmap-button {
    background: transparent;
    color: #64748b;
    border: 1px solid #64748b;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: 700;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.9;
      color: #e43292;
      border: 1px solid #e43292;
    }
  }

  /* Responsive Design */
  @media (min-width: 768px) {
    .roadmap-steps {
      grid-template-columns: repeat(
        3,
        1fr
      ); /* Three columns for tablets and desktops */
    }

    .roadmap-header .roadmap-center h1 {
      font-size: 2.75rem;
    }
  }
`;

export default RoadmapWrapper;
