import BannerData from "../../../assets/data/bannerV10";
import Button from "../../../components/button/Button";
import CustomCountdown from "../../../components/countdown/Countdown";
import Dropdown from "../../../components/dropdown/Dropdown";
import Progressbar from "../../../components/progressbar/Progressbar";
import TokenInfo from "../../../components/tokenInfo/TokenInfo";
import BannerWrapper from "./Banner.style";
import StatusIcon from "../../../assets/images/icons/status.png";
import { usePresaleData } from "../../../utils/PresaleContext";
import { useEffect, useState } from "react";

const Banner = () => {
  const {
    bnbChainId,
    ethChainId,
    userChainId,
    userBalance,
    currentStage,
    currentBonus,
    currentPrice,
    stageEnd,
    tokenSymbol,
    presaleToken,
    tokenSold,
    tokenPercent,
    paymentUsd,
    paymentAmount,
    totalAmount,
    presaleStatus,
    handlePaymentInput,
    buyToken,
    buyTokenWithUsdt,
    claimToken,
    buyersToken,
    buyersVestingEnd,
    handlePaymentUsdtInput,
    usdtPrice,
  } = usePresaleData();

  const [isLockToken, setisLockToken] = useState(false);
  const [isActivePayWithEth, setIsActivePayWithEth] = useState(true);
  const [isActivePayWithUsdt, setIsActivePayWithUsdt] = useState(false);

  useEffect(() => {
    const now = Date.now();
    const difference = buyersVestingEnd * 1000 - now;

    if (difference <= 0 && buyersToken > 0) {
      setisLockToken(false);
    } else {
      setisLockToken(true);
    }
  }, [buyersToken, buyersVestingEnd]);

  return (
    <BannerWrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center text-white mb-40">
              <div className="mb-30">
                <h1 className="banner-title">{BannerData.title}</h1>
              </div>
              <h5 className="banner-subtitle">{BannerData.subtitle}</h5>
            </div>
          </div>
          <div className="col-md-12">
            <div className="gittu-banner-card">
              <div className="gittu-banner-card-left">
                <div className="presale-top">
                  <h5 className="fs-700 text-white">Sale ends in</h5>
                  <CustomCountdown endDate={stageEnd} size="medium" />
                </div>

                <div className="gittu-banner-card-left-content">
                  <div className="d-flex align-items-center justify-content-between flex-wrap mb-10">
                    <h5 className="fw-600 text-white">Stage {currentStage}</h5>
                    <h5 className="fw-600 text-white">
                      {tokenSold} / {presaleToken}
                    </h5>
                  </div>

                  <div className="mb-20">
                    <Progressbar done={tokenPercent} variant="green" />
                  </div>

                  <TokenInfo />
                </div>
              </div>
              <div className="gittu-banner-card-right">
                <div className="gittu-banner-card-right-content">
                  <div className="presale-item mb-20">
                    <div className="presale-item-inner">
                      <h5 className="fw-600 text-white">
                        Wallet Balance: {userBalance}
                      </h5>
                    </div>
                    <div className="presale-item-inner">
                      <h5 className="fw-600 text-white">
                        Lock Token: {buyersToken}
                      </h5>
                    </div>
                  </div>

                  <div className="presale-item mb-25">
                    <div className="presale-item-inner">
                      <h6>Select Token</h6>
                      <Dropdown
                        userChainId={userChainId}
                        ethChainId={ethChainId}
                        bnbChainId={bnbChainId}
                        setIsActivePayWithEth={setIsActivePayWithEth}
                        setIsActivePayWithUsdt={setIsActivePayWithUsdt}
                      />
                    </div>

                    {isActivePayWithEth && (
                      <div className="presale-item-inner">
                        <h6>Amount</h6>

                        <input
                          type="number"
                          min={currentPrice}
                          step={currentPrice}
                          placeholder={currentPrice}
                          value={paymentAmount}
                          onChange={handlePaymentInput}
                        />
                      </div>
                    )}

                    {isActivePayWithUsdt && (
                      <div className="presale-item-inner">
                        <h6>Amount (USDT)</h6>

                        <input
                          type="number"
                          min={usdtPrice}
                          placeholder={usdtPrice}
                          value={paymentAmount}
                          onChange={handlePaymentUsdtInput}
                        />
                      </div>
                    )}
                  </div>

                  <div className="presale-item mb-37">
                    {isActivePayWithEth && (
                      <div className="presale-item-inner">
                        <h6>$ Amount</h6>
                        <input
                          type="text"
                          placeholder="0"
                          value={paymentUsd}
                          disabled
                        />
                      </div>
                    )}

                    {isActivePayWithUsdt && (
                      <div className="presale-item-inner">
                        <h6>$ Amount</h6>
                        <input
                          type="text"
                          placeholder="0"
                          value={paymentAmount}
                          disabled
                        />
                      </div>
                    )}

                    <div className="presale-item-inner">
                      <h6>{tokenSymbol} Token</h6>
                      <input
                        type="text"
                        placeholder="0"
                        value={totalAmount}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="presale-item-msg">
                    {presaleStatus && (
                      <div className="presale-item-msg__content">
                        <img src={StatusIcon} alt="icon" />
                        <p>{presaleStatus}</p>
                      </div>
                    )}
                  </div>

                  {isActivePayWithEth && (
                    <div className="presale-item">
                      <div className="presale-item-inner">
                        <Button variant="green" onClick={buyToken}>
                          Buy Now
                        </Button>
                      </div>
                      <div className="presale-item-inner">
                        {isLockToken ? (
                          <Button
                            variant="green"
                            style={{ cursor: "not-allowed" }}
                          >
                            Claim Token
                          </Button>
                        ) : (
                          <Button variant="green" onClick={claimToken}>
                            Claim Token
                          </Button>
                        )}
                      </div>
                    </div>
                  )}

                  {isActivePayWithUsdt && (
                    <div className="presale-item">
                      <div className="presale-item-inner">
                        <Button variant="green" onClick={buyTokenWithUsdt}>
                          Buy Now
                        </Button>
                      </div>
                      <div className="presale-item-inner">
                        {isLockToken ? (
                          <Button
                            variant="green"
                            style={{ cursor: "not-allowed" }}
                          >
                            Claim Token
                          </Button>
                        ) : (
                          <Button variant="green" onClick={claimToken}>
                            Claim Token
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BannerWrapper>
  );
};

export default Banner;
