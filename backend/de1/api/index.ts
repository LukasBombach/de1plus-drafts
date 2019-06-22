import state, { State } from "./characteristics/state";
import water, { Water } from "./characteristics/water";
import version, { Versions } from "./characteristics/version";

export { State } from "./characteristics/state";
export { Water } from "./characteristics/water";
export { Versions } from "./characteristics/version";

interface ApiMap {
  state: State;
  water: Water;
  version: Versions;
}

export interface Converter<Value = keyof Api> {
  uuid: string;
  decode?: (buffer: Buffer) => Value;
  encode?: (data: Value) => Buffer;
  notify?: (callback: (data: Value) => void) => void;
  type?: Value;
}

export type ApiKey = keyof ApiMap;
export type ApiValue<Name extends ApiKey> = ApiMap[Name];
export type Api = { [Name in ApiKey]: Converter<ApiValue<Name>> };

const api: Api = {
  state,
  water,
  version
};

export default api;
