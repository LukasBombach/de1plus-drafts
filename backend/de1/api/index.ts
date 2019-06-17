import state, { State } from "./characteristics/state";

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
}

const api: Api = { state };

export default api;
