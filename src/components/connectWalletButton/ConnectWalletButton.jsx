import { useEffect, useState } from "react";
import ConnectWalletButtonStyleWrapper from "./ConnectWalletButton.style";
import { useAccountModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { FiChevronDown } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import IconImg1 from "../../assets/images/icons/wallet.svg";
import { usePresaleData } from "../../utils/PresaleContext";


const ConnectWalletButton = ({ variant }) => {


  const {setUserBalanceUSDT,
    setUserBalance, setBuyersToken } = usePresaleData()


  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();

  const [walletAddress, setWalletAddress] = useState("");
  const [shortWalletAddress, setShortWalletAddress] = useState("");

  const { address: addressData, isConnected } = useAccount();

  useEffect(() => {
    if (isConnected) {
      setUserBalance(0);
      setUserBalanceUSDT(0);

      let first = addressData.slice(0, 4);
      let last = addressData.slice(-4);
      setWalletAddress(first + "..." + last);

      let first2 = addressData.slice(0, 2);
      let last2 = addressData.slice(-2);
      setShortWalletAddress(first2 + "..." + last2);
    }else{
      setUserBalance(0);
      setUserBalanceUSDT(0);
      setBuyersToken(0)
    }
  }, [isConnected, addressData]);

  return (
    <ConnectWalletButtonStyleWrapper variant={variant}>
      {openConnectModal && variant != "v7" && (
        <button className="connect-wallet-btn custom_btn custom_btn--default custom_btn--large" onClick={openConnectModal}>
          <i className="fa-solid fa-wallet" style={{marginRight: '5px'}}></i>
          CONNECT WALLET
        </button>
      )}

      {openConnectModal && variant === "v7" && (
        <button className="v" onClick={openConnectModal}>
          <img src={IconImg1} alt="icon" className="icon" />
          <span className="name">CONNECT WALLET</span>
          <span className="icon-text">
            <FaPlus />
          </span>

        </button>
      )}

      {openAccountModal && variant != "v7" && (
        <button
          // walletAddress
          className="connect-wallet-btn custom_btn custom_btn--default custom_btn--large"
          onClick={openAccountModal}
        >
          <span>{walletAddress}</span>
          <span className="short-address">{shortWalletAddress}</span>
          <FiChevronDown />
        </button>
      )}

      {openAccountModal && variant === "v7" && (
        <button className="connect-wallet-btn custom_btn custom_btn--default custom_btn--large" onClick={openAccountModal}>
          <img src={IconImg1} alt="icon" className="icon" />
          <span className="name">WALLET</span>
          <span className="icon-text">
            <FaPlus />
          </span>
          <span className="url">
            {shortWalletAddress} <FiChevronDown />
          </span>
        </button>
      )}
    </ConnectWalletButtonStyleWrapper>
  );
};

export default ConnectWalletButton;
