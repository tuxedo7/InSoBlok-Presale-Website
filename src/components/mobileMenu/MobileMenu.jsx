import { NavLink } from "react-router-dom";
import MobileMenuWrapper from "./MobileMenu.style";
import Logo from "../../assets/images/FB Logos-09.png";
import Telegram from "../../assets/images/icons/telegram.svg";
import Discord from "../../assets/images/icons/discord.svg";
import Twitter from "../../assets/images/icons/twitter.svg";
import { AiOutlineClose } from "react-icons/ai";
import ConnectWalletButton from "../connectWalletButton/ConnectWalletButton";
import Whitepaper from "../../assets/pdf/whitepaper.pdf";

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



        <ul className="mobile-social-links mb-40">
          <li>
            <a
              href="https://web.telegram.org/fashionblockai"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Telegram} alt="icon" />
            </a>
          </li>
          <li>
            <a href="https://discord.com/fashionblockai" target="_blank" rel="noreferrer">
              <img src={Discord} alt="icon" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/fashionblockai" target="_blank" rel="noreferrer">
              <img src={Twitter} alt="icon" />
            </a>
          </li>
        </ul>

        <ul className="mobile-menu-list mb-40">
          <li>
            <a href={Whitepaper} target="_blank" rel="noreferrer">
              Whitepaper
            </a>
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
