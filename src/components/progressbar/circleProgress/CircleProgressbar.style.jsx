import styled from "styled-components";

const CircleProgressbarStyleWrapper = styled.div`
  width: 350px;
  height: 350px;
  position: relative;

  .progressbar-svg {
    transform: rotate(-87deg);

    .progressbar-bg {
      fill: none;
      stroke: rgba(255, 255, 255, 0.05);
      stroke-width: 20px;
    }

    .progress-done {
      fill: none;
      stroke: #3c38ff;
      stroke-width: 20px;
      stroke-dasharray: 923;
      stroke-dashoffset: ${(props) =>
        923 - (923 * props.percentage) / 100 || 0};
    }
  }

  .progressbar-inner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(0deg);

    img {
      animation: moveImg 10s linear infinite;
      width: 250px;
      height: 250px;
    }
  }

  @keyframes moveImg {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .progress-level {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h2 {
      color: ${({ theme }) => theme.colors.white};
      font-family: ${({ theme }) => theme.fonts.title};
      font-size: 50px;
      font-weight: 700;
      line-height: 1;
      text-transform: uppercase;
    }
  }

  @media screen and (max-width: 480px) {
    width: 280px;
    height: 280px;

    .progressbar-svg {
      transform: rotate(-87deg);
      width: 280px;
      height: 280px;

      .progressbar-bg {
        cx: 140;
        cy: 140;
        r: 115;
      }

      .progress-done {
        stroke-dasharray: 703;
        stroke-dashoffset: ${(props) =>
          703 - (703 * props.percentage) / 100 || 0};
        cx: 140;
        cy: 140;
        r: 115;
      }
    }

    .progressbar-inner {
      img {
        width: 180px;
        height: 180px;
        
      }
    }

    .progress-level {
      h2 {
        font-size: 40px;
      }
    }
  }

  
`;

export default CircleProgressbarStyleWrapper;
