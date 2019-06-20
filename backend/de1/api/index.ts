import state from "./characteristics/state";
import water from "./characteristics/water";
import version from "./characteristics/version";

export type ApiKey = keyof Api;
export type ApiValue<Name extends ApiKey> = Api[Name]["type"];
// export type TypeOfApiValue<N = keyof Api> = ApiValue<N>;

export interface Api {
  state: Converter<"state">;
  water: Converter<"water">;
  version: Converter<"version">;
}

export interface Converter<Name extends ApiKey> {
  uuid: string;
  decode?: (buffer: Buffer) => ApiValue<Name>;
  encode?: (data: ApiValue<Name>) => Buffer;
  notify?: (callback: (data: ApiValue<Name>) => void) => void;
  type?: ApiValue<Name>;
}

const api: Api = {
  state,
  water,
  version
};

export default api;
