// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface ITokenPool {
    // Events
    event LiquidityAdded(address token, uint256 amount);
    event LiquidityRemoved(address token, uint256 amount);
    event SwapInitiated(
        address sourceToken,
        uint256 amount,
        uint16 destinationChainId,
        address recipient,
        uint256 fee
    );
    event SwapCompleted(
        address destinationToken,
        uint256 amount,
        address recipient
    );
    event MaxTransactionAmountUpdated(uint256 newAmount);

    // Core functions
    function addLiquidity(address token, uint256 amount) external;
    function removeLiquidity(address token, uint256 amount) external;
    function initiateSwap(
        address sourceToken,
        uint256 amount,
        uint16 destinationChainId,
        address recipient
    ) external;
    
    // View functions
    function getPoolBalance(address token) external view returns (uint256);
    function isTokenSupported(address token) external view returns (bool);
}