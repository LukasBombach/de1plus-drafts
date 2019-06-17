import { Characteristic, Status, Property } from "./actor";
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

const characteristics: Characteristics = {
  version: {
    uuid: "a001",
    name: "version",
    parse: version,
    properties: [Property.READ, Property.NOTIFY],
    status: Status.Done
  },
  state: {
    uuid: "a002",
    name: "state change",
    parse: stateChange,
    properties: [Property.READ, Property.WRITE, Property.NOTIFY],
    status: Status.Done
  },
  a003: {
    uuid: "a003",
    name: "unknown",
    parse: (buffer: Buffer) => buffer.toString("hex"),
    properties: [Property.READ, Property.WRITE, Property.NOTIFY],
    status: Status.Unknown
  },
  a004: {
    uuid: "a004",
    name: "unknown",
    parse: (buffer: Buffer) => buffer.toString("hex"),
    properties: [Property.READ, Property.NOTIFY],
    status: Status.Unknown
  },
  a005: {
    uuid: "a005",
    name: "unknown",
    parse: (buffer: Buffer) => buffer.toString("hex"),
    properties: [Property.READ, Property.WRITE, Property.NOTIFY],
    status: Status.Unknown
  },
  firmwareWriteAck: {
    uuid: "a006",
    name: "firmware write ack",
    parse: firmwareWriteAck,
    properties: [Property.WRITE, Property.NOTIFY],
    status: Status.Done
  },
  a007: {
    uuid: "a007",
    name: "unknown",
    parse: (buffer: Buffer) => buffer.toString("hex"),
    properties: [Property.WRITE, Property.NOTIFY],
    status: Status.Unknown
  },
  a008: {
    uuid: "a008",
    name: "unknown",
    parse: (buffer: Buffer) => buffer.toString("hex"),
    properties: [Property.WRITE, Property.NOTIFY],
    status: Status.Unknown
  },
  mapRequest: {
    uuid: "a009",
    name: "map request",
    parse: mapRequest,
    properties: [Property.WRITE, Property.NOTIFY],
    status: Status.Done
  },
  a00a: {
    uuid: "a00a",
    name: "unknown",
    parse: (buffer: Buffer) => buffer.toString("hex"),
    properties: [Property.READ, Property.NOTIFY],
    status: Status.Unknown
  },
  hotwaterSteamSettings: {
    uuid: "a00b",
    name: "hot water / steam settings",
    parse: hotwaterSteamSettings,
    properties: [Property.READ, Property.WRITE, Property.NOTIFY],
    status: Status.Done
  },
  shotDesc: {
    uuid: "a00c",
    name: "shot description",
    parse: shotDesc,
    properties: [Property.READ, Property.WRITE, Property.NOTIFY],
    status: Status.Done
  },
  shotValue: {
    uuid: "a00d",
    name: "shot value",
    parse: shotValue,
    properties: [Property.READ, Property.NOTIFY],
    status: Status.Done
  },
  state2: {
    uuid: "a00e",
    name: "state change 2???",
    parse: stateChange,
    properties: [Property.READ, Property.NOTIFY],
    status: Status.Done
  },
  shotDescHeader: {
    uuid: "a00f",
    name: "shot descripton header",
    parse: shotDescHeader,
    properties: [Property.READ, Property.WRITE, Property.NOTIFY],
    status: Status.Done
  },
  shotFrame: {
    uuid: "a010",
    name: "shot frame",
    parse: shotFrame,
    properties: [Property.READ, Property.WRITE, Property.NOTIFY],
    status: Status.Done
  },
  waterLevel: {
    uuid: "a011",
    name: "water level",
    parse: waterLevel,
    properties: [Property.READ, Property.WRITE, Property.NOTIFY],
    status: Status.Done
  },
  calibrate: {
    uuid: "a012",
    name: "calibrate",
    parse: calibrate,
    properties: [Property.READ, Property.WRITE, Property.NOTIFY],
    status: Status.Done
  }
};

export default characteristics;
