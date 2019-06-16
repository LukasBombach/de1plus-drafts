import { Peripheral } from "@abandonware/noble";
import { connect, disconnect, isConnected } from "../lib/machine/connect";
import { getCharacteristics, Characteristics } from "../lib/characteristics";

export default class DE1 {
  private peripheral: Peripheral = null;
  private characteristics: Characteristics = null;

  public async connect(): Promise<void> {
    if (isConnected(this.peripheral)) return; // todo check implicit return value of noble connect, maybe we can skip this line
    this.peripheral = await connect();
    this.characteristics = await getCharacteristics(this.peripheral);
  }

  public async disconnect(): Promise<void> {
    if (isConnected(this.peripheral)) return; // todo check implicit return value of noble connect, maybe we can skip this line
    await disconnect(this.peripheral);
    this.peripheral = null;
    this.characteristics = null;
  }

  public async turnOn(): Promise<void> {
    this.ensureConnected();
    await this.characteristics.state.write("idle");
  }

  public async turnOff(): Promise<void> {
    this.ensureConnected();
    await this.characteristics.state.write("sleep");
  }

  private ensureConnected(): void {
    if (!isConnected(this.peripheral)) throw new Error("Not connected to DE1");
  }
}
