export interface RecordedData {
  [uuid: string]: Buffer;
}

const recordedData: RecordedData = {
  a001: Buffer.from("040901c151092c5ee0000000000000000000", "hex"),
  a002: Buffer.from("02", "hex"),
  a003: Buffer.from("0000000000000000", "hex"),
  a004: Buffer.from("000000000000000000000000000000000000000000000000", "hex"),
  a005: Buffer.from("0000000000000000000000000000000000000000", "hex"),
  a006: Buffer.from("", "hex"),
  a007: Buffer.from("", "hex"),
  a008: Buffer.from("", "hex"),
  a009: Buffer.from("", "hex"),
  a00a: Buffer.from("00000000000000000000000000000000", "hex"),
  a00b: Buffer.from("00a03c50503cc85800", "hex"),
  a00c: Buffer.from("0000000000000000000000000000000000000000", "hex"),
  a00d: Buffer.from("000100a00000583a583ab35a005800000002a0", "hex"),
  a00e: Buffer.from("0200", "hex"),
  a00f: Buffer.from("0103010060", "hex"),
  a010: Buffer.from("026040b09e000400", "hex"),
  a011: Buffer.from("1c480500", "hex"),
  a012: Buffer.from("0000000000000000000000000000", "hex")
};

export default recordedData;
