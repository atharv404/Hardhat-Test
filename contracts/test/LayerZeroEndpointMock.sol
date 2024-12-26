// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@layerzerolabs/solidity-examples/contracts/lzApp/interfaces/ILayerZeroEndpoint.sol";

contract LayerZeroEndpointMock is ILayerZeroEndpoint {
    mapping(address => uint16) public srcChainId;
    mapping(address => bytes) public srcAddress;
    uint16 public dstChainId;

    function send(
        uint16 _dstChainId,
        bytes calldata _destination,
        bytes calldata _payload,
        address payable _refundAddress,
        address _zroPaymentAddress,
        bytes calldata _adapterParams
    ) external payable override {
        dstChainId = _dstChainId;
    }

    function receivePayload(
        uint16 _srcChainId,
        bytes memory _srcAddress,
        address _dstAddress,
        uint64 _nonce,
        uint _gasLimit,
        bytes memory _payload
    ) external {
        srcChainId[_dstAddress] = _srcChainId;
        srcAddress[_dstAddress] = _srcAddress;
    }

    function estimateFees(
        uint16 _dstChainId,
        address _userApplication,
        bytes memory _payload,
        bool _payInZRO,
        bytes memory _adapterParam
    ) external view override returns (uint nativeFee, uint zroFee) {
        return (0.01 ether, 0);
    }

    function getConfig(
        uint16 _version,
        uint16 _chainId,
        address _userApplication,
        uint _configType
    ) external pure override returns (bytes memory) {
        return "";
    }

    function getSendVersion(
        address _userApplication
    ) external pure override returns (uint16) {
        return 1;
    }

    function getReceiveVersion(
        address _userApplication
    ) external pure override returns (uint16) {
        return 1;
    }

    function setConfig(
        uint16 _version,
        uint16 _chainId,
        uint _configType,
        bytes memory _config
    ) external override {}

    function setSendVersion(uint16 _version) external override {}

    function setReceiveVersion(uint16 _version) external override {}

    function forceResumeReceive(uint16 _srcChainId, bytes calldata _srcAddress) external override {}
}