import { Peripheral } from "@abandonware/noble";
import { find, connect, disconnect, isConnected } from "./peripheral";

export default class Device {
  private peripheral: Peripheral;

  public async connect(name: RegExp, timeoutAfterMs?: number): Promise<void> {
    if (isConnected(this.peripheral)) return;
    this.peripheral = await find(name, timeoutAfterMs);
    await connect(this.peripheral);
  }

  public async disconnect(): Promise<void> {
    if (!isConnected(this.peripheral)) return;
    await disconnect(this.peripheral);
  }

  public isConnected(): boolean {
    return isConnected(this.peripheral);
  }

  public getPeripheral(): Peripheral {
    return this.peripheral;
  }
}
