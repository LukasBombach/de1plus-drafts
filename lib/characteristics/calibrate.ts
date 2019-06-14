import parse, { BinaryDesc } from "./binaryParser";

// prettier-ignore
export const binaryDesc: BinaryDesc[] = [
  { name: "writeKey", type: "int", process: v => v.toString(16) },
  { name: "calCommand", type: "char" },
  { name: "calTarget", type: "char" },
  { name: "dE1ReportedVal", type: "int", process: v => Math.round(100 * (v / 65536)) / 100 },
  { name: "measuredVal", type: "intSigned", process: v => Math.round(100 * (v / 65536)) / 100 }
];

export default (buffer: Buffer) => {
  return parse(buffer, binaryDesc);
};
