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
      <FooterWrapper className="footer-section">
        <div className="_bg_1qdzc_11"></div>
        <div className="_store-links_1qdzc_103">
          <p className="_title_1qdzc_96">Available Soon On</p>
          <div className="_stores_1qdzc_111">
            <img
              alt="Google play store"
              width="204"
              height="59"
              src={GooglePlay}
            />
            <img alt="Apple store" width="206" height="59" src={AppleStore} />
          </div>
        </div>
        <div className="_footer-inner_1qdzc_47">
          <div className="_form-container_1qdzc_215">
            {/*<p className="_title_1qdzc_96">Sign up to InSoBlok</p>
            <div className="_form_1qdzc_215">
              <input
                className="_form-input_1qdzc_233"
                placeholder="abc@gmail.com"
                // value=""
              />
              <button
                type="button"
                className="custom_btn _form-button_1qdzc_252 custom_btn--default custom_btn--large"
              >
                Submit
              </button>
            </div>*/}
          </div>
          <div className="_col_1qdzc_69 _desc-container_1qdzc_76">
            <div className="_logo_container_lqdzc_78">
              <img
                src={Logo}
                width="177"
                height="47"
                alt="InSoBlok"
                className="_logo_1qdzc_81"
              />
              InSoBlok
            </div>
            <p className="_desc_1qdzc_76">
              Join the InSoBlok Pre-sale—the world’s first blockchain and AI platform dedicated to influencers, transforming the fashion industry and beyond. Our ecosystem empowers creators by merging social media, blockchain, and AI for unparalleled user experiences, setting a new standard for influencer-driven commerce.
              <br />
              <br />
              InSoBlok Limited
              <br />
              Company No: 2159137
              <br />
              Registered Office: Geneva Place, ROAD TOWN, VG1110 British Virgin Islands
              <br />
              enquiry@insoblokai.io
            </p>
          </div>
          <div className="_divider_1qdzc_62"></div>
          <div className="_store-links_1qdzc_103">
            {/*<p className="_title_1qdzc_96">Available Soon On</p>
            <div className="_stores_1qdzc_111">
              <img
                alt="Google play store"
                width="204"
                height="59"
                src={GooglePlay}
              />
              <img alt="Apple store" width="206" height="59" src={AppleStore} />
            </div>*/}
          </div>
          <div className="_sections_1qdzc_123">
            <div className="_section_1qdzc_123">
              <p className="_section-title_1qdzc_137">Company</p>
              <NavLink className="_section-link_1qdzc_143" to="https://www.insoblokai.io/_files/ugd/3a15de_5f5f3554ac1a47a79f18a6d48f388c9f.pdf" target="_blank" end>
                Investor Pitch Deck
              </NavLink>
              <NavLink className="_section-link_1qdzc_143" to="https://www.insoblokai.io/team" target="_blank" end>
                Team
              </NavLink>
              <NavLink className="_section-link_1qdzc_143" to="https://www.insoblokai.io/tokenomics" target="_blank" end>
                Roadmap
              </NavLink>
              <NavLink className="_section-link_1qdzc_143" to="https://www.insoblokai.io/_files/ugd/3a15de_62fefda46cc7485a82afc0694d6b86f1.pdf" target="_blank" end>
                Whitepaper
              </NavLink>
              <NavLink className="_section-link_1qdzc_143" to="https://www.insoblokai.io/_files/ugd/3a15de_4310af409ccb4b54ac9282223eaea5dc.pdf" target="_blank" end>
                Case Studies
              </NavLink>
              <NavLink className="_section-link_1qdzc_143" to="https://www.insoblokai.io/faq" target="_blank" end>
                FAQ
              </NavLink>
              <NavLink className="_section-link_1qdzc_143" to="https://www.insoblokai.io/contact" target="_blank" end>
                Contact
              </NavLink>
            </div>
            <div className="_section_1qdzc_123">
              <p className="_section-title_1qdzc_137">Legal</p>
              <NavLink className="_section-link_1qdzc_143" to="https://www.insoblokai.io/terms-and-coniditions" target="_blank" end>
                Terms of Service
              </NavLink>
              <NavLink className="_section-link_1qdzc_143" to="https://www.insoblokai.io/privacy-policy" target="_blank" end>
                Privacy Policy
              </NavLink>
              <NavLink className="_section-link_1qdzc_143" to="https://www.insoblokai.io/token-terms-conditions" target="_blank" end>
                Token Terms &amp; Conditions
              </NavLink>
            </div>
          </div>
        </div>
        <div className="_socials_1qdzc_156">
          <p className="_socials-title_1qdzc_163">Get in touch!</p>
          <div className="_socials-list_1qdzc_168">
            <NavLink className="_social-link_1qdzc_174" to="https://x.com/insoblokai">
              <img src={Twitter} alt="Twitter" width="32" height="32" />
            </NavLink>
            <NavLink className="_social-link_1qdzc_174" to="https://t.me/insoblokai">
              <img src={Telegram} alt="Telegram" width="32" height="32" />
            </NavLink>
            <NavLink className="_social-link_1qdzc_174" to="https://discord.gg/PyfyHxY6">
              <img src={Discord} alt="Discord" width="32" height="32" />
            </NavLink>
            <NavLink className="_social-link_1qdzc_174" to="https://www.youtube.com/watch?v=ggRPUhVoCe8" end>
              <img src={Youtube} alt="Youtube" width="32" height="32" />
            </NavLink>
            {/*<NavLink className="_social-link_1qdzc_174" to="/" end>
              <img src={Instagram} alt="Instagram" width="32" height="32" />
            </NavLink>*/}
            <NavLink className="_social-link_1qdzc_174" to="https://www.tiktok.com/@insoblokai" end>
              <img src={TikTok} alt="TikTok" width="32" height="32" />
            </NavLink>
            {/*<NavLink className="_social-link_1qdzc_174" to="/" end>
              <img src={CoinMarketCap} alt="CoinMarketCap" width="32" height="32" />
            </NavLink>*/}
          </div>
        </div>
        <div className="_bottom-text_1qdzc_259">©2024 Copyright InSoBlok. All rights reserved.</div>
      </FooterWrapper>

      {isMobileMenu && <MobileMenu mobileMenuHandle={handleMobileMenu} />}
    </>
  );
};

export default Footer;
