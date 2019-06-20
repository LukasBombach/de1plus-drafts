import Service from "./service";
import { Api, Encoder } from "./api";
import Peripheral from "./peripheral";

export default class Characteristic {
  private peripheral: Peripheral;
  private service: Service;
  private api: Api;

  constructor(peripheral: Peripheral) {
    this.peripheral = peripheral;
  }

  public async mapApiToService(api: Api, uuid: string): Promise<void> {
    this.ensureConnected();
    this.service = await Service.load(this.peripheral, uuid);
    this.api = api;
  }

  public async read<Name extends keyof Api, Value = Api[Name]["type"]>(
    name: Name
  ): Promise<Value> {
    this.ensureConnected();
    const { uuid, decode } = this.api[name];
    const buffer = await this.service.read(uuid);
    return decode(buffer);
  }

  public async write<Name extends keyof Api, Value = Api[Name]["type"]>(
    name: Name,
    value: Value
  ): Promise<void> {
    this.ensureConnected();
    const { uuid, encode } = this.api[name];
    const buffer = encode(value);
    return await this.service.write(uuid, buffer);
  }

  private ensureConnected(): void {
    if (!this.peripheral.isConnected()) throw new Error("Not connected to DE1");
  }
}
