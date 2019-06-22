import { keyBy } from "lodash";
import { Characteristic as NobleCharacteristic } from "@abandonware/noble";
import Peripheral from "./Peripheral";
import Noble from "./noble";

interface Characteristics {
  [uuid: string]: NobleCharacteristic;
}

export default class Service {
  private peripheral: Peripheral;
  private uuid: string;
  private characteristics: Characteristics;

  constructor(peripheral: Peripheral, uuid: string, characteristics: Error) {
    this.peripheral = peripheral;
    this.uuid = uuid;
    this.characteristics = characteristics;
  }

  public async load(): Promise<void> {
    const service = await Noble.getService(this.peripheral, this.uuid);
    const characteristics = await Noble.getCharacteristics(service);
    this.characteristics = keyBy(characteristics, "uuid");
  }

  public unload(): void {
    this.characteristics = undefined;
  }

  public async read(uuid: string): Promise<Buffer> {
    return this.ensureLoaded() && Noble.read(this.characteristics[uuid]);
  }

  public async write(uuid: string, buffer: Buffer): Promise<void> {
    return this.ensureLoaded() && Noble.write(this.characteristics[uuid], buffer);
  }

  public async on() {
    throw new Error("Not implemented yet");
  }

  public async off() {
    throw new Error("Not implemented yet");
  }

  private ensureLoaded(): boolean {
    if (typeof this.characteristics === "undefined") throw new Error("Characteristics have not been loded yet");
    return true;
  }
}
