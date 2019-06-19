import { Typography } from "antd";
import Circle from "./circle";
const { Title, Text } = Typography;

export default () => (
  <Circle>
    <Title level={2} style={{ marginBottom: 0 }}>
      START
    </Title>
    <Text type="secondary">ESPRESSO</Text>
    <Text type="secondary">ready</Text>
  </Circle>
);
