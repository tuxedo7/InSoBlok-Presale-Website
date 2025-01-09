import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  transition: 0.3s;

  .navbar {
    display: flex;
    align-items: center;
    height: 3.125rem;
    background-color: #121212;
    width: 100%;
    padding: 0;
    z-index: 100;
    --gap: 3rem;
  }

  .navbar-content {
    display: flex;
    gap: var(--gap);
    align-items: center;
    height: 100%;
    padding-block: 0.5rem;
    padding-inline: 0.75rem;
    max-width: 114rem;
    width: 100%;
    margin-inline: auto;
  }

  .navbar-left {
    position: relative;
    flex-shrink: 0;
    display: flex;
    width: 6.25rem;
    height: 100%;
    margin-right: var(--gap);
  }

  .navbar-logo {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .navbar-logo:after {
    content: " ";
    right: calc(var(--gap) * -1);
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
    height: 1.25rem;
    width: 1px;
    background-color: #ffffff1a;
  }

  .navbar-logo img {
    height: 100%;
  }

  .navbar-center {
    display: flex;
    align-items: center;
    flex-grow: 2;
    gap: var(--gap);
  }

  .nav-link {
    position: relative;
    display: flex;
    padding-inline: 0.3125rem;
    background-image: conic-gradient(
      from 180deg at 50% 50%,
      #ffc876 35.7669219375deg,
      #79fff7 153.7493383884deg,
      #9f53ff 258.751244545deg,
      #ff98e2 360deg
    );
    -webkit-background-clip: text;
    background-clip: text;
    transition: color 0.2s ease-out;
    font-size: 0.875rem;
    text-decoration: none !important;
    color: #fff;
  }

  .nav-link:hover .nav-link-inner,
  .nav-link.nav-link-active .nav-link-inner {
    color: transparent;
  }

  .navbar-right {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 1rem;
    margin-left: auto;
  }

  .navbar-right-menu {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .nav-menu {
    li a {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-weight: 700;
      font-size: 16px;
      line-height: 30px;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .menu-toggle {
    position: relative;
    flex-shrink: 0;
    cursor: pointer;
    z-index: 2000;
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: transparent;
  }

  .menu-toggle span {
    display: block;
    width: 2rem;
    height: 0.1875rem;
    transform-origin: left;
    background-color: #fff;
    transition: opacity 0.2s ease-out, transform 0.2s ease-out;
  }

  .menu-toggle span:not(:last-child) {
    margin-bottom: 0.53125rem;
  }

  ._scrolled_1g0ic_25 {
    -webkit-backdrop-filter: blur(0.625rem);
    backdrop-filter: blur(0.625rem);
    background-color: #12121266;
  }

  .menu-open .menu-toggle span:nth-child(2) {
    opacity: 0;
  }

  .menu-open .menu-toggle span:first-child {
    transform: rotate(45deg);
  }

  .menu-open .menu-toggle span:last-child {
    transform: rotate(-45deg);
  }

  .nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
  }

  .nav-menu:not(.menu-open) {
    pointer-events: none;
  }

  .menu-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-backdrop-filter: blur(0.625rem);
    backdrop-filter: blur(0.625rem);
    transition: opacity 0.2s ease-out;
  }

  .nav-menu:not(.menu-open) .menu-backdrop {
    opacity: 0;
  }

  .nav-menu .menu-toggle {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    transition: opacity 0.2s ease-out;
  }

  .nav-menu:not(.menu-open) .menu-toggle {
    opacity: 0;
  }

  .menu-list {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    gap: 1.5rem;
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 3rem);
    height: 100%;
    max-width: 20rem;
    background-color: #000;
    z-index: 1;
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.2s ease-out;
    padding-block: 2rem;
    padding-inline: 1.25rem;
  }

  .nav-menu:not(.menu-open) .menu-list {
    transform: translate(-100%);
  }

  .nav-menu:not(.menu-open) .menu-list {
    transform: translate(-100%);
  }

  .menu-logo {
    width: 6.25rem;
    height: auto;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .menu-logo img {
    height: 35px;
  }

  .menu-link {
    position: relative;
    font-size: 1rem;
    background-image: conic-gradient(
      from 180deg at 50% 50%,
      #ffc876 35.7669219375deg,
      #79fff7 153.7493383884deg,
      #9f53ff 258.751244545deg,
      #ff98e2 360deg
    );
    -webkit-background-clip: text;
    background-clip: text;
    transition: color 0.2s ease-out;
    margin-right: auto;
    text-decoration: none !important;
    color: #fff;
  }

  .menu-link:hover .menu-link-inner,
  .menu-link.menu-link-active .menu-link-inner {
    color: transparent !important;
  }

  .social-links {
    display: flex;
    align-items: center;
    gap: 20px;
    li a {
      flex: 0 0 auto;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.white};
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;
      img {
        width: 20px;
        transition: 0.3s;
      }
      &:hover {
        opacity: 0.7;
      }
    }
  }

  @media (max-width: 1650px) {
    .navbar {
      --gap: 2rem;
    }
  }

  @media (max-width: 1480px) {
    .navbar {
      --gap: 1rem;
    }
  }

  @media (max-width: 1280px) {
    .navbar {
      --gap: 0.5rem;
    }
  }

  @media (max-width: 1180px) {
    .navbar-center {
      display: none;
    }
  }

  @media screen and (max-width: 991px) {
    .menu-toggle {
      display: block;
    }

    // .nav-menu {
    //   display: none;
    // }

    .navbar-left {
      gap: 30px;
    }

    .navbar-right {
      // flex-direction: row-reverse;

      .social-links {
        display: none;
      }
    }
  }

  @media screen and (max-width: 480px) {
    .navbar-left {
      gap: 15px;
    }

    .navbar-logo {
      display: flex;
      flex: 0 0 auto;
      max-width: 100px;
    }

    .dropdown-demo {
      display: none;
    }

    .navbar-right {
      gap: 10px;
    }
  }
`;

export default HeaderWrapper;
