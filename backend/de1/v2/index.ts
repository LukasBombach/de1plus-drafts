import Peripheral from "./peripheral";
import Service from "./service";
import { DE1_NAME, SERVICE_UUID } from "./settings";
import characteristics, { Keys, Values, State } from "./characteristics";

export default class DE1 {
  private peripheral: Peripheral;
  private service: Service;

  constructor() {
    this.peripheral = new Peripheral(DE1_NAME);
    this.service = new Service(this.peripheral, SERVICE_UUID, characteristics);
  }

  public async connect(): Promise<boolean> {
    await this.peripheral.connect();
    await this.service.load();
    return this.connected();
  }

  public async disconnect(): Promise<boolean> {
    await this.peripheral.disconnect();
    await this.service.unload();
    return this.connected();
  }

  public async turnOn(): Promise<State> {
    const state = await this.get("state");
    if (state !== "sleep") return state;
    await this.set("state", "idle");
    return await this.get("state");
  }

  public async turnOff(): Promise<State> {
    await this.set("state", "sleep");
    return await this.get("state");
  }

  public connected(): boolean {
    return this.peripheral.isConnected();
  }

  public async get<Name extends Keys>(name: Name): Promise<Values<Name>> {
    return await this.service.read(name);
  }

  public async set<Name extends Keys>(name: Name, value: Values<Name>): Promise<void> {
    return await this.service.write(name, value);
  }

  public on<Name extends Keys>(name: Name, callback: (value: Values<Name>) => void): void {
    throw new Error("Not implemented yet");
  }

  public off<Name extends Keys>(name: Name, callback?: (value: Values<Name>) => void): void {
    throw new Error("Not implemented yet");
  }
}
