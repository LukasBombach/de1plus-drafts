import parse, { BinaryDesc } from "../parse";

const herz = 50;

// prettier-ignore
export const binaryDesc: BinaryDesc[] = [
  { name: "timer", type: "short", process: v => Math.round(100 * (v / (herz * 2))) },
  { name: "groupPressure", type: "short", process: v => v / 4096 },
  { name: "groupFlow", type: "short", process: v => v / 4096 },
  { name: "mixTemp", type: "short", process: v => v / 256 },
  { name: "headTemp1", type: "char" },
  { name: "headTemp2", type: "char" },
  { name: "headTemp3", type: "char" },
  { name: "setMixTemp", type: "short", process: v => v / 256 },
  { name: "setHeadTemp", type: "short", process: v => v / 256 },
  { name: "setGroupPressure", type: "char", process: v => v / 16 },
  { name: "setGroupFlow", type: "char", process: v => v / 16 },
  { name: "frameNumber", type: "char" },
  { name: "steamTemp", type: "char" },
];

export default (buffer: Buffer) => {
  return parse(buffer, binaryDesc);
};
