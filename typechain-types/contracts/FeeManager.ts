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
} from "../common";

export interface FeeManagerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ADMIN_ROLE"
      | "DEFAULT_ADMIN_ROLE"
      | "FIBO_TOKEN"
      | "ORIO_TOKEN"
      | "baseFee"
      | "calculateFee"
      | "collectedFees"
      | "discountTokens"
      | "discountedFee"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "isEligibleForDiscount"
      | "paused"
      | "processFee"
      | "renounceRole"
      | "revokeRole"
      | "setFees"
      | "supportsInterface"
      | "togglePause"
      | "updateDiscountTokenThreshold"
      | "withdrawFees"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DiscountTokenUpdated"
      | "FeeCollected"
      | "FeeWithdrawn"
      | "FeesUpdated"
      | "Paused"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
      | "Unpaused"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FIBO_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ORIO_TOKEN",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "baseFee", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculateFee",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collectedFees",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "discountTokens",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "discountedFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isEligibleForDiscount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "processFee",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFees",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "togglePause",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateDiscountTokenThreshold",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFees",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ADMIN_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "FIBO_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ORIO_TOKEN", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "baseFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectedFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "discountTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "discountedFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isEligibleForDiscount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "processFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "togglePause",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDiscountTokenThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFees",
    data: BytesLike
  ): Result;
}

