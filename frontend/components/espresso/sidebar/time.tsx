import { Typography } from "antd";
const { Text } = Typography;

const Time: React.FunctionComponent = ({ children }) => (
  <Text
    type="secondary"
    style={{ display: "inline-block", width: 28, textAlign: "center" }}
  >
    {children}
  </Text>
);

export default Time;
