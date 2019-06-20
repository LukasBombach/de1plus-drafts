import parse, { BinaryDesc } from "../parse";
import { Converter } from "..";

const converter: Converter<"version"> = {
  uuid: "a011",
  decode
};

export interface Versions {
  bluetooth: Version;
  firmware: Version;
}

export interface Version {
  apiVersion: number;
  release: number;
  commits: number;
  changes: number;
  sha: string;
}

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

export function decode(buffer: Buffer): Versions {
  return parse(buffer, binaryDesc) as Versions;
}

function convertToHex(val: number | object): string {
  return typeof val === "object" ? "0" : val.toString(16);
}

export default converter;
