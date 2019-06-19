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
  graphql(CONNECT),
  graphql(DISCONNECT),
  graphql(TURN_ON),
  graphql(TURN_OFF)
);
