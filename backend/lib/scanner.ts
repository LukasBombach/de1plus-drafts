import {
  startScanning,
  on,
  stopScanning,
  Peripheral,
  removeAllListeners
} from "@abandonware/noble";
import Timeout from "./timeout";

export default class Scanner {
  public async find(name: RegExp, timeoutAfter: number): Promise<Peripheral> {
    startScanning();
    try {
      const peripheral = await this.discover(name, timeoutAfter);
      stopScanning();
      return peripheral;
    } catch (err) {
      stopScanning();
      throw err;
    }
  }

  private discover(name: RegExp, timeoutAfter: number): Promise<Peripheral> {
    return new Promise((resolve, reject) => {
      const timeout = new Timeout("find DE1", timeoutAfter, err => {
        removeAllListeners("discover");
        reject(err);
      });
      on("discover", (peripheral: Peripheral) => {
        if (this.matches(name, peripheral)) {
          removeAllListeners("discover");
          timeout.stop();
          resolve(peripheral);
        }
      });
    });
  }

  private matches(name: RegExp, peripheral: Peripheral): boolean {
    return name.test(peripheral.advertisement.localName);
  }
}
