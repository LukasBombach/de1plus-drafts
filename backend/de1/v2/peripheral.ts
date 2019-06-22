import Noble from "./noble";
import Scanner from "./scanner";

export default class Peripheral {
  private name: RegExp;
  private peripheral: Noble.Peripheral;

  constructor(name: RegExp | string) {
    this.name = new RegExp(name);
  }

  public async connect(): Promise<boolean> {
    if (this.isConnected()) return this.isConnected();
    this.peripheral = await Scanner.findPeripheral(this.name);
    await Noble.connect(this.peripheral);
    return this.isConnected();
  }

  public async disconnect(): Promise<boolean> {
    if (!this.isConnected()) return this.isConnected();
    await Noble.disconnect(this.peripheral);
    return this.isConnected();
  }

  public isConnected(): boolean {
    if (typeof this.peripheral === "undefined") return false;
    return this.peripheral.state === "connected";
  }

  public noble(): Noble.Peripheral {
    return this.peripheral;
  }
}
