//token contract abi json
import TokenContractAbi from "./TokenContractAbi.json";

//token presale contract abi json
import {PresaleContractAbi} from "./PresaleContractAbi";
import erc20ContractAbi from "./erc20Abi.json";

//network link
export const networkLink = "https://bscscan.com/tx/";

//token contract address
const tokenContractAddress = "0x0391dDBeaA28E720B80a46B5770c77ba787abf54";

//token presale contract address - OLD
//export const presaleContractAddress = "0xe3f73a59fcd8c5ed7a9d6cff95ee95e1aebc4cdc";

//token presale contract address - FINAL
export const presaleContractAddress = "0xbf7cddd2ab5bef66a03854ea39998e5d46411cb0";
//

// Testing in mainnet - contract
//export const presaleContractAddress = "0xd3ce8d583f29197e2365b661f5843e40dcc7c743";


export const usdtContractAddress = "0x55d398326f99059fF775485246999027B3197955";



//contract chainid
const contractChainId = 56;

//payment with (eg. ETH, BNB, MATIC etc.)
export const payWith = "BNB";

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
  chainId: 56
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
    "https://api.coinbase.com/v2/exchange-rates?currency=BNB",
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