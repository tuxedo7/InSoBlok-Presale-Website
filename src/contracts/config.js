//token contract abi json
import TokenContractAbi from "./TokenContractAbi.json";

//token presale contract abi json
import {PresaleContractAbi} from "./PresaleContractAbi";

//erc20 contract abi json
import erc20ContractAbi from "./erc20Abi.json";

//network link
export const networkLink = "https://sepolia.etherscan.io/tx";

//token contract address -INSO
const tokenContractAddress = "0x90cbAa18E5CbB9D4945dbda0C72cdCcdaE5e8D2d";

//token presale contract address
//export const presaleContractAddress = "0x6CC7E0454aCE4500FfbcA3a8Cd582145bFd3Df9b";
//git test presaleContract Address

export const presaleContractAddress = "0x0350a529Fde66DfE79355b99b113172a6aD88fBd"

export const bnb_preSaleContract= "0x3C0fC3618e16e2d539AC6e1A0a316280Ac7Cfa7E"

//usdt contract address
// export const usdtContractAddress = "0x239D2c5C552BdcA54F021800F22EEe4dD46e77C5";
export const usdtContractAddress = "0xaA8E23Fb1079EA71e0a56F48a2aA51851D8433D0";

//sepolia contract chainid
const contractChainId = 11_155_111;

//const contractChainId = 1;


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

//usdt contract configuration
export const usdtContractConfig = {
  address: usdtContractAddress,
  abi: erc20ContractAbi,
  chainId: contractChainId,
};

//usdt decimals read
export const usdtDecimalsCall = {
  ...usdtContractConfig,
  functionName: "decimals",
  watch: true,
};

//usdt approve write
export const usdtApproveCall = {
  ...usdtContractConfig,
  functionName: "approve",
  watch: true,
};

//usdt approve write
export const usdtAllowanceCall = {
  ...usdtContractConfig,
  functionName: "allowance",
  watch: true,
};


//token Presale contract configuration
export const presaleContractConfig = {
  address: presaleContractAddress,
  abi: PresaleContractAbi,
  chainId: contractChainId,
};

//get buy_token amount
export const getBuyTokenAmountCall = {
  ...presaleContractAddress,
  functionName: "getTokenAmount",
  watch: true
}
//get buy_token_usdt amount
export const getBuyTokenAmountForCall = {
  ...presaleContractAddress,
  functionName: "getTokenAmountForUsdt",
  watch: true
}
//getTotalTokenAmount read
export const getTotalTokenAmountCall = {
  ...presaleContractConfig,
  functionName: "getTotalTokenAmount",
  watch: true,
};

export const getStagePriceCall = {
  ...presaleContractConfig,
  functionName: "getStagePrice",
  watch: true
}
export const getStageCall = {
  ...presaleContractConfig,
  functionName: "getCurrentStage",
  watch: true
}

export const getStageEndTimeCall = {
  ...presaleContractConfig,
  functionName: "getStageEndTime",
  watch: true
}

export const getVestingEndTimeCall = {
  abi: PresaleContractAbi,  
  address: presaleContractAddress,
  functionName: "getVestingTime",
  chainId: 97
}
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

//buy token with usdt write
export const buyTokenWithUsdtCall = {
  ...presaleContractConfig,
  functionName: "buyTokenWithUsdt",
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