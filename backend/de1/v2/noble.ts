import { promisify } from "es6-promisify";
import {
  Peripheral,
  Service,
  Characteristic,
  startScanning,
  on,
  stopScanning,
  removeAllListeners
} from "@abandonware/noble";

export default class Noble {
  public static connect(peripheral: Peripheral, ms?: number): Promise<void> {
    const connect = promisify<void>(peripheral.connect);
    return Noble.timeout<void>(connect(), "connect", ms);
  }

  public static disconnect(peripheral: Peripheral, ms?: number): Promise<void> {
    const disconnect = promisify<void>(peripheral.disconnect);
    return Noble.timeout<void>(disconnect(), "disconnect", ms);
  }

  public static async getService(peripheral: Peripheral, uuid: string, ms?: number): Promise<Service> {
    const discover = promisify<Service[], string[]>(peripheral.discoverServices);
    const [service] = await Noble.timeout<Service[]>(discover([uuid]), "get service", ms);
    return service;
  }

  public static getCharacteristics(service: Service, ms?: number): Promise<Characteristic[]> {
    const discover = promisify<Characteristic[], string[]>(service.discoverCharacteristics);
    return Noble.timeout<Characteristic[]>(discover([]), "get characteristics", ms);
  }

  public static async findPeripheral(name: RegExp, ms?: number): Promise<Peripheral> {
    try {
      startScanning();
      return Noble.timeout<Peripheral>(Noble.discover(name), "find DE1", ms);
    } finally {
      removeAllListeners("discover");
      stopScanning();
    }
  }

  private static discover(name: RegExp): Promise<Peripheral> {
    return new Promise(resolve => {
      const matches = (name: RegExp, peripheral: Peripheral) => name.test(peripheral.advertisement.localName);
      on("discover", (p: Peripheral) => (matches(name, p) ? resolve(p) : null));
    });
  }

  private static timeout<T>(promise: Promise<T>, action: string, ms: number = 1000): Promise<T> {
    return new Promise((resolve, reject) => {
      const error = new Error(`Timeout: Could not ${action} after ${ms}ms`);
      setTimeout(() => reject(error), ms);
      promise.then(resolve);
    });
  }
}
