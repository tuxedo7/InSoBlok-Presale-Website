import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { clsx } from "clsx";
import HeaderWrapper from "./Header_backup.style";
import ConnectWalletButton from "../../connectWalletButton/ConnectWalletButton";
import DropdownDemo from "../dropdownDemo/DropdownDemo";
import MobileMenu from "../mobileMenu/MobileMenu";
import HeaderSocialLinks from "../../../assets/data/headerSocialLinks";
import Whitepaper from "../../../assets/pdf/whitepaper.pdf";
import Logo from "../../../assets/images/inso_logo.webp";
import { HiMenuAlt3 } from "react-icons/hi";

const menuList = [
  {label:"Investor Pitch Deck",link:"https://www.insoblokai.io/_files/ugd/3a15de_5f5f3554ac1a47a79f18a6d48f388c9f.pdf"},
  {label:"Team",link:"https://www.insoblokai.io/team"},
  {label:"Tokenomics",link:"https://www.insoblokai.io/tokenomics"},
  {label:"Roadmap",link:"https://www.insoblokai.io/roadmap"},
  {label:"Whitepaper",link:"https://www.insoblokai.io/_files/ugd/3a15de_62fefda46cc7485a82afc0694d6b86f1.pdf"},
  {label:"Case Studies",link:"https://www.insoblokai.io/_files/ugd/3a15de_4310af409ccb4b54ac9282223eaea5dc.pdf"},
  {label:"FAQ",link:"https://www.insoblokai.io/faq"},
  {label:"Contact",link:"https://www.insoblokai.io/contact"},
  {label:"Career",link:"https://www.insoblokai.io/career"}
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
      if (isNavMenu && navRef.current && !navRef.current.contains(event.target)) {
        handleNavMenu();
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isNavMenu, handleNavMenu]);

  return (
    <>
      <HeaderWrapper className="header-section">
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
                <img src={logoImg} alt="Logo" />
                InSoBlok
              </NavLink>
            </div>
            <div className="navbar-center">
              {menuList.map((menu, index) => (
                <NavLink key={index} className="nav-link" to={menu.link} target="_blank" end> {menu.label}
                </NavLink>
              ))}
            </div>
            <div className="navbar-right">
              <ConnectWalletButton />
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
                <a className="menu-link-inner" href={menu.link} target="_blank">{menu.label}</a>
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
