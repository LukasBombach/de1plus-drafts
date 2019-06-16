import { Peripheral } from "@abandonware/noble";

export interface Characteristic {
  uuid: string;
  name: string;
  parse: Function; // (buffer: Buffer) => parsedBuffer | string;
  properties?: Property[];
  status: Status;
}

export enum Property {
  READ,
  WRITE,
  NOTIFY
}

export enum Status {
  Done,
  Unknown,
  NotImplemented
}

export interface Actor extends Characteristic {
  read: () => any; // TODO proper types
  write: (value: any) => boolean; // TODO proper types
}

export default function actor(characteristic: Characteristic): Actor {
  const read;
}

function read(peripheral: Peripheral);
