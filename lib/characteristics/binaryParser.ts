import binary, { Results, Vars } from "binary";
import { mapKeys } from "lodash";

export interface BinaryDesc {
  name: string;
  type: string;
  process?: Function | string;
}

export interface ParsedBinary {
  [name: string]: any;
}

interface BinDescMap {
  [type: string]: string;
}

const binDescMap: BinDescMap = {
  char: "word8u",
  int: "word32lu",
  short: "word16bu"
};

export default (buffer: Buffer, descriptions: BinaryDesc[]) => {
  const initialBin = binary.parse(buffer);
  const results = descriptions.reduce(chainBinary, initialBin).vars;
  const processedResults = processResults(descriptions, results);
  return processedResults;
};

function chainBinary(bin: Results, { type, name }: BinaryDesc) {
  const parseFn = binDescMap[type];
  return bin[parseFn](name);
}

function processResults(descs: BinaryDesc[], results: Vars): ParsedBinary {
  return mapKeys(results, (value, key) => getProcessor(key, descs)(value));
}

function getProcessor(key: string, descs: BinaryDesc[]) {
  const desc = descs.find(({ name }) => name === key) as BinaryDesc;
  if (!desc.process || typeof desc.process !== "function") return (v: any) => v;
  return desc.process;
}
