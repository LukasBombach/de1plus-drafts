import parse, { BinaryDesc } from "./binaryParser";

// prettier-ignore
export const binaryDesc: BinaryDesc[] = [
  { name: "bluetooth.apiVersion", type:"char" },
  { name: "bluetooth.release", type:"char" },
  { name: "bluetooth.commits", type:"short" },
  { name: "bluetooth.changes", type:"char" },
  { name: "bluetooth.sha", type:"int", process: convertToHex },
  { name: "firmware.apiVersion", type:"char" },
  { name: "firmware.release", type:"char" },
  { name: "firmware.commits", type:"short" },
  { name: "firmware.changes", type:"char" },
  { name: "firmware.sha", type:"int", process: convertToHex },
];

export default (buffer: Buffer) => {
  return parse(buffer, binaryDesc);
};

function convertToHex(val: number | object): string {
  return typeof val === "object" ? "0" : val.toString(16);
}
