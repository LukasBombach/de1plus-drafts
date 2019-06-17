import { Peripheral } from "@abandonware/noble";
import Peripheral from "./peripheral";

export default class Device {
  private peripheral: Peripheral;

  public async connect(name: RegExp, timeoutAfterMs?: number): Promise<void> {
    if (Peripheral.isConnected(this.peripheral)) return;
    this.peripheral = await Peripheral.find(name, timeoutAfterMs);
    await connect(this.peripheral);
  }

  public async disconnect(): Promise<void> {
    if (!Peripheral.isConnected(this.peripheral)) return;
    await disconnect(this.peripheral);
  }

  public isConnected(): boolean {
    return Peripheral.isConnected(this.peripheral);
  }

  public getPeripheral(): Peripheral {
    return this.peripheral;
  }
}
