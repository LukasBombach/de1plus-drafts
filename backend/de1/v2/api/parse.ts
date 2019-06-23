import { parse, Results, Vars } from "binary";

export interface BinaryDesc {
  name: string;
  type: string;
  process?: (value: number) => any;
}

export interface ParsedBinary {
  [name: string]: any;
}

interface BinDescMap {
  [type: string]: string;
}

interface Obj {
  [key: string]: any;
}

const binDescMap: BinDescMap = {
  char: "word8lu",
  int: "word32lu",
  intSigned: "word32ls",
  short: "word16bu"
};

export default (buffer: Buffer, descriptions: BinaryDesc[]): ParsedBinary => {
  const initialBin = parse(buffer);
  const results = descriptions.reduce(chainBinary, initialBin).vars;
  const processedResults = processResults(descriptions, results);
  return processedResults;
};

function chainBinary(bin: Results, { type, name }: BinaryDesc) {
  const parseFn = binDescMap[type];
  return bin[parseFn](name);
}

function processResults(descs: BinaryDesc[], results: Vars): ParsedBinary {
  const processors = descs.filter(desc => typeof desc.process === "function");
  processors.forEach(({ name, process }) =>
    callProcess(results, process as Function, name)
  );
  return results;
}

function callProcess(results: Vars, process: Function, path: string) {
  const valPath = path.split(".");
  const objPath = valPath.slice(0, -1);
  const valName = valPath.slice(-1)[0];
  const obj = objPath.length ? getNestedValue(results, objPath) : results;
  obj[valName] = process(obj[valName]);
}

function getNestedValue(baseObj: Obj, pathArr: string[]) {
  const isUndef = (o: Obj, k: string) => o && o[k] !== "undefined";
  const getKey = (o: Obj, k: string) => (isUndef(o, k) ? o[k] : undefined);
  return pathArr.reduce(getKey, baseObj);
}
