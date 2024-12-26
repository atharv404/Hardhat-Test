// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IFeeManager {
    // Events
    event FeeUpdated(uint256 newBaseFee, uint256 newDiscountedFee);
    event DiscountTokenUpdated(address token, uint256 minimumBalance);

    // Core functions
    function calculateFee(
        address user,
        uint256 amount
    ) external view returns (uint256);
    
    function setFees(
        uint256 newBaseFee,
        uint256 newDiscountedFee
    ) external;
    
    function updateDiscountTokenThreshold(
        address token,
        uint256 minimumBalance
    ) external;

    // View functions
    function baseFee() external view returns (uint256);
    function discountedFee() external view returns (uint256);
    function isEligibleForDiscount(address user) external view returns (bool);
}