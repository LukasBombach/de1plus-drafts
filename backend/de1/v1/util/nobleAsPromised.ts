import { Peripheral, Service, Characteristic } from "@abandonware/noble";
import timeoutAsPromised from "./timeout";

export function connect(peripheral: Peripheral, timeout?: number) {
  return Promise.race([connectAsPromised(peripheral), timeoutAsPromised("connect", timeout)]);
}

export function disconnect(peripheral: Peripheral, timeout?: number) {
  return Promise.race([disconnectAsPromised(peripheral), timeoutAsPromised("disconnect", timeout)]);
}

export function getService(peripheral: Peripheral, uuid: string): Promise<Service> {
  return new Promise((resolve, reject) => {
    peripheral.discoverServices([uuid], (error, [service]) =>
      error ? reject(error) : resolve(service)
    );
  });
}

export function getCharacteristics(service: Service): Promise<Characteristic[]> {
  return new Promise((resolve, reject) => {
    service.discoverCharacteristics([], (error, characteristics) =>
      error ? reject(error) : resolve(characteristics)
    );
  });
}

export function read(characteristic: Characteristic): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    characteristic.read((err, buffer) => (err ? reject(err) : resolve(buffer)));
  });
}

export function write(characteristic: Characteristic, buffer: Buffer): Promise<void> {
  return new Promise((resolve, reject) => {
    characteristic.write(buffer, false, err => (err ? reject(err) : resolve()));
  });
}

function connectAsPromised(peripheral: Peripheral): Promise<Peripheral> {
  return new Promise((resolve, reject) =>
    peripheral.connect(error => (error ? reject(error) : resolve(peripheral)))
  );
}

function disconnectAsPromised(peripheral: Peripheral) {
  return new Promise((resolve, reject) => {
    peripheral.disconnect(error => (error ? reject(error) : resolve()));
  });
}
