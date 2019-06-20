import Peripheral from "./peripheral";
import Characteristic from "./characteristic";
import api, { Api, State } from "./api";

const DE1_NAME = /DE1/;
const SERVICE_UUID = "a000";

export type Connection = "connected" | "disconnected";

export default class DE1 {
  private peripheral: Peripheral = new Peripheral();
  private characteristic: Characteristic = new Characteristic(this.peripheral);

  public async connect(): Promise<Connection> {
    await this.peripheral.connect(DE1_NAME);
    await this.characteristic.mapApiToService(api, SERVICE_UUID);
    return this.connected();
  }

  public async disconnect(): Promise<Connection> {
    await this.peripheral.disconnect();
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

  public connected(): Connection {
    return this.peripheral.isConnected() ? "connected" : "disconnected";
  }

  public async get<Name extends keyof Api, Value = Api[Name]["type"]>(
    name: Name
  ): Promise<Value> {
    return await this.characteristic.read(name);
  }

  public async set<Name extends keyof Api, Value = Api[Name]["type"]>(
    name: Name,
    value: Value
  ): Promise<void> {
    return await this.characteristic.write(name, value);
  }

  public on<Name extends keyof Api, Value = Api[Name]["type"]>(
    name: Name,
    callback: (value: Value) => void
  ): void {
    throw new Error("Not implemented yet");
  }

  public off<Name extends keyof Api, Value = Api[Name]["type"]>(
    name: Name,
    callback?: (value: Value) => void
  ): void {
    throw new Error("Not implemented yet");
  }
}
