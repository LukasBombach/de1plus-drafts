import { Peripheral } from "@abandonware/noble";
import characteristics from "../characteristics";

export interface States {
  [key: string]: number;
}

export const states: States = {
  sleep: 0x00,
  goingToSleep: 0x01,
  idle: 0x02,
  busy: 0x03,
  espresso: 0x04,
  steam: 0x05,
  hotWater: 0x06,
  shortCal: 0x07,
  selfTest: 0x08,
  longCal: 0x09,
  descale: 0x0a,
  fatalError: 0x0b,
  init: 0x0c,
  noRequest: 0x0d,
  skipToNext: 0x0e,
  hotWaterRinse: 0x0f,
  steamRinse: 0x10,
  refill: 0x11,
  clean: 0x12,
  inBootLoader: 0x13,
  airPurge: 0x14
};

export async function getState(peripheral: Peripheral): number {
  return await characteristics.stateChange.read();
}

export function setState(peripheral: Peripheral): boolean {}
