import styled, { css } from "styled-components";
import ChevronDownIcon from "../../assets/images/icons/chevron-down.svg";

const DropdownWrapper = styled.div`
  position: relative;

  .dropdown-toggle {
    border: 0;
    width: 100%;
    padding: 6px;
    background: ${({ theme }) => theme.colors.white}0d;
    border: 2px solid ${({ theme }) => theme.colors.white}1a;
    border-radius: 10px;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    gap: 14px;
    transition: background-color 0.3s;

    &.active::after {
      transform: rotate(180deg);
    }

    &::after {
      display: block;
      position: absolute;
      top: 50%;
      right: 16px;
      content: url(${ChevronDownIcon});
      border: 0;
      transition: 0.3s;
      transform: translateY(-50%);
    }

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

   .dropdown-list-inso {
    display: grid;
    grid-template-columns: repeat(3, 1fr); // Three columns
    gap: 10px; // Space between items
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;

    li {
      padding: 10px;
      border: 1px solid white;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      box-sizing: border-box; // Include padding and border in element's total width and height
    }

    .list-inso-item-selected {
      border: 2px solid yellow;

      img {
        width: 35px;
        height: 35px; // Ensure height matches width
      }
    }

    .list-inso-item {
      border: 2px solid ${({ theme }) => theme.colors.white}1a;
      display: flex;
      align-items: center;

      img {
        width: 35px;
        height: 35px; // Ensure height matches width
      }
    }

    .list-inso-item-text {
      padding-left: 8px;
      font-weight: bold;
      font-size: 12px;
      letter-spacing: 0.1rem;
    }

    .list-item-a {
      display: flex;
      align-items: center;
      text-decoration: none;
    }
  }

  .dropdown-list {
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 18px 16px;
    background: ${({ theme }) => theme.colors.bgHeader};
    border: 2px solid ${({ theme }) => theme.colors.white}1a;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    li a {
      display: flex;
      align-items: center;
      gap: 14px;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      color: ${({ theme }) => theme.colors.white};

      img {
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
    }
  }

  @media (max-width: 768px) {
    .dropdown-list-inso {
      grid-template-columns: repeat(3, 1fr); // Ensure three columns on tablets
      gap: 8px; // Adjust space between items

      li {
        padding: 8px; // Reduce padding for tablets
      }

      .list-inso-item-selected img,
      .list-inso-item img {
        width: 30px; // Reduce icon size for tablets
        height: 30px; // Ensure height matches width
      }

      .list-inso-item-text {
        font-size: 10px; // Reduce text size for tablets
      }
    }
  }

  @media (max-width: 480px) {
    .dropdown-list-inso {
      grid-template-columns: repeat(3, 1fr); // Ensure three columns on mobile
      gap: 6px; // Adjust space between items

      li {
        padding: 6px; // Reduce padding for mobile
      }

      .list-inso-item-selected img,
      .list-inso-item img {
        width: 25px; // Further reduce icon size for mobile
        height: 25px; // Ensure height matches width
      }

      .list-inso-item-text {
        font-size: 8px; // Further reduce text size for mobile
      }
    }
  }

  ${({ variant }) =>
    variant === "v2" &&
    css`
      .dropdown-toggle {
        min-width: 220px;
        border-radius: 30px;
      }
    `}

  ${({ variant }) =>
    variant === "v3" &&
    css`
      .dropdown-toggle {
        min-width: 220px;
        border-radius: 0;
        border-width: 1px;
      }

      .dropdown-list {
        border-radius: 0;
        border-width: 1px;
      }
    `}

  ${({ variant }) =>
    variant === "v4" &&
    css`
      .dropdown-toggle {
        min-width: 220px;
        border-radius: 30px;
      }
    `}

  .coin-container {
    border: 2px solid white;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }

  @media (max-width: 768px) {
    .dropdown-toggle {
      font-size: 14px;
    }

    .dropdown-list-inso {
      grid-template-columns: repeat(3, 1fr); // Ensure three columns
    }
  }

  @media (max-width: 480px) {
    .dropdown-toggle {
      font-size: 12px;
    }

    .dropdown-list-inso {
      grid-template-columns: repeat(3, 1fr); // Ensure three columns
      gap: 8px; // Adjust gap for smaller screens
    }

    .dropdown-list {
      padding: 12px 8px; // Adjust padding for smaller screens
    }
  }
`;

export default DropdownWrapper;
