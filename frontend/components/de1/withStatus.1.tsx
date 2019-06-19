import { compose, graphql, ChildDataProps, DataProps } from "react-apollo";
import { State } from "../../../backend/de1/api/characteristics/state";

import {
  GET_STATE,
  CONNECT,
  DISCONNECT,
  TURN_ON,
  TURN_OFF
} from "./statusQueries";

export type Status = State | "error" | "loading" | "disconnected";

export interface Props {
  error?: Error;
  status: Status;
}

type Response = {
  connected: boolean;
  state: string;
};
type InputProps = {};
type Variables = {};
type ChildProps = ChildDataProps<InputProps, Response, Variables>;

export default compose(
  graphql<InputProps, Response, Variables, ChildProps>(GET_STATE),
  graphql(CONNECT),
  graphql(DISCONNECT),
  graphql(TURN_ON),
  graphql(TURN_OFF)
);

function getStatusString({ loading, error, connected, state }: any): Status {
  if (error) return "error";
  if (loading) return "loading";
  if (!connected) return "disconnected";
  return state;
}

function props({ data }): Props {
  const status = getStatusString(data);
  const { error } = data;
  return { status, error };
}

{
  props: ({ data }): DataProps<Response, Variables> => {
    const status = getStatusString(data);
    const { error } = data;
    return {
      data: { status, error }
    } /*  as DataProps<Response, Variables> */;
  };
}
