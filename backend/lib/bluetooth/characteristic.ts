import { getService } from "./noble-as-promised";

export interface Characteristics {
  [uuid: string]: Characteristic;
}

export default class Characteristic {
  public static async findAllForService(uuid: string): Characteristics {
    const service = await getService(peripheral, [uuid]);
  }
}
