import state, { State } from "./characteristics/state";
import water, { Water } from "./characteristics/water";
import version, { Versions } from "./characteristics/version";

export type ApiKey = keyof ApiMap;
export type ApiValue<Name extends ApiKey> = ApiMap[Name];

export interface Converter<Name extends ApiKey, Value = ApiValue<Name>> {
  uuid: string;
  decode?: (buffer: Buffer) => Value;
  encode?: (data: Value) => Buffer;
  notify?: (callback: (data: Value) => void) => void;
}

interface ApiMap {
  state: State;
  water: Water;
  version: Versions;
}

/* interface Api {
  [key: ApiKey]: Converter<key>;
} */

const api = {
  state,
  water,
  version
};

export default api;
