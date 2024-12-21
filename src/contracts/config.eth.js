//token contract abi json
import TokenContractAbi from "./TokenContractAbi.json";

//token presale contract abi json
import {PresaleContractAbi} from "./PresaleContractAbi";

//erc20 contract abi json
import erc20ContractAbi from "./erc20Abi.json";

//network link
export const networkLink = "https://etherscan.io/tx";

//token contract address -INSO
const tokenContractAddress = "0x0391dDBeaA28E720B80a46B5770c77ba787abf54";

//token presale contract address
//export const presaleContractAddress = "0x6CC7E0454aCE4500FfbcA3a8Cd582145bFd3Df9b";
//git test presaleContract Address

//export const presaleContractAddress = "0x724c5ECcB208992747E30ea6BB5E558F8bF770d5"

export const presaleContractAddress = "0xDdac28e61042bCD6fC4311eeD3a8b9D458850de4"


//
export const bnb_preSaleContract= "0x2be639f8D2C6076416fB1876A8be4CF100aeb0F2"

//usdt contract address
// export const usdtContractAddress = "0x239D2c5C552BdcA54F021800F22EEe4dD46e77C5";
export const usdtContractAddress = "0xdAC17F958D2ee523a2206206994597C13D831ec7";

//sepolia contract chainid
// const contractChainId = 11_155_111;

const contractChainId = 1;


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

//usdt balanceOf read
export const usdtBalanceOfCall = {
  ...usdtContractConfig,
  functionName: "balanceOf",
  watch: true,
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
  chainId: 1
}
//buyers read
export const buyersCall = {
  ...presaleContractConfig,
  functionName: "buyers",
  watch: true,
};

//buyers read
export const getAllBuyersCall = {
  ...presaleContractConfig,
  functionName: "getAllBuyers",
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