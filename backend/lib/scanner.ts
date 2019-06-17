import {
  startScanning,
  on,
  stopScanning,
  Peripheral,
  removeAllListeners
} from "@abandonware/noble";
import timeoutAsPromised from "./util/timeout";

export default class Scanner {
  private name: RegExp;
  private timeout: number;

  constructor(name: RegExp, timeout: number) {
    this.name = name;
    this.timeout = timeout;
  }

  public async find(): Promise<Peripheral> {
    try {
      startScanning();
      return await this.discover();
    } finally {
      stopScanning();
    }
  }

  async discover(): Promise<Peripheral> {
    try {
      return this.discoverWithTimeout();
    } finally {
      removeAllListeners("discover");
    }
  }

  async discoverWithTimeout(): Promise<Peripheral> {
    return (await Promise.race([
      this.resolveWhenDiscovered(),
      this.rejectAftertimeout()
    ])) as Peripheral;
  }

  async resolveWhenDiscovered() {
    return new Promise(resolve => {
      on("discover", (p: Peripheral) => (this.matches(p) ? resolve(p) : null));
    });
  }

  rejectAftertimeout(): Promise<void> {
    return timeoutAsPromised("find DE1", this.timeout);
  }

  matches(peripheral: Peripheral) {
    return this.name.test(peripheral.advertisement.localName);
  }
}
