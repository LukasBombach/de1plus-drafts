import binary from "binary";

// char unsigned = word8u
// Short unsigned = word16bu
// int unsigned = word32lu

export interface MapRequest {
  windowIncrement: string;
  fWToErase: string;
  fWToMap: string;
  firstError1: string;
  firstError2: string;
  firstError3: string;
}

export default (buffer: Buffer): MapRequest => {
  return (binary
    .parse(buffer)
    .word16bu("windowIncrement")
    .word8u("fWToErase")
    .word8u("fWToMap")
    .word8u("firstError1")
    .word8u("firstError2")
    .word8u("firstError3").vars as any) as MapRequest; // TODO remove hack
};
