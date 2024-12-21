import PayWithStyleWrapper from "./PayWith.style";
import StatusIcon from "../../assets/images/icons/status.png";
import Dropdown from "./Dropdown/Dropdown";
import { usePresaleData } from "../../utils/PresaleContext";

const PayWith = ({ variant }) => {
  const {
    handleBuyOn,
    setIsActiveBuyOnEth,
    setIsActiveBuyOnBnb,
    switchChain,
    buyOnItem,
    buyOnText,
    buyOnIcon,
    selectedImg,
    bnbChainId,
    ethChainId,
    userChainId,
    currentPrice,
    tokenSymbol,
    paymentAmount,
    totalAmount,
    presaleStatus,
    makeEmptyInputs,
    handlePaymentInput,
    buyToken,
  } = usePresaleData();

  return (
    <PayWithStyleWrapper variant={variant}>
      {variant === "v1" && (
        <div className="mb-20 text-center">
          <h4 className="ff-title fw-600 text-white text-uppercase">
            1 {tokenSymbol} = {currentPrice} USD
          </h4>
        </div>
      )}

      <div className="pay-with-content">
        <div className="pay-with-content-left">
          {(variant === "v1" || variant === "v2" || variant === "v3") && (
            <ul className="pay-with-list">
              <li>
                <button className="active">
                  <img src={selectedImg} alt="icon" />
                </button>
              </li>
            </ul>
          )}

          {variant === "v4" && (
            <Dropdown
              userChainId={userChainId}
              setIsActiveBuyOnEth={setIsActiveBuyOnEth}
              setIsActiveBuyOnBnb={setIsActiveBuyOnBnb}
              switchChain={switchChain}
              makeEmptyInputs={makeEmptyInputs}
              ethChainId={ethChainId}
              bnbChainId={bnbChainId}
              variant="v2"
            />
          )}
          {variant === "v5" && (
            <Dropdown
              userChainId={userChainId}
              setIsActiveBuyOnEth={setIsActiveBuyOnEth}
              setIsActiveBuyOnBnb={setIsActiveBuyOnBnb}
              switchChain={switchChain}
              makeEmptyInputs={makeEmptyInputs}
              ethChainId={ethChainId}
              bnbChainId={bnbChainId}
              variant="v3"
            />
          )}
          {variant === "v6" && (
            <Dropdown
              userChainId={userChainId}
              setIsActiveBuyOnEth={setIsActiveBuyOnEth}
              setIsActiveBuyOnBnb={setIsActiveBuyOnBnb}
              switchChain={switchChain}
              makeEmptyInputs={makeEmptyInputs}
              ethChainId={ethChainId}
              bnbChainId={bnbChainId}
              variant="v4"
            />
          )}
        </div>

        {variant === "v2" && (
          <div className="pay-with-content-middle">
            <h4 className="ff-title fw-600 text-white text-uppercase">
              1 {tokenSymbol} = {currentPrice} USD
            </h4>
          </div>
        )}

        {variant === "v3" && (
          <div className="pay-with-content-middle">
            <h4 className="ff-title2 fw-400 text-white text-uppercase">
              1 {tokenSymbol} = {currentPrice} USD
            </h4>
          </div>
        )}

        <div className="pay-with-content-right">
          {(variant === "v1" || variant === "v2" || variant === "v3") && (
            <button
              className="pay-with-button"
              onClick={() => handleBuyOn(buyOnItem)}
            >
              {buyOnText}
              <img src={buyOnIcon} alt="icon" />
            </button>
          )}

          {(variant === "v4" || variant === "v5" || variant === "v6") && (
            <ul className="pay-with-list">
              <li>
                <button className="active">
                  <img src={selectedImg} alt="icon" />
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>

      <form action="/" method="post">
        <div className="presale-item mb-30">
          <div className="presale-item-inner">
            <label>Pay token (Eth)</label>
            <input
              type="number"
              placeholder="0"
              value={paymentAmount}
              onChange={handlePaymentInput}
            />
          </div>
          <div className="presale-item-inner">
            <label>Get Token ({tokenSymbol})</label>
            <input type="number" placeholder="0" value={totalAmount} disabled />
          </div>
        </div>
      </form>

      <div className="presale-item-msg">
        {presaleStatus && (
          <div className="presale-item-msg__content">
            <img src={StatusIcon} alt="icon" />
            <p>{presaleStatus}</p>
          </div>
        )}
      </div>

      <button className="presale-item-btn" onClick={buyToken}>
        Buy now
      </button>
    </PayWithStyleWrapper>
  );
};

export default PayWith;
