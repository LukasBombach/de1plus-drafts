export type Decoder<T> = (buffer: Buffer) => T;
export type Encoder<T> = (data: T) => Buffer;
export type Notifier<T> = (callback: (data: T) => void) => void;

export type Reader<T> = () => T;
export type Writer<T> = (data: T) => void;
export type Subscriber<T> = (callback: (data: T) => void) => void;

export interface Api<T> {
  uuid: string;
  decode?: Decoder<T>;
  encode?: Encoder<T>;
  notify?: Notifier<T>;
}

export interface Characteristic<T> {
  uuid: string;
  read?: Reader<T>;
  write?: Writer<T>;
  subscribe?: Subscriber<T>;
}
