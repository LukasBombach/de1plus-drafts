import { keyBy } from "lodash";
import { Characteristic } from "@abandonware/noble";
import {
  getService,
  getCharacteristics,
  read,
  write
} from "./util/nobleAsPromised";
import Peripheral from "./peripheral";

interface Characteristics {
  [uuid: string]: Characteristic;
}

export default class Service {
  private peripheral: Peripheral;
  private characteristics: Characteristics;

  public static async load(
    peripheral: Peripheral,
    uuid: string
  ): Promise<Service> {
    const service = new Service(peripheral);
    await service.load(uuid);
    return service;
  }

  private constructor(peripheral: Peripheral) {
    this.peripheral = peripheral;
  }

  private async load(uuid: string): Promise<void> {
    const service = await getService(this.peripheral.noble(), uuid);
    const characteristics = await getCharacteristics(service);
    this.characteristics = keyBy(characteristics, "uuid");
  }

  public async read(uuid: string): Promise<Buffer> {
    this.ensureLoaded();
    return read(this.characteristics[uuid]);
  }

  public async write(uuid: string, buffer: Buffer): Promise<void> {
    this.ensureLoaded();
    return write(this.characteristics[uuid], buffer);
  }

  private ensureLoaded(): void {
    if (typeof this.characteristics === "undefined")
      throw new Error("Characteristics have not been loded yet");
  }
}
