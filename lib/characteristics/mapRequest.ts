import parse, { BinaryDesc } from "./binaryParser";

// prettier-ignore
export const binaryDesc: BinaryDesc[] = [
  { name: "windowIncrement", type: "short" },
  { name: "fWToErase", type: "char" },
  { name: "fWToMap", type: "char" },
  { name: "firstError1", type: "char" },
  { name: "firstError2", type: "char" },
  { name: "firstError3", type: "char" },
];

export default (buffer: Buffer) => {
  return parse(buffer, binaryDesc);
};
