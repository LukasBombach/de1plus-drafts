import state, { State } from "./characteristics/state";
import water, { Water } from "./characteristics/water";
import version, { Versions } from "./characteristics/version";

export { State } from "./characteristics/state";
export { Water } from "./characteristics/water";
export { Versions } from "./characteristics/version";

export interface Converter<T> {
  uuid: string;
  decode?: Decoder<T>;
  encode?: Encoder<T>;
  notify?: Notifier<T>;
}

export type Decoder<T> = (buffer: Buffer) => T;
export type Encoder<T> = (data: T) => Buffer;
export type Notifier<T> = (callback: (data: T) => void) => void;

export interface Api {
  state: Converter<State>;
  water: Converter<Water>;
  version: Converter<Versions>;
}

const api: Api = { state, water, version };

export default api;
