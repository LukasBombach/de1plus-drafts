import { Menu } from "antd";
import LoadStatus from "../de1/loadStatus";

export interface StateProps {
  style?: React.CSSProperties;
  key?: string;
}

const State: React.FunctionComponent<StateProps> = props => {
  return (
    <LoadStatus>
      {({ status }) => <Menu.Item {...props}>{status}</Menu.Item>}
    </LoadStatus>
  );
};

export default State;
