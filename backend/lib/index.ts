import Peripheral from "./peripheral";
import Characteristic from "./characteristic";
import api from "./api";

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
    await this.characteristic.write("state", "idle");
  }

  public async turnOff(): Promise<void> {
    await this.characteristic.write("state", "sleep");
  }

  public isConnected(): boolean {
    return this.peripheral.isConnected();
  }
}
