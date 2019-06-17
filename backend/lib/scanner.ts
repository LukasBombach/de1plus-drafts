import {
  startScanning,
  on,
  stopScanning,
  Peripheral
} from "@abandonware/noble";
import Timeout from "./timeout";

export default class Scanner {
  public static find(
    name: RegExp,
    timeoutAfter: number = 1000
  ): Promise<Peripheral> {
    return new Promise((resolve, reject) => {
      const onTimeout = () => {
        stopScanning();
        reject();
      };
      const timeout = new Timeout("find DE1", timeoutAfter, onTimeout);
      startScanning();
      on("discover", peripheral =>
        Scanner.onDiscover(peripheral, name, timeout, resolve)
      );
    });
  }

  private static onDiscover(
    peripheral: Peripheral,
    name: RegExp,
    timeout: Timeout,
    resolve: (peripheral: Peripheral) => void
  ) {
    if (!Scanner.matches(name, peripheral)) return;
    timeout.stop();
    stopScanning();
    resolve(peripheral);
  }

  private static matches(name: RegExp, peripheral: Peripheral): boolean {
    return name.test(peripheral.advertisement.localName);
  }
}
