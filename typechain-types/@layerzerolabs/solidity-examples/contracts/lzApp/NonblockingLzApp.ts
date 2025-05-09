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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export interface NonblockingLzAppInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_PAYLOAD_SIZE_LIMIT"
      | "failedMessages"
      | "forceResumeReceive"
      | "getConfig"
      | "getTrustedRemoteAddress"
      | "isTrustedRemote"
      | "lzEndpoint"
      | "lzReceive"
      | "minDstGasLookup"
      | "nonblockingLzReceive"
      | "owner"
      | "payloadSizeLimitLookup"
      | "precrime"
      | "renounceOwnership"
      | "retryMessage"
      | "setConfig"
      | "setMinDstGas"
      | "setPayloadSizeLimit"
      | "setPrecrime"
      | "setReceiveVersion"
      | "setSendVersion"
      | "setTrustedRemote"
      | "setTrustedRemoteAddress"
      | "transferOwnership"
      | "trustedRemoteLookup"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "MessageFailed"
      | "OwnershipTransferred"
      | "RetryMessageSuccess"
      | "SetMinDstGas"
      | "SetPrecrime"
      | "SetTrustedRemote"
      | "SetTrustedRemoteAddress"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_PAYLOAD_SIZE_LIMIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "failedMessages",
    values: [BigNumberish, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "forceResumeReceive",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getConfig",
    values: [BigNumberish, BigNumberish, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getTrustedRemoteAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedRemote",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "lzEndpoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lzReceive",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "minDstGasLookup",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nonblockingLzReceive",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "payloadSizeLimitLookup",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "precrime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "retryMessage",
    values: [BigNumberish, BytesLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setConfig",
    values: [BigNumberish, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinDstGas",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPayloadSizeLimit",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPrecrime",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setReceiveVersion",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setSendVersion",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustedRemote",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustedRemoteAddress",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "trustedRemoteLookup",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_PAYLOAD_SIZE_LIMIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failedMessages",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forceResumeReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTrustedRemoteAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedRemote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lzEndpoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lzReceive", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "minDstGasLookup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "nonblockingLzReceive",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "payloadSizeLimitLookup",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "precrime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retryMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMinDstGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPayloadSizeLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPrecrime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setReceiveVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setSendVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedRemote",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedRemoteAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "trustedRemoteLookup",
    data: BytesLike
  ): Result;
}

export namespace MessageFailedEvent {
  export type InputTuple = [
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _nonce: BigNumberish,
    _payload: BytesLike,
    _reason: BytesLike
  ];
  export type OutputTuple = [
    _srcChainId: bigint,
    _srcAddress: string,
    _nonce: bigint,
    _payload: string,
    _reason: string
  ];
  export interface OutputObject {
    _srcChainId: bigint;
    _srcAddress: string;
    _nonce: bigint;
    _payload: string;
    _reason: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RetryMessageSuccessEvent {
  export type InputTuple = [
    _srcChainId: BigNumberish,
    _srcAddress: BytesLike,
    _nonce: BigNumberish,
    _payloadHash: BytesLike
  ];
  export type OutputTuple = [
    _srcChainId: bigint,
    _srcAddress: string,
    _nonce: bigint,
    _payloadHash: string
  ];
  export interface OutputObject {
    _srcChainId: bigint;
    _srcAddress: string;
    _nonce: bigint;
    _payloadHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetMinDstGasEvent {
  export type InputTuple = [
    _dstChainId: BigNumberish,
    _type: BigNumberish,
    _minDstGas: BigNumberish
  ];
  export type OutputTuple = [
    _dstChainId: bigint,
    _type: bigint,
    _minDstGas: bigint
  ];
  export interface OutputObject {
    _dstChainId: bigint;
    _type: bigint;
    _minDstGas: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetPrecrimeEvent {
  export type InputTuple = [precrime: AddressLike];
  export type OutputTuple = [precrime: string];
  export interface OutputObject {
    precrime: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetTrustedRemoteEvent {
  export type InputTuple = [_remoteChainId: BigNumberish, _path: BytesLike];
  export type OutputTuple = [_remoteChainId: bigint, _path: string];
  export interface OutputObject {
    _remoteChainId: bigint;
    _path: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetTrustedRemoteAddressEvent {
  export type InputTuple = [
    _remoteChainId: BigNumberish,
    _remoteAddress: BytesLike
  ];
  export type OutputTuple = [_remoteChainId: bigint, _remoteAddress: string];
  export interface OutputObject {
    _remoteChainId: bigint;
    _remoteAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface NonblockingLzApp extends BaseContract {
  connect(runner?: ContractRunner | null): NonblockingLzApp;
  waitForDeployment(): Promise<this>;

  interface: NonblockingLzAppInterface;

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

  DEFAULT_PAYLOAD_SIZE_LIMIT: TypedContractMethod<[], [bigint], "view">;

  failedMessages: TypedContractMethod<
    [arg0: BigNumberish, arg1: BytesLike, arg2: BigNumberish],
    [string],
    "view"
  >;

  forceResumeReceive: TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [void],
    "nonpayable"
  >;

  getConfig: TypedContractMethod<
    [
      _version: BigNumberish,
      _chainId: BigNumberish,
      arg2: AddressLike,
      _configType: BigNumberish
    ],
    [string],
    "view"
  >;

  getTrustedRemoteAddress: TypedContractMethod<
    [_remoteChainId: BigNumberish],
    [string],
    "view"
  >;

  isTrustedRemote: TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [boolean],
    "view"
  >;

  lzEndpoint: TypedContractMethod<[], [string], "view">;

  lzReceive: TypedContractMethod<
    [
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  minDstGasLookup: TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;

  nonblockingLzReceive: TypedContractMethod<
    [
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  payloadSizeLimitLookup: TypedContractMethod<
    [arg0: BigNumberish],
    [bigint],
    "view"
  >;

  precrime: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  retryMessage: TypedContractMethod<
    [
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike
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

  setMinDstGas: TypedContractMethod<
    [
      _dstChainId: BigNumberish,
      _packetType: BigNumberish,
      _minGas: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  setPayloadSizeLimit: TypedContractMethod<
    [_dstChainId: BigNumberish, _size: BigNumberish],
    [void],
    "nonpayable"
  >;

  setPrecrime: TypedContractMethod<
    [_precrime: AddressLike],
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

  setTrustedRemote: TypedContractMethod<
    [_remoteChainId: BigNumberish, _path: BytesLike],
    [void],
    "nonpayable"
  >;

  setTrustedRemoteAddress: TypedContractMethod<
    [_remoteChainId: BigNumberish, _remoteAddress: BytesLike],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  trustedRemoteLookup: TypedContractMethod<
    [arg0: BigNumberish],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_PAYLOAD_SIZE_LIMIT"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "failedMessages"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BytesLike, arg2: BigNumberish],
    [string],
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
    nameOrSignature: "getConfig"
  ): TypedContractMethod<
    [
      _version: BigNumberish,
      _chainId: BigNumberish,
      arg2: AddressLike,
      _configType: BigNumberish
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getTrustedRemoteAddress"
  ): TypedContractMethod<[_remoteChainId: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "isTrustedRemote"
  ): TypedContractMethod<
    [_srcChainId: BigNumberish, _srcAddress: BytesLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "lzEndpoint"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "lzReceive"
  ): TypedContractMethod<
    [
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "minDstGasLookup"
  ): TypedContractMethod<
    [arg0: BigNumberish, arg1: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "nonblockingLzReceive"
  ): TypedContractMethod<
    [
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "payloadSizeLimitLookup"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "precrime"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "retryMessage"
  ): TypedContractMethod<
    [
      _srcChainId: BigNumberish,
      _srcAddress: BytesLike,
      _nonce: BigNumberish,
      _payload: BytesLike
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
    nameOrSignature: "setMinDstGas"
  ): TypedContractMethod<
    [
      _dstChainId: BigNumberish,
      _packetType: BigNumberish,
      _minGas: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPayloadSizeLimit"
  ): TypedContractMethod<
    [_dstChainId: BigNumberish, _size: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setPrecrime"
  ): TypedContractMethod<[_precrime: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setReceiveVersion"
  ): TypedContractMethod<[_version: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setSendVersion"
  ): TypedContractMethod<[_version: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setTrustedRemote"
  ): TypedContractMethod<
    [_remoteChainId: BigNumberish, _path: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTrustedRemoteAddress"
  ): TypedContractMethod<
    [_remoteChainId: BigNumberish, _remoteAddress: BytesLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "trustedRemoteLookup"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  getEvent(
    key: "MessageFailed"
  ): TypedContractEvent<
    MessageFailedEvent.InputTuple,
    MessageFailedEvent.OutputTuple,
    MessageFailedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RetryMessageSuccess"
  ): TypedContractEvent<
    RetryMessageSuccessEvent.InputTuple,
    RetryMessageSuccessEvent.OutputTuple,
    RetryMessageSuccessEvent.OutputObject
  >;
  getEvent(
    key: "SetMinDstGas"
  ): TypedContractEvent<
    SetMinDstGasEvent.InputTuple,
    SetMinDstGasEvent.OutputTuple,
    SetMinDstGasEvent.OutputObject
  >;
  getEvent(
    key: "SetPrecrime"
  ): TypedContractEvent<
    SetPrecrimeEvent.InputTuple,
    SetPrecrimeEvent.OutputTuple,
    SetPrecrimeEvent.OutputObject
  >;
  getEvent(
    key: "SetTrustedRemote"
  ): TypedContractEvent<
    SetTrustedRemoteEvent.InputTuple,
    SetTrustedRemoteEvent.OutputTuple,
    SetTrustedRemoteEvent.OutputObject
  >;
  getEvent(
    key: "SetTrustedRemoteAddress"
  ): TypedContractEvent<
    SetTrustedRemoteAddressEvent.InputTuple,
    SetTrustedRemoteAddressEvent.OutputTuple,
    SetTrustedRemoteAddressEvent.OutputObject
  >;

  filters: {
    "MessageFailed(uint16,bytes,uint64,bytes,bytes)": TypedContractEvent<
      MessageFailedEvent.InputTuple,
      MessageFailedEvent.OutputTuple,
      MessageFailedEvent.OutputObject
    >;
    MessageFailed: TypedContractEvent<
      MessageFailedEvent.InputTuple,
      MessageFailedEvent.OutputTuple,
      MessageFailedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "RetryMessageSuccess(uint16,bytes,uint64,bytes32)": TypedContractEvent<
      RetryMessageSuccessEvent.InputTuple,
      RetryMessageSuccessEvent.OutputTuple,
      RetryMessageSuccessEvent.OutputObject
    >;
    RetryMessageSuccess: TypedContractEvent<
      RetryMessageSuccessEvent.InputTuple,
      RetryMessageSuccessEvent.OutputTuple,
      RetryMessageSuccessEvent.OutputObject
    >;

    "SetMinDstGas(uint16,uint16,uint256)": TypedContractEvent<
      SetMinDstGasEvent.InputTuple,
      SetMinDstGasEvent.OutputTuple,
      SetMinDstGasEvent.OutputObject
    >;
    SetMinDstGas: TypedContractEvent<
      SetMinDstGasEvent.InputTuple,
      SetMinDstGasEvent.OutputTuple,
      SetMinDstGasEvent.OutputObject
    >;

    "SetPrecrime(address)": TypedContractEvent<
      SetPrecrimeEvent.InputTuple,
      SetPrecrimeEvent.OutputTuple,
      SetPrecrimeEvent.OutputObject
    >;
    SetPrecrime: TypedContractEvent<
      SetPrecrimeEvent.InputTuple,
      SetPrecrimeEvent.OutputTuple,
      SetPrecrimeEvent.OutputObject
    >;

    "SetTrustedRemote(uint16,bytes)": TypedContractEvent<
      SetTrustedRemoteEvent.InputTuple,
      SetTrustedRemoteEvent.OutputTuple,
      SetTrustedRemoteEvent.OutputObject
    >;
    SetTrustedRemote: TypedContractEvent<
      SetTrustedRemoteEvent.InputTuple,
      SetTrustedRemoteEvent.OutputTuple,
      SetTrustedRemoteEvent.OutputObject
    >;

    "SetTrustedRemoteAddress(uint16,bytes)": TypedContractEvent<
      SetTrustedRemoteAddressEvent.InputTuple,
      SetTrustedRemoteAddressEvent.OutputTuple,
      SetTrustedRemoteAddressEvent.OutputObject
    >;
    SetTrustedRemoteAddress: TypedContractEvent<
      SetTrustedRemoteAddressEvent.InputTuple,
      SetTrustedRemoteAddressEvent.OutputTuple,
      SetTrustedRemoteAddressEvent.OutputObject
    >;
  };
}
