import gql from "graphql-tag";

export const GET_STATE = gql`
  query {
    connected
    state
  }
`;

export const CONNECT = gql`
  mutation {
    connect
  }
`;

export const DISCONNECT = gql`
  mutation {
    disconnect
  }
`;

export const TURN_ON = gql`
  mutation {
    turnOn
  }
`;

export const TURN_OFF = gql`
  mutation {
    turnOff
  }
`;

export interface State {
  connected: boolean;
  state: string;
}
