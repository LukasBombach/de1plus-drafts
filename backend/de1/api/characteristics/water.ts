import parse, { BinaryDesc } from "../parse";
import { Converter } from "../../api";

const converter: Converter<"water"> = {
  uuid: "a011",
  decode
};

export interface Water {
  level: number;
  startFillLevel: number;
}

// prettier-ignore
export const binaryDesc: BinaryDesc[] = [
  { name: "level", type: "short", process: v => v / 256 },
  { name: "startFillLevel", type: "short", process: v => v / 256 },
];

function decode(buffer: Buffer): Water {
  return parse(buffer, binaryDesc) as Water;
}

export default converter;
