import { NavLink } from "react-router-dom";
import MobileMenuWrapper from "./MobileMenu.style";
import Logo from "../../../assets/images/inso_logo.webp";
import Telegram from "../../../assets/images/icons/telegram.svg";
import Discord from "../../../assets/images/icons/discord.svg";
import Twitter from "../../../assets/images/icons/twitter.svg";
import { AiOutlineClose } from "react-icons/ai";
import ConnectWalletButton from "../../connectWalletButton/ConnectWalletButton";
import Whitepaper from "../../../assets/pdf/whitepaper.pdf";
import Data from "../../../assets/data/demoMenuList";

const MobileMenu = ({ mobileMenuHandle }) => {
  return (
    <MobileMenuWrapper>
      <div className="gittu-mobile-menu-content">
        <div className="mobile-menu-top">
          <NavLink className="mobile-logo" to="/" end>
            <img src={Logo} alt="Logo" />
          </NavLink>

          <button className="mobile-menu-close" onClick={mobileMenuHandle}>
            <AiOutlineClose />
          </button>
        </div>

        <ul className="mobile-menu-list mb-40">
          <li>
            <NavLink to={"/"} end>
              Home
            </NavLink>
          </li>
        </ul>

        <div className="d-flex justify-content-center">
          <ConnectWalletButton />
        </div>
      </div>
    </MobileMenuWrapper>
  );
};

export default MobileMenu;
