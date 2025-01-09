import BannerWrapper from "./Banner.style.jsx";
import StatusIcon from "../../../assets/images/icons/status.png";
import LoadingIcon from "../../../assets/images/icons/processing.png";
import DIVIDE_LINE from "../../../assets/images/divide-line.svg";

import { usePresaleData } from "../../../utils/PresaleContext.jsx";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/inso_logo.webp";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Popup from "../../../components/popup/Popup.jsx";
import PopupDisclaimer from "../../../components/popupDisclaimer/PopupDisclaimer.jsx";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import ICON_EQUAL from "../../../assets/images/banner/equal.svg";
import ICON_AUDIT from "../../../assets/images/banner/audit-icon.png";
import ICON_VERIFY from "../../../assets/images/banner/verify-icon.png";
import ICON_ETHER from "../../../assets/images/banner/ether-icon.png";
import ICON_TETHER from "../../../assets/images/banner/tether-icon.png";
import ICON_BNB from "../../../assets/images/banner/bnb-icon.png";
import ICON_INFO from "../../../assets/images/banner/info-icon.png";
import clsx from "clsx";
import About from "../../about/About.jsx";
import ImageGallery from "../../gallery/ImageGallery.jsx";
import VideoSlider from "../../videoslider/VideoSlider.jsx";
import TransformingBlockchain from "../../blockchain/TransformingBlockchain.jsx";
import Roadmap from "../../roadmap/Roadmap.jsx";
import Tokenomics from "../../tokenomics/Tokenomics.jsx";
import FAQ from "../../faq/FAQ.jsx";
import ForeFront from "../../forefront/ForeFront.jsx";

library.add(fab, fas);

