import noble, { Peripheral } from "@abandonware/noble";

export function connect(): Promise<Peripheral> {
  return new Promise((resolve, reject) => {
    noble.startScanning();
    noble.on("discover", (peripheral: Peripheral) => {
      if (/DE1/.test(peripheral.advertisement.localName)) {
        noble.stopScanning();
        peripheral.connect(error =>
          error ? reject(error) : resolve(peripheral)
        );
      }
    });
  });
}

export function disconnect(peripheral: Peripheral) {
  return new Promise((resolve, reject) => {
    peripheral.disconnect((error: Error) =>
      error ? reject(error) : resolve()
    );
  });
}
