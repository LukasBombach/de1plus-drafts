import parse, { BinaryDesc } from "./binaryParser";

// todo duplicated code at shotDesc
function convertF817ToFloat(value: number): number {
  const highBit = value & 128;
  return highBit === 0 ? value / 10 : value & 127;
}

// todo duplicated code at shotDesc
function convertBottom10OfU10P0(value: number): number {
  return value & 1023;
}

// prettier-ignore
export const binaryDesc: BinaryDesc[] = [
  { name: "frameToWrite", type: "char" },
  { name: "flag", type: "char" },
  { name: "setVal", type: "char", process: v => v / 16 },
  { name: "temp", type: "char", process: v => v / 2 },
  { name: "frameLen", type: "char", process: convertF817ToFloat },
  { name: "triggerVal", type: "char", process: v => v / 16 },
  { name: "maxVol", type: "short", process: convertBottom10OfU10P0 },
];

export default (buffer: Buffer) => {
  return parse(buffer, binaryDesc);
};
