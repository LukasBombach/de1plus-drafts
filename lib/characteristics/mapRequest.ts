import parse, { BinaryDesc } from "./binaryParser";

// prettier-ignore
export const binaryDesc: BinaryDesc[] = [
  { name: "windowIncrement", type: "short" },
  { name: "fwToErase", type: "char" },
  { name: "fwToMap", type: "char" },
  { name: "firstError1", type: "char" },
  { name: "firstError2", type: "char" },
  { name: "firstError3", type: "char" },
];

export default (buffer: Buffer) => {
  return parse(buffer, binaryDesc);
};
