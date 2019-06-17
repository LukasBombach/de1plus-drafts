export interface Characteristics {
  [uuid: string]: Characteristic;
}

const characteristics: Characteristics = {
  version: {
    uuid: "a001",
    name: "version",
    properties: [Property.READ, Property.NOTIFY]
  },
  state: {
    uuid: "a002",
    name: "state change",
    properties: [Property.READ, Property.WRITE, Property.NOTIFY]
  },
  a003: {
    uuid: "a003",
    name: "unknown",
    properties: [Property.READ, Property.WRITE, Property.NOTIFY]
  },
  a004: {
    uuid: "a004",
    name: "unknown",
    properties: [Property.READ, Property.NOTIFY]
  },
  a005: {
    uuid: "a005",
    name: "unknown",
    properties: [Property.READ, Property.WRITE, Property.NOTIFY]
  },
  firmwareWriteAck: {
    uuid: "a006",
    name: "firmware write ack",
    properties: [Property.WRITE, Property.NOTIFY]
  },
  a007: {
    uuid: "a007",
    name: "unknown",
    properties: [Property.WRITE, Property.NOTIFY]
  },
  a008: {
    uuid: "a008",
    name: "unknown",
    properties: [Property.WRITE, Property.NOTIFY]
  },
  mapRequest: {
    uuid: "a009",
    name: "map request",
    properties: [Property.WRITE, Property.NOTIFY]
  },
  a00a: {
    uuid: "a00a",
    name: "unknown",
    properties: [Property.READ, Property.NOTIFY]
  },
  hotwaterSteamSettings: {
    uuid: "a00b",
    name: "hot water / steam settings",
    properties: [Property.READ, Property.WRITE, Property.NOTIFY]
  },
  shotDesc: {
    uuid: "a00c",
    name: "shot description",
    properties: [Property.READ, Property.WRITE, Property.NOTIFY]
  },
  shotValue: {
    uuid: "a00d",
    name: "shot value",
    properties: [Property.READ, Property.NOTIFY]
  },
  state2: {
    uuid: "a00e",
    name: "state change 2???",
    properties: [Property.READ, Property.NOTIFY]
  },
  shotDescHeader: {
    uuid: "a00f",
    name: "shot descripton header",
    properties: [Property.READ, Property.WRITE, Property.NOTIFY]
  },
  shotFrame: {
    uuid: "a010",
    name: "shot frame",
    properties: [Property.READ, Property.WRITE, Property.NOTIFY]
  },
  waterLevel: {
    uuid: "a011",
    name: "water level",
    properties: [Property.READ, Property.WRITE, Property.NOTIFY]
  },
  calibrate: {
    uuid: "a012",
    name: "calibrate",
    properties: [Property.READ, Property.WRITE, Property.NOTIFY]
  }
};
