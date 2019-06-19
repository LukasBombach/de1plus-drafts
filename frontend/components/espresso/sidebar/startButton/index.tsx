import { Typography } from "antd";
import Circle from "./circle";
const { Title, Text } = Typography;

export interface StartButtonProps {
  size?: string;
}

const StartButton: React.FunctionComponent<StartButtonProps> = ({ size }) => (
  <Circle size={size}>
    <Title level={2} style={{ marginBottom: 0, marginTop: 6 }}>
      START
    </Title>
    <Text type="secondary">ESPRESSO</Text>
    <Text type="secondary">ready</Text>
  </Circle>
);

export default StartButton;
