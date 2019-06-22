/// <reference types="node" />

declare module "binary" {
  export interface Vars {
    [key: string]: string | Vars;
  }

  interface ResultsVars {
    vars: Vars;
  }

  interface ResultsFns {
    [word8u: string]: (name: string) => Results;
    word16bu: (name: string) => Results;
    word32lu: (name: string) => Results;
  }

  export type Results = ResultsVars & ResultsFns;

  export function parse(buffer: Buffer): Results;
  // export default function binary(buffer: Buffer, eventName: string): Results;
}
