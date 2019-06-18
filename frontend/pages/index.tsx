import { Layout, Row, Col } from "antd";

import Navigation from "../components/navigation";
import StartButton from "../components/startButton";

const { Content, Sider } = Layout;

const goldenRatio = "28%";
const menuHeight = 96;
const contentHeight = `calc(100vh - ${menuHeight}px)`;

const contentStyles = {
  height: contentHeight,
  overflow: "auto"
};

const IndexPage: React.FunctionComponent = ({ children }) => {
  return (
    <Layout>
      <Content style={contentStyles}>{children}</Content>
      <Sider width={goldenRatio}>
        <Row type="flex" justify="space-around" align="middle">
          <Col span={16}>
            <StartButton />
          </Col>
        </Row>
      </Sider>
      <Navigation height={menuHeight} />
    </Layout>
  );
};

export default IndexPage;
