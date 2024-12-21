import { usePresaleData } from "../../utils/PresaleContext";
import TokenInfoWrapper from "./TokenInfo.style";

const TokenInfo = ({ variant }) => {
  const { currentPrice, nextPrice, tokenName, tokenSymbol } = usePresaleData();

  return (
    <TokenInfoWrapper variant={variant}>
      <li>
        <p>Token Symbol</p>
        <h6>{tokenSymbol}</h6>
      </li>
      <li>
        <p>Marketcap Valuation</p>
        <h6>$5 Million</h6>
      </li>
      <li>
        <p>Private Offering</p>
        <h6>${currentPrice}</h6>
      </li>
      <li>
        <p>Next Stage</p>
        <h6>${nextPrice}</h6>
      </li>
    </TokenInfoWrapper>
  );
};

export default TokenInfo;
