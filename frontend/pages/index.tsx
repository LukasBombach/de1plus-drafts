import { Layout } from "antd";
import Navigation from "../components/navigation";
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
      <Sider width={goldenRatio}>right sidebar</Sider>
      <Navigation height={menuHeight} />
    </Layout>
  );
};

export default IndexPage;