export namespace DiscountTokenUpdatedEvent {
  export type InputTuple = [token: AddressLike, minimumBalance: BigNumberish];
  export type OutputTuple = [token: string, minimumBalance: bigint];
  export interface OutputObject {
    token: string;
    minimumBalance: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeeCollectedEvent {
  export type InputTuple = [token: AddressLike, amount: BigNumberish];
  export type OutputTuple = [token: string, amount: bigint];
  export interface OutputObject {
    token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeeWithdrawnEvent {
  export type InputTuple = [
    token: AddressLike,
    recipient: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [token: string, recipient: string, amount: bigint];
  export interface OutputObject {
    token: string;
    recipient: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FeesUpdatedEvent {
  export type InputTuple = [
    newBaseFee: BigNumberish,
    newDiscountedFee: BigNumberish
  ];
  export type OutputTuple = [newBaseFee: bigint, newDiscountedFee: bigint];
  export interface OutputObject {
    newBaseFee: bigint;
    newDiscountedFee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnpausedEvent {
  export type InputTuple = [account: AddressLike];
  export type OutputTuple = [account: string];
  export interface OutputObject {
    account: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface FeeManager extends BaseContract {
  connect(runner?: ContractRunner | null): FeeManager;
  waitForDeployment(): Promise<this>;

  interface: FeeManagerInterface;

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

  ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  FIBO_TOKEN: TypedContractMethod<[], [string], "view">;

  ORIO_TOKEN: TypedContractMethod<[], [string], "view">;

  baseFee: TypedContractMethod<[], [bigint], "view">;

  calculateFee: TypedContractMethod<
    [user: AddressLike, amount: BigNumberish],
    [bigint],
    "view"
  >;

  collectedFees: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  discountTokens: TypedContractMethod<
    [arg0: AddressLike],
    [[boolean, bigint] & { isActive: boolean; minimumBalance: bigint }],
    "view"
  >;

  discountedFee: TypedContractMethod<[], [bigint], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  isEligibleForDiscount: TypedContractMethod<
    [user: AddressLike],
    [boolean],
    "view"
  >;

  paused: TypedContractMethod<[], [boolean], "view">;

  processFee: TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  setFees: TypedContractMethod<
    [newBaseFee: BigNumberish, newDiscountedFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  togglePause: TypedContractMethod<[], [void], "nonpayable">;

  updateDiscountTokenThreshold: TypedContractMethod<
    [token: AddressLike, newThreshold: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawFees: TypedContractMethod<
    [token: AddressLike, recipient: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "FIBO_TOKEN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ORIO_TOKEN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "baseFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "calculateFee"
  ): TypedContractMethod<
    [user: AddressLike, amount: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "collectedFees"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "discountTokens"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [[boolean, bigint] & { isActive: boolean; minimumBalance: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "discountedFee"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isEligibleForDiscount"
  ): TypedContractMethod<[user: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "paused"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "processFee"
  ): TypedContractMethod<
    [token: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFees"
  ): TypedContractMethod<
    [newBaseFee: BigNumberish, newDiscountedFee: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "togglePause"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateDiscountTokenThreshold"
  ): TypedContractMethod<
    [token: AddressLike, newThreshold: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawFees"
  ): TypedContractMethod<
    [token: AddressLike, recipient: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "DiscountTokenUpdated"
  ): TypedContractEvent<
    DiscountTokenUpdatedEvent.InputTuple,
    DiscountTokenUpdatedEvent.OutputTuple,
    DiscountTokenUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "FeeCollected"
  ): TypedContractEvent<
    FeeCollectedEvent.InputTuple,
    FeeCollectedEvent.OutputTuple,
    FeeCollectedEvent.OutputObject
  >;
  getEvent(
    key: "FeeWithdrawn"
  ): TypedContractEvent<
    FeeWithdrawnEvent.InputTuple,
    FeeWithdrawnEvent.OutputTuple,
    FeeWithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "FeesUpdated"
  ): TypedContractEvent<
    FeesUpdatedEvent.InputTuple,
    FeesUpdatedEvent.OutputTuple,
    FeesUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Paused"
  ): TypedContractEvent<
    PausedEvent.InputTuple,
    PausedEvent.OutputTuple,
    PausedEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;
  getEvent(
    key: "Unpaused"
  ): TypedContractEvent<
    UnpausedEvent.InputTuple,
    UnpausedEvent.OutputTuple,
    UnpausedEvent.OutputObject
  >;

  filters: {
    "DiscountTokenUpdated(address,uint256)": TypedContractEvent<
      DiscountTokenUpdatedEvent.InputTuple,
      DiscountTokenUpdatedEvent.OutputTuple,
      DiscountTokenUpdatedEvent.OutputObject
    >;
    DiscountTokenUpdated: TypedContractEvent<
      DiscountTokenUpdatedEvent.InputTuple,
      DiscountTokenUpdatedEvent.OutputTuple,
      DiscountTokenUpdatedEvent.OutputObject
    >;

    "FeeCollected(address,uint256)": TypedContractEvent<
      FeeCollectedEvent.InputTuple,
      FeeCollectedEvent.OutputTuple,
      FeeCollectedEvent.OutputObject
    >;
    FeeCollected: TypedContractEvent<
      FeeCollectedEvent.InputTuple,
      FeeCollectedEvent.OutputTuple,
      FeeCollectedEvent.OutputObject
    >;

    "FeeWithdrawn(address,address,uint256)": TypedContractEvent<
      FeeWithdrawnEvent.InputTuple,
      FeeWithdrawnEvent.OutputTuple,
      FeeWithdrawnEvent.OutputObject
    >;
    FeeWithdrawn: TypedContractEvent<
      FeeWithdrawnEvent.InputTuple,
      FeeWithdrawnEvent.OutputTuple,
      FeeWithdrawnEvent.OutputObject
    >;

    "FeesUpdated(uint256,uint256)": TypedContractEvent<
      FeesUpdatedEvent.InputTuple,
      FeesUpdatedEvent.OutputTuple,
      FeesUpdatedEvent.OutputObject
    >;
    FeesUpdated: TypedContractEvent<
      FeesUpdatedEvent.InputTuple,
      FeesUpdatedEvent.OutputTuple,
      FeesUpdatedEvent.OutputObject
    >;

    "Paused(address)": TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;
    Paused: TypedContractEvent<
      PausedEvent.InputTuple,
      PausedEvent.OutputTuple,
      PausedEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;

    "Unpaused(address)": TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
    Unpaused: TypedContractEvent<
      UnpausedEvent.InputTuple,
      UnpausedEvent.OutputTuple,
      UnpausedEvent.OutputObject
    >;
  };
}
