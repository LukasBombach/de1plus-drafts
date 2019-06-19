import { Mutation, Query, QueryResult } from "react-apollo";
import {
  GET_STATE,
  CONNECT,
  DISCONNECT,
  TURN_ON,
  TURN_OFF,
  State
} from "./statusQueries";

export interface LoadStatusProps {
  children: (params: LoadStatusParams) => React.ReactNode;
}

export interface LoadStatusParams {
  loading: boolean;
  error?: Error;
  status: string;
}

const LoadStatus: React.FunctionComponent<LoadStatusProps> = props => {
  return (
    <Query<State> query={GET_STATE}>
      {results => props.children(childParams(results))}
    </Query>
  );
};

function childParams(results: QueryResult<State>): LoadStatusParams {
  const status = getStatusString(results);
  const { error, loading, data } = results;
  if (error) console.error(error);
  if (!data) console.error(new Error("Did not fetch any data"));
  return { status, error, loading };
}

// todo make return type Enum based on de1 lib
function getStatusString({ loading, error, data }: QueryResult<State>): string {
  if (error) return "error";
  if (loading) return "loading";
  if (!data) return "error";
  if (!data.connected) return "disconnected";
  return data.state;
}

export default LoadStatus;
