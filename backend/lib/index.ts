import { Peripheral } from "@abandonware/noble";
import { connect, disconnect } from "../lib/machine/connect";
import { states } from "../lib/machine/state";
import { getCharacteristics, Characteristics } from "../lib/characteristics";
import { getStateAsBuffer } from "../lib/machine/state";

export default class DE1 {
  private peripheral: Peripheral = null;
  private characteristics: Characteristics = null;

  public async connect(): Promise<DE1> {
    if (this.isConnected()) return this;
    this.peripheral = await connect();
    this.characteristics = await getCharacteristics(this.peripheral);
    return this;
  }

  public async disconnect(): Promise<DE1> {
    if (!this.isConnected()) return this;
    await disconnect(this.peripheral);
    this.peripheral = null;
    return this;
  }

  public async turnOn(): Promise<DE1> {
    this.ensureConnected();
    const currentState = await this.characteristics.state.read();
    const newState = { state: states.idle };
    if (currentState.state === states.sleep) {
      await this.characteristics.state.write(newState);
    }
    return this;
  }
  public async turnOff(): Promise<DE1> {
    this.ensureConnected();
    const currentState = await this.characteristics.state.read();
    const newState = { state: states.sleep };
    if (currentState.state === states.idle) {
      await this.characteristics.state.write(newState);
    }
    return this;
  }

  public isConnected(): boolean {
    return this.peripheral !== null && this.peripheral.state === "connected";
  }

  private ensureConnected(): void {
    if (!this.isConnected()) throw new Error("Not connected to DE1");
  }
}
