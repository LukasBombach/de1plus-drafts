import parse, { BinaryDesc } from "./binaryParser";

// prettier-ignore
export const binaryDesc: BinaryDesc[] = [
  { name: "headerV", type: "char" },
  { name: "numberOfFrames", type: "char" },
  { name: "numberOfPreinfuseFrames", type: "char" },
  { name: "minimumPressure", type: "char", process: v => v / 16 },
  { name: "maximumFlow", type: "char", process: v => v / 16 },
];

export default (buffer: Buffer) => {
  return parse(buffer, binaryDesc);
};
