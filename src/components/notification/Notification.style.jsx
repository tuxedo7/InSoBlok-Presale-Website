import styled from "styled-components";

const NotificationStyleWrapper = styled.div`
  .gittu-toast {
    position: fixed;
    width: 100%;
    z-index: 9999;
    inset: 16px;
    pointer-events: none;

    &-inner {
      left: 0px;
      right: 0px;
      display: flex;
      position: absolute;
      transition: 230ms cubic-bezier(0.21, 1.02, 0.73, 1);
      transform: translateY(0px);
      bottom: 0px;
      justify-content: center;
    }

    &__content {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      will-change: transform;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
      max-width: 350px;
      pointer-events: auto;
      padding: 8px 10px;

      --bg: #141414;
      background: linear-gradient(180deg, var(--bg), var(--bg)) padding-box,
        conic-gradient(
            from 180deg at 50% 50%,
            #ff98e2,
            #ffc876 35.77deg,
            #79fff7 153.75deg,
            #9f53ff 258.75deg,
            #ff98e2 360deg
          )
          border-box !important;
      border: 2px solid transparent;
      border-radius: 0.5rem;
      color: #fff !important;
      font-weight: 600 !important;

      animation: 0.35s cubic-bezier(0.21, 1.02, 0.73, 1) 0s 1 normal forwards
        running go2645569136;

      p {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 15px;
        font-weight: 500;
        line-height: 24px;
        color: white;
      }

      .icon-spin {
        width: 16px;
        height: 16px;
        animation: SpinAnimate 3s infinite linear;
      }
    }
  }

  @keyframes SpinAnimate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .gittu-toast.done {
    width: 306px;
    max-width: 100%;
    border-radius: 10px;
    padding: 20px 15px;
    background-color: #70707059;
    border: 1px solid ${({ theme }) => theme.colors.white}26;
    backdrop-filter: blur(5px);

    .gittu-toast__content {
      gap: 15px;

      .icon-successful {
        width: 46px;
        height: 46px;
        border-radius: 50%;
      }
    }
  }

  @media (max-width: 480px) {
    .gittu-toast {
      width: 80%;
      bottom: 10px;
      right: 10px;
      padding: 10px;

      &__content {
        gap: 10px;

        p {
          font-size: 14px;
        }
      }
    }

    .gittu-toast.done {
      width: 80%;
      padding: 10px;

      .gittu-toast__content {
        gap: 10px;

        .icon-successful {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export default NotificationStyleWrapper;
