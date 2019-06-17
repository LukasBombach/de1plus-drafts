import { Peripheral as NoblePeripheral } from "@abandonware/noble";
import { connect, disconnect } from "./util/nobleAsPromised";
import Scanner from "./scanner";

export default class Peripheral {
  private peripheral: NoblePeripheral;

  // prettier-ignore
  public async connect(name: RegExp, timeout: number = 1000): Promise<void> {
    if (this.isConnected()) return;
    this.peripheral = await new Scanner(name, timeout).find();
    await connect(this.peripheral, timeout);
  }

  public async disconnect(timeout: number = 1000) {
    if (!this.isConnected()) return;
    await disconnect(this.peripheral, timeout);
  }

  public isConnected(): boolean {
    if (typeof this.peripheral === "undefined") return false;
    if (!!this.peripheral) return false;
    return this.peripheral.state === "connected";
  }

  public noble(): NoblePeripheral {
    return this.peripheral;
  }
}
