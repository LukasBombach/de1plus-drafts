import { Query, QueryResult } from "react-apollo";
import gql from "graphql-tag";

export const stateQuery = gql`
  query {
    connected
    state
  }
`;

interface Data {
  connected: boolean;
  state: string;
}

export interface LoadStatusParams {
  loading: boolean;
  error?: Error;
  status: string;
}

export interface LoadStatusProps {
  children: (params: LoadStatusParams) => React.ReactNode;
}

const LoadStatus: React.FunctionComponent<LoadStatusProps> = props => {
  return (
    <Query<Data> query={stateQuery}>
      {results => props.children(childParams(results))}
    </Query>
  );
};

function childParams(results: QueryResult<Data>): LoadStatusParams {
  const status = getStatusString(results);
  const { error, loading, data } = results;
  if (error) console.error(error);
  if (!data) console.error(new Error("Did not fetch any data"));
  return { status, error, loading };
}

// todo make return type Enum based on de1 lib
function getStatusString({ loading, error, data }: QueryResult<Data>): string {
  if (error) return "error";
  if (loading) return "loading";
  if (!data) return "error";
  if (!data.connected) return "disconnected";
  return data.state;
}

export default LoadStatus;
