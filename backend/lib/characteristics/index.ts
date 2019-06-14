import version from "./version";
import stateChange from "./stateChange";
import firmwareWriteAck from "./firmwareWriteAck";
import mapRequest from "./mapRequest";
import hotwaterSteamSettings from "./hotwaterSteamSettings";
import shotDesc from "./shotDesc";
import shotValue from "./shotValue";
import shotDescHeader from "./shotDescHeader";
import shotFrame from "./shotFrame";
import waterLevel from "./waterLevel";
import calibrate from "./calibrate";

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
    name: "firmware write ack",
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
    name: "shot description",
    parse: shotDesc,
    status: Status.Done
  },
  a00d: {
    uuid: "a00d",
    name: "shot value", // TODO Shot Value
    parse: shotValue,
    status: Status.Done
  },
  a00e: {
    uuid: "a00e",
    name: "state change 2???",
    parse: stateChange,
    status: Status.Done
  },
  a00f: {
    uuid: "a00f",
    name: "shot descripton header",
    parse: shotDescHeader,
    status: Status.Done
  },
  a010: {
    uuid: "a010",
    name: "shot frame",
    parse: shotFrame,
    status: Status.Done
  },
  a011: {
    uuid: "a011",
    name: "water level",
    parse: waterLevel,
    status: Status.Done
  },
  a012: {
    uuid: "a012",
    name: "calibrate",
    parse: calibrate,
    status: Status.Done
  }
};

export default characteristics;
