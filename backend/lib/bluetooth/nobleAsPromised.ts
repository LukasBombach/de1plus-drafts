import { Peripheral, Service, Characteristic } from "@abandonware/noble";
import { keyBy } from "lodash";

export interface Characteristics {
  [uuid: string]: Characteristic;
}

export async function getCharacteristics(
  peripheral: Peripheral,
  uuid: string
): Promise<Characteristics> {
  const service = await getService(peripheral, [uuid]);
  const characteristics = await getCharacteristicsAsArray(service);
  return keyBy(characteristics, "uuid");
}

function getService(
  peripheral: Peripheral,
  uuids: string[] = []
): Promise<Service> {
  return new Promise((resolve, reject) => {
    peripheral.discoverServices(uuids, (error, [service]) =>
      error ? reject(error) : resolve(service)
    );
  });
}

function getCharacteristicsAsArray(
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
      console.log("low level write with", data);
      console.log(characteristic);
      characteristic.write(data, false, error =>
        error ? reject(error) : resolve()
      );
    });
}
