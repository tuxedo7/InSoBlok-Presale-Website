import styled, { css } from "styled-components";

const TokenInfoWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
    padding-bottom: 11px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.white}1a;
  }

  li p,
  li h6 {
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ variant }) =>
    variant === "v2" &&
    css`
      display: flex;
      flex-direction: column;
      gap: 8px;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        flex-wrap: wrap;
        padding: 15px 0 14px 40px;
        border-bottom: 0;
        position: relative;

        &:last-child {
          &::before {
            display: none;
          }
        }

        &::before {
          position: absolute;
          content: "";
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }
      }

      li p {
        text-transform: capitalize;
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
      }
      li h6 {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 16px;
        font-weight: 600;
        line-height: 30px;
      }
    `}

  ${({ variant }) =>
    variant === "v3" &&
    css`
      display: flex;
      flex-direction: column;
      gap: 8px;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        flex-wrap: wrap;
        padding: 13px 0;
        border-bottom: 0;

        &:first-child {
          padding-top: 0;
        }
      }

      li p {
        text-transform: capitalize;
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 16px;
        font-weight: 500;
        line-height: 30px;
        color: ${({ theme }) => theme.colors.white}cc;
      }
      li h6 {
        font-family: ${({ theme }) => theme.fonts.primary};
        font-size: 16px;
        font-weight: 600;
        line-height: 30px;
        color: ${({ theme }) => theme.colors.white};
      }
    `}

  @media screen and (max-width: 991px) {
    ${({ variant }) =>
      variant === "v2" &&
      css`
        li {
          padding: 15px 40px 14px 40px;
        }
      `}
  }

  @media screen and (max-width: 480px) {
    ${({ variant }) =>
      variant === "v2" &&
      css`
        li {
          padding: 15px 20px 14px 20px;
        }
      `}
  }
`;

export default TokenInfoWrapper;
