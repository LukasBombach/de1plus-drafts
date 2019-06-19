import { Timeline, Icon } from "antd";
import Card from "./card";
import Time from "./time";

const { Item } = Timeline;
const loading = <Icon type="loading" />;
const itemStyle = { paddingBottom: "12px" };

export default () => (
  <Card title="Time">
    <Timeline style={{ marginBottom: -40 }}>
      <Item style={itemStyle} dot={loading}>
        <Time>3s</Time> Preinfusion
      </Item>
      <Item style={itemStyle} color="grey">
        <Time>0s</Time> Pouring
      </Item>
      <Item style={itemStyle} color="grey">
        <Time>0s</Time> Total
      </Item>
    </Timeline>
  </Card>
);
