import { compose, graphql } from "react-apollo";

import {
  GET_STATE,
  CONNECT,
  DISCONNECT,
  TURN_ON,
  TURN_OFF
} from "./statusQueries";

export default compose(
  graphql(GET_STATE),
  graphql(CONNECT, { name: "connect" }),
  graphql(DISCONNECT, { name: "disconnect" }),
  graphql(TURN_ON, { name: "turnOn" }),
  graphql(TURN_OFF, { name: "turnOff" })
);
