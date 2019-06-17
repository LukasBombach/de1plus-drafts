import { Query } from "react-apollo";
import gql from "graphql-tag";

export const stateQuery = gql`
  query {
    de1 {
      connected
      state
    }
  }
`;

interface StateQueryResult {
  loading: boolean;
  error?: Error;
  data: Data;
}

interface Data {
  de1: DE1;
}

interface DE1 {
  connected: boolean;
  state: string;
}

export default function State() {
  return (
    <Query query={stateQuery}>
      {({
        loading,
        error,
        data: {
          de1: { connected, state }
        }
      }: StateQueryResult) => {
        if (error) return <pre>Error</pre>;
        if (loading) return <pre>Loading</pre>;

        return (
          <pre>
            Connected: {connected.toString()}, State: {state}
          </pre>
        );
      }}
    </Query>
  );
}
