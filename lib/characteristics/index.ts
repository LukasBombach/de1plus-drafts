import version from "./version";
import stateChange from "./stateChange";
import firmwareWriteAck from "./firmwareWriteAck";
import mapRequest from "./mapRequest";
import hotwaterSteamSettings from "./hotwaterSteamSettings";

export interface Characteristics {
  [uuid: string]: Characteristic;
}

export interface Characteristic {
  uuid: string;
  name: string;
  parse: Function; // (buffer: Buffer) => parsedBuffer | string;
  status: Status;
}

export interface parsedBuffer {
  [key: string]: string;
}

export enum Status {
  Done,
  Unknown,
  NotImplemented
}

const characteristics: Characteristics = {
  a001: {
    uuid: "a001",
    name: "version",
    parse: version,
    status: Status.Done
  },
  a002: {
    uuid: "a002",
    name: "state change",
    parse: stateChange,
    status: Status.Done
  },
  a003: {
    uuid: "a003",
    name: "unknown",
    parse: (buffer: Buffer) => buffer.toString("hex"),
    status: Status.Unknown
  },
  a004: {
    uuid: "a004",
    name: "unknown",
    parse: (buffer: Buffer) => buffer.toString("hex"),
    status: Status.Unknown
  },
  a005: {
    uuid: "a005",
    name: "unknown",
    parse: (buffer: Buffer) => buffer.toString("hex"),
    status: Status.Unknown
  },
  a006: {
    uuid: "a006",
    name: "unknown",
    parse: firmwareWriteAck,
    status: Status.Done
  },
  a007: {
    uuid: "a007",
    name: "unknown",
    parse: (buffer: Buffer) => buffer.toString("hex"),
    status: Status.Unknown
  },
  a008: {
    uuid: "a008",
    name: "unknown",
    parse: (buffer: Buffer) => buffer.toString("hex"),
    status: Status.Unknown
  },
  a009: {
    uuid: "a009",
    name: "map request",
    parse: mapRequest,
    status: Status.Done
  },
  a00a: {
    uuid: "a00a",
    name: "unknown",
    parse: (buffer: Buffer) => buffer.toString("hex"),
    status: Status.Unknown
  },
  a00b: {
    uuid: "a00b",
    name: "hot water / steam settings",
    parse: hotwaterSteamSettings,
    status: Status.Done
  },
  a00c: {
    uuid: "a00c",
    name: "unknown", // TODO espresso frame settings / shot desc / shot data
    parse: (buffer: Buffer) => buffer.toString("hex"),
    status: Status.NotImplemented
  },
  a00d: {
    uuid: "a00d",
    name: "unknown", // TODO Shot Value
    parse: (buffer: Buffer) => buffer.toString("hex"),
    status: Status.NotImplemented
  },
  a00e: {
    uuid: "a00e",
    name: "unknown", // TODO machine state? Sleep?
    parse: (buffer: Buffer) => buffer.toString("hex"),
    status: Status.NotImplemented
  },
  a00f: {
    uuid: "a00f",
    name: "unknown", // TODO shot desc header
    parse: (buffer: Buffer) => buffer.toString("hex"),
    status: Status.NotImplemented
  },
  a010: {
    uuid: "a010",
    name: "unknown", // TODO shot frame
    parse: (buffer: Buffer) => buffer.toString("hex"),
    status: Status.NotImplemented
  },
  a011: {
    uuid: "a011",
    name: "water level",
    parse: (buffer: Buffer) => buffer.toString("hex"),
    status: Status.NotImplemented
  },
  a012: {
    uuid: "a012",
    name: "unknown", // TODO calibration notifications
    parse: (buffer: Buffer) => buffer.toString("hex"),
    status: Status.NotImplemented
  }
};

export default characteristics;
