import { keyBy } from "lodash";
import {
  Peripheral,
  Characteristic as NobleCharacteristic
} from "@abandonware/noble";
import * as nobleAsPromised from "../bluetooth/noble-as-promised";
import { Api, Characteristic } from "../api/characteristic";
import state, { State } from "../api/characteristics/state";

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
  const { uuid } = api;
  const read = readFromNoble<T>(api, nobleCharacteristic);
  const write = writeToNoble<T>(api, nobleCharacteristic);
  return { uuid, read, write };
}

function readFromNoble<T>(
  api: Api<T>,
  nobleCharacteristic: NobleCharacteristic
) {
  return async () => {
    const buffer = await nobleAsPromised.readCharacteristic(
      nobleCharacteristic
    );
    return () => api.decode(buffer);
  };
}

function writeToNoble<T>(
  api: Api<T>,
  nobleCharacteristic: NobleCharacteristic
) {
  return async (data: T) => {
    const buffer = api.encode(data);
    await nobleAsPromised.writeCharacteristic(nobleCharacteristic, buffer);
  };
}

async function getCharacteristicsFromDe1(
  peripheral: Peripheral
): Promise<CharacteristicsMap> {
  const service = await nobleAsPromised.getService(peripheral, [SERVICE_UUID]);
  const characteristics = await nobleAsPromised.getCharacteristics(service);
  return keyBy(characteristics, "uuid");
}
