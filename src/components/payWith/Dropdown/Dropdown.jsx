import DropdownWrapper from "./Dropdown.style";
import { useEffect, useState } from "react";
import EthIcon from "../../../assets/images/token/eth.png";
import BnbIcon from "../../../assets/images/token/bnb.png";
import UsdtIcon from "../../../assets/images/token/usdt.png";
import { payWith } from "../../../contracts/config";

const Data = [
  {
    id: "1",
    icon: EthIcon,
    title: "ETH",
  },
  {
    id: "2",
    icon: UsdtIcon,
    title: "USDT",
  },
];

const Dropdown = ({
                    variant,
                    userChainId,
                    ethChainId,
                    bnbChainId,
                    setIsActivePayWithEth,
                    setIsActivePayWithUsdt,
                  }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const [titleText, setTitleText] = useState(payWith);
  const [selectedImg, setSelectedImg] = useState(EthIcon);

  const dropdownHandle = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleDropdownData = (item) => {
    event.preventDefault();
    setTitleText(item.title);
    setSelectedImg(item.icon);
    setIsDropdownActive(false);

    if (item.id == 1) {
      setIsActivePayWithEth(true);
      setIsActivePayWithUsdt(false);
    }
    if (item.id == 2) {
      setIsActivePayWithEth(false);
      setIsActivePayWithUsdt(true);
    }
  };

  useEffect(() => {
    if (userChainId == ethChainId) {
      setSelectedImg(EthIcon);
      setTitleText("ETH");
    }
    if (userChainId == bnbChainId) {
      setSelectedImg(BnbIcon);
      setTitleText("BNB");
    }
  }, [userChainId, ethChainId, bnbChainId]);

  return (
      <DropdownWrapper variant={variant}>
        <button  className={`dropdown-toggle ${isDropdownActive ? "active" : ""}`}
                 onClick={dropdownHandle}>
          <img src={selectedImg} alt="icon" />
          <span>{titleText}</span>
        </button>

        {isDropdownActive && (
            <ul className="dropdown-list">
              {Data?.map((item, i) => (
                  <li key={i}>
                    <a href="#" onClick={() => handleDropdownData(item)}>
                      <img src={item.icon} alt="icon" />
                      <span>{item.title}</span>
                    </a>
                  </li>
              ))}
            </ul>
        )}
      </DropdownWrapper>
  );
};

export default Dropdown;
