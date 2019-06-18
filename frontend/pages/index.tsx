import { Layout } from "antd";
import Navigation from "../components/navigation";
const { Content } = Layout;

export interface IndexPageProps {
  menuHeight: number;
}

const IndexPage: React.FunctionComponent<IndexPageProps> = ({
  children,
  menuHeight = 96
}) => {
  const contentStyles = {
    height: `calc(100vh - ${menuHeight}px)`,
    overflow: "auto"
  };

  return (
    <Layout>
      <Content style={contentStyles}>{children}</Content>
      <Navigation height={menuHeight} />
    </Layout>
  );
};

export default IndexPage;
