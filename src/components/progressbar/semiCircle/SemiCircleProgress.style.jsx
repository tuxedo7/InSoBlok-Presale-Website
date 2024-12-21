import styled from "styled-components";

const SemiCircleProgressStyleWrapper = styled.div`
  .progress-item {
    margin: 0 auto;
    width: 400px;
    height: 200px;
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;

    &::after {
      position: absolute;
      content: "";
      box-sizing: border-box;
      top: 0;
      left: 0;
      width: 400px;
      height: 400px;
      border-width: 30px;
      border-style: solid;
      border-top-color: ${({ theme }) => theme.colors.white}1a;
      border-right-color: ${({ theme }) => theme.colors.white}1a;
      border-bottom-color: ${({ theme }) => theme.colors.yellow};
      border-left-color: ${({ theme }) => theme.colors.yellow};
      border-radius: 50%;
      transform: rotate(
        calc(1deg * (-45 + ${(props) => props.percentage || 0} * 1.8))
      );
    }
  }

  .needle {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 400px;
    transform: rotate(
      calc(1deg * (90 + ${(props) => props.percentage || 0} * 1.8))
    );

    &::before {
      position: absolute;
      z-index: -1;
      content: "";
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1px;
      height: 100%;
      background: linear-gradient(
        45deg,
        #ffffff 0%,
        rgba(255, 255, 255, 0.1) 25%,
        rgba(255, 255, 255, 0) 50%
      );
    }
  }

  .progress-title {
    position: relative;
    z-index: 0;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    text-shadow: 2px 3px 0px ${({ theme }) => theme.colors.yellow};
    -webkit-text-stroke-width: 1;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.blackSolid};
    font-family: Kufam;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
  }

  .status-content {
    margin-top: -48px;
    display: flex;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .status-item {
    &.right {
      text-align: right;
    }

    h4 {
      color: ${({ theme }) => theme.colors.white};
      font-family: Outfit;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      text-transform: uppercase;
    }
  }

  @media (max-width: 991px) {
    .status-content {
      margin-top: 20px;
    }
  }

  @media (max-width: 480px) {
    .progress-item {
      width: 280px;
      height: 140px;

      &::after {
        width: 280px;
        height: 280px;
      }
    }

    .needle {
      width: 280px;
      height: 280px;
    }

    .progress-title {
      font-size: 30px;
    }
  }
`;

export default SemiCircleProgressStyleWrapper;
