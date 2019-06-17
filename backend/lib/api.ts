import state, { State } from "./api/characteristics/state";
import { Converter } from "./api/characteristic";

export interface Api {
  state: Converter<State>;
}

const api: Api = { state };

export default api;
