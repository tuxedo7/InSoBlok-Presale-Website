import React, { useEffect, useRef, useState } from "react";
import { PresaleContext } from "./PresaleContext";
import * as configModule1 from "../contracts/config.eth.js";
import * as configModule2 from "../contracts/config.bsc.js";
import Data from "../assets/data/networkInfo";
import {
  useAccount,
  useBalance,
  useWriteContract,
  useReadContract,
  useReadContracts,
  useSwitchChain,
  useWaitForTransactionReceipt,
  usePublicClient,
} from "wagmi";
import { erc20Abi } from "viem";

import { formatEther, formatUnits, parseEther, parseUnits } from "viem";
import EthIcon from "../assets/images/token/eth.png";
import BnbIcon from "../assets/images/token/bnb.png";
import Notification from "../components/notification/Notification";
import { toast, Bounce } from "react-toastify";
import {
  usdtContractAddress,
  presaleContractAddress,
} from "../contracts/config.eth.js";
import { writeContract } from "wagmi/actions";
import { PresaleContractAbi } from "../contracts/PresaleContractAbi";

import { setBalance } from "viem/actions";
import { ethers } from "ethers";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { UNSAFE_ViewTransitionContext } from "react-router-dom";

const SEPOLIA_ADDRESS = "0x4f7329612846f0483b356d850ad50055f80d8a7d";
const BSC_ADDRESS = "0x3873517fA64e3E9B7EAc0a597b5B5ED93F60Dda7";

