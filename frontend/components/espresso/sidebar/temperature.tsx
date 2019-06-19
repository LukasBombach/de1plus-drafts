import { Typography } from "antd";
import Card from "./card";

const { Text } = Typography;

const Temperature: React.FunctionComponent = ({ children }) => (
  <Text type="secondary" style={{ display: "inline-block", width: 60 }}>
    {children}
  </Text>
);

export default () => (
  <Card title="Temperature">
    <div style={{ marginTop: -12 }}>
      <Temperature>195°F</Temperature> Goal
      <br />
      <Temperature>189°F</Temperature> Metal
    </div>
  </Card>
);
