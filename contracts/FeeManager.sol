// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./interfaces/IFeeManager.sol";

contract FeeManager is IFeeManager, AccessControl, ReentrancyGuard, Pausable {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    
    // Fee configuration
    uint256 public baseFee = 100; // 1%
    uint256 public discountedFee = 50; // 0.5%
    uint256 public constant MAX_FEE = 1000; // 10% max fee cap
    
    // Discount token configuration
    struct DiscountToken {
        bool isActive;
        uint256 minimumBalance;
    }
    
    // Discount token addresses (to be set during deployment)
    address public immutable FIBO_TOKEN;
    address public immutable ORIO_TOKEN;
    
    // Mapping for discount tokens
    mapping(address => DiscountToken) public discountTokens;
    
    // Custom errors
    error InvalidFeeConfiguration();
    error InvalidTokenAddress();
    error InvalidMinimumBalance();
    error UnauthorizedAccess();
    
    constructor(address _fiboToken, address _orioToken) {
        require(_fiboToken != address(0) && _orioToken != address(0), "Invalid token addresses");
        
        FIBO_TOKEN = _fiboToken;
        ORIO_TOKEN = _orioToken;
        
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _setupRole(ADMIN_ROLE, msg.sender);
        
        // Initialize discount tokens with specific thresholds
        discountTokens[FIBO_TOKEN] = DiscountToken({
            isActive: true,
            minimumBalance: 100000 * 10**18 // 100,000 FIBO
        });
        
        discountTokens[ORIO_TOKEN] = DiscountToken({
            isActive: true,
            minimumBalance: 10000000 * 10**18 // 10,000,000 ORIO
        });
    }
    
    function setFees(
        uint256 newBaseFee,
        uint256 newDiscountedFee
    ) external override onlyRole(ADMIN_ROLE) whenNotPaused nonReentrant {
        if (newBaseFee < newDiscountedFee || newBaseFee > MAX_FEE) 
            revert InvalidFeeConfiguration();
        
        baseFee = newBaseFee;
        discountedFee = newDiscountedFee;
        
        emit FeeUpdated(newBaseFee, newDiscountedFee);
    }
    
    function updateDiscountTokenThreshold(
        address token,
        uint256 minimumBalance
    ) external override onlyRole(ADMIN_ROLE) whenNotPaused nonReentrant {
        if (token != FIBO_TOKEN && token != ORIO_TOKEN) 
            revert InvalidTokenAddress();
        if (minimumBalance == 0) 
            revert InvalidMinimumBalance();
        
        discountTokens[token].minimumBalance = minimumBalance;
        
        emit DiscountTokenUpdated(token, minimumBalance);
    }
    
    function calculateFee(
        address user,
        uint256 amount
    ) external view override returns (uint256) {
        if (amount == 0) return 0;
        
        uint256 feeRate = baseFee;
        if (isEligibleForDiscount(user)) {
            feeRate = discountedFee;
        }
        
        return (amount * feeRate) / 10000;
    }
    
    function isEligibleForDiscount(
        address user
    ) public view override returns (bool) {
        if (user == address(0)) return false;
        
        // Check FIBO balance
        if (discountTokens[FIBO_TOKEN].isActive) {
            uint256 fiboBalance = IERC20(FIBO_TOKEN).balanceOf(user);
            if (fiboBalance >= discountTokens[FIBO_TOKEN].minimumBalance) {
                return true;
            }
        }
        
        // Check ORIO balance
        if (discountTokens[ORIO_TOKEN].isActive) {
            uint256 orioBalance = IERC20(ORIO_TOKEN).balanceOf(user);
            if (orioBalance >= discountTokens[ORIO_TOKEN].minimumBalance) {
                return true;
            }
        }
        
        return false;
    }

    // Emergency functions
    function togglePause() external onlyRole(ADMIN_ROLE) {
        if (paused()) {
            _unpause();
        } else {
            _pause();
        }
    }
}