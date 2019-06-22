import { Peripheral } from "@abandonware/noble";
import { promisify } from "es6-promisify";
import timeout from "../v2/timeout";

const connect = (peripheral: Peripheral) => promisify<void>(peripheral.connect);
const disconnect = (peripheral: Peripheral) => promisify<void>(peripheral.disconnect);

export default class Noble {
  public static async connect(peripheral: Peripheral, ms?: number): Promise<void> {
    return Promise.race([connect(peripheral), timeout("connect", ms)]) as Promise<void>;
  }

  public static async disconnect(peripheral: Peripheral, ms?: number): Promise<void> {
    return Promise.race([disconnect(peripheral), timeout("disconnect", ms)]) as Promise<void>;
  }
}
