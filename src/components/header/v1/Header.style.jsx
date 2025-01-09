import styled from "styled-components";

const HeaderWrapper = styled.div`
  z-index: 999;
  width: 100%;
  transition: 0.3s;

  .header-top-news {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: auto;
    z-index: 99;
    transition: 0.4s;
    margin-bottom: -1px;
  }

  .header-top-news.bg-image1 {
    // background-image: url(/src/assets/images/top-banner.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
  }

  .top-banner {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .marquee-container {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 40px;
  }

  .marquee {
    display: inline-block;
    padding-top: 8px;
    white-space: nowrap;
    height: 100%;
    color: #fff;
    font-size: 15px;
    animation: marquee 25s linear infinite;
  }

  .navbar {
    display: flex;
    align-items: center;
    width: 100%;
    height: 5rem;
    padding: 0;
    background-color: #060606b3;
    border-bottom: 1px solid #ffffff1a;
    z-index: 100;
    --gap: 3rem;
  }

  .navbar-content {
    display: flex;
    gap: var(--gap);
    align-items: center;
    height: 100%;
    padding-block: 0.5rem;
    // padding-inline: 0.75rem;
    padding-left: 250px;
    padding-right: 250px;
    max-width: 114rem;
    width: 100%;
    margin-inline: auto;
  }

  @media (max-width: 1400px) {
    .navbar-content {
      padding-left: 180px;
      padding-right: 180px;
    }
  }

  @media (max-width: 1200px) {
    .navbar-content {
      padding-left: 120px;
      padding-right: 120px;
    }
  }

  @media (max-width: 900px) {
    .navbar-content {
      padding-left: 90px;
      padding-right: 90px;
    }
  }

  @media (max-width: 680px) {
    .navbar-content {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  .navbar-left {
    display: flex;
    align-items: center;
    position: relative;
    flex-shrink: 0;
    display: flex;
    width: 6.25rem;
    height: 100%;
    margin-right: var(--gap);
  }

  .navbar-logo {
    display: flex;
    width: 43px;
    height: 52px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    align-items: center;
    gap: 0.25rem;
  }

  .navbar-logo img {
    width: auto;
    height: 36px;
  }

  .navbar-center {
    display: flex;
    justify-content: center;
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
    font-size: 1rem;
    text-decoration: none !important;
    color: #ccceef;
  }

  .nav-link:hover {
    color: #ff3bd4;
    text-underline-offset: 14px;
    text-decoration-style: solid;
    text-decoration-thickness: 10px !important;
    text-decoration: underline !important;
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
    height: 100%;
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
    display: none;
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
    position: fixed;
    top: 0;
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
    background-color: #060606b3;
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
    font-size: 1.25rem;
    transition: color 0.2s ease-out;
    margin-right: auto;
    text-decoration: none !important;
    color: #ccceef;
  }

  .menu-link:hover .menu-link-inner,
  .menu-link.menu-link-active .menu-link-inner {
    background: linear-gradient(89.83deg, #e43292 12.22%, #6635df 92.05%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
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
    .navbar-content {
      justify-content: space-between;
    }
  }

  @media (max-width: 991px) {
    // .nav-menu {
    //   display: none;
    // }

    .navbar-left {
      gap: 30px;
    }
    
    .navbar-center,
    .navbar-right {
      display: none;
    }

    .menu-toggle {
      display: block;
    }
  }

  @media (max-width: 480px) {
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
