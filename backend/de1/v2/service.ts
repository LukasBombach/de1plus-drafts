import { keyBy } from "lodash";
import { Characteristic as NobleCharacteristic } from "@abandonware/noble";
import Peripheral from "./Peripheral";
import Noble from "./noble";
import { Api, Keys, Values, Converter } from "./api";

interface Characteristics {
  [uuid: string]: NobleCharacteristic;
}

export default class Service {
  private peripheral: Peripheral;
  private uuid: string;
  private api: Api;
  private characteristics: Characteristics;

  constructor(peripheral: Peripheral, uuid: string, api: Api) {
    this.peripheral = peripheral;
    this.uuid = uuid;
    this.api = api;
  }

  public async load(): Promise<void> {
    const service = await Noble.getService(this.peripheral, this.uuid);
    const characteristics = await Noble.getCharacteristics(service);
    this.characteristics = keyBy(characteristics, "uuid");
  }

  public unload(): void {
    this.characteristics = undefined;
  }

  public async read<Name extends Keys, Value = Values<Name>>(name: Name): Promise<Value> {
    this.ensureLoaded();
    const { uuid, decode } = (this.api[name] as any) as Converter<Value>; // TODO any hack
    const buffer = await Noble.read(this.characteristics[uuid]);
    return decode(buffer);
  }

  public async write<Name extends Keys, Value = Values<Name>>(name: Name, value: Value): Promise<void> {
    this.ensureLoaded();
    const { uuid, encode } = (this.api[name] as any) as Converter<Value>; // TODO any hack
    const buffer = encode(value);
    return await Noble.write(this.characteristics[uuid], buffer);
  }

  public on<Name extends Keys>(name: Name, listener: (value: Values<Name>) => void): void {
    throw new Error("Not implemented yet");
  }

  public off<Name extends Keys>(name: Name, listener?: (value: Values<Name>) => void): void {
    throw new Error("Not implemented yet");
  }

  private ensureLoaded(): boolean {
    if (typeof this.characteristics === "undefined") throw new Error("Characteristics have not been loded yet");
    return true;
  }
}
