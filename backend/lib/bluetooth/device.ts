import { Peripheral } from "@abandonware/noble";
import { find, connect, disconnect, isConnected } from "./connect";
import findCharacteristics from "./characteristic";

const SERVICE_UUID = "a000";

export default class Device {
  private peripheral: Peripheral;
  private characteristics: Characteristics;

  public static async connectByName(matcher: RegExp, timeoutAfterMs?: number) {
    const peripheral = await find(matcher, timeoutAfterMs);
    const device = new Device(peripheral);
    await device.connect();
    return device;
  }

  constructor(peripheral: Peripheral) {
    this.peripheral = peripheral;
  }

  public async connect(): Promise<Device> {
    if (isConnected(this.peripheral)) return this;
    await connect(this.peripheral);
    const characteristics = findCharacteristics(this.peripheral, SERVICE_UUID);
    return this;
  }

  public async disconnect(): Promise<Device> {
    if (!isConnected(this.peripheral)) return this;
    await disconnect(this.peripheral);
    return this;
  }

  public isConnected(): boolean {
    return isConnected(this.peripheral);
  }

  public async read(uuid: string): number {
    return await readCharacteristic(this.characteristics[uuid]);
  }
}
