import parse, { BinaryDesc } from "./binaryParser";

// prettier-ignore
export const binaryDesc: BinaryDesc[] = [
  { name: "level", type: "short", process: v => v / 256 },
  { name: "startFillLevel", type: "short", process: v => v / 256 },
];

export default (buffer: Buffer) => {
  return parse(buffer, binaryDesc);
};
