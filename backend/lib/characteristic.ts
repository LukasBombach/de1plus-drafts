import Service from "./service";
import { Api } from "./characteristics/characteristic";
import Device from "./device";

export default class Characteristic {
  private device: Device;
  private service: Service;
  private api: Api;

  constructor(device: Device) {
    this.device = device;
  }

  public async loadService(uuid: string, api: Api): Promise<void> {
    this.ensureConnected();
    this.service = await Service.load(this.device, uuid);
    this.api = api;
  }

  public async read(name: string, value: any): Promise<any> {
    this.ensureConnected();
    const { uuid, decode } = this.api[name];
    const buffer = await this.service.read(uuid);
    return decode(buffer);
  }

  public async write(name: string, value: any): Promise<void> {
    this.ensureConnected();
    const { uuid, encode } = this.api[name];
    const buffer = encode(value);
    return await this.service.write(uuid, buffer);
  }

  private ensureConnected(): void {
    if (!this.device.isConnected()) throw new Error("Not connected to DE1");
  }
}
