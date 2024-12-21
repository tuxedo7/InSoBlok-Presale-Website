//token contract abi json
import TokenContractAbi from "./TokenContractAbi.json";

//token presale contract abi json
import PresaleContractAbi from "./PresaleContractAbi.json";

//network link
export const networkLink = "https://sepolia.etherscan.io/tx";

//token contract address
const tokenContractAddress = "0x272AA56bCD259a48c3b91a9108ebf58616f0A5a7";

//token presale contract address
export const presaleContractAddress = "0x490dd4795D73560DeD96c079164fAC78BC8Fb3Ed";

//contract chainid
const contractChainId = 11155111;

//payment with (eg. ETH, BNB, MATIC etc.)
export const payWith = "ETH";

//token contract configuration
export const tokenContractConfig = {
  address: tokenContractAddress,
  abi: TokenContractAbi,
  chainId: contractChainId,
};

//token name read
export const tokenNameCall = {
  ...tokenContractConfig,
  functionName: "name",
  watch: true,
};

//token symbol read
export const tokenSymbolCall = {
  ...tokenContractConfig,
  functionName: "symbol",
  watch: true,
};

//token decimals read
export const tokenDecimalsCall = {
  ...tokenContractConfig,
  functionName: "decimals",
  watch: true,
};

//token balanceOf read
export const tokenBalanceOfCall = {
  ...tokenContractConfig,
  functionName: "balanceOf",
  watch: true,
};

//token Presale contract configuration
export const presaleContractConfig = {
  address: presaleContractAddress,
  abi: PresaleContractAbi,
  chainId: contractChainId,
};

//getTotalTokenAmount read
export const getTotalTokenAmountCall = {
  ...presaleContractConfig,
  functionName: "getTotalTokenAmount",
  watch: true,
};

//buyers read
export const buyersCall = {
  ...presaleContractConfig,
  functionName: "buyers",
  watch: true,
};


//buy token write
export const buyTokenCall = {
  ...presaleContractConfig,
  functionName: "buyToken",
  watch: true,
};

//claimToken write
export const claimTokenCall = {
  ...presaleContractConfig,
  functionName: "claimToken",
  watch: true,
};

//ETH to USD exchange rate
export const GetUSDExchangeRate = async () => {
  var requestOptions = { method: "GET", redirect: "follow" };
  return fetch(
    "https://api.coinbase.com/v2/exchange-rates?currency=ETH",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      return result.data.rates.USD;
    })
    .catch((error) => {
      return "error", error;
    });
};
