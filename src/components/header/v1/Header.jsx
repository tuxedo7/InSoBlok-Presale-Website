import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import HeaderWrapper from "./Header.style";
import ConnectWalletButton from "../../connectWalletButton/ConnectWalletButton";
import MobileMenu from "../mobileMenu/MobileMenu";
import Logo from "../../../assets/images/inso_logo.webp";
import TopBanner from "../../../assets/images/top-banner.png";
import Marquee from "react-fast-marquee";

const menuList = [
  { label: "Home", link: "" },
  { label: "About", link: "" },
  { label: "Roadmap", link: "" },
  { label: "Blockchain", link: "" },
  { label: "Audit KYC", link: "" },
];

const Header = ({ variant }) => {
  const [logoImg, setLogoImg] = useState(Logo);
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const [isNavMenu, setIsNavMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navRef = useRef(null);

  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  const handleNavMenu = () => {
    setIsNavMenu(!isNavMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleClickOutside = (event) => {
      if (
        isNavMenu &&
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        handleNavMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isNavMenu, handleNavMenu]);

  return (
    <>
      <HeaderWrapper className="header-section">
        <div className="header-top-news bg-image1">
          <img className="top-banner" src={TopBanner}></img>
          <div className="marquee-container">
            <Marquee speed={110}>
              <div className="marquee">
                🚀 InSoBlok AI Presale is NOW LIVE! Be part of the future—claim
                your discounted tokens and exclusive access to revolutionary
                AI-blockchain technology. 🌐 Don't wait, join the innovation
                wave today! 🔥
              </div>
            </Marquee>
          </div>
        </div>
        <div
          className={clsx(
            "navbar",
            isNavMenu && "menu-open",
            scrollPosition != 0 && "_scrolled_1g0ic_25"
          )}
        >
          <div className="navbar-content">
            <div className="navbar-left">
              <NavLink className="navbar-logo" to="/" end>
                INSOBLOK
                <img src={logoImg} alt="Logo" />
              </NavLink>
            </div>
            <div className="navbar-center">
              {menuList.map((menu, index) => (
                <NavLink
                  key={index}
                  className="nav-link"
                  to={menu.link}
                  target="_blank"
                  end
                >
                  {" "}
                  {menu.label}
                </NavLink>
              ))}
            </div>
            <div className="navbar-right">
              <div className="navbar-right-menu">
                <ConnectWalletButton />
              </div>
            </div>
            <button
              className="menu-toggle"
              aria-label="Close menu"
              onClick={handleNavMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        <div className={clsx("nav-menu", isNavMenu && "menu-open")}>
          <div className="menu-backdrop"></div>
          <button
            className="menu-toggle"
            aria-label="Close menu"
            onClick={handleNavMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="menu-list" ref={navRef}>
            <NavLink className="menu-logo" to="/" end>
              <img src={Logo} alt="InSoBlok" width="232" height="80" />
              InSoBlok
            </NavLink>
            <div id="google_translate_element notranslate"></div>
            {menuList.map((menu, index) => (
              <NavLink key={index} className="menu-link" to="/" end>
                <a className="menu-link-inner" href={menu.link} target="_blank">
                  {menu.label}
                </a>
              </NavLink>
            ))}
          </div>
        </div>
      </HeaderWrapper>

      {isMobileMenu && <MobileMenu mobileMenuHandle={handleMobileMenu} />}
    </>
  );
};

export default Header;
