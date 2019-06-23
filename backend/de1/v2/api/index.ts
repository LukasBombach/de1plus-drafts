import state, { State } from "./characteristics/state";
import water, { Water } from "./characteristics/water";
import version, { Versions } from "./characteristics/version";

export { State } from "./characteristics/state";
export { Water } from "./characteristics/water";
export { Versions } from "./characteristics/version";

export interface Converter<Value = keyof Api> {
  uuid: string;
  decode?: (buffer: Buffer) => Value;
  encode?: (data: Value) => Buffer;
  notify?: (callback: (data: Value) => void) => void;
  type?: Value;
}

export type Keys = keyof ApiMap;
export type Values<Name extends Keys> = ApiMap[Name];
export type Api = { [Name in Keys]: Converter<Values<Name>> };

interface ApiMap {
  state: State;
  water: Water;
  version: Versions;
}

const api: Api = {
  state,
  water,
  version
};

export default api;
