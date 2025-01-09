import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FooterWrapper from "./Footer.style";
import ConnectWalletButton from "../../connectWalletButton/ConnectWalletButton";
import DropdownDemo from "../dropdownDemo/DropdownDemo";
import MobileMenu from "../mobileMenu/MobileMenu";
import HeaderSocialLinks from "../../../assets/data/headerSocialLinks";
import Whitepaper from "../../../assets/pdf/whitepaper.pdf";
import Twitter from "../../../assets/images/icons/twitter.svg";
import Telegram from "../../../assets/images/icons/telegram.svg";
import Discord from "../../../assets/images/icons/discord.svg";
import Youtube from "../../../assets/images/icons/youtube.svg";
import Instagram from "../../../assets/images/icons/instagram.svg";
import TikTok from "../../../assets/images/icons/tiktok.svg";
import CoinMarketCap from "../../../assets/images/icons/coinmarketcap.svg";
import Logo from "../../../assets/images/inso_logo.webp";
import GooglePlay from "../../../assets/images/icons/google-play.svg";
import AppleStore from "../../../assets/images/icons/apple-store.svg";
import ChromeExtension from "../../../assets/images/icons/chrome-extension.svg";

import { HiMenuAlt3 } from "react-icons/hi";

const Footer = ({ variant }) => {
  // const [logoImg, setLogoImg] = useState(Logo);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenu(!isMobileMenu);
  };

  return (
    <>
      <FooterWrapper>
        <footer className="footer">
          <div className="footer-divide-line" />
          <div className="footer-container">
            <div className="footer-left">
              <img src={Logo} alt="InSoBlok Logo" className="footer-logo" />
              <p className="footer-description">
                Join the InSoBlok Presale: Transforming SocialFi and Influencer
                Commerce. Be part of InSoBlok, the first blockchain and AI
                platform revolutionizing SocialFi, influencer commerce, and Web3
                tokenization. Empowering creators across industries like
                fashion, personal care, and health care, InSoBlok merges social
                media, blockchain, and AI to set a new standard for
                influencer-driven commerce.
              </p>
            </div>

            <div className="footer-right">
            <div className="footer-links">
              <div className="footer-column">
                <h4>USEFUL LINKS</h4>
                <ul>
                  <li>Documentation</li>
                  <li>
                    <a
                      className="_section-link_1qdzc_143"
                      href="https://www.insoblokai.io/_files/ugd/3a15de_62fefda46cc7485a82afc0694d6b86f1.pdf"
                      target="_blank"
                      end
                    >
                      Whitepaper
                    </a>
                  </li>
                  <li>Announcements</li>
                  <li>Audits</li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>PRESALE</h4>
                <ul>
                  <li>How to Buy</li>
                  <li>
                    <a
                      className="_section-link_1qdzc_143"
                      href="https://www.insoblokai.io/contact"
                      target="_blank"
                      end
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>Supports</li>
                  <li>Win $100k</li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>SOCIALS</h4>
                <ul>
                  <li>
                    <a
                      className="_social-link_1qdzc_174"
                      href="https://x.com/insoblokai"
                      target="_blank"
                      end
                    >
                      Twitter (X)
                    </a>
                  </li>
                  <li>
                    <a
                      className="_social-link_1qdzc_174"
                      href="https://t.me/insoblokai"
                      target="_blank"
                      end
                    >
                      Telegram
                    </a>
                  </li>
                  <li>Coinmarket Cap</li>
                  <li>Linktree</li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>COMING SOON</h4>
                <ul>
                  <li>Explorer (Testnet)</li>
                  <li>Faucet</li>
                  <li>External Wallet</li>
                  <li>Bridge</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              Copyright © 2024 <a href="#">InSoBlok.ai™</a> All rights reserved.
            </p>
          </div>
        </footer>
      </FooterWrapper>

      {isMobileMenu && <MobileMenu mobileMenuHandle={handleMobileMenu} />}
    </>
  );
};

export default Footer;
