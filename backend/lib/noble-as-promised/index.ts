import { Peripheral, Service, Characteristic } from "@abandonware/noble";

export function getService(
  peripheral: Peripheral,
  uuids: string[] = []
): Promise<Service> {
  return new Promise((resolve, reject) => {
    peripheral.discoverServices(uuids, (error, [service]) =>
      error ? reject(error) : resolve(service)
    );
  });
}

export function getCharacteristics(
  service: Service,
  uuids: string[] = []
): Promise<Characteristic[]> {
  return new Promise((resolve, reject) => {
    service.discoverCharacteristics(uuids, (error, characteristics) =>
      error ? reject(error) : resolve(characteristics)
    );
  });
}

export function readCharacteristic(
  characteristic: Characteristic
): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    characteristic.read((error, data) =>
      error ? reject(error) : resolve(data)
    );
  });
}

export function writeCharacteristic(
  characteristic: Characteristic
): (data: Buffer) => Promise<void> {
  return (data: Buffer) =>
    new Promise((resolve, reject) => {
      characteristic.write(data, true, error =>
        error ? reject(error) : resolve()
      );
    });
}
