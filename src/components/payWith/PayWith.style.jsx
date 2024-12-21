import styled, { css } from "styled-components";

const PayWithStyleWrapper = styled.div`
  .gittu-toast {
    position: fixed;
    z-index: 9999;
    bottom: 20px;
    right: 20px;
    transform: translateX(-50%);
  //  border-radius: 10px;
    padding: 10px 14px;
    background-color: ${({ theme }) => theme.colors.white}33;
    border: 1px solid ${({ theme }) => theme.colors.white}26;
    backdrop-filter: blur(5px);

    &__content {
      display: flex;
      align-items: center;
      gap: 10px;

      p {
        font-size: 16px;
        line-height: 1;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.white};
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
    width: 270px;
    max-width: 100%;
    //border-radius: 10px;
    padding: 0px 20px 20px 20px;
    background-color: ${({ theme }) => theme.colors.white}33;
    border: 1px solid ${({ theme }) => theme.colors.white}26;
    backdrop-filter: blur(5px);

    .gittu-toast__content {
      justify-content: center;
      flex-direction: column;
      text-align: center;

      .icon-successful {
        margin-top: -23px;
        width: 46px;
        height: 46px;
        border-radius: 50%;
      }

      h4 {
        font-size: 20px;
        font-weight: 500;
        line-height: 1;
        color: ${({ theme }) => theme.colors.white};
      }

      p {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  .pay-with-content {
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }

  .pay-with-list {
    display: flex;
    align-items: center;
    gap: 20px;

    li {
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        border: 2px solid transparent;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.white}26;
        backdrop-filter: blur(10px);
        transition: 0.3s;

        img {
          flex: 0 0 auto;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }

        &.active,
        &:hover {
          border-color: ${({ theme }) => theme.colors.white}66;
        }
      }
    }
  }

  .pay-with-button {
    padding: 15px 24px;
    border: 0;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.white}26;
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    text-transform: uppercase;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  .presale-item {
    display: flex;
    align-items: center;
    gap: 20px;

    &-inner {
      width: 100%;
      display: flex;
      flex-direction: column;
    }

    label {
      margin-bottom: 5px;
      color: ${({ theme }) => theme.colors.white};
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 16px;
      font-weight: 600;
      line-height: 30px;
      text-transform: uppercase;
    }

    input {
      width: 100%;
      padding: 17px 20px 16px 20px;
      //border-radius: 30px;
      border: 2px solid ${({ theme }) => theme.colors.white}1f;
      background: ${({ theme }) => theme.colors.white}0d;
      backdrop-filter: blur(5px);
      color: ${({ theme }) => theme.colors.white};
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 18px;
      font-weight: 600;
      line-height: 18px;
      -moz-appearance: textfield; /* Firefox */

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &:focus {
        outline: none;
      }
    }
  }

  .presale-item-btn {
    width: 100%;
    border: 0;
   // border-radius: 50px;
    padding: 17px;
    background: linear-gradient(90deg, #07e6f5 0%, #fc0cdf 100%);
    text-transform: uppercase;
    font-weight: 700;
    font-size: 15px;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.white};
    transition: 0.3s;

    &:hover {
      background: linear-gradient(90deg, #07e6f5 0%, #fc0cdf 100%);
    }
  }

  .presale-item-msg {
    text-align: center;
    .text-msg {
      margin-bottom: 20px;
      color: ${({ theme }) => theme.colors.white};
    }

    a {
      text-decoration: underline !important;
    }

    &__content {
      margin-bottom: 30px;
    //  border-radius: 10px;
      padding: 10px 14px;
      background-color: #ff3f3f26;
      border: 1px solid #ff3f3f26;
      backdrop-filter: blur(5px);
      display: flex;
      align-items: center;
      gap: 10px;

      img {
        width: 16px;
        height: 16px;
      //  border-radius: 50%;
      }

      &.done {
        background-color: #1dff9626;
        border: 1px solid #1dff9626;
        color: #1dff96;

        a {
          color: #1dff96;
        }
      }

      p {
        font-size: 16px;
        font-weight: 500;
        line-height: 1;
        color: #ff3f3f;
      }
    }
  }

  ${({ variant }) =>
    variant === "v2" &&
    css`
      .presale-item-btn {
        background: ${({ theme }) => theme.colors.yellow};
        color: ${({ theme }) => theme.colors.black};

        &:hover {
          background: ${({ theme }) => theme.colors.yellow};
        }
      }
    `}

  ${({ variant }) =>
    variant === "v3" &&
    css`
      .presale-item-btn {
      //  border-radius: 30px;
        background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
        backdrop-filter: blur(10px);
        color: ${({ theme }) => theme.colors.black};

        &:hover {
          background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
        }
      }
    `}



  ${({ variant }) =>
    variant === "v4" &&
    css`
      .pay-with-list {
        display: flex;
        align-items: center;
        gap: 20px;

        li {
          button {
            width: 60px;
            height: 60px;
            border: 2px solid transparent;
         //   border-radius: 50%;
            background: ${({ theme }) => theme.colors.white}26;
            backdrop-filter: blur(10px);
            transition: 0.3s;
            position: relative;

            img {
              width: 30px;
              height: 30px;
            //  border-radius: 50%;
            }

            &.active,
            &:hover {
              border-color: #ff36c7;
            }
          }
        }
      }

      .presale-item-btn {
     //   border-radius: 30px;
        background: linear-gradient(
          90deg,
          #3c38ff 0%,
          #8c45ff 33.33%,
          #ff36c7 68.23%,
          #ffa336 100%
        );
        backdrop-filter: blur(10px);
        color: ${({ theme }) => theme.colors.white};

        &:hover {
          background: linear-gradient(
            90deg,
            #3c38ff 0%,
            #8c45ff 33.33%,
            #ff36c7 68.23%,
            #ffa336 100%
          );
        }
      }
    `}

  ${({ variant }) =>
    variant === "v5" &&
    css`
      .pay-with-list {
        display: flex;
        align-items: center;
        gap: 20px;

        li {
          button {
            width: 60px;
            height: 60px;
            border: 1px solid ${({ theme }) => theme.colors.white}26;
          //  border-radius: 0;
            background: ${({ theme }) => theme.colors.white}0d;
            backdrop-filter: blur(10px);
            transition: 0.3s;
            position: relative;

            img {
              width: 30px;
              height: 30px;
        //      border-radius: 50%;
            }

            &.active,
            &:hover {
              border-color: rgba(29, 255, 150, 0.5);
              background: ${({ theme }) => theme.colors.white}26;
            }
          }
        }
      }

      .presale-item {
        display: flex;
        align-items: center;
        gap: 20px;

        &-inner {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        label {
          margin-bottom: 5px;
          color: ${({ theme }) => theme.colors.white};
          font-family: ${({ theme }) => theme.fonts.primary};
          font-size: 16px;
          font-weight: 600;
          line-height: 30px;
          text-transform: uppercase;
        }

        input {
          width: 100%;
          padding: 18px 20px 17px 20px;
          border-radius: 0;
          border: 1px solid ${({ theme }) => theme.colors.white}26;
          background: ${({ theme }) => theme.colors.white}0d;
          backdrop-filter: blur(5px);
          color: ${({ theme }) => theme.colors.white};
          font-family: ${({ theme }) => theme.fonts.primary};
          font-size: 18px;
          font-weight: 600;
          line-height: 18px;

          &:focus {
            outline: none;
          }
        }
      }

      .presale-item-btn {
        border-radius: 0;
        background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
        backdrop-filter: blur(10px);
        font-family: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.black};

        &:hover {
          background: linear-gradient(90deg, #bcff7b 0%, #1dff96 100%);
        }
      }
    `}

    ${({ variant }) =>
    variant === "v6" &&
    css`
      .pay-with-content {
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .pay-with-list {
        display: flex;
        align-items: center;
        gap: 20px;

        li {
          button {
            width: 60px;
            height: 60px;
          //  border-radius: 10px;
            border: 2px solid ${({ theme }) => theme.colors.white}26;
            background: ${({ theme }) => theme.colors.white}0d;
            transition: 0.3s;

            img {
              width: 30px;
              height: 30px;
         //     border-radius: 50%;
            }

            &.active,
            &:hover {
              border-color: rgba(29, 255, 150, 0.5);
              background: ${({ theme }) => theme.colors.white}26;
            }
          }
        }
      }

      .pay-with-button {
        padding: 15px 24px;
    //    border-radius: 10px;
        border: 2px solid ${({ theme }) => theme.colors.white}26;
        background: ${({ theme }) => theme.colors.white}0d;
        display: flex;
        align-items: center;
        gap: 10px;
        color: ${({ theme }) => theme.colors.white};
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 16px;
        font-weight: 600;
        line-height: 26px;
        text-transform: uppercase;

        img {
          width: 30px;
          height: 30px;
     //     border-radius: 50%;
        }
      }

      .presale-item {
        display: flex;
        align-items: center;
        gap: 20px;

        &-inner {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        label {
          margin-bottom: 5px;
          color: ${({ theme }) => theme.colors.white};
          font-family: ${({ theme }) => theme.fonts.primary};
          font-size: 16px;
          font-weight: 600;
          line-height: 30px;
          text-transform: uppercase;
        }

        input {
          width: 100%;
          padding: 17px 20px 16px 20px;
     //     border-radius: 10px;
          border: 2px solid ${({ theme }) => theme.colors.white}26;
          background: ${({ theme }) => theme.colors.white}0d;
          backdrop-filter: blur(5px);
          color: ${({ theme }) => theme.colors.white};
          font-family: ${({ theme }) => theme.fonts.primary};
          font-size: 18px;
          font-weight: 600;
          line-height: 18px;

          &:focus {
            outline: none;
          }
        }
      }

      .presale-item-btn {
     //   border-radius: 10px;
        background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
        backdrop-filter: blur(10px);
        color: ${({ theme }) => theme.colors.black};

        &:hover {
          background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
        }
      }
    `}

    @media screen and (max-width: 991px) {
    ${({ variant }) =>
      variant === "v2" &&
      css`
        .pay-with-content {
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;

          &-left {
            order: 1;
          }
          &-middle {
            text-align: center;
            order: 0;
            width: 100%;
          }
          &-right {
            order: 2;
          }
        }
      `}
  }

  @media screen and (max-width: 575px) {
    .presale-item {
      flex-direction: column;

      label {
        margin-bottom: 5px;
        font-size: 15px;
        line-height: 30px;
      }

      input {
        width: 100%;
        padding: 17px 15px 16px 15px;
        font-size: 16px;
        line-height: 16px;
      }
    }
  }

  @media screen and (max-width: 480px) {
    ${({ variant }) =>
      variant === "v3" &&
      css`
        .pay-with-content {
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;

          &-left {
            order: 1;
          }
          &-middle {
            text-align: center;
            order: 0;
            width: 100%;
          }
          &-right {
            order: 2;
          }
        }
      `}
  }
`;

export default PayWithStyleWrapper;
