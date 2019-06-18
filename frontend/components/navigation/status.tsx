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
  key: string;
}

const State: React.FunctionComponent<StateProps> = props => {
  return (
    <Query query={stateQuery}>
      {(results: StateQueryResult) => (
        <MenuItem {...props}>{getStatusString(results)}</MenuItem>
      )}
    </Query>
  );
};

const MenuItem: React.FunctionComponent<StateProps> = ({
  children,
  ...props
}) => {
  return <Menu.Item {...props}>{children}</Menu.Item>;
};

function getStatusString({ loading, error, data }: StateQueryResult): string {
  if (error) console.log(Error);
  if (error) return "Error";
  if (loading) return "Loading";
  if (!data.connected) return "Disconnected";
  return data.state;
}

export default State;
