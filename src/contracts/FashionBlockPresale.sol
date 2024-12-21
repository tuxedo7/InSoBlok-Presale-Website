// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract FashionBlockPresale is Ownable {
    using SafeERC20 for IERC20;
    using SafeERC20 for IERC20Metadata;
    IERC20 public token;
    IERC20Metadata public tokenMetadata;
    IERC20 public usdtToken;
    IERC20Metadata public usdtTokenMetadata;
    AggregatorV3Interface priceFeed;
    address public paymentAddress;
    uint currentStage;
    bool public presaleActive = true;
    mapping(uint => uint256) public stagePrice; 
    mapping(uint => uint256) public stageEndTime;
    uint256 public vestingDelayTime;
    string nativeSymbol;

    struct Buyer {
        uint256 token;
        uint256 endTime;
        uint256 paid;
        uint256 price;
        uint256 time;
        string symbol;
    }
    mapping(address => Buyer) public buyers;
    address[] public buyerAddresses;
    // constructor
    constructor(
        address _oracle,
        address _payment,
        address _token,
        string memory _symbol,
        address _usdtToken
    ) Ownable(msg.sender) {
        paymentAddress = _payment;
        token = IERC20(_token);
        tokenMetadata = IERC20Metadata(_token);
        usdtToken = IERC20(_usdtToken);
        usdtTokenMetadata = IERC20Metadata(_usdtToken);
        priceFeed = AggregatorV3Interface(_oracle);
        stagePrice[1] = 5 * (10**16);
        stagePrice[2] = 10 * (10**16);
        stagePrice[3] = 15 * (10**16);
        stageEndTime[1] = 1735689600000;
        stageEndTime[2] = 1735689600000;
        stageEndTime[3] = 1735689600000;
        vestingDelayTime = 20 * 24 * 60 * 60 * 1000;
        currentStage = 1;
        nativeSymbol = _symbol;
    }
    function getNativeTokenUsdPrice() public view returns(uint256) {
        (,int256 price,,,) = priceFeed.latestRoundData();
        require(price > 0, "Invalid price");
        return uint256(price*(10**10));
    }
    function getTokenAmount(uint256 _ethAmount) public view returns (uint256) {
        uint256 ethPriceInUSD = getNativeTokenUsdPrice();  // Fetch the current ETH/USD price
        uint256 tokensPerETH = (ethPriceInUSD) / stagePrice[currentStage];  // Calculate tokens per 1 ETH
        
        return (_ethAmount * tokensPerETH);  // Return token amount based on ETH input
    }
    function getTokenAmountForUsdt(uint256 _usdtAmount) public view returns(uint256) {
        uint256 _tokenAmount = (_usdtAmount / (stagePrice[currentStage]/(10**12))) * (10**18);
        return _tokenAmount;
    }
    function buyToken(
        address _buyerAddress    
    ) public payable {
        //payment price transfer to payement address
        require(block.timestamp < stageEndTime[currentStage], "current presale is ended");
        uint256 _tokenAmount = getTokenAmount(msg.value);
        Buyer storage buyerInfo = buyers[_buyerAddress];

        if (buyerInfo.token > 0) {
            _tokenAmount += buyerInfo.token;
        } else {
            buyerAddresses.push(_buyerAddress);
        }
        buyers[_buyerAddress] = Buyer(
            _tokenAmount, 
            ((block.timestamp*1000)+vestingDelayTime), 
            msg.value, 
            stagePrice[currentStage], 
            block.timestamp, 
            nativeSymbol
        );
    }
    // buyTokenWithUsdt funtion to buy tokens using USDT
    function buyTokenWithUsdt(
        address _buyerAddress,
        uint256 _usdtAmount
    ) public {
        require(block.timestamp < stageEndTime[currentStage], "current presale is ended");
        uint256 _tokenAmount = getTokenAmountForUsdt(_usdtAmount);
        require(
            usdtToken.allowance(msg.sender, address(this)) >= _usdtAmount,
            "Not enough USDT allowance!"
        );
        usdtToken.safeTransferFrom(_buyerAddress, address(this), _usdtAmount);
        Buyer storage buyerInfo = buyers[_buyerAddress];

        if (buyerInfo.token > 0) {
            _tokenAmount += buyerInfo.token;
        } else {
            buyerAddresses.push(_buyerAddress);
        }
        buyers[_buyerAddress] = Buyer(
            _tokenAmount, 
            ((block.timestamp*1000)+vestingDelayTime), 
            _usdtAmount, 
            stagePrice[currentStage], 
            block.timestamp, 
            "USDT"
        );
    }
    //claimToken funtion to claim tokens
    function claimToken() public {
       
    /**
     * @notice Claims tokens by the buyer.
     *
     * @dev This function checks if the buyer's vesting time has ended and if they have tokens to claim.
     * If both conditions are met, it transfers the tokens back to the buyer and removes their information from the buyers mapping.
     *
     * @param None
     *
     * @return None
     */     Buyer storage buyerInfo = buyers[msg.sender];
        require(
            buyerInfo.endTime < block.timestamp,
            "You can't calim before vesting end time!"
        );
        require(buyerInfo.token > 0, "You don't have tokens!");

        // Transfer tokens back to buyer
        token.safeTransfer(msg.sender, buyerInfo.token);

        //delete buyers info
        removeBuyer(msg.sender);
    }

    // findBuyerIndex to get index of single buyer address
    function findBuyerIndex(address _buyerAddress)
        internal
        view
        returns (uint256)
    {
        for (uint256 i = 0; i < buyerAddresses.length; i++) {
            if (buyerAddresses[i] == _buyerAddress) {
                return i;
            }
        }
        revert("Buyer address not found");
    }

    // removeBuyer to remove buyer info
    function removeBuyer(address _buyerAddress) public {
        require(buyers[_buyerAddress].token > 0, "Buyer does not exist");
        uint256 index = findBuyerIndex(_buyerAddress);

        // Remove the buyer from the mapping
        delete buyers[_buyerAddress];

        // Remove the address from the buyerAddresses array
        buyerAddresses[index] = buyerAddresses[buyerAddresses.length - 1];
        buyerAddresses.pop();
    }
    // getAllBuyers to show all buyers
    function getAllBuyers()
        public
        view
        returns (
            address[] memory,
            uint256[] memory,
            uint256[] memory
        )
    {
        uint256 length = buyerAddresses.length;
        address[] memory addresses = new address[](length);
        uint256[] memory tokens = new uint256[](length);
        uint256[] memory endTimes = new uint256[](length);

        for (uint256 i = 0; i < length; i++) {
            address buyerAddress = buyerAddresses[i];
            Buyer storage buyer = buyers[buyerAddress];
            addresses[i] = buyerAddress;
            tokens[i] = buyer.token;
            endTimes[i] = buyer.endTime;
        }

        return (addresses, tokens, endTimes);
    }
    // getTotalTokenAmount to get total amount of all buyers
    function getTotalTokenAmount() public view returns (uint256) {
        uint256 totalTokenAmount = 0;
        for (uint256 i = 0; i < buyerAddresses.length; i++) {
            totalTokenAmount += buyers[buyerAddresses[i]].token;
        }
        return totalTokenAmount;
    }
    // update token address
    function setToken(address _token) public onlyOwner {
        require(_token != address(0), "Token is zero address!");
        token = IERC20(_token);
        tokenMetadata = IERC20Metadata(_token);
    }
    // update usdt token address
    function setUsdtToken(address _usdtToken) public onlyOwner {
        require(_usdtToken != address(0), "Token is zero address!");
        usdtToken = IERC20(_usdtToken);
        usdtTokenMetadata = IERC20Metadata(_usdtToken);
    }
    // update paementAddress
    function setPaymentAddress(address _paymentAddress) public onlyOwner {
        paymentAddress = _paymentAddress;
    }
    // flip presaleActive as true/false
    function flipPresaleActive() public onlyOwner {
        presaleActive = !presaleActive;
    }
    // withdrawFunds functions to get remaining funds transfer
    function withdrawFunds() public onlyOwner {
        require(
            payable(msg.sender).send(address(this).balance),
            "Failed withdraw!"
        );
        require(usdtToken.balanceOf(address(this)) > 0, "Insufficient Balance");
        usdtToken.safeTransfer(paymentAddress, usdtToken.balanceOf(address(this)));
    }
    // withdrawTokens functions to get remaining tokens transfer
    function withdrawTokens(address _to, uint256 _amount) public onlyOwner {
        uint256 _tokenBalance = token.balanceOf(address(this));
        require(_tokenBalance >= _amount, "Exceeds token balance!");
        token.safeTransfer(_to, _amount);
    }
    // withdrawUsdt functions to get remaining USDT
    function withdrawUsdt(address _to, uint256 _amount) public onlyOwner {
        uint256 _usdtTokenBalance = usdtToken.balanceOf(address(this));
        require(_usdtTokenBalance >= _amount, "Exceeds token balance!");
        usdtToken.safeTransfer(_to, _amount);
    }
    function getStageEndTime(uint _stage) public view returns(uint256) {
        return stageEndTime[_stage];
    }
    function setStageEndTime(uint _stage, uint256 _time) public onlyOwner {
        require(_time > 0, "invalid value!!!");
        require(_stage <= 3, "exceed range");
        require(_stage >= 1, "exceed range");
        stageEndTime[_stage] = _time;
    }
    function getStagePrice(uint _stage) public view returns (uint256) {
        return stagePrice[_stage];
    }
    function setStagePrice(uint _stage, uint256 _price) public onlyOwner {
        require(_price > 0, "invalid value!!!");
        require(_stage <= 3, "exceed range");
        require(_stage >= 1, "exceed range");
        stagePrice[_stage] = _price;
    }
    function setVestingTime(uint256 _time) public onlyOwner {
        vestingDelayTime = _time;
    }
    function getVestingTime() public view returns(uint256) {
        return vestingDelayTime;
    }
    function setCurrentStage(uint _stage) public onlyOwner {
        currentStage = _stage;
    }
    function getCurrentStage() public view returns(uint) {
        return currentStage;
    }
}

