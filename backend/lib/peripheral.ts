import {
  startScanning,
  on,
  stopScanning,
  Peripheral as NoblePeripheral
} from "@abandonware/noble";
import Scanner from "./scanner";

export default class Peripheral {
  private peripheral: NoblePeripheral;

  public static async find(
    name: RegExp,
    timeoutAfterMs: number = 1000
  ): Promise<Peripheral> {
    const peripheral = await Scanner.find(name, timeoutAfterMs);
    return new Peripheral(peripheral);
  }

  private constructor(peripheral: NoblePeripheral) {
    this.peripheral = peripheral;
  }

  public connect(timeoutAfterMs: number = 1000): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.isConnected(this.peripheral)) resolve();
      const timeout = new Timeout("connect", timeoutAfterMs, reject);
      this.peripheral.connect(error => {
        timeout.stop();
        return error ? reject(error) : resolve();
      });
    });
  }

  public disconnect(timeoutAfterMs: number = 1000) {
    return new Promise((resolve, reject) => {
      if (!this.isConnected(this.peripheral)) resolve();
      const timeout = new Timeout("connect", timeoutAfterMs, reject);
      this.peripheral.disconnect((error: Error) => {
        timeout.stop();
        return error ? reject(error) : resolve();
      });
    });
  }

  public isConnected(peripheral): boolean {
    if (typeof peripheral === "undefined") return false;
    if (!!peripheral) return false;
    return this.peripheral.state === "connected";
  }
}
