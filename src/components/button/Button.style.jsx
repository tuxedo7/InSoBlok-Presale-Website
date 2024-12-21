import styled, { css } from "styled-components";

const ButtonWrapper = styled.button`
  background: ${({ theme }) => theme.colors.primary}26;
  backdrop-filter: blur(7.5px);
  border-radius: 30px;
  margin-top: 10px;
  width: 100%;
  border: 0;
  padding: 17px 47px;
  font-family: ${({ theme }) => theme.fonts.outfit};
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}40;
  }

  ${({ size }) =>
    size === "large" &&
    css`
      padding: 17px;
      width: 100%;
      background: ${({ theme }) => theme.colors.primary};
      color: #0e1117;
      transition: 0.3s;

      &:hover {
        background: ${({ theme }) => theme.colors.primary}b3;
      }
    `}

  ${({ variant }) =>
    variant === "green" &&
    css`
      padding: 17px;
      min-width: 200px;
      background: ${({ theme }) => theme.colors.conicGradient};
      //border-radius: 50px;
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;

      &:hover {
        background: ${({ theme }) => theme.colors.conicGradient};
      }
    `}

  ${({ variant }) =>
    variant === "disabled" &&
    css`
      padding: 17px;
      min-width: 200px;
      //border-radius: 50px;
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;
      background-color: lightgrey;
        cursor: not-allowed;

      &:hover {
        
        background-color: lightgrey;
      }
    `}

    ${({ variant }) =>
    variant === "yellow" &&
    css`
      padding: 17px;
      min-width: 200px;
      background: ${({ theme }) => theme.colors.yellow};
      border-radius: 50px;
      color: ${({ theme }) => theme.colors.black};
      transition: 0.3s;

      &:hover {
        background: ${({ theme }) => theme.colors.yellow};
      }
    `}

  ${({ variant }) =>
    variant === "gradient" &&
    css`
      padding: 17px;
      min-width: 270px;
      background: ${({ theme }) => theme.colors.linearGradient};
      border-radius: 50px;
      font-weight: 700;
      font-size: 15px;
      line-height: 26px;
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;

      &:hover {
        background: ${({ theme }) => theme.colors.linearGradient};
      }
    `}

${({ variant }) =>
    variant === "gradient2" &&
    css`
      padding: 17px;
      min-width: 270px;
      background: ${({ theme }) => theme.colors.linearGradient2};
      border-radius: 50px;
      font-weight: 700;
      font-size: 15px;
      line-height: 26px;
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;

      &:hover {
        background: ${({ theme }) => theme.colors.linearGradient2};
      }
    `}

    ${({ variant }) =>
    variant === "gradient3" &&
    css`
      padding: 17px;
      min-width: 270px;
      background: linear-gradient(90deg, #07e6f5 0%, #fc0cdf 100%);
      border-radius: 50px;
      font-weight: 700;
      font-size: 15px;
      line-height: 26px;
      color: ${({ theme }) => theme.colors.white};
      transition: 0.3s;

      &:hover {
        background: linear-gradient(90deg, #07e6f5 0%, #fc0cdf 100%);
      }
    `}

    ${({ variant }) =>
    variant === "gradient4" &&
    css`
      padding: 17px;
      min-width: 270px;
      border-radius: 30px;
      background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
      backdrop-filter: blur(10px);
      font-weight: 700;
      font-size: 16px;
      line-height: 26px;
      color: ${({ theme }) => theme.colors.black};
      transition: 0.3s;

      &:hover {
        background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
      }
    `}

    ${({ variant }) =>
    variant === "gradient5" &&
    css`
      padding: 17px;
      min-width: 270px;
      border-radius: 30px;
      background: linear-gradient(
        90deg,
        #3c38ff 0%,
        #8c45ff 33.33%,
        #ff36c7 68.23%,
        #ffa336 100%
      );
      backdrop-filter: blur(10px);
      font-weight: 700;
      font-size: 16px;
      line-height: 26px;
      color: ${({ theme }) => theme.colors.white};
      text-transform: uppercase;

      &:hover {
        background: linear-gradient(
          90deg,
          #3c38ff 0%,
          #8c45ff 33.33%,
          #ff36c7 68.23%,
          #ffa336 100%
        );
      }
    `}

    ${({ variant }) =>
    variant === "gradient6" &&
    css`
      padding: 17px;
      min-width: 270px;
      border-radius: 0;
      background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
      backdrop-filter: blur(10px);
      font-family: ${({ theme }) => theme.colors.primary};
      font-weight: 700;
      font-size: 16px;
      line-height: 26px;
      color: ${({ theme }) => theme.colors.black};
      text-transform: uppercase;

      &:hover {
        background: linear-gradient(90deg, #bcff7b 0%, #1dff96 100%);
      }
    `}

    ${({ variant }) =>
    variant === "gradient7" &&
    css`
      padding: 17px;
      min-width: 270px;
      width: 100%;
      border-radius: 10px;
      background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
      backdrop-filter: blur(10px);
      font-weight: 700;
      font-size: 16px;
      line-height: 26px;
      color: ${({ theme }) => theme.colors.black};
      transition: 0.3s;

      &:hover {
        background: linear-gradient(90deg, #1dff96 0%, #bcff7b 100%);
      }
    `}
    
  @media screen and (max-width: 575px) {
    ${({ variant }) =>
    variant === "green" &&
    css`
        min-width: unset;
        width: 100%;
      `}
  }
`;

export default ButtonWrapper;
