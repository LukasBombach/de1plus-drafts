import { Peripheral } from "@abandonware/noble";
import { connect, disconnect } from "../lib/machine/connect";

export default class DE1 {
  private peripheral: Peripheral = null;

  public async connect(): Promise<DE1> {
    if (this.isConnected()) return this;
    this.peripheral = await connect();
    return this;
  }

  public async disconnect(): Promise<DE1> {
    if (!this.isConnected()) return this;
    await disconnect(this.peripheral);
    this.peripheral = null;
    return this;
  }

  public isConnected(): boolean {
    return this.peripheral !== null;
  }
}
