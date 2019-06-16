import {
  startScanning,
  on,
  stopScanning,
  Peripheral
} from "@abandonware/noble";

function getTimeoutError(ms: number) {
  return new Error(`Timeout: Could not find DE1 after ${ms}ms`);
}

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
    const timeoutError = getTimeoutError(timeoutAfterMs);
    const timeout = setTimeout(() => reject(timeoutError), timeoutAfterMs);
    peripheral.disconnect((error: Error) => {
      clearTimeout(timeout);
      return error ? reject(error) : resolve();
    });
  });
}
