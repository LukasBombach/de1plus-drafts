import parse, { BinaryDesc } from "./binaryParser";

// prettier-ignore
export const binaryDesc: BinaryDesc[] = [
	{ name: "state", type: "char" },
	{ name: "substate", type: "char" },
];

export default (buffer: Buffer) => {
  return parse(buffer, binaryDesc);
};
