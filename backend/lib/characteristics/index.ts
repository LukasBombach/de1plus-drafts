import { keyBy } from "lodash";
import {
  Peripheral,
  Characteristic as NobleCharacteristic
} from "@abandonware/noble";
import * as nobleAsPromised from "../noble-as-promised";
import { Api, Characteristic } from "./characteristic";
import state, { State } from "./api/state";

const SERVICE_UUID = "a000";

interface CharacteristicsMap {
  [uuid: string]: NobleCharacteristic;
}

export interface Characteristics {
  state: Characteristic<State>;
}

export async function getCharacteristics(
  peripheral: Peripheral
): Promise<Characteristics> {
  const characteristics = await getCharacteristicsFromDe1(peripheral);
  return {
    state: apiFor(state, characteristics[state.uuid])
  };
}

function apiFor<T>(
  api: Api<T>,
  nobleCharacteristic: NobleCharacteristic
): Characteristic<T> {
  const read = async () =>
    nobleAsPromised.readCharacteristic(nobleCharacteristic);
  const write = async () =>
    nobleAsPromised.writeCharacteristic(nobleCharacteristic);
}

async function getCharacteristicsFromDe1(
  peripheral: Peripheral
): Promise<CharacteristicsMap> {
  const service = await nobleAsPromised.getService(peripheral, [SERVICE_UUID]);
  const characteristics = await nobleAsPromised.getCharacteristics(service);
  return keyBy(characteristics, "uuid");
}
