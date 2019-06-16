/// <reference types="node" />

declare module "@abandonware/noble" {
  export interface Peripheral {
    connect: (callback: (error: Error) => void) => void;
    disconnect: (callback: (error: Error) => void) => void;
    advertisement: Advertisement;
  }

  export interface Advertisement {
    localName: string;
  }

  // namespace Noble {
  export function startScanning(): void;
  export function stopScanning(): void;
  export function on(eventName: string, callback: Function): void;
  // }

  //export default Noble;
}
