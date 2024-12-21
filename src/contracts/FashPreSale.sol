// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/IERC20Metadata.sol";

contract FashionBlockPresale is Ownable {
    using SafeERC20 for IERC20;
    using SafeERC20 for IERC20Metadata;
    IERC20 public token;
    IERC20Metadata public tokenMetadata;
    IERC20 public usdtToken;
    IERC20Metadata public usdtTokenMetadata;
    address public paymentAddress;
    bool public presaleActive = true;

    struct Buyer {
        uint256 token;
        uint256 endTime;
    }
    mapping(address => Buyer) public buyers;
    address[] public buyerAddresses;

    // constructor
    constructor(
        address _payment,
        address _token,
        address _usdtToken
    ) Ownable(msg.sender) {
        paymentAddress = _payment;
        token = IERC20(_token);
        tokenMetadata = IERC20Metadata(_token);
        usdtToken = IERC20(_usdtToken);
        usdtTokenMetadata = IERC20Metadata(_usdtToken);
    }

    // buyToken funtion to buy tokens
    function buyToken(
        address _buyerAddress,
        uint256 _token,
        uint256 _endTime
    ) public payable {
        //payment price transfer to payement address
        require(
            payable(paymentAddress).send(msg.value),
            "Failed to transfer payment!"
        );

        uint256 _tokenDecimals = tokenMetadata.decimals();
        uint256 _tokenAmount = _token * 10**_tokenDecimals;
        Buyer storage buyerInfo = buyers[_buyerAddress];

        if (buyerInfo.token > 0) {
            _tokenAmount += buyerInfo.token;
        } else {
            buyerAddresses.push(_buyerAddress);
        }
        buyers[_buyerAddress] = Buyer(_tokenAmount, _endTime);
    }

    // buyTokenWithUsdt funtion to buy tokens using USDT
    function buyTokenWithUsdt(
        address _buyerAddress,
        uint256 _token,
        uint256 _endTime,
        uint256 _usdtAmount
    ) public payable {
        require(
            usdtToken.allowance(msg.sender, address(this)) >= _usdtAmount,
            "Not enough USDT allowance!"
        );

        //usdt token transfer to this contract
        usdtToken.safeTransferFrom(_buyerAddress, paymentAddress, _usdtAmount);

        uint256 _tokenDecimals = tokenMetadata.decimals();
        uint256 _tokenAmount = _token * 10**_tokenDecimals;
        Buyer storage buyerInfo = buyers[_buyerAddress];

        if (buyerInfo.token > 0) {
            _tokenAmount += buyerInfo.token;
        } else {
            buyerAddresses.push(_buyerAddress);
        }
        buyers[_buyerAddress] = Buyer(_tokenAmount, _endTime);
    }

    // claimToken funtion to claim tokens
    function claimToken() public {
        Buyer storage buyerInfo = buyers[msg.sender];
        require(
            buyerInfo.endTime <= block.timestamp,
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
}
