import {
  startScanning,
  on,
  stopScanning,
  Peripheral,
  removeAllListeners
} from "@abandonware/noble";

export default class Noble {
  public static async connect(peripheral: Peripheral, ms?: number): Promise<void> {
    return Promise.race([connect(peripheral), timeout("connect", ms)]) as Promise<void>;
  }

  public static async disconnect(peripheral: Peripheral, ms?: number): Promise<void> {
    return Promise.race([disconnect(peripheral), timeout("disconnect", ms)]) as Promise<void>;
  }

  public static async findPeripheral(name: RegExp, ms?: number): Promise<Peripheral> {
    try {
      startScanning();
      return Promise.race([discover(name), timeout("find DE1", ms)]);
    } finally {
      removeAllListeners("discover");
      stopScanning();
    }
  }
}

function connect(peripheral: Peripheral): Promise<void> {
  return new Promise((resolve, reject) => {
    peripheral.connect(error => (error ? reject(error) : resolve(peripheral)));
  });
}

function disconnect(peripheral: Peripheral): Promise<void> {
  return new Promise((resolve, reject) => {
    peripheral.disconnect(error => (error ? reject(error) : resolve()));
  });
}

function discover(name: RegExp): Promise<Peripheral> {
  return new Promise(resolve => {
    on("discover", (p: Peripheral) => (matches(name, p) ? resolve(p) : null));
  });
}

function matches(name: RegExp, peripheral: Peripheral) {
  return name.test(peripheral.advertisement.localName);
}

function timeout(action: string, ms: number = 1000): Promise<void> {
  return new Promise((resolve, reject) => {
    const error = new Error(`Timeout: Could not ${action} after ${ms}ms`);
    setTimeout(() => reject(error), ms);
  });
}
