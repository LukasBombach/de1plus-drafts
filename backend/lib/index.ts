import { Peripheral } from "@abandonware/noble";
// import { connect, disconnect, isConnected } from "./bluetooth/connect";
// import { getCharacteristics, Characteristics } from "./characteristics";

import Device from "./bluetooth";

export default class DE1 {
  private device: Device = null;
  //private characteristics: Characteristics = null;

  public async connect(): Promise<void> {
    this.device = await Device.connectByName(/DE1/);
  }

  public async disconnect(): Promise<void> {
    await this.device.disconnect();
  }

  public async turnOn(): Promise<void> {
    this.ensureConnected();
    // await this.characteristics.state.write("idle");
  }

  public async turnOff(): Promise<void> {
    this.ensureConnected();
    // await this.characteristics.state.write("sleep");
  }

  private ensureConnected(): void {
    if (!this.device.isConnected()) throw new Error("Not connected to DE1");
  }
}
