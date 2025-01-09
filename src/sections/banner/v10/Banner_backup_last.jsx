import BannerData from "../../../assets/data/bannerV10.js";
import Button from "../../../components/button/Button.jsx";
import Countdown from "../../../components/countdown/Countdown.jsx";
import Dropdown from "../../../components/dropdown/Dropdown.jsx";
import Progressbar from "../../../components/progressbar/Progressbar.jsx";
import TokenInfo from "../../../components/tokenInfo/TokenInfo.jsx";
import BannerWrapper from "./Banner.style.jsx";
import StatusIcon from "../../../assets/images/icons/status.png";
import LoadingIcon from "../../../assets/images/icons/processing.png";

import { usePresaleData } from "../../../utils/PresaleContext.jsx";
import { useEffect, useState } from "react";
import ConnectWalletButton from "../../../components/connectWalletButton/ConnectWalletButton.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../assets/images/inso_logo.webp";
import Logo_ETH from "../../../assets/images/token/eth.png";
import Logo_BNB from "../../../assets/images/token/bnb.png";
import Logo_USD from "../../../assets/images/token/usd.png";
import Logo_USDT from "../../../assets/images/token/usdt.png";
import { useAccount } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Popup from "../../../components/popup/Popup.jsx";
import PopupDisclaimer from "../../../components/popupDisclaimer/PopupDisclaimer.jsx";
import AttentionIcon from "../../../assets/images/icons/Attention-sign-icon.png";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import ICON_CIRCLE from "../../../assets/images/banner/circle.png";
import ICON_EQUAL from "../../../assets/images/banner/equal.svg";
import ICON_USD from "../../../assets/images/banner/usd.svg";
import ICON_METAMASK from "../../../assets/images/icons/metamask.svg";
import ICON_TRUSTWALLEt from "../../../assets/images/icons/trustwallet.svg";
import Token_Reception from "../../../assets/images/token_reception.png";
import Purchase_Process from "../../../assets/images/purchase_process.png";
import clsx from "clsx";

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
  const { chainId, isConnected } = useAccount();
  const { openConnectModal } = useConnectModal();

  //for Block IP Notification Popup
  const [isOpen, setIsOpen] = useState(false);

  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  function getHoldersCount(){
    const tempHolderCount = holderCount + 129
    if(tempHolderCount >= 144)
      return tempHolderCount
    else
      return 144

  }

  function getUSDTRaised(){
  const raised =  ((parseFloat(totalRaised ) * (Number(currentPrice) ))/ 10 ** 18) +327000;
  if(raised >= 726757)
    return raised;
  else
    return 726757;
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

  console.log("totalRaised", totalRaised);
  console.log("currentPrice", Number(currentPrice) / 10 ** 18);

  return (
    <BannerWrapper>
      <div className="row aurora">
        <Countdown endDate={stageEnd} size="medium" />
        <div className="_buy-wrapper_riuzb_1 _card_z7qk4_84">
          <div className="">
            <div className="_account-info_riuzb_19">
              <div className="_account-info-item_riuzb_25">
                <div className="_account-info-item-inner_riuzb_33">
                  <p className="_account-info-value_riuzb_53">${new Intl.NumberFormat('en-US').format(getUSDTRaised().toFixed(0))}/820,000</p>
                  <p className="_account-info-label_riuzb_47">USDT Raised</p>
                </div>
              </div>
              <div className="_account-info-item_riuzb_25">
                {/*{ buyersToken > 0 &&  (
                  <div className="_account-info-item-inner_riuzb_33">
                    <p className="_account-info-value_riuzb_53">
                      {Number(buyersToken).toFixed(2)}(${((Number(buyersToken) * Number(currentPrice)) / (10 ** 18)).toFixed(2)})
                    </p>
                    <p className="_account-info-label_riuzb_47">INSO Balance</p>
                  </div>
                )}*/}
              </div>
              <div className="_account-info-item_riuzb_25">
                <div className="_account-info-item-inner_riuzb_33">
                  <p className="_account-info-value_riuzb_53">
                    {Number(buyersToken).toFixed(2)}(${((Number(buyersToken) * Number(currentPrice)) / (10 ** 18)).toFixed(2)})
                  </p>
                  <p className="_account-info-label_riuzb_47">INSO Balance</p>
                  {/*<p className="_account-info-value_riuzb_53">{getHoldersCount()}</p>
                  <p className="_account-info-label_riuzb_47">Holders</p>*/}
                </div>
              </div>
            </div>
          </div>
          <div className="_card_2wlgh_1 card _buy-container_riuzb_7">
            <div
              className="_progress-container_j2o0e_1"
              style={{ "--frac": "90.80894692460317%" }}
            >
              <div className="_text-container_j2o0e_8">
                <div className="_text-left_j2o0e_15">
                  <img
                    className="_inso-coin_j2o0e_63"
                    src={Logo}
                    alt="INSO Coin image"
                  />
                  1 INSO =
                  <img src={ICON_USD} alt="USD image" width={40} height={40} />
                  {Number(currentPrice) / 10 ** 18} USD
                </div>
                <div className="_text-right_j2o0e_24">
                  <span className="_bold_j2o0e_29">15%</span> Increase On Next
                  Phase
                </div>
              </div>
              <div className="_bar-container_j2o0e_38">
                <div className="_bar_j2o0e_38">
                  <img src={ICON_CIRCLE} alt="Decorative circle" />
                  <div className="_tooltip-wrapper_j2o0e_68">
                    <div className="_tooltip_j2o0e_68">
                      <div className="_tooltip-inner_j2o0e_99">
                        <div className="_text-row_j2o0e_126">
                          <img
                            className="_inso-coin_j2o0e_63"
                            src={Logo}
                            alt="INSO Coin image"
                          />
                          <p><span className="_bold_j2o0e_29">90.7%</span> INSO</p>
                        </div>
                        <p className="_tooltip-label_j2o0e_137">Tokens Sold</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="_step-container_riuzb_75">
              <p className="_step-title_riuzb_81">
                <span className="_bold_riuzb_87">Step 1</span> - Select the
                payment method
              </p>
              <div className="_select-grid_riuzb_92">
                <div
                  className={clsx(
                    "_dropdown-button_1fohl_1",
                    isActivePayWithEth && "_active_1fohl_23"
                  )}
                >
                  <button
                    className="_inner_1fohl_30"
                    onClick={() => handlePaymentMethod(1)}
                  >
                    <img src={Logo_ETH} alt="ETH icon" width={40} height={40} />
                    <div className="_label-container_1fohl_77">
                      <p>ETH</p>
                      {/* <p className="_subtitle_1fohl_88">ERC-20</p> */}
                    </div>
                  </button>
                </div>
                <div
                  className={clsx(
                    "_dropdown-button_1fohl_1",
                    isActivePayWithUsdt && "_active_1fohl_23"
                  )}
                >
                  <button
                    className="_inner_1fohl_30"
                    onClick={() => handlePaymentMethod(2)}
                  >
                    <img
                      src={Logo_USDT}
                      alt="USDT icon"
                      width={40}
                      height={40}
                    />
                    <div className="_label-container_1fohl_77">
                      <p>USDT</p>
                      {/* <p className="_subtitle_1fohl_88">USDT</p> */}
                    </div>
                  </button>
                </div>
                <div
                  className={clsx(
                    "_dropdown-button_1fohl_1",
                    isActivePayWithBnb && "_active_1fohl_23"
                  )}
                >
                  <button
                    className="_inner_1fohl_30"
                    onClick={() => handlePaymentMethod(3)}
                  >
                    <img src={Logo_BNB} alt="BNB icon" width={40} height={40} />
                    <div className="_label-container_1fohl_77">
                      <p>BNB</p>
                      {/* <p className="_subtitle_1fohl_88">BEP-20</p> */}
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="_step-container_riuzb_75">
              <p className="_step-title_riuzb_81">
                <span className="_bold_riuzb_87">Step 2</span> - Enter the
                amount of token you would like to purchase
              </p>
              <div className="_input-container_riuzb_108">
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
                      <p className="_after-label_t6c15_89">ETH</p>
                      <div className="_icon-container_t6c15_95">
                        <img
                          src={Logo_ETH}
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
                      <p className="_after-label_t6c15_89">USDT</p>
                      <div className="_icon-container_t6c15_95">
                        <img
                          src={Logo_USDT}
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
                      <p className="_after-label_t6c15_89">BNB</p>
                      <div className="_icon-container_t6c15_95">
                        <img
                          src={Logo_BNB}
                          alt="BNB coin"
                          height={32}
                        ></img>
                      </div>
                    </div>
                  )}
                </div>
                <img
                  className="_equals_riuzb_131"
                  src={ICON_EQUAL}
                  alt="equal"
                  width={30}
                  height={18}
                />
                <div className="_input-container_t6c15_1">
                  <div className="_input-inner_t6c15_37">
                    <input
                      className="_input_t6c15_1"
                      type="number"
                      placeholder="0"
                      value={Number(totalAmount) / 1e18}
                    />
                    <p className="_after-label_t6c15_89">INSO</p>
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
              <div className="presale-item-msg">
                {presaleStatus != "approve" ? (
                  <div className="presale-item-msg__content">
                    <img src={StatusIcon} alt="icon" />
                    <p>{presaleStatus}</p>
                  </div>
                ) : (
                  <div className="presale-item-msg__content_loading">
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
              <div className="presale-item">
                <div className="presale-item-inner">
                  {!isConnected && (
                    <Button
                      className="custom_btn _button_riuzb_135 custom_btn--default custom_btn--large"
                      onClick={openConnectModal}
                    >
                      Connect Wallet
                    </Button>
                  )}
                  {isConnected && (
                    <Button
                      className="custom_btn _button_riuzb_135 custom_btn--default custom_btn--large"
                      onClick={delegateBuyToken}
                    >
                      Buy Now
                    </Button>
                  )}
                </div>
                <div className="presale-item-inner">
                  {buyersToken > 0 && (
                    <Button
                      className="custom_btn _button_riuzb_135 custom_btn--default custom_btn--large"
                      onClick={claimToken}
                    >
                      Claim Token
                    </Button>
                  )}
                </div>
              </div>
            )}

            {isActivePayWithBnb && (
              <div className="presale-item">
                <div className="presale-item-inner">
                  {!isConnected && (
                    <Button
                      className="custom_btn _button_riuzb_135 custom_btn--default custom_btn--large"
                      onClick={openConnectModal}
                    >
                      Connect Wallet
                    </Button>
                  )}
                  {isConnected && (
                    <Button
                      className="custom_btn _button_riuzb_135 custom_btn--default custom_btn--large"
                      onClick={delegateBuyToken}
                    >
                      Buy Now
                    </Button>
                  )}
                </div>
                <div className="presale-item-inner">
                  {buyersToken > 0 && (
                    <Button
                      className="custom_btn _button_riuzb_135 custom_btn--default custom_btn--large"
                      onClick={claimToken}
                    >
                      Claim Token
                    </Button>
                  )}
                </div>
              </div>
            )}

            {isActivePayWithUsdt && (
              <div className="presale-item">
                <div className="presale-item-inner">
                  {/* {parseInt(usdtAllowance) < parseInt(inputUsdtValue) ? <Button variant="green" onClick={approveUSDT}>Approve USDT</Button> :
                        <Button variant="green" onClick={buyTokenWithUsdt}> Buy Now</Button>
                      } */}
                  {!isConnected && (
                    <Button
                      className="custom_btn _button_riuzb_135 custom_btn--default custom_btn--large"
                      onClick={openConnectModal}
                    >
                      Connect Wallet
                    </Button>
                  )}
                  {isConnected && (
                    <Button
                      className="custom_btn _button_riuzb_135 custom_btn--default custom_btn--large"
                      onClick={delegateBuyTokenUSDT}
                    >
                      {" "}
                      Buy Now
                    </Button>
                  )}
                </div>
                <div className="presale-item-inner">
                  {buyersToken > 0 && (
                    <Button
                      className="custom_btn _button_riuzb_135 custom_btn--default custom_btn--large"
                      onClick={claimToken}
                    >
                      Claim Token
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
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
