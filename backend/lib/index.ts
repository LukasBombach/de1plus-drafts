import { Device, Characteristic } from "./bluetooth";

const SERVICE_UUID = "a000";

export default class DE1 {
  private device: Device = new Device();
  private characteristic: Characteristic = new Characteristic(this.device, api);

  public async connect(): Promise<void> {
    await this.device.connect(/DE1/);
    await this.characteristic.loadService(SERVICE_UUID);
  }

  public async disconnect(): Promise<void> {
    await this.device.disconnect();
  }

  public async turnOn(): Promise<void> {
    await this.characteristic.write("state", "idle");
  }

  public async turnOff(): Promise<void> {
    await this.characteristic.write("state", "sleep");
  }
}
