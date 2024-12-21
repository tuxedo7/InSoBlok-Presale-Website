import styled, { css } from "styled-components";

const ConnectWalletButtonStyleWrapper = styled.div`
  height: 100%;

  .connect-wallet-btn {
    font-size: .75rem!important;
    margin-right: .75rem;

    border-radius: 3.5rem;
    border: 2px solid transparent;
    outline: none;
    color: #fff;
    box-shadow: 0 4px 4px #00000040;
    --bg: #000;
    background: linear-gradient(180deg,var(--bg),var(--bg)) padding-box,conic-gradient(from 180deg at 50% 50%,#ff98e2,#ffc876 35.77deg,#79fff7 153.75deg,#9f53ff 258.75deg,#ff98e2 360deg) border-box;
    font-weight: 400;
    line-height: 1em;
    padding-inline:.5rem;
    position: relative;
    z-index: 1;
    display: inline-flex;
    overflow: clip;
    transition: .4s ease-in-out;
    align-items: center;
    justify-content: center;
    text-align: center

    &:hover {
      transition: .4s ease-in-out;
      content: "";
      border-radius: inherit;
      pointer-events: none;
      z-index: -1;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      height: 0;
      width: 100%;
      background: conic-gradient(from 180deg at 50% 50%,#ff98e2,#ffc876 35.77deg,#79fff7 153.75deg,#9f53ff 258.75deg,#ff98e2 360deg);
      height: 100%;
      top: 50%;
      transform: translate(-50%,-50%);
      opacity: 0
    }

    .short-address {
      display: none;
    }
  }

  .custom_btn {
    border-radius: 3.5rem;
    border: 2px solid transparent;
    outline: none;
    color: #fff;
    box-shadow: 0 4px 4px #00000040;
    --bg: #000;
    background: linear-gradient(180deg, var(--bg), var(--bg)) padding-box,
      conic-gradient(
          from 180deg at 50% 50%,
          #ff98e2,
          #ffc876 35.77deg,
          #79fff7 153.75deg,
          #9f53ff 258.75deg,
          #ff98e2 360deg
        )
        border-box;
    font-size: 0.9375rem;
    font-weight: 400;
    line-height: 1em;
    height: 100%;
    padding-inline: 1rem;
    position: relative;
    z-index: 1;
    display: inline-flex;
    overflow: clip;
    transition: 0.4s ease-in-out;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .custom_btn svg {
    margin-left: 1.6rem;
    height: auto;
  }

  .custom_btn svg path {
    fill: #fff;
    transition: 0.2s ease-in-out;
  }

  .custom_btn:after {
    transition: 0.4s ease-in-out;
    content: "";
    border-radius: inherit;
    pointer-events: none;
    z-index: -1;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    height: 0;
    width: 100%;
    background: conic-gradient(
      from 180deg at 50% 50%,
      #ff98e2,
      #ffc876 35.77deg,
      #79fff7 153.75deg,
      #9f53ff 258.75deg,
      #ff98e2 360deg
    );
    height: 100%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
  }

  .custom_btn:hover,
  .custom_btn.active {
    color: #000;
  }

  .custom_btn:hover:after,
  .custom_btn.active:after {
    height: 100%;
    opacity: 1;
  }

  .custom_btn:hover svg path,
  .custom_btn.active svg path {
    fill: #fff;
  }

  ${({ variant }) =>
    variant === "v2" &&
    css`
      .connect-wallet-btn {
        background: #07e6f5;
        color: ${({ theme }) => theme.colors.black};

        &:hover {
          background: #07e6f5;
        }
      }
    `}

  ${({ variant }) =>
    variant === "yellow" &&
    css`
      .connect-wallet-btn {
        background: ${({ theme }) => theme.colors.yellow};
        color: ${({ theme }) => theme.colors.black};

        &:hover {
          background: ${({ theme }) => theme.colors.yellow};
        }
      }
    `}

    ${({ variant }) =>
      variant === "gradient" &&
      css`
        .connect-wallet-btn {
          background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
          color: ${({ theme }) => theme.colors.black};

          &:hover {
            background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
          }
        }
      `}

    ${({ variant }) =>
      variant === "v5" &&
      css`
        .connect-wallet-btn {
          background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
          color: ${({ theme }) => theme.colors.black};

          &:hover {
            background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
          }
        }
      `}

    ${({ variant }) =>
      variant === "v6" &&
      css`
        .connect-wallet-btn {
          background: linear-gradient(90deg, #3c38ff 0%, #7838ff 100%);
          color: ${({ theme }) => theme.colors.white};

          &:hover {
            background: linear-gradient(90deg, #3c38ff 0%, #7838ff 100%);
          }
        }
      `}

    ${({ variant }) =>
      variant === "v7" &&
      css`
        .custom-btn {
          border: 0;
          padding: 0;
          min-width: unset;
          border-radius: 0;
          background: transparent;
          width: 100%;
          padding: 26px 0 26px 30px;
          border-bottom: 1px solid ${({ theme }) => theme.colors.white}1a;
          display: flex;
          align-items: center;
          position: relative;
          transition: 0.3s;

          &:before {
            position: absolute;
            content: "";
            bottom: -1px;
            left: 0;
            width: 0%;
            height: 1px;
            background-color: ${({ theme }) => theme.colors.primary};
            transition: 0.3s;
          }

          &:hover {
            &:before {
              width: 100%;
            }
            span {
              color: ${({ theme }) => theme.colors.white};
            }
          }

          span {
            width: 100%;
            font-family: ${({ theme }) => theme.fonts.primary};
            font-size: 16px;
            font-weight: 500;
            line-height: 26px;
            color: ${({ theme }) => theme.colors.white}cc;
          }

          .icon {
            margin-right: 20px;
            width: 18px;
            height: 18px;
          }

          .name {
            text-align: left;
          }

          .icon-text {
            text-align: center;
          }

          .url {
            text-align: right;
          }
        }
      `}
   
  @media screen and (max-width: 991px) {
    ${({ variant }) =>
      variant === "v7" &&
      css`
        .custom-btn {
          padding: 26px 0;
        }
      `}
  }

  @media screen and (max-width: 767px) {
    .connect-wallet-btn {
      padding: 10px 20px;
      min-width: auto;
      span {
        display: none;
      }
      .short-address {
        display: block;
      }
    }
  }
`;

export default ConnectWalletButtonStyleWrapper;
