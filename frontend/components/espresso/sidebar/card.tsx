import { Card } from "antd";

export interface SidebarCardProps {
  title: string;
}

const SidebarCard: React.FunctionComponent<SidebarCardProps> = ({
  children,
  title
}) => (
  <Card size="small" title={title} bordered={false} headStyle={{ border: 0 }}>
    {children}
  </Card>
);

export default SidebarCard;
