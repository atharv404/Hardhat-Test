// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@layerzerolabs/solidity-examples/contracts/lzApp/NonblockingLzApp.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

abstract contract LayerZeroAdapter is NonblockingLzApp, ReentrancyGuard {
    // Custom errors
    error InvalidDestination();
    error MessageFailed();
    error InvalidPayload();
    
    // Events
    event MessageSent(uint16 destinationChainId, bytes payload);
    event MessageReceived(uint16 sourceChainId, bytes sourceAddress);
    
    constructor(address _lzEndpoint) NonblockingLzApp(_lzEndpoint) {}
    
    function _sendMessage(
        uint16 _dstChainId,
        bytes memory _payload
    ) internal nonReentrant {
        if (_payload.length == 0) revert InvalidPayload();
        
        // Get the fees for sending a message
        (uint256 messageFee,) = lzEndpoint.estimateFees(
            _dstChainId,
            address(this),
            _payload,
            false,
            bytes("")
        );
        
        // Send the message
        _lzSend(
            _dstChainId,
            _payload,
            payable(msg.sender),
            address(0x0),
            bytes(""),
            messageFee
        );
        
        emit MessageSent(_dstChainId, _payload);
    }
    
    function _nonblockingLzReceive(
        uint16 _srcChainId,
        bytes memory _srcAddress,
        uint64 _nonce,
        bytes memory _payload
    ) internal virtual override;
}