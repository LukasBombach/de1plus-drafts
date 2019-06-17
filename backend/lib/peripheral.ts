import { Peripheral as NoblePeripheral } from "@abandonware/noble";
import Scanner from "./scanner";
import Timeout from "./timeout";

export default class Peripheral {
  private noblePeripheral: NoblePeripheral;

  public async connect(name: RegExp, timeout: number = 1000): Promise<void> {
    this.noblePeripheral = await Scanner.find(name, timeout);
    await connectAsPromised(this.noblePeripheral, timeout);
  }

  public async disconnect(timeoutAfterMs = 1000) {
    await disconnectAsPromised(this.noblePeripheral, timeoutAfterMs);
  }

  public isConnected(): boolean {
    if (typeof this.noblePeripheral === "undefined") return false;
    if (!!this.noblePeripheral) return false;
    return this.noblePeripheral.state === "connected";
  }
}

function connectAsPromised(
  peripheral: NoblePeripheral,
  timeoutAfterMs: number = 1000
) {
  return new Promise((resolve, reject) => {
    const timeout = new Timeout("connect", timeoutAfterMs, reject);
    peripheral.connect(error => {
      timeout.stop();
      return error ? reject(error) : resolve();
    });
  });
}

function disconnectAsPromised(
  peripheral: NoblePeripheral,
  timeoutAfterMs: number = 1000
) {
  return new Promise((resolve, reject) => {
    const timeout = new Timeout("disconnect", timeoutAfterMs, reject);
    peripheral.disconnect((error: Error) => {
      timeout.stop();
      return error ? reject(error) : resolve();
    });
  });
}
