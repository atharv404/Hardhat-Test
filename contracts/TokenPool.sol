// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@layerzerolabs/solidity-examples/contracts/lzApp/NonblockingLzApp.sol";
import "./interfaces/ITokenPool.sol";
import "./interfaces/IFeeManager.sol";

contract TokenPool is ITokenPool, NonblockingLzApp, AccessControl, Pausable, ReentrancyGuard {
    bytes32 public constant ADMIN_ROLE = keccak256("ADMIN_ROLE");
    
    address public immutable SUPPORTED_TOKEN_1;
    address public immutable SUPPORTED_TOKEN_2;
    address public immutable feeManager;
    
    uint256 public maxTransactionAmount = 1000000 * 10**6; // 1M USDC/USDT
    
    mapping(address => uint256) private poolBalance;
    mapping(uint16 => mapping(address => bool)) public trustedRemoteAddresses;
    
    error UnsupportedToken();
    error InsufficientPoolBalance();
    error InvalidAmount();
    error InvalidDestination();
    error ZeroAddress();
    error UntrustedRemote();
    error TransferFailed();

    constructor(
        address _feeManager,
        address _endpoint,
        address _token1,
        address _token2
    ) NonblockingLzApp(_endpoint) {
        if (_feeManager == address(0) || _token1 == address(0)) revert ZeroAddress();
        
        feeManager = _feeManager;
        SUPPORTED_TOKEN_1 = _token1;
        SUPPORTED_TOKEN_2 = _token2;
        
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(ADMIN_ROLE, msg.sender);
    }
    
    function addLiquidity(
        address token,
        uint256 amount
    ) external onlyRole(ADMIN_ROLE) whenNotPaused nonReentrant {
        if (!_isTokenSupported(token)) revert UnsupportedToken();
        if (amount == 0) revert InvalidAmount();
        
        poolBalance[token] += amount;
        bool success = IERC20(token).transferFrom(msg.sender, address(this), amount);
        if (!success) revert TransferFailed();
        
        emit LiquidityAdded(token, amount);
    }
    
    function removeLiquidity(
        address token,
        uint256 amount
    ) external onlyRole(ADMIN_ROLE) whenNotPaused nonReentrant {
        if (!_isTokenSupported(token)) revert UnsupportedToken();
        if (amount == 0) revert InvalidAmount();
        if (poolBalance[token] < amount) revert InsufficientPoolBalance();
        
        poolBalance[token] -= amount;
        bool success = IERC20(token).transfer(msg.sender, amount);
        if (!success) revert TransferFailed();
        
        emit LiquidityRemoved(token, amount);
    }
    
    function initiateSwap(
        address token,
        uint256 amount,
        uint16 destinationChain,
        address recipient
    ) external payable override whenNotPaused nonReentrant {
        if (!_isTokenSupported(token)) revert UnsupportedToken();
        if (amount == 0 || amount > maxTransactionAmount) revert InvalidAmount();
        if (recipient == address(0)) revert InvalidDestination();
        
        uint256 fee = IFeeManager(feeManager).calculateFee(msg.sender, amount);
        uint256 netAmount = amount - fee;
        
        bool success = IERC20(token).transferFrom(msg.sender, address(this), amount);
        if (!success) revert TransferFailed();
        
        IFeeManager(feeManager).processFee(token, fee);
        
        bytes memory payload = abi.encode(token, netAmount, recipient);
        _lzSend(
            destinationChain,
            payload,
            payable(msg.sender),
            address(0),
            bytes(""),
            msg.value
        );
        
        emit SwapInitiated(token, amount, destinationChain, recipient, fee);
    }
    
    function _nonblockingLzReceive(
        uint16 _srcChainId,
        bytes memory _srcAddress,
        uint64,
        bytes memory _payload
    ) internal override {
        address srcAddr = abi.decode(_srcAddress, (address));
        if (!trustedRemoteAddresses[_srcChainId][srcAddr]) revert UntrustedRemote();

        
        (address token, uint256 amount, address recipient) = abi.decode(
            _payload,
            (address, uint256, address)
        );
        
        if (!_isTokenSupported(token)) revert UnsupportedToken();
        if (poolBalance[token] < amount) revert InsufficientPoolBalance();
        
        poolBalance[token] -= amount;
        bool success = IERC20(token).transfer(recipient, amount);
        if (!success) revert TransferFailed();
        
        emit SwapCompleted(token, amount, recipient);
    }
    
    function setTrustedRemote(
    uint16 _remoteChainId,
    address _remoteAddress,
    bool _isTrusted
) external onlyRole(ADMIN_ROLE) whenNotPaused {
    if (_remoteAddress == address(0)) revert ZeroAddress();
    
    trustedRemoteAddresses[_remoteChainId][_remoteAddress] = _isTrusted;
    }
    
    function getPoolBalance(
        address token
    ) external view override returns (uint256) {
        return poolBalance[token];
    }
    
    function processIncomingSwap(
        address token,
        uint256 amount,
        address recipient
    ) external override {
        revert("Direct swaps not supported - use LayerZero");
    }
    
    function setMaxTransactionAmount(
        uint256 newAmount
    ) external onlyRole(ADMIN_ROLE) whenNotPaused {
        if (newAmount == 0) revert InvalidAmount();
        
        maxTransactionAmount = newAmount;
        emit MaxTransactionAmountUpdated(newAmount);
    }
    
    function togglePause() external onlyRole(ADMIN_ROLE) {
        paused() ? _unpause() : _pause();
    }
    
    function _isTokenSupported(address token) internal view returns (bool) {
        return token == SUPPORTED_TOKEN_1 || 
               (SUPPORTED_TOKEN_2 != address(0) && token == SUPPORTED_TOKEN_2);
    }
}