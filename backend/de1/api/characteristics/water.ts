import parse, { BinaryDesc } from "../parse";
import { Converter } from "../../api";

const converter: Converter<Water> = {
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
  console.log(buffer);
  const water = parse(buffer, binaryDesc) as Water;
  console.log(water);
  return water;
}

export default converter;
