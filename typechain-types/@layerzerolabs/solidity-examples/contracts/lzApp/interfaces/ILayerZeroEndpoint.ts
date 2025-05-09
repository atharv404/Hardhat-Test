/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../../common";

export interface ILayerZeroEndpointInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "estimateFees"
      | "forceResumeReceive"
      | "getChainId"
      | "getConfig"
      | "getInboundNonce"
      | "getOutboundNonce"
      | "getReceiveLibraryAddress"
      | "getReceiveVersion"
      | "getSendLibraryAddress"
      | "getSendVersion"
      | "hasStoredPayload"
      | "isReceivingPayload"
      | "isSendingPayload"
      | "receivePayload"
      | "retryPayload"
      | "send"
      | "setConfig"
      | "setReceiveVersion"
      | "setSendVersion"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "estimateFees",
    values: [BigNumberish, AddressLike, BytesLike, boolean, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "forceResumeReceive",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getChainId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getConfig",
    values: [BigNumberish, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getInboundNonce",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getOutboundNonce",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceiveLibraryAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceiveVersion",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSendLibraryAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSendVersion",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasStoredPayload",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isReceivingPayload",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isSendingPayload",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receivePayload",
    values: [
      BigNumberish,
      BytesLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "retryPayload",
    values: [BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [
      BigNumberish,
      BytesLike,
      BytesLike,
      AddressLike,
      AddressLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setReceiveVersion",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSendVersion",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "estimateFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forceResumeReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getChainId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getInboundNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOutboundNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceiveLibraryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReceiveVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSendLibraryAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSendVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasStoredPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isReceivingPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isSendingPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receivePayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retryPayload",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setReceiveVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSendVersion",
    data: BytesLike
  ): Result;
}

export interface ILayerZeroEndpoint extends BaseContract {
  connect(runner?: ContractRunner | null): ILayerZeroEndpoint;
  waitForDeployment(): Promise<this>;

  interface: ILayerZeroEndpointInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  estimateFees: TypedContractMethod<
    [
      _dstChainId: BigNumberish,
      _userApplication: AddressLike,
      _payload: BytesLike,
      _payInZRO: boolean,
      _adapterParam: BytesLike
    ],
    [[bigint, bigint] & { nativeFee: bigint; zroFee: bigint }],
    "view"
  >;

  forceResumeReceive: TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [void],
    "nonpayable"
  >;

  getChainId: TypedContractMethod<[], [bigint], "view">;

  getConfig: TypedContractMethod<
    [
      _version: BigNumberish,
      _chainId: BigNumberish,
      _userApplication: AddressLike,
      _configType: BigNumberish
    ],
    [string],
    "view"
  >;

  getInboundNonce: TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [bigint],
    "view"
  >;

  getOutboundNonce: TypedContractMethod<
    [_dstChainId: BigNumberish, _srcAddress: AddressLike],
    [bigint],
    "view"
  >;

  getReceiveLibraryAddress: TypedContractMethod<
    [_userApplication: AddressLike],
    [string],
    "view"
  >;

  getReceiveVersion: TypedContractMethod<
    [_userApplication: AddressLike],
    [bigint],
    "view"
  >;

  getSendLibraryAddress: TypedContractMethod<
    [_userApplication: AddressLike],
    [string],
    "view"
  >;

  getSendVersion: TypedContractMethod<
    [_userApplication: AddressLike],
    [bigint],
    "view"
  >;

  hasStoredPayload: TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [boolean],
    "view"
  >;

  isReceivingPayload: TypedContractMethod<[], [boolean], "view">;

  isSendingPayload: TypedContractMethod<[], [boolean], "view">;

  receivePayload: TypedContractMethod<
    [
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _dstAddress: AddressLike,
      _nonce: BigNumberish,
      _gasLimit: BigNumberish,
      _payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  retryPayload: TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike, _payload: BytesLike],
    [void],
    "nonpayable"
  >;

  send: TypedContractMethod<
    [
      _dstChainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      _refundAddress: AddressLike,
      _zroPaymentAddress: AddressLike,
      _adapterParams: BytesLike
    ],
    [void],
    "payable"
  >;

  setConfig: TypedContractMethod<
    [
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  setReceiveVersion: TypedContractMethod<
    [_version: BigNumberish],
    [void],
    "nonpayable"
  >;

  setSendVersion: TypedContractMethod<
    [_version: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "estimateFees"
  ): TypedContractMethod<
    [
      _dstChainId: BigNumberish,
      _userApplication: AddressLike,
      _payload: BytesLike,
      _payInZRO: boolean,
      _adapterParam: BytesLike
    ],
    [[bigint, bigint] & { nativeFee: bigint; zroFee: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "forceResumeReceive"
  ): TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getChainId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getConfig"
  ): TypedContractMethod<
    [
      _version: BigNumberish,
      _chainId: BigNumberish,
      _userApplication: AddressLike,
      _configType: BigNumberish
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getInboundNonce"
  ): TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getOutboundNonce"
  ): TypedContractMethod<
    [_dstChainId: BigNumberish, _srcAddress: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getReceiveLibraryAddress"
  ): TypedContractMethod<[_userApplication: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getReceiveVersion"
  ): TypedContractMethod<[_userApplication: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getSendLibraryAddress"
  ): TypedContractMethod<[_userApplication: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "getSendVersion"
  ): TypedContractMethod<[_userApplication: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "hasStoredPayload"
  ): TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isReceivingPayload"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isSendingPayload"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "receivePayload"
  ): TypedContractMethod<
    [
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _dstAddress: AddressLike,
      _nonce: BigNumberish,
      _gasLimit: BigNumberish,
      _payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "retryPayload"
  ): TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike, _payload: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "send"
  ): TypedContractMethod<
    [
      _dstChainId: BigNumberish,
      _destination: BytesLike,
      _payload: BytesLike,
      _refundAddress: AddressLike,
      _zroPaymentAddress: AddressLike,
      _adapterParams: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setConfig"
  ): TypedContractMethod<
    [
      _version: BigNumberish,
      _chainId: BigNumberish,
      _configType: BigNumberish,
      _config: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setReceiveVersion"
  ): TypedContractMethod<[_version: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setSendVersion"
  ): TypedContractMethod<[_version: BigNumberish], [void], "nonpayable">;

  filters: {};
}
