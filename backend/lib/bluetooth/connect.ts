import {
  startScanning,
  on,
  stopScanning,
  Peripheral
} from "@abandonware/noble";

export function find(
  name: RegExp,
  timeoutAfterMs: number = 1000
): Promise<Peripheral> {
  return new Promise((resolve, reject) => {
    startScanning();
    const timeoutError = getTimeoutError(timeoutAfterMs);
    const timeout = setTimeout(() => reject(timeoutError), timeoutAfterMs);
    on("discover", (peripheral: Peripheral) => {
      if (name.test(peripheral.advertisement.localName)) {
        clearTimeout(timeout);
        stopScanning();
        resolve(peripheral);
      }
    });
  });
}

export function connect(peripheral: Peripheral): Promise<void> {
  return new Promise((resolve, reject) => {
    peripheral.connect(error => (error ? reject(error) : resolve()));
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