const Banner = () => {
  const {
    bnbChainId,
    ethChainId,
    userChainId,
    userBalance,
    userBalanceUSDT,
    currentStage,
    currentBonus,
    currentPrice,
    nextPrice,
    stageEnd,
    makeEmptyInputs,
    totalAmount,
    presaleStatus,
    handlePaymentInput,
    buyToken,
    buyTokenWithUsdt,
    claimToken,
    buyersToken,
    buyersVestingEnd,
    handlePaymentUsdtInput,
    handleBuyOn,
    totalRaised,
    totalRaisedCap,
    inputETHValue,
    inputUsdtValue,
    usdtAllowance,
    approveUSDT,
    restricted,
    holderCount,
  } = usePresaleData();
  const [isLockToken, setisLockToken] = useState(false);
  const [isActivePayWithEth, setIsActivePayWithEth] = useState(true);
  const [isActivePayWithUsdt, setIsActivePayWithUsdt] = useState(false);
  const [isActivePayWithBnb, setIsActivePayWithBnb] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const { chainId, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  //for Block IP Notification Popup
  const [isOpen, setIsOpen] = useState(false);

  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  function getHoldersCount() {
    const tempHolderCount = holderCount + 129;
    if (tempHolderCount >= 144) return tempHolderCount;
    else return 144;
  }

  function getUSDTRaised() {
    const raised =
      (parseFloat(totalRaised) * Number(currentPrice)) / 10 ** 18 + 327000;
    if (raised >= 726757) return raised;
    else return 726757;
  }

  const toggleDisclaimerPopupAgree = () => {
    if (isActivePayWithUsdt) buyTokenWithUsdt();
    else buyToken();

    setIsDisclaimerOpen(!isDisclaimerOpen);
  };

  const toggleDisclaimerPopupCancel = () => {
    setIsDisclaimerOpen(!isDisclaimerOpen);
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const delegateBuyToken = () => {
    console.log("restricted", restricted);
    if (restricted) {
      togglePopup();
    } else {
      setIsDisclaimerOpen(true);
    }
  };

  const delegateBuyTokenUSDT = () => {
    console.log("restricted", restricted);
    if (restricted) {
      togglePopup();
    } else {
      setIsDisclaimerOpen(true);
    }
  };

  const handlePaymentMethod = (method) => {
    if (method == 1) {
      makeEmptyInputs();
      setIsActivePayWithEth(true);
      setIsActivePayWithUsdt(false);
      setIsActivePayWithBnb(false);
      handleBuyOn(1);
    }
    if (method == 2) {
      makeEmptyInputs();
      setIsActivePayWithEth(false);
      setIsActivePayWithUsdt(true);
      setIsActivePayWithBnb(false);
      handleBuyOn(1);
    }
    if (method == 3) {
      makeEmptyInputs();
      setIsActivePayWithEth(false);
      setIsActivePayWithUsdt(false);
      setIsActivePayWithBnb(true);
      handleBuyOn(2);
    }
  };

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setVisibleIndex((visibleIndex + 1) % 3);
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [visibleIndex]);

  useEffect(() => {
    if (restricted) {
      console.log("restricted popup call");
      togglePopup();
    }

    const now = Date.now();
    const difference = buyersVestingEnd * 1000 - now;

    if (currentPrice > 0) {
      // setPrice((Number(currentPrice)/10 ** 4).toFixed(2));
    }

    if (difference <= 0 && buyersToken > 0) {
      setisLockToken(false);
    } else {
      setisLockToken(true);
    }
  }, [chainId, buyersToken, restricted]);

  // console.log("totalRaised", totalRaised);
  // console.log("currentPrice", Number(currentPrice) / 10 ** 18);

  return (
    <BannerWrapper>
      <div className="_blue_blur_insoblok_effect" />
      <div className="_red_blur_insoblok_effect" />
      <div className="_banner-container">
        {/* <Countdown endDate={stageEnd} size="medium" /> */}
        <div className="_buy-wrapper_insoblok_1">
          <div className="__presale-info_insoblok_7">
            <div className="__presale-info-item_insoblok_16">
              InSoBlok AI Empowering <br />
              <span>
                <span className="__presale-info-label_insoblok_3">
                  SocialFi
                </span>{" "}
                with Web3
              </span>
              <span className="__presale-info-label_insoblok_4">
                <span
                  className={visibleIndex == 0 ? "is_visible" : "is_hidden"}
                >
                  Influencers
                </span>
                <span
                  className={visibleIndex == 1 ? "is_visible" : "is_hidden"}
                >
                  Community
                </span>
                <span
                  className={visibleIndex == 2 ? "is_visible" : "is_hidden"}
                >
                  Decentralization
                </span>
              </span>
            </div>
            <p className="__presale-info-label_insoblok_15">
              The Ultimate Ecosystem for Tokenized Engagement
            </p>
          </div>
          <div className="__presale-info_insoblok_9">
            <button className="btn-primary">
              <img src={ICON_AUDIT} />
              INSOBLOK Audit
            </button>
            <div className="btn-default">
              <img src={ICON_VERIFY} />
              KYC Verified
            </div>
          </div>
        </div>
        <div className="_buy-wrapper_insoblok_2 _card_z7qk4_84">
          <div className="_card_2wlgh_1 card _buy-container_insoblok_7">
            <a>
              <p className="_text-right_j2o0e_4">
                Can’t find tokens in your wallet?
              </p>
            </a>
            <div className="_step-container_insoblok_65">
              <div className="_text-container_j2o0e_6">
                <p className="_text-center_j2o0e_9">
                  Stage 7 - Buy INSOBLOK Now
                </p>
                <p className="_text-center_j2o0e_11">Until price increase</p>
              </div>
              <div
                className="_progress-container_j2o0e_1"
                style={{ "--frac": "90.80894692460317%" }}
              >
                <div className="_text-container_j2o0e_8">
                  <div className="_text-left_j2o0e_15">
                    Current Price:
                    <span className="_bold_j2o0e_29">
                      ${Number(currentPrice) / 10 ** 18}
                    </span>
                  </div>
                  <div className="_text-right_j2o0e_24">
                    Next Stage Price:
                    <span className="_bold_j2o0e_29">
                      ${Number(nextPrice) / 10 ** 18}
                    </span>
                  </div>
                </div>
                <div className="_bar-container_j2o0e_38">
                  <div className="_bar_j2o0e_38" />
                </div>
                <div className="_text-container_j2o0e_9">
                  <div className="_text-center_j2o0e_18">
                    Raised:
                    <span className="_bold_j2o0e_29">
                      $
                      {new Intl.NumberFormat("en-US").format(
                        getUSDTRaised().toFixed(0)
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="_division_bar_55" />
            <div className="_balance-container_insoblok_75">
              <div className="_line_middle" />
              <p className="_balance-title_insoblok_81">
                1 INSOBLOK =
                <span className="_bold_insoblok_87">
                  ${Number(currentPrice) / 10 ** 18}
                </span>
              </p>
              <div className="_line_middle" />
            </div>
            <div className="_select-btn_insoblok_92">
              <button
                className={`${
                  isActivePayWithEth ? "btn-primary" : "btn-default"
                }`}
                onClick={() => handlePaymentMethod(1)}
              >
                <img src={ICON_ETHER} />
                <span className="_bottom_lineup">ETH</span>
              </button>
              <button
                className={`${
                  isActivePayWithUsdt ? "btn-primary" : "btn-default"
                }`}
                onClick={() => handlePaymentMethod(2)}
              >
                <img src={ICON_TETHER} />
                <span className="_bottom_lineup">USDT</span>
              </button>
              <button
                className={`${
                  isActivePayWithBnb ? "btn-primary" : "btn-default"
                }`}
                onClick={() => handlePaymentMethod(3)}
              >
                <img src={ICON_BNB} />
                <span className="_bottom_lineup">BNB</span>
              </button>
            </div>
            <div className="_balance-container_insoblok_75">
              <div className="_line_middle" />
              <p className="_balance-title_insoblok_81">
                {isActivePayWithEth ? "ETH " : ""}
                {isActivePayWithUsdt ? "USDT " : ""}
                {isActivePayWithBnb ? "BNB " : ""}
                {" Balance: "}
                {isActivePayWithEth && Number(userBalance) / 10 ** 4}
                {isActivePayWithUsdt && Number(userBalanceUSDT) / 10 ** 4}
                {isActivePayWithBnb && Number(userBalance) / 10 ** 4}
              </p>
              <div className="_line_middle" />
            </div>
            <div className="_step-container_insoblok_77">
              <div className="_input-container_insoblok_108">
                <div className="_input-container_t6c15_1">
                  {isActivePayWithEth && (
                    <div className="_input-inner_t6c15_37">
                      <input
                        className="_input_t6c15_1"
                        type="number"
                        min={Number(currentPrice) / 10 ** 4}
                        step={Number(currentPrice) / 10 ** 4}
                        placeholder={Number(currentPrice) / 10 ** 4}
                        value={inputETHValue}
                        onChange={handlePaymentInput}
                      />
                      {/* <p className="_after-label_t6c15_89">ETH</p> */}
                      <div className="_icon-container_t6c15_95">
                        <img
                          src={ICON_ETHER}
                          alt="ETH coin"
                          width={32}
                          height={32}
                        ></img>
                      </div>
                    </div>
                  )}
                  {isActivePayWithUsdt && (
                    <div className="_input-inner_t6c15_37">
                      <input
                        className="_input_t6c15_1"
                        type="number"
                        min={Number(currentPrice) / 10 ** 4}
                        step={Number(currentPrice) / 10 ** 4}
                        placeholder={Number(currentPrice) / 10 ** 4}
                        value={inputUsdtValue}
                        onChange={handlePaymentUsdtInput}
                      />
                      {/* <p className="_after-label_t6c15_89">USDT</p> */}
                      <div className="_icon-container_t6c15_95">
                        <img
                          src={ICON_TETHER}
                          alt="USDT coin"
                          width={32}
                          height={32}
                        ></img>
                      </div>
                    </div>
                  )}
                  {isActivePayWithBnb && (
                    <div className="_input-inner_t6c15_37">
                      <input
                        className="_input_t6c15_1"
                        type="number"
                        min={Number(currentPrice) / 10 ** 4}
                        step={Number(currentPrice) / 10 ** 4}
                        placeholder={Number(currentPrice) / 10 ** 4}
                        value={inputETHValue}
                        onChange={handlePaymentInput}
                      />
                      {/* <p className="_after-label_t6c15_89">BNB</p> */}
                      <div className="_icon-container_t6c15_95">
                        <img src={ICON_BNB} alt="BNB coin" height={32}></img>
                      </div>
                    </div>
                  )}
                </div>
                {/* <img
                  className="_equals_insoblok_131"
                  src={ICON_EQUAL}
                  alt="equal"
                  width={30}
                  height={18}
                /> */}
                <div className="_input-container_t6c15_1">
                  <div className="_input-inner_t6c15_37">
                    <input
                      className="_input_t6c15_1"
                      type="number"
                      placeholder="0"
                      value={Number(totalAmount) / 1e18}
                    />
                    {/* <p className="_after-label_t6c15_89">INSO</p> */}
                    <div className="_icon-container_t6c15_95">
                      <img
                        src={Logo}
                        alt="INSO coin"
                        width={32}
                        height={32}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {presaleStatus && (
              <div className="_presale-item-msg">
                {presaleStatus != "approve" ? (
                  <div className="_presale-item-msg__content">
                    <img src={StatusIcon} alt="icon" />
                    <p>{presaleStatus}</p>
                  </div>
                ) : (
                  <div className="_presale-item-msg__content_loading">
                    <img className="rotate" src={LoadingIcon} alt="icon" />
                    <p>
                      In order to buy INSO with USDT, you first need to
                      authorize us to access the USDT in your wallet.
                    </p>
                  </div>
                )}
              </div>
            )}

            {isActivePayWithEth && (
              <div className="_presale-item">
                <div className="_presale-item-inner">
                  {!isConnected && (
                    <>
                      <button
                        className="btn-primary"
                        onClick={openConnectModal}
                      >
                        CONNECT WALLET
                      </button>
                      <button className="btn-default">REFER A FRIEND</button>
                    </>
                  )}
                  {isConnected && (
                    <button className="btn-primary" onClick={delegateBuyToken}>
                      BUY NOW
                    </button>
                  )}
                </div>
                <div className="_presale-item-inner">
                  {buyersToken > 0 && (
                    <button className="btn-primary" onClick={claimToken}>
                      CLAIM TOKEN
                    </button>
                  )}
                </div>
              </div>
            )}

            {isActivePayWithUsdt && (
              <div className="_presale-item">
                <div className="_presale-item-inner">
                  {/* {parseInt(usdtAllowance) < parseInt(inputUsdtValue) ? <Button variant="green" onClick={approveUSDT}>Approve USDT</Button> :
                        <Button variant="green" onClick={buyTokenWithUsdt}> Buy Now</Button>
                      } */}
                  {!isConnected && (
                    <>
                      <button
                        className="btn-primary"
                        onClick={openConnectModal}
                      >
                        CONNECT WALLET
                      </button>
                      <button className="btn-default">REFER A FRIEND</button>
                    </>
                  )}
                  {isConnected && (
                    <button
                      className="btn-primary"
                      onClick={delegateBuyTokenUSDT}
                    >
                      BUY NOW
                    </button>
                  )}
                </div>
                <div className="_presale-item-inner">
                  {buyersToken > 0 && (
                    <button className="btn-primary" onClick={claimToken}>
                      CLAIM TOKEN
                    </button>
                  )}
                </div>
              </div>
            )}

            {isActivePayWithBnb && (
              <div className="_presale-item">
                <div className="_presale-item-inner">
                  {!isConnected && (
                    <>
                      <button
                        className="btn-primary"
                        onClick={openConnectModal}
                      >
                        CONNECT WALLET
                      </button>
                      <button className="btn-default">REFER A FRIEND</button>
                    </>
                  )}
                  {isConnected && (
                    <button className="btn-primary" onClick={delegateBuyToken}>
                      BUY NOW
                    </button>
                  )}
                </div>
                <div className="_presale-item-inner">
                  {buyersToken > 0 && (
                    <button className="btn-primary" onClick={claimToken}>
                      CLAIM TOKEN
                    </button>
                  )}
                </div>
              </div>
            )}

            <div className="_guide-info-container_insoblok_91">
              <div className="_guide-info-inner">
                <FontAwesomeIcon icon="fa-solid fa-circle-info" />
                <button className="btn-info">How to Buy</button>
              </div>
              <div className="_guide-info-inner">
                <FontAwesomeIcon icon="fa-solid fa-circle-question" />
                <button className="btn-info">
                  Help, My Wallet Won’t Connect!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="divide-line" src={DIVIDE_LINE} alt="divide-line" />
      <div className="row inso-container">
        <About />
      </div>
      <ImageGallery />
      <div className="row inso-container">
        <TransformingBlockchain />
      </div>
      <img className="divide-line" src={DIVIDE_LINE} alt="divide-line" />
      <div className="row inso-container">
        <Roadmap />
      </div>
      <VideoSlider />
      <div className="row inso-container">
        <Tokenomics />
      </div>
      <img className="divide-line" src={DIVIDE_LINE} alt="divide-line" />
      <div className="row inso-container">
        <FAQ />
        <ForeFront />
      </div>
      {isOpen && (
        <Popup
          content={
            <>
              <FontAwesomeIcon
                icon={faWarning}
                className="warning-icon"
                size="3x"
              />
              <p>
                It appears that your IP address reveals your location to be
                within a country or region that falls under InSoBlok’s
                restricted list. As outlined in our{" "}
                <a
                  href="https://www.InSoBlok.ai/token-terms-conditions"
                  target="_blank"
                >
                  Terms of Service
                </a>{" "}
                , we are unable to provide our services in your area.
              </p>
              <button className="close-button" onClick={togglePopup}>
                Close
              </button>
            </>
          }
        />
      )}
      {isDisclaimerOpen && (
        <PopupDisclaimer
          content={
            <>
              <p>
                <b> Disclaimer:</b>
              </p>
              <p>
                Please read our{" "}
                <a
                  href="https://www.InSoBlok.ai/token-terms-conditions"
                  target="_blank"
                >
                  Token Risk Disclaimer
                </a>{" "}
                carefully. If you agree to the terms, proceed by clicking "I
                Agree".
              </p>
              <button
                className="agree-button"
                onClick={toggleDisclaimerPopupAgree}
              >
                I Agree
              </button>
              <button
                className="cancel-button"
                onClick={toggleDisclaimerPopupCancel}
              >
                Cancel
              </button>
            </>
          }
        />
      )}
    </BannerWrapper>
  );
};

//onClick={toggleDisclaimerPopup(true)}
//
export default Banner;
