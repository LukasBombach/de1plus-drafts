import parse, { BinaryDesc } from "./binaryParser";

function convertF817ToFloat(value: number): number {
  const highBit = value & 128;
  return highBit === 0 ? value / 10 : value & 127;
}

function convertBottom10OfU10P0(value: number): number {
  return value & 1023;
}

// prettier-ignore
const binaryDesc: BinaryDesc[] = [
	{ name: "00.headerV", type: "char" },
	{ name: "00.numberOfFrames", type: "char" },
	{ name: "00.numberOfPreinfuseFrames", type: "char" },
	{ name: "00.minimumPressure", type: "char", process: v => v / 16  },
	{ name: "00.maximumFlow", type: "char", process: v => v / 16 },
	{ name: "01.flag", type: "char" },
	{ name: "01.setVal", type: "char", process: v => v / 16 },
	{ name: "01.temp", type: "char", process: v => v / 2 },
	{ name: "01.frameLen", type: "char", process: convertF817ToFloat },
	{ name: "01.triggerVal", type: "char", process: v => v / 16 },
	{ name: "01.maxVol", type: "short", process: convertBottom10OfU10P0 },
	{ name: "02.flag", type: "char" },
	{ name: "02.setVal", type: "char", process: v => v / 16 },
	{ name: "02.temp", type: "char", process: v => v / 2 },
	{ name: "02.frameLen", type: "char", process: convertF817ToFloat },
	{ name: "02.triggerVal", type: "char", process: v => v / 16 },
	{ name: "02.maxVol", type: "short", process: convertBottom10OfU10P0 },
	{ name: "03.flag", type: "char" },
	{ name: "03.setVal", type: "char", process: v => v / 16 },
	{ name: "03.temp", type: "char", process: v => v / 2 },
	{ name: "03.frameLen", type: "char", process: convertF817ToFloat },
	{ name: "03.triggerVal", type: "char", process: v => v / 16 },
	{ name: "03.maxVol", type: "short", process: convertBottom10OfU10P0 },
	{ name: "04.flag", type: "char" },
	{ name: "04.setVal", type: "char", process: v => v / 16 },
	{ name: "04.temp", type: "char", process: v => v / 2 },
	{ name: "04.frameLen", type: "char", process: convertF817ToFloat },
	{ name: "04.triggerVal", type: "char", process: v => v / 16 },
	{ name: "04.maxVol", type: "short", process: convertBottom10OfU10P0 },
	{ name: "05.flag", type: "char" },
	{ name: "05.setVal", type: "char", process: v => v / 16 },
	{ name: "05.temp", type: "char", process: v => v / 2 },
	{ name: "05.frameLen", type: "char", process: convertF817ToFloat },
	{ name: "05.triggerVal", type: "char", process: v => v / 16 },
	{ name: "05.maxVol", type: "short", process: convertBottom10OfU10P0 },
	{ name: "06.flag", type: "char" },
	{ name: "06.setVal", type: "char", process: v => v / 16 },
	{ name: "06.temp", type: "char", process: v => v / 2 },
	{ name: "06.frameLen", type: "char", process: convertF817ToFloat },
	{ name: "06.triggerVal", type: "char", process: v => v / 16 },
	{ name: "06.maxVol", type: "short", process: convertBottom10OfU10P0 },
	{ name: "07.flag", type: "char" },
	{ name: "07.setVal", type: "char", process: v => v / 16 },
	{ name: "07.temp", type: "char", process: v => v / 2 },
	{ name: "07.frameLen", type: "char", process: convertF817ToFloat },
	{ name: "07.triggerVal", type: "char", process: v => v / 16 },
	{ name: "07.maxVol", type: "short", process: convertBottom10OfU10P0 },
	{ name: "08.flag", type: "char" },
	{ name: "08.setVal", type: "char", process: v => v / 16 },
	{ name: "08.temp", type: "char", process: v => v / 2 },
	{ name: "08.frameLen", type: "char", process: convertF817ToFloat },
	{ name: "08.triggerVal", type: "char", process: v => v / 16 },
	{ name: "08.maxVol", type: "short", process: convertBottom10OfU10P0 },
	{ name: "09.flag", type: "char" },
	{ name: "09.setVal", type: "char", process: v => v / 16 },
	{ name: "09.temp", type: "char", process: v => v / 2 },
	{ name: "09.frameLen", type: "char", process: convertF817ToFloat },
	{ name: "09.triggerVal", type: "char", process: v => v / 16 },
	{ name: "09.maxVol", type: "short", process: convertBottom10OfU10P0 },
	{ name: "10.flag", type: "char" },
	{ name: "10.setVal", type: "char", process: v => v / 16 },
	{ name: "10.temp", type: "char", process: v => v / 2 },
	{ name: "10.frameLen", type: "char", process: convertF817ToFloat },
	{ name: "10.triggerVal", type: "char", process: v => v / 16 },
	{ name: "10.maxVol", type: "short", process: convertBottom10OfU10P0 }
]

export default (buffer: Buffer) => {
  return parse(buffer, binaryDesc);
};
