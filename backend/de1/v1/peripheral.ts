import { Peripheral as NoblePeripheral } from "@abandonware/noble";
import { connect, disconnect } from "./util/nobleAsPromised";
import Scanner from "./scanner";

export default class Peripheral {
  private peripheral: NoblePeripheral;

  // prettier-ignore
  public async connect(name: RegExp, timeout?: number): Promise<boolean> {
    if (this.isConnected()) return this.isConnected();
    this.peripheral = await Scanner.findPeripheral(name, timeout);
    await connect(this.peripheral, timeout);
    return this.isConnected();
  }

  public async disconnect(timeout?: number): Promise<boolean> {
    if (!this.isConnected()) return this.isConnected();
    await disconnect(this.peripheral, timeout);
    return this.isConnected();
  }

  public isConnected(): boolean {
    if (typeof this.peripheral === "undefined") return false;
    if (this.peripheral === null) return false;
    return this.peripheral.state === "connected";
  }

  public noble(): NoblePeripheral {
    return this.peripheral;
  }
}
