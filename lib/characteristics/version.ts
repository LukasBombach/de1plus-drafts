import binary from "binary";
import { BinaryDesc } from "./binaryParser";

// prettier-ignore
export const binaryDesc: BinaryDesc[] = [
  {name: "bluetooth.apiVersion", type:"word8u"},
  {name: "bluetooth.release", type:"word8u"},
  {name: "bluetooth.commits", type:"word16bu"},
  {name: "bluetooth.changes", type:"word8u"},
  {name: "bluetooth.sha", type:"word32lu", process: convertToHex},
  {name: "firmware.apiVersion", type:"word8u"},
  {name: "firmware.release", type:"word8u"},
  {name: "firmware.commits", type:"word16bu"},
  {name: "firmware.changes", type:"word8u"},
  {name: "firmware.sha", type:"word32lu", process: convertToHex},
]

export interface Versions {
  bluetooth: Version;
  firmware: Version;
}

export interface Version {
  apiVersion: string;
  release: string;
  commits: string;
  changes: string;
  sha: string;
}

export default (buffer: Buffer): Versions => {
  const versions = (binary
    .parse(buffer)
    .word8u("bluetooth.apiVersion")
    .word8u("bluetooth.release")
    .word16bu("bluetooth.commits")
    .word8u("bluetooth.changes")
    .word32lu("bluetooth.sha")
    .word8u("firmware.apiVersion")
    .word8u("firmware.release")
    .word16bu("firmware.commits")
    .word8u("firmware.changes")
    .word32lu("firmware.sha").vars as any) as Versions; // TODO remove hack

  versions.bluetooth.sha = convertToHex(versions.bluetooth.sha);
  versions.firmware.sha = convertToHex(versions.firmware.sha);

  return versions;
};

function convertToHex(val: string | object): string {
  return typeof val === "object" ? "0" : parseInt(val).toString(16);
}