const PresaleContextProvider = ({ children }) => {
  const [restricted, setRestricted] = useState(false); // your state value to manipulate

  //
  const [ipFetchCompleted, setIpFetchCompleted] = useState(false); // your state value to manipulate

  const search = window.location.search;
  const params = new URLSearchParams(search);
  const bypass = params.get("bypass");

  if (!ipFetchCompleted) {
    fetch("https://pro.ip-api.com/json?key=y2RVpb0h7dGyBxz")
      .then((response) => response.json())
      .then((data) => {
       // const restrictedCountryCodes = ["US" , "AF" , "BY" , "MM" , "CU" , "KP" , "IR" , "IQ" , "LY" , "RU" , "SS" , "SD" , "SY" , "VE" , "YE"];
        const restrictedCountryCodes = ["US"];
        if (restrictedCountryCodes.indexOf(data.countryCode) > -1 ) {
          if (bypass != null && bypass === "true") {
            setRestricted(false);
          } else {
            setRestricted(false); // to Disable US Customer, change it back to true
          }

          setIpFetchCompleted(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching IP:", error);
      });
  }

  const ethChainId = Data[0]?.chainId;
  const bnbChainId = Data[1]?.chainId;
  const publicClient = usePublicClient();

  const account = useAccount();
  const { address: addressData, isConnected, chainId } = useAccount();

  const [configModule, setConfigModule] = useState(
    chainId == 56 ? configModule2 : configModule1
  );

  const [IsActiveBuyOnEth, setIsActiveBuyOnEth] = useState(false);
  const [IsActiveBuyOnBnb, setIsActiveBuyOnBnb] = useState(true);

  const [isProcessing, setIsProcessing] = useState(false);
  const [isBuyTokenCall, setIsBuyTokenCall] = useState(false);

  const [buyOnItem, setBuyOnItem] = useState(2);
  const [buyOnText, setBuyOnText] = useState("BUY ON BNB");
  const [buyOnIcon, setBuyOnIcon] = useState(BnbIcon);
  const [selectedImg, setSelectedImg] = useState(EthIcon);

  const handleBuyOn = (itemId) => {
    if (itemId == 1) {
      setIsActiveBuyOnBnb(false);
      setIsActiveBuyOnEth(true);
      switchChain({ chainId: ethChainId });
      setConfigModule((prev) => configModule1);
      makeEmptyInputs();
    }

    if (itemId == 2) {
      setIsActiveBuyOnEth(false);
      setIsActiveBuyOnBnb(true);
      switchChain({ chainId: bnbChainId });
      setConfigModule((prev) => configModule2);
      makeEmptyInputs();
    }
  };

  const [userChainId, setUserChainId] = useState(1);
  const [userBalance, setUserBalance] = useState(0);
  const [userBalanceUSDT, setUserBalanceUSDT] = useState(0);

  const [maxStage, setMaxStage] = useState(0);
  const [currentStage, setCurrentStage] = useState(1);
  const [currentBonus, setCurrentBonus] = useState("0");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [nextPrice, setNextPrice] = useState(0.01);
  const [usdtPrice, setUsdtPrice] = useState(0.005);
  const [tokenName, setTokenName] = useState("INSO TOKEN");
  const [tokenSymbol, setTokenSymbol] = useState("INSO");
  const [presaleToken, setPresaleToken] = useState(30000000);
  const [totalRaisedCap, setTotalRaisedCap] = useState("0");
  const [tokenSold, setTokenSold] = useState(0);
  const [totalRaised, setTotalRaised] = useState("0");
  const [tokenPercent, setTokenPercent] = useState(0);
  const [tokenDecimals, setTokenDecimals] = useState(18);
  const [tokenSubDecimals, setTokenSubDecimals] = useState(0);
  const [usdtDecimals, setUsdtDecimals] = useState(6);
  const [usdtAllowance, setUsdtAllowance] = useState(0);

  const [tokenAmount, setTokenAmount] = useState(0);
  const [buyersToken, setBuyersToken] = useState(0);
  const [buyersVestingEnd, setBuyersVestingEnd] = useState(1723910399);
  const [usdExRate, setUsdExRate] = useState(0);
  const [paymentUsd, setPaymentUsd] = useState(0);
  const [paymentPrice, setPaymentPrice] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [inputETHValue, setInputETHValue] = useState(0);
  const [isApproved, setIsApproved] = useState(false);
  const [inputUsdtValue, setInputUsdtValue] = useState(0);

  const [presaleStatus, setPresaleStatus] = useState(null);

  const [holderCount, setHolderCount] = useState(0);

  const { switchChain } = useSwitchChain();
  const { writeContractAsync, writeContract } = useWriteContract();

  // useBalance({ address: addressData, token: configModule1.usdtContractAddress });
  const {
    data: balanceData,
    refetch: refetchBalance,
    usdt_balance_error,
  } = useBalance({ address: addressData, blockTag: "latest" });

  const { data: balanceUSDTData } = useReadContract({
    allowFailure: false,
    address: usdtContractAddress,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [addressData],
  });

  //const stageData = 1;
  const { data: stageData } = useReadContract({ ...configModule.getStageCall });
  const { data: tokenNameData } = useReadContract({
    ...configModule.tokenNameCall,
  });
  const { data: tokenSymbolData } = useReadContract({
    ...configModule.tokenSymbolCall,
  });
  const { data: tokenDecimalsData } = useReadContract({
    ...configModule.tokenDecimalsCall,
  });
  const { data: usdtDecimalsData } = useReadContract({
    ...configModule.usdtDecimalsCall,
  });
  const { data: usdtAllowanceData } = useReadContract({
    ...configModule.usdtAllowanceCall,
    args: [addressData, configModule.presaleContractAddress],
    watch: true,
  });

  // const { writeContractAsync: approveUSDT } = useWriteContract({
  //   account: account,
  //   abi: erc20Abi,
  //   address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  //   functionName: "approve",
  //   args: [configModule.presaleContractAddress, "1000000"],
  // });

  // const {
  //   data: usdtApproveData,
  //   writeContract: usdtApproveWrite,
  //   isPending: usdtApproveIsLoading,
  //   isSuccess: usdtApproveIsSuccess,
  //   error: usdtApproveError,
  // } = useWriteContract();

  const { data: getTotalTokenAmountData } = useReadContract({
    ...configModule.getTotalTokenAmountCall,
  });
  const { data: getAllBuyersCallData } = useReadContract({
    ...configModule.getAllBuyersCall,
  });
  const { data: getCurrentPriceData, refetch: refetchCurrentPrice } =
    useReadContract({ ...configModule.getStagePriceCall, args: [1] });
  const { data: getNextPriceData } = useReadContract({
    ...configModule.getStagePriceCall,
    args: [parseInt(1) + 1],
  });
  const { data: getCurrentStageEndData } = useReadContract({
    ...configModule.getStageEndTimeCall,
    args: [1],
  });

  // const contract = new ethers.Contract("0x01D5647567D27196FcF6f8406AdAC2Fc1f38E163", PresaleContractAbi, provider);
  // const vestingTime = contract.getVestingTime();
  const { data: getTokenAmountData } = useReadContract({
    ...configModule.getTokenAmountCall,
    args: [addressData],
  });
  const { data: buyersData, refetch: refetchBuyersData } = useReadContract({
    ...configModule.buyersCall,
    args: [addressData],
  });
  const {
    data: getBuyTokenAmountData,
    refetch: refetchBuyTokenAmount,
    error,
    isFetched,
    isPending,
  } = useReadContract({
    address: configModule.presaleContractAddress,
    abi: PresaleContractAbi,
    functionName: "getTokenAmount",
    chainId: chainId,
    args: [parseEther(inputETHValue.toString())],
    watch: true,
  });

  const {
    data: getBuyTokenAmountForUsdtData,
    refetch: refetchBuyTokenAmountForUsdt,
  } = useReadContract({
    address: configModule.presaleContractAddress,
    abi: PresaleContractAbi,
    functionName: "getTokenAmountForUsdt",
    chainId: chainId,
    args: [Number(inputUsdtValue) * 1e6],
  });

  const {
    data: buyTokenData,
    writeContractAsync: buyTokenWrite,
    isPending: buyTokenIsLoading,
    isSuccess: buyTokenIsSuccess,
    error: buyTokenError,
  } = useWriteContract();

  const {
    data: approveUSDTData,
    writeContractAsync: approveUSDTWrite,
    isPending: approveUSDTIsLoading,
    isSuccess: approveUSDTIsSuccess,
    error: approveUSDTError,
  } = useWriteContract();

  const {
    data: buyTokenWithUsdtData,
    writeContractAsync: buyTokenWithUsdtWrite,
    isPending: buyTokenWithUsdtIsLoading,
    isSuccess: buyTokenWithUsdtIsSuccess,
    error: buyTokenWithUsdtError,
  } = useWriteContract();

  const {
    data: claimTokenData,
    writeContractAsync: claimTokenWrite,
    isPending: claimTokenIsLoading,
    isSuccess: claimTokenIsSuccess,
    error: claimTokenError,
  } = useWriteContract();

  const makeEmptyInputs = () => {
    setPresaleStatus(null);
    setTotalAmount(0);
    setInputETHValue(0);
    setInputUsdtValue(0);
  };

  //handle payment input
  const handlePaymentInput = async (e) => {
    let _inputValue = e.target.value;
    //setPaymentAmount(_inputValue);
    setInputETHValue(_inputValue);
    //setPaymentPrice(_inputValue);
  };

  useEffect(() => {
    if (!inputETHValue || inputETHValue == "") {
      // setPresaleStatus(null);
      setTotalAmount(0);
      //setPaymentPrice(0);
      return;
    }
    refetchBuyTokenAmount();
    if (getBuyTokenAmountData) setTotalAmount(getBuyTokenAmountData);
    if (parseFloat(userBalance) < parseFloat(inputETHValue)) {
      setPresaleStatus("Insufficient funds in your wallet");
    } else {
      if (getBuyTokenAmountData > 0) {
        setPresaleStatus(null);
      } else {
        setPresaleStatus("Please buy at least 1 token!");
        setTotalAmount(0);
        setPaymentPrice(0);
      }
    }
  }, [inputETHValue, getBuyTokenAmountData]);

  useEffect(() => {
    if (!inputUsdtValue || inputUsdtValue == "") {
      setPresaleStatus(null);
      setTotalAmount(0);
      setPaymentPrice(0);
      return;
    }
    refetchBuyTokenAmountForUsdt();
    if (getBuyTokenAmountForUsdtData)
      setTotalAmount(getBuyTokenAmountForUsdtData);
    if (parseFloat(userBalanceUSDT) < parseFloat(inputUsdtValue)) {
      setPresaleStatus("Insufficient funds in your wallet");
    } else {
      if (getBuyTokenAmountForUsdtData > 0) {
        setPresaleStatus(null);
      } else {
        setPresaleStatus("Please buy at least 1 token!");
        setTotalAmount(0);
        setPaymentPrice(0);
      }
    }
  }, [inputUsdtValue, getBuyTokenAmountForUsdtData]);

  // buy token
  const buyToken = async () => {
    setPresaleStatus(null);
    if (inputETHValue != "") {
      try {
        const tx = await buyTokenWrite({
          ...configModule.buyTokenCall,
          args: [addressData],
          value: parseEther(inputETHValue.toString()),
        });

        refetchDataAfterBuy(); // This should be called after transaction
        makeEmptyInputs(); // This should reset inputs
      } catch (error) {
        console.error("Error during transaction or function execution:", error);
      }
    } else {
      setPresaleStatus("Please enter pay amount!");
    }
  };

  // claim token
  const claimToken = () => {
    if (buyersToken > 0 && Date.now() >= buyersVestingEnd) {
      toast("🦄 Wow so easy!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      claimTokenWrite({ ...configModule.claimTokenCall });
    } else {
      setPresaleStatus("Token will be claimed after presale ends.");
    }
  };

  //handle payment usdt input
  const handlePaymentUsdtInput = async (e) => {
    let _inputValue = e.target.value;
    setInputUsdtValue(_inputValue);
    setPaymentAmount(_inputValue);
    setPaymentPrice(_inputValue);
  };
  const approveUSDT = async () => {
    if (inputUsdtValue != "") {
      setPresaleStatus(null);

      try {
        if (parseInt(usdtAllowance) < parseInt(inputUsdtValue)) {
          if (parseInt(usdtAllowance) > 0) {
            const tx1 = await approveUSDTWrite({
              ...configModule.usdtApproveCall,
              args: [configModule.presaleContractAddress, parseUnits("0", 6)],
            });
            await publicClient.waitForTransactionReceipt({ hash: tx1 });
          }
          const tx = await approveUSDTWrite({
            ...configModule.usdtApproveCall,
            args: [
              configModule.presaleContractAddress,
              parseUnits(inputUsdtValue.toString(), 6),
            ],
          });
          await publicClient.waitForTransactionReceipt({ hash: tx });
        }
        await buyTokenWithUsdtWrite({
          ...configModule.buyTokenWithUsdtCall,
          args: [addressData, parseUnits(inputUsdtValue.toString(), 6)],
        });
      } catch (e) {
        console.log("error: ", e);
      }
    } else {
      setPresaleStatus("Please enter pay amount!");
    }
    setIsProcessing(false);
    setIsBuyTokenCall(true);
  };

  const buyTokenWithUsdt = async () => {
    setPresaleStatus(null);
    if (inputUsdtValue != "") {

      try {
        if (parseInt(usdtAllowance) < parseInt(inputUsdtValue)) {
          // if (parseInt(usdtAllowance) > 0) {
          //   const tx1 = await approveUSDTWrite({
          //     ...configModule.usdtApproveCall,
          //     args: [
          //       configModule.presaleContractAddress,
          //       parseUnits("0", 6),
          //     ],
          //   });
          //   await publicClient.waitForTransactionReceipt({ hash: tx1 });
          // }
          setPresaleStatus("approve");
          const tx = await approveUSDTWrite({
            ...configModule.usdtApproveCall,
            args: [
              configModule.presaleContractAddress,
              parseUnits("100000000000000000000", 6),
            ],
          });
          await publicClient.waitForTransactionReceipt({ hash: tx });
        }
        await buyTokenWithUsdtWrite({
          ...configModule.buyTokenWithUsdtCall,
          args: [addressData, parseUnits(inputUsdtValue.toString(), 6)],
        });
      } catch (e) {
        console.log("error: ", e);
        setPresaleStatus(e);
      }
    } else {
      setPresaleStatus("Please enter pay amount!");
    }
    setIsProcessing(false);
    setIsBuyTokenCall(true);
  };

  // console.log(presaleStatus);

  // useEffect(() => {
  //   if (inputUsdtValue == 0 || inputUsdtValue == "" || !inputUsdtValue) return;
  //   buyTokenWithUsdtWrite({
  //     ...configModule.buyTokenWithUsdtCall,
  //     args: [addressData, parseUnits(inputUsdtValue, 6)],
  //   });
  //   //refetchDataAfterBuy();  // This should be called after transaction
  //   makeEmptyInputs();
  // }, [isApproved])

  // buy token notification
  const [isActiveNotification, setIsActiveNotification] = useState(false);
  const [notificationDone, setNotificationDone] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState("");

  const buyTokenLoadingMsg = (textMsg) => {
    setIsActiveNotification(true);
    setNotificationMsg(textMsg);
    setTimeout(() => {
      setNotificationDone(false);
    }, 5000);
  };

  const buyTokenSuccessMsg = () => {
    setNotificationDone(true);
    setNotificationMsg("Your transaction has been successfully completed");
    setTimeout(() => {
      setNotificationDone(false);
    }, 5000);
  };

  useEffect(() => {
    if (chainId) {
      setUserChainId(chainId);
      if (chainId == 1) {
        setConfigModule(configModule1);
        setSelectedImg(EthIcon);
        setBuyOnItem(2);
        setBuyOnText("BUY ON BNB");
        setBuyOnIcon(BnbIcon);
      }
      if (chainId == 56) {
        setConfigModule(configModule2);
        setSelectedImg(BnbIcon);
        setBuyOnItem(1);
        setBuyOnText("BUY ON ETH");
        setBuyOnIcon(EthIcon);
      }
    }

    if (
      buyTokenIsLoading ||
      claimTokenIsLoading ||
      buyTokenWithUsdtIsLoading ||
      approveUSDTIsLoading
    ) {
      buyTokenLoadingMsg("Transaction Processing. Click “Confirm”.");
    }

    if (buyTokenError) {
      setIsActiveNotification(false);
      const errorMessage = buyTokenError.message || "An error occurred.";
      // Find the index of the first period
      const firstPeriodIndex = errorMessage.indexOf(".");
      // Extract the substring until the first period
      const resultMessage =
        firstPeriodIndex !== -1
          ? errorMessage.substring(0, firstPeriodIndex)
          : errorMessage;
      console.log(resultMessage); // Log the message until the first period
      setPresaleStatus(resultMessage); // Set presale status to the message
    }

    if (claimTokenError) {
      setIsActiveNotification(false);
      const errorMessage = claimTokenError.message || "An error occurred.";
      // Find the index of the first period
      const firstPeriodIndex = errorMessage.indexOf(".");
      // Extract the substring until the first period
      const resultMessage =
        firstPeriodIndex !== -1
          ? errorMessage.substring(0, firstPeriodIndex)
          : errorMessage;
      console.log(resultMessage); // Log the message until the first period
      setPresaleStatus(resultMessage); // Set presale status to the message
    }

    if (buyTokenWithUsdtError) {
      setIsActiveNotification(false);
      const errorMessage =
        buyTokenWithUsdtError.message || "An error occurred.";
      // Find the index of the first period
      const firstPeriodIndex = errorMessage.indexOf(".");
      // Extract the substring until the first period
      const resultMessage =
        firstPeriodIndex !== -1
          ? errorMessage.substring(0, firstPeriodIndex)
          : errorMessage;
      console.log(resultMessage); // Log the message until the first period
      setPresaleStatus(resultMessage); // Set presale status to the message
    }

    if (approveUSDTError) {
      setIsActiveNotification(false);
      const errorMessage = approveUSDTError.message || "An error occurred.";
      // Find the index of the first period
      const firstPeriodIndex = errorMessage.indexOf(".");
      // Extract the substring until the first period
      const resultMessage =
        firstPeriodIndex !== -1
          ? errorMessage.substring(0, firstPeriodIndex)
          : errorMessage;
      console.log(resultMessage); // Log the message until the first period
      setPresaleStatus(resultMessage); // Set presale status to the message
    }

    if (
      buyTokenIsSuccess ||
      buyTokenWithUsdtIsSuccess ||
      claimTokenIsSuccess ||
      approveUSDTIsSuccess
    ) {
      buyTokenSuccessMsg();
      // const timeoutId = setTimeout(() => {
      //   window.location.reload();
      // }, 2000);

      //return () => clearTimeout(timeoutId);
    }
  }, [
    approveUSDTIsLoading,
    isBuyTokenCall,
    isActiveNotification,
    notificationDone,
    notificationMsg,
    buyTokenData,
    buyTokenIsLoading,
    buyTokenError,
    buyTokenIsSuccess,
    claimTokenData,
    claimTokenIsLoading,
    claimTokenError,
    claimTokenIsSuccess,
    buyTokenWithUsdtData,
    buyTokenWithUsdtIsLoading,
    buyTokenWithUsdtError,
    buyTokenWithUsdtIsSuccess,
  ]);

  useEffect(() => {
    if (chainId) {
      setUserChainId(chainId);
      if (chainId == 1) {
        setConfigModule(configModule1);
        setSelectedImg(EthIcon);
        setBuyOnItem(2);
        setBuyOnText("BUY ON BNB");
        setBuyOnIcon(BnbIcon);
      }
      if (chainId == 56) {
        setConfigModule(configModule2);
        setSelectedImg(BnbIcon);
        setBuyOnItem(1);
        setBuyOnText("BUY ON ETH");
        setBuyOnIcon(EthIcon);
      }
    }

    if (balanceData) {
      let tmp = parseFloat(balanceData?.formatted).toFixed(3);
      setUserBalance(tmp);
    }

    if (tokenNameData) {
      setTokenName(tokenNameData);
    }

    if (tokenSymbolData) {
      setTokenSymbol(tokenSymbolData);
    }

    if (tokenDecimalsData) {
      let _subDecimal = 18 - tokenDecimalsData;
      setTokenDecimals(tokenDecimalsData);
      setTokenSubDecimals(_subDecimal);
    }

    if (usdtDecimalsData) {
      setUsdtDecimals(usdtDecimalsData);
      if (balanceUSDTData) {
        let tmp = formatUnits(balanceUSDTData, 6);
        setUserBalanceUSDT(tmp);
      }
    }

    if (usdtAllowanceData) {
      setUsdtAllowance(formatUnits(usdtAllowanceData, 6));
    }

    if (getTotalTokenAmountData >= 0) {
      const _tokenAmount = getTotalTokenAmountData.toString();
      //Raised in private funding
      const privateSaleSoldToken = 0.103 * presaleToken;
      const _totalTokenAmount =
        _tokenAmount / 10 ** tokenDecimals + privateSaleSoldToken;
      setTokenSold(_totalTokenAmount);

      const totalRaised = _totalTokenAmount * usdtPrice;
      setTotalRaised(_tokenAmount / 10 ** 18);

      const _totalRaisedCap = (presaleToken + privateSaleSoldToken) * usdtPrice;

      setTotalRaisedCap(_totalRaisedCap.toLocaleString());
    }

 //   setHolderCount(getAllBuyersCallData?.length || 0);
    setHolderCount(getAllBuyersCallData?.[0].length || 0 );

    if (stageData) {
      setCurrentStage(Number(stageData));
    }
    if (buyersData) {
      const _tokenAmount = buyersData[0].toString();
      const _buyersTokenAmount = _tokenAmount / 1e18;
      setBuyersToken(_buyersTokenAmount);
      setBuyersVestingEnd(buyersData[1].toString());
    }
    if (getCurrentPriceData) {
      setCurrentPrice(getCurrentPriceData);
    }
    if (getNextPriceData) {
      setNextPrice(getNextPriceData);
    }
    if (getCurrentStageEndData) {
      setEndTime(Number(getCurrentStageEndData));
    }
    if (getTokenAmountData) {
      setTokenAmount(Number(getTokenAmountData) / 10 ** 18);
    }

    let _tokenPercent = parseInt((tokenSold * 100) / presaleToken);
    setTokenPercent(_tokenPercent);

    if (_tokenPercent > 100) {
      setTokenPercent(100);
    }

    configModule.GetUSDExchangeRate().then((res) => {
      setUsdExRate(parseFloat(res));
    });
    let pay = parseFloat(usdExRate * paymentPrice).toFixed(2);
    setPaymentUsd(pay);
  }, [
    chainId,
    configModule,
    tokenNameData,
    tokenSymbolData,
    tokenDecimalsData,
    usdtDecimalsData,
    usdtAllowanceData,
    getTotalTokenAmountData,
    getAllBuyersCallData,
    presaleToken,
    buyersData,
    maxStage,
    usdExRate,
    paymentPrice,
  ]);

  const refetchDataAfterBuy = async () => {
    await refetchBalance();
    await refetchUsdtBalance();
    await refetchBuyersData();
    if (balanceUSDTData) {
      setUserBalanceUSDT(balanceUSDTData);
    }
    if (balanceData) {
      setBalance(balanceData);
    }
    if (buyersData) {
      const _tokenAmount = buyersData[0].toString();
      const _buyersTokenAmount = _tokenAmount / 10 ** tokenDecimals;
      setBuyersToken(_buyersTokenAmount);
      setBuyersVestingEnd(buyersData[1].toString());
    }
  };

  return (
    <PresaleContext.Provider
      value={{
        configModule,
        handleBuyOn,
        IsActiveBuyOnEth,
        setIsActiveBuyOnEth,
        IsActiveBuyOnBnb,
        setIsActiveBuyOnBnb,
        switchChain,
        buyOnItem,
        setBuyOnItem,
        buyOnText,
        setBuyOnText,
        buyOnIcon,
        setBuyOnIcon,
        selectedImg,
        setSelectedImg,
        bnbChainId,
        ethChainId,
        userChainId,
        userBalance,
        userBalanceUSDT,
        inputETHValue,
        inputUsdtValue,
        setUserBalanceUSDT,
        setUserBalance,
        maxStage,
        endTime,
        currentStage,
        currentBonus,
        currentPrice,
        usdtPrice,
        nextPrice,
        tokenName,
        tokenSymbol,
        presaleToken,
        tokenSold,
        tokenPercent,
        tokenDecimals,
        tokenSubDecimals,
        buyersToken,
        setBuyersToken,
        buyersVestingEnd,
        usdExRate,
        paymentUsd,
        paymentPrice,
        paymentAmount,
        totalAmount,
        presaleStatus,
        setPresaleStatus,
        makeEmptyInputs,
        handlePaymentInput,
        buyToken,
        buyTokenData,
        buyTokenIsLoading,
        buyTokenIsSuccess,
        buyTokenError,
        handlePaymentUsdtInput,
        buyTokenWithUsdt,
        claimToken,
        claimTokenData,
        claimTokenIsLoading,
        claimTokenIsSuccess,
        claimTokenError,
        totalRaised,
        totalRaisedCap,
        tokenAmount,
        usdtAllowance,
        approveUSDT,
        restricted,
        holderCount,
      }}
    >
      {children}

      {/* notification modal */}
      {isActiveNotification && (
        <Notification
          notificationDone={notificationDone}
          textMessage={notificationMsg}
        />
      )}
    </PresaleContext.Provider>
  );
};

export default PresaleContextProvider;
