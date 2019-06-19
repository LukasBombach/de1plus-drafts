import Peripheral from "./peripheral";
import Characteristic from "./characteristic";
import api, { State, Water, Versions } from "./api";

const DE1_NAME = /DE1/;
const SERVICE_UUID = "a000";

export default class DE1 {
  private peripheral: Peripheral = new Peripheral();
  private characteristic: Characteristic = new Characteristic(this.peripheral);

  public async connect(): Promise<State> {
    await this.peripheral.connect(DE1_NAME);
    await this.characteristic.mapApiToService(api, SERVICE_UUID);
    return await this.characteristic.read("state");
  }

  public async disconnect(): Promise<boolean> {
    await this.peripheral.disconnect();
    return true;
  }

  public async turnOn(): Promise<State> {
    const state = await this.characteristic.read("state");
    if (state !== "sleep") return;
    await this.characteristic.write("state", "idle");
    return await this.characteristic.read("state");
  }

  public async turnOff(): Promise<State> {
    await this.characteristic.write("state", "sleep");
    return await this.characteristic.read("state");
  }

  public connected(): boolean {
    return this.peripheral.isConnected();
  }

  public async state(): Promise<State> {
    return await this.characteristic.read("state");
  }

  public async water(): Promise<Water> {
    return await this.characteristic.read("water");
  }

  public async version(): Promise<Versions> {
    return await this.characteristic.read("version");
  }
}
