import {
  startScanning,
  on,
  stopScanning,
  Peripheral,
  removeAllListeners
} from "@abandonware/noble";
import timeoutAsPromised from "../util/timeout";

export default class Scanner {
  public async find(name: RegExp, timeout: number): Promise<Peripheral> {
    try {
      startScanning();
      return await this.discover(name, timeout);
    } finally {
      stopScanning();
    }
  }

  async discover(name: RegExp, timeout: number): Promise<Peripheral> {
    try {
      return (await Promise.race([
        this.resolveWhenDiscovered(name),
        this.timeout(timeout)
      ])) as Peripheral;
    } finally {
      removeAllListeners("discover");
    }
  }

  async resolveWhenDiscovered(name: RegExp) {
    return new Promise(resolve => {
      on("discover", (peripheral: Peripheral) =>
        this.matches(name, peripheral) ? resolve(peripheral) : null
      );
    });
  }

  timeout(timeoutAfter: number): Promise<void> {
    return timeoutAsPromised("find DE1", timeoutAfter);
  }

  matches(name: RegExp, peripheral: Peripheral) {
    return name.test(peripheral.advertisement.localName);
  }
}
