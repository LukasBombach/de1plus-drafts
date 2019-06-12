module.exports = {
  a001: {
    uuid: "a001",
    name: "version",
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a002: {
    uuid: "a002",
    name: "unknown", // TODO state change
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a003: {
    uuid: "a003",
    name: "unknown", // TODO unknown
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a004: {
    uuid: "a004",
    name: "unknown", // TODO unknown
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a005: {
    uuid: "a005",
    name: "unknown", // TODO unknown
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a006: {
    uuid: "a006",
    name: "unknown", // TODO Firmware write ACK
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a007: {
    uuid: "a007",
    name: "unknown", // TODO unknown
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a008: {
    uuid: "a008",
    name: "unknown", // TODO unknown
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a009: {
    uuid: "a009",
    name: "unkown", // TODO map request / firmware / update status
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a00a: {
    uuid: "a00a",
    name: "unknown", // TODO unknown
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a00b: {
    uuid: "a00b",
    name: "hot water / steam settings",
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a00c: {
    uuid: "a00c",
    name: "unknown", // TODO espresso frame settings / shot desc / shot data
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a00d: {
    uuid: "a00d",
    name: "unknown", // TODO Shot Value
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a00e: {
    uuid: "a00e",
    name: "unknown", // TODO machine state? Sleep?
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a00f: {
    uuid: "a00f",
    name: "unknown", // TODO shot desc header
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a010: {
    uuid: "a010",
    name: "unknown", // TODO shot frame
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a011: {
    uuid: "a011",
    name: "water level",
    parse: buffer => buffer.toString("hex"),
    status: undefined
  },
  a012: {
    uuid: "a012",
    name: "unknown", // TODO calibration notifications
    parse: buffer => buffer.toString("hex"),
    status: undefined
  }
};
