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

  public static async findPeripheral(name: RegExp, timeout: number) {
    const scanner = new Scanner(name, timeout);
    return scanner.find();
  }

  private constructor(name: RegExp, timeout: number = 5000) {
    this.name = name;
    this.timeout = timeout;
  }

  private async find(): Promise<Peripheral> {
    try {
      startScanning();
      return await this.discover();
    } finally {
      stopScanning();
    }
  }

  private async discover(): Promise<Peripheral> {
    try {
      return await this.discoverWithTimeout();
    } finally {
      removeAllListeners("discover");
    }
  }

  private async discoverWithTimeout(): Promise<Peripheral> {
    return (await Promise.race([
      this.resolveWhenDiscovered(),
      this.rejectAftertimeout()
    ])) as Peripheral;
  }

  private async resolveWhenDiscovered() {
    return new Promise(resolve => {
      on("discover", (p: Peripheral) => {
        return this.matches(p) ? resolve(p) : null;
      });
    });
  }

  private rejectAftertimeout(): Promise<void> {
    return timeoutAsPromised("find DE1", this.timeout);
  }

  private matches(peripheral: Peripheral) {
    return this.name.test(peripheral.advertisement.localName);
  }
}
