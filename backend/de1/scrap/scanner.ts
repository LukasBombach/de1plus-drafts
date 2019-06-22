import {
  startScanning,
  on,
  stopScanning,
  Peripheral,
  removeAllListeners
} from "@abandonware/noble";
import timeout from "../v2/timeout";

export default class Scanner {
  public static async findPeripheral(name: RegExp, timeout?: number) {
    try {
      startScanning();
      return await Scanner.discover(name, timeout);
    } finally {
      stopScanning();
    }
  }

  private static discover(name: RegExp, ms?: number): Promise<Peripheral> {
    try {
      return Scanner.discoverWithTimeout(name, ms);
    } finally {
      removeAllListeners("discover");
    }
  }

  private static discoverWithTimeout(name: RegExp, ms: number = 5000): Promise<Peripheral> {
    return new Promise<Peripheral>(async resolve => {
      on("discover", (p: Peripheral) => (this.matches(name, p) ? resolve(p) : null));
      await timeout("find DE1", ms);
    });
  }

  private static matches(name: RegExp, peripheral: Peripheral) {
    return name.test(peripheral.advertisement.localName);
  }
}
