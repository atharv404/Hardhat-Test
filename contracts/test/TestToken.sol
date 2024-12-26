// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./interfaces/ITokenPool.sol";
import "./interfaces/IFeeManager.sol";
import "./LayerZeroAdapter.sol";

contract TokenPool is 
    ITokenPool, 
    ReentrancyGuard, 
    AccessControl, 
    Pausable,
    LayerZeroAdapter 
{
    using SafeERC20 for IERC20;

    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    
    // Fixed token addresses for each chain
    address public immutable SUPPORTED_TOKEN_1; // USDC on all chains
    address public immutable SUPPORTED_TOKEN_2; // USDT only on ETH chain, address(0) on others
    
    // Fee manager contract
    IFeeManager public feeManager;
    
    // Maximum transaction amount (adjustable by admin)
    uint256 public maxTransactionAmount;
    
    // Events
    event MaxTransactionAmountUpdated(uint256 newAmount);
    
    // Custom errors
    error InvalidAmount();
    error InvalidToken();
    error InsufficientPoolBalance();
    error TransactionAlreadyProcessing();
    error UnauthorizedAccess();
    error TokenNotSupported();
    
    constructor(
        address _feeManager,
        address _lzEndpoint,
        address _token1, // USDC
        address _token2  // USDT on ETH, address(0) on others
    ) LayerZeroAdapter(_lzEndpoint) {
        if (_feeManager == address(0)) revert InvalidToken();
        if (_token1 == address(0)) revert InvalidToken();
        
        feeManager = IFeeManager(_feeManager);
        maxTransactionAmount = 1000000 * 10**6; // Default 1M tokens
        
        SUPPORTED_TOKEN_1 = _token1;
        SUPPORTED_TOKEN_2 = _token2;
        
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);
    }
    
    function setMaxTransactionAmount(
        uint256 newAmount
    ) external onlyRole(ADMIN_ROLE) whenNotPaused {
        require(newAmount > 0, "Invalid amount");
        maxTransactionAmount = newAmount;
        emit MaxTransactionAmountUpdated(newAmount);
    }
    
    function isTokenSupported(
        address token
    ) public view returns (bool) {
        return token == SUPPORTED_TOKEN_1 || 
               (SUPPORTED_TOKEN_2 != address(0) && token == SUPPORTED_TOKEN_2);
    }
    
    function addLiquidity(
        address token,
        uint256 amount
    ) external override onlyRole(ADMIN_ROLE) whenNotPaused nonReentrant {
        if (!isTokenSupported(token)) revert TokenNotSupported();
        if (amount == 0) revert InvalidAmount();
        
        IERC20(token).safeTransferFrom(msg.sender, address(this), amount);
        emit LiquidityAdded(token, amount);
    }
    
    function removeLiquidity(
        address token,
        uint256 amount
    ) external override onlyRole(ADMIN_ROLE) whenNotPaused nonReentrant {
        if (!isTokenSupported(token)) revert TokenNotSupported();
        if (amount == 0) revert InvalidAmount();
        
        uint256 poolBalance = IERC20(token).balanceOf(address(this));
        if (poolBalance < amount) revert InsufficientPoolBalance();
        
        IERC20(token).safeTransfer(msg.sender, amount);
        emit LiquidityRemoved(token, amount);
    }
    
    function initiateSwap(
        address sourceToken,
        uint256 amount,
        uint16 destinationChainId,
        address recipient
    ) external override whenNotPaused nonReentrant {
        if (!isTokenSupported(sourceToken)) revert TokenNotSupported();
        if (amount == 0 || amount > maxTransactionAmount) revert InvalidAmount();
        if (recipient == address(0)) revert InvalidToken();
        
        // Generate unique transaction ID
        bytes32 transactionId = keccak256(
            abi.encodePacked(
                msg.sender,
                sourceToken,
                amount,
                destinationChainId,
                recipient,
                block.timestamp
            )
        );
        
        // Calculate fee
        uint256 fee = feeManager.calculateFee(msg.sender, amount);
        uint256 amountAfterFee = amount - fee;
        
        // Transfer tokens from user
        IERC20(sourceToken).safeTransferFrom(msg.sender, address(this), amount);
        
        // Prepare cross-chain message
        bytes memory payload = abi.encode(
            recipient,
            amountAfterFee,
            sourceToken,
            transactionId
        );
        
        // Send cross-chain message
        _sendMessage(destinationChainId, payload);
        
        emit SwapInitiated(
            sourceToken,
            amount,
            destinationChainId,
            recipient,
            fee
        );
    }
    
    function _nonblockingLzReceive(
        uint16 _srcChainId,
        bytes memory _srcAddress,
        uint64 _nonce,
        bytes memory _payload
    ) internal override whenNotPaused {
        (
            address recipient,
            uint256 amount,
            address sourceToken,
            bytes32 transactionId
        ) = abi.decode(_payload, (address, uint256, address, bytes32));
        
        address destinationToken = _getDestinationToken(sourceToken);
        if (!isTokenSupported(destinationToken)) revert TokenNotSupported();
        
        uint256 poolBalance = IERC20(destinationToken).balanceOf(address(this));
        if (poolBalance < amount) revert InsufficientPoolBalance();
        
        IERC20(destinationToken).safeTransfer(recipient, amount);
        
        emit SwapCompleted(destinationToken, amount, recipient);
    }
    
    function getPoolBalance(
        address token
    ) external view override returns (uint256) {
        if (!isTokenSupported(token)) revert TokenNotSupported();
        return IERC20(token).balanceOf(address(this));
    }
    
    function _getDestinationToken(
        address sourceToken
    ) internal view returns (address) {
        // If source token is USDC, destination is always USDC
        if (sourceToken == SUPPORTED_TOKEN_1) return SUPPORTED_TOKEN_1;
        
        // If source is USDT, destination must be USDT if supported, otherwise USDC
        if (sourceToken == SUPPORTED_TOKEN_2) {
            return SUPPORTED_TOKEN_2 != address(0) ? SUPPORTED_TOKEN_2 : SUPPORTED_TOKEN_1;
        }
        
        revert TokenNotSupported();
    }
}

