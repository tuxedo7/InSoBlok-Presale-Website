import styled, { css } from "styled-components";

const CountdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  gap: 25px;

  .count-item {
    display: flex;
    align-items: baseline;
    position: relative;
    &:not(:last-child) {
      padding-right: 25px;

      &::before {
        position: absolute;
        content: ":";
        top: 0;
        right: -5px;
        font-family: ${({ theme }) => theme.fonts.primary};
        font-weight: 700;
        font-size: 40px;
        line-height: 60px;
        color: ${({ theme }) => theme.colors.white}33;
      }
    }
  }

  .flip-countdown .flip-countdown-piece .flip-countdown-card {
    padding: 0px 6px !important;
  }

  .count {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: ${({ theme }) => theme.colors.white};
  }

  .label {
    font-weight: 700;
    font-size: 24px;
    line-height: 59px;
    color: ${({ theme }) => theme.colors.white};
  }

  .countdown-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .countdown-title {
    background: radial-gradient(circle at 56% 38%, #E43292 22.522615131578945%, #550E9B 36.71189692982456%, #ED45A0 53.31688596491229%, #EEEEEE 82.48355263157895%);
    /*background: conic-gradient(
      from 180deg at 50% 50%,
      #ffc876 35.7669219375deg,
      #79fff7 153.7493383884deg,
      #9f53ff 258.751244545deg,
      #ff98e2 360deg
    );*/
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 4rem;
    font-weight: 700;
    margin-top: 1rem;
    text-align: center;
  }

  .countdown-label {
    color: #fff;
    font-size: 0.875rem;
    text-transform: uppercase;
    font-weight: 500;
    margin-top: 0.5rem;
  }

  .countdown-remaintime {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
  }

  .countdown-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 7.5rem;
    height: 7.5rem;
    color: #fff;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .c-value {
    font-size: 2.5rem;
    font-weight: 700;
  }

  .c-label {
    color: #909090;
    font-size: 0.75rem;
  }

  @media (max-width: 800px) {
    .countdown-title {
      font-size: 5rem;
    }
    .countdown-remaintime {
      gap: 0rem;
    }
    .countdown-card {
      width: 5rem;
      height: 5rem;
    }
    .c-value {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 600px) {
    .countdown-title {
      font-size: 4rem;
    }
  }

  @media (max-width: 400px) {
    .countdown-card {
      width: 3.75rem;
      height: 3.75rem;
      padding: 0.25rem;
    }
    .c-value {
      font-size: 1.25rem;
      line-height: 1em;
    }
  }

  @media screen and (max-width: 1199px) {
    gap: 20px;

    .count-item {
      &:not(:last-child) {
        padding-right: 20px;

        &::before {
          font-size: 30px;
          line-height: 50px;
        }
      }
    }

    .count {
      font-size: 30px;
      line-height: 50px;
    }

    .label {
      font-size: 20px;
      line-height: 50px;
    }
  }

  @media screen and (max-width: 480px) {
    gap: 10px;

    .count-item {
      &:not(:last-child) {
        padding-right: 10px;

        &::before {
          font-size: 22px;
          line-height: 40px;
        }
      }
    }

    .count {
      font-size: 22px;
      line-height: 40px;
    }

    .label {
      font-size: 15px;
      line-height: 40px;
    }
  }

  ${({ size }) =>
    size === "medium" &&
    css`
      gap: 20px;
      .count-item {
        &:not(:last-child) {
          padding-right: 20px;

          &::before {
            font-weight: 700;
            font-size: 30px;
            line-height: 50px;
            color: ${({ theme }) => theme.colors.white}33;
          }
        }
      }

      .count {
        font-weight: 700;
        font-size: 30px;
        line-height: 50px;
        color: ${({ theme }) => theme.colors.white};
      }

      .label {
        font-weight: 700;
        font-size: 18px;
        line-height: 50px;
        color: ${({ theme }) => theme.colors.white};
      }
    `}

  ${({ font }) =>
    font === "orbitron" &&
    css`
      .count-item {
        &:not(:last-child) {
          &::before {
            font-family: ${({ theme }) => theme.fonts.secondary};
          }
        }
      }

      .count {
        font-family: ${({ theme }) => theme.fonts.secondary};
      }

      .label {
        font-family: ${({ theme }) => theme.fonts.secondary};
      }
    `}

    ${({ font }) =>
    font === "title" &&
    css`
      .count-item {
        &:not(:last-child) {
          &::before {
            font-family: ${({ theme }) => theme.fonts.title};
          }
        }
      }

      .count {
        font-family: ${({ theme }) => theme.fonts.title};
      }

      .label {
        font-family: ${({ theme }) => theme.fonts.title};
      }
    `}

    ${({ font }) =>
    font === "title2" &&
    css`
      gap: 20px;
      .count-item {
        &:not(:last-child) {
          padding-right: 20px;
          &::before {
            font-family: ${({ theme }) => theme.fonts.title2};
            font-size: 50px;
            font-weight: 400;
            line-height: 50px;
            color: ${({ theme }) => theme.colors.white}66;
          }
        }
      }

      .count {
        font-family: ${({ theme }) => theme.fonts.title2};
        font-size: 50px;
        font-weight: 400;
        line-height: 50px;
        background: linear-gradient(
          180deg,
          #fff 0%,
          rgba(255, 255, 255, 0.2) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .label {
        font-family: ${({ theme }) => theme.fonts.title2};
        font-size: 50px;
        font-weight: 400;
        line-height: 50px;
        background: linear-gradient(
          180deg,
          #fff 0%,
          rgba(255, 255, 255, 0.2) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `}

    ${({ variant }) =>
    variant === "v2" &&
    css`
      gap: 20px;
      .count-item {
        &:not(:last-child) {
          padding-right: 20px;
          &::before {
            font-family: ${({ theme }) => theme.fonts.title2};
            font-size: 40px;
            font-weight: 400;
            line-height: 40px;
            color: ${({ theme }) => theme.colors.white}66;
          }
        }
      }

      .count {
        font-family: ${({ theme }) => theme.fonts.title2};
        font-size: 40px;
        font-weight: 400;
        line-height: 40px;
        background: linear-gradient(
          180deg,
          #fff 0%,
          rgba(255, 255, 255, 0.2) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .label {
        font-family: ${({ theme }) => theme.fonts.title2};
        font-size: 40px;
        font-weight: 400;
        line-height: 40px;
        background: linear-gradient(
          180deg,
          #fff 0%,
          rgba(255, 255, 255, 0.2) 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    `}

    @media screen and (max-width: 480px) {
    ${({ font }) =>
      font === "title2" &&
      css`
        gap: 10px;
        .count-item {
          &:not(:last-child) {
            padding-right: 10px;
            &::before {
              font-size: 40px;
              line-height: 40px;
            }
          }
        }

        .count {
          font-size: 40px;
          line-height: 40px;
        }

        .label {
          font-size: 40px;
          line-height: 40px;
        }
      `}

    ${({ variant }) =>
      variant === "v2" &&
      css`
        gap: 10px;
        .count-item {
          &:not(:last-child) {
            padding-right: 10px;
            &::before {
              font-size: 30px;
              line-height: 30px;
            }
          }
        }

        .count {
          font-size: 30px;
          line-height: 30px;
        }

        .label {
          font-size: 30px;
          line-height: 30px;
        }
      `}
  }
`;

export default CountdownWrapper;
