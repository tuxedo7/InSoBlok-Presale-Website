import DropdownWrapper from "./Dropdown.style";
import { useEffect, useState } from "react";
import EthIcon from "../../assets/images/token/eth.png";
import UsdtIcon from "../../assets/images/token/usdt.png";
import BnbIcon from "../../assets/images/token/bnb.png";
import { payWith } from "../../contracts/config.eth.js";
import { usePresaleData } from "../../utils/PresaleContext";
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
  {
    id:"3",
    icon: BnbIcon,
    title: "BNB"
  }
];



const Dropdown = ({
                    userChainId,
                    ethChainId,
                    bnbChainId,
                    setIsActivePayWithEth,
                    setIsActivePayWithUsdt,
                    setIsActivePayWithBnb,
                    inputAmount
                  }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(true);

  const {makeEmptyInputs,handleBuyOn} = usePresaleData();

  const [titleText, setTitleText] = useState(payWith);
  const [selectedImg, setSelectedImg] = useState(EthIcon);

  const [selected,setSelected] = useState(1)

  const dropdownHandle = () => {
    setIsDropdownActive(!isDropdownActive);
  };

  const handleDropdownData = (item) => {
    event.preventDefault();
    setTitleText(item.title);
    setSelectedImg(item.icon);
    setIsDropdownActive(false);

    if (item.id == 1) {
      makeEmptyInputs();
      setIsActivePayWithEth(true);
      setIsActivePayWithUsdt(false);
      setIsActivePayWithBnb(false);
      handleBuyOn(1)
    }
    if (item.id == 2) {
      makeEmptyInputs();
      setIsActivePayWithEth(false);
      setIsActivePayWithUsdt(true);
      setIsActivePayWithBnb(false);
      handleBuyOn(1)
    }
    if(item.id == 3){
      handleBuyOn(2)
      makeEmptyInputs();
      setIsActivePayWithEth(false)
      setIsActivePayWithUsdt(false)
      setIsActivePayWithBnb(true);
    }

    setSelected(item.id);
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
      <DropdownWrapper>
         { (
            <ul className="dropdown-list-inso">
              {Data?.map((item, i) => (
                  <li key={i} selected={item.id == 1} className={selected == item.id ? "list-inso-item-selected" : "list-inso-item" }>
                    <a className="list-item-a" href="#" onClick={() => handleDropdownData(item)}>
                      <img src={item.icon} alt="icon" />
                      <span className="list-inso-item-text">{item.title}</span>
                    </a>
                  </li>
              ))}
            </ul>
        )}
      </DropdownWrapper>
  );
};

export default Dropdown;
