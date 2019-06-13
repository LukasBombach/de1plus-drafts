/// <reference types="node" />

declare module "binary" {
  export interface Results {
    vars: Vars;
    word8u: (name: string) => Results;
    word16bu: (name: string) => Results;
    word32lu: (name: string) => Results;
  }
  export interface Vars {
    [key: string]: string | Vars;
  }

  export function parse(buffer: Buffer): Results;
}
