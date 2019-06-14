import { parse } from "binary";

export interface StateChange {
  firmwareWriteAck: number;
}

export default (buffer: Buffer): StateChange => {
  const firmwareWriteAckString = parse(buffer).word8u("firmwareWriteAck").vars
    .firmwareWriteAck as string;
  const firmwareWriteAck = parseInt(firmwareWriteAckString);
  return { firmwareWriteAck };
};
