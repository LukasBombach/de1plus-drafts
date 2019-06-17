import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Menu } from "antd";

export const stateQuery = gql`
  query {
    connected
    state
  }
`;

interface StateQueryResult {
  loading: boolean;
  error?: Error;
  data: Data;
}

interface Data {
  connected: boolean;
  state: string;
}

export interface StateProps {
  style: React.CSSProperties;
}

const State: React.FunctionComponent<StateProps> = ({ style }) => {
  return (
    <Query query={stateQuery}>
      {(results: StateQueryResult) => getStatus(results, style)}
    </Query>
  );
};

function getStatus(result: StateQueryResult, style: React.CSSProperties) {
  return <Menu.Item style={style}>{getStatusString(result)}</Menu.Item>;
}

function getStatusString({ loading, error, data }: StateQueryResult): string {
  if (error) console.log(Error);
  if (error) return "Error";
  if (loading) return "Loading";
  if (!data.connected) return "Disconnected";
  return data.state;
}

export default State;
