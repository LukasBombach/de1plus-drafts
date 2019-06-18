import { Row, Col } from "antd";
import StartButton from "../components/startButton";

const IndexPage: React.FunctionComponent = () => {
  return (
    <Row type="flex" justify="space-between" gutter={32}>
      <Col span={19}>Content</Col>
      <Col span={5}>
        <StartButton />
      </Col>
    </Row>
  );
};

export default IndexPage;
