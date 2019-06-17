import Service from "./service";
import { Api } from "../characteristics/characteristic";
import Device from "./device";

export default class Characteristic {
  private device: Device;
  private service: Service;
  private api: Api;

  constructor(device: Device, api: Api) {
    this.device = device;
    this.api = api;
  }

  public async loadService(uuid: string): Promise<void> {
    this.ensureConnected();
    this.service = await Service.load(this.device, uuid);
  }

  public async read(name: string, value: any): Promise<any> {
    this.ensureConnected();
  }

  public async write(name: string, value: any): Promise<void> {
    this.ensureConnected();
  }

  private ensureConnected(): void {
    if (!this.device.isConnected()) throw new Error("Not connected to DE1");
  }
}
