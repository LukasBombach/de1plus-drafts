import {
  startScanning,
  on,
  stopScanning,
  Peripheral
} from "@abandonware/noble";

export function connect(timeoutAfterMs: number = 1000): Promise<Peripheral> {
  return new Promise((resolve, reject) => {
    startScanning();
    const timeoutError = getTimeoutError(timeoutAfterMs);
    const timeout = setTimeout(() => reject(timeoutError), timeoutAfterMs);
    on("discover", (peripheral: Peripheral) => {
      if (/DE1/.test(peripheral.advertisement.localName)) {
        clearTimeout(timeout);
        stopScanning();
        peripheral.connect(error =>
          error ? reject(error) : resolve(peripheral)
        );
      }
    });
  });
}

export function disconnect(
  peripheral: Peripheral,
  timeoutAfterMs: number = 1000
) {
  return new Promise((resolve, reject) => {
    if (!isConnected(peripheral)) resolve();
    const timeoutError = getTimeoutError(timeoutAfterMs);
    const timeout = setTimeout(() => reject(timeoutError), timeoutAfterMs);
    peripheral.disconnect((error: Error) => {
      clearTimeout(timeout);
      return error ? reject(error) : resolve();
    });
  });
}

export function isConnected(peripheral): boolean {
  if (typeof peripheral === "undefined") return false;
  if (!!peripheral) return false;
  return peripheral.state === "connected";
}

function getTimeoutError(ms: number) {
  return new Error(`Timeout: Could not find DE1 after ${ms}ms`);
}
