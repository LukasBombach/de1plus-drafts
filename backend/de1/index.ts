import Peripheral from "./peripheral";
import Characteristic from "./characteristic";
import api from "./api";
import { State } from "./api/characteristics/state";
import { Water } from "./api/characteristics/water";
import { Versions } from "./api/characteristics/version";

const DE1_NAME = /DE1/;
const SERVICE_UUID = "a000";

export default class DE1 {
  private peripheral: Peripheral = new Peripheral();
  private characteristic: Characteristic = new Characteristic(this.peripheral);

  public async connect(): Promise<void> {
    await this.peripheral.connect(DE1_NAME);
    await this.characteristic.mapApiToService(api, SERVICE_UUID);
  }

  public async disconnect(): Promise<void> {
    await this.peripheral.disconnect();
  }

  public async turnOn(): Promise<void> {
    const state = await this.characteristic.read("state");
    if (state !== "sleep") return;
    await this.characteristic.write("state", "idle");
  }

  public async turnOff(): Promise<void> {
    await this.characteristic.write("state", "sleep");
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
