import { keyBy } from "lodash";
import { Service as NobleService, Characteristic } from "@abandonware/noble";
import Device from "./device";

interface Characteristics {
  [uuid: string]: Characteristic;
}

export default class Service {
  private device: Device;
  private characteristics: Characteristics;

  public static async load(device: Device, uuid: string): Promise<Service> {
    const service = new Service(device);
    await service.load(uuid);
    return service;
  }

  private constructor(device: Device) {
    this.device = device;
  }

  private async load(uuid: string): Promise<void> {
    const service = await this.getService(uuid);
    const characteristics = await this.getCharacteristics(service);
    this.characteristics = keyBy(characteristics, "uuid");
  }

  public async read(uuid: string): Promise<any> {
    this.ensureLoaded();
  }

  public async write(value: any): Promise<void> {
    this.ensureLoaded();
  }

  private getService(uuid: string): Promise<NobleService> {
    return new Promise((resolve, reject) => {
      const peripheral = this.device.getPeripheral();
      peripheral.discoverServices([uuid], (error, [service]) =>
        error ? reject(error) : resolve(service)
      );
    });
  }

  private getCharacteristics(service: NobleService): Promise<Characteristic[]> {
    return new Promise((resolve, reject) => {
      service.discoverCharacteristics([], (error, characteristics) =>
        error ? reject(error) : resolve(characteristics)
      );
    });
  }

  private ensureLoaded(): void {
    if (typeof this.characteristics === "undefined")
      throw new Error("Characteristics have not been loded yet");
  }
}
