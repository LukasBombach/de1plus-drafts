import { Timeline, Icon } from "antd";
import Card from "./card";
import Time from "./time";

const { Item } = Timeline;

const loading = <Icon type="loading" />;

export default () => (
  <Card title="Time">
    <Timeline>
      <Item dot={loading}>
        <Time>3s</Time> Preinfusion
      </Item>
      <Item color="grey">
        <Time>0s</Time> Pouring
      </Item>
      <Item color="grey">
        <Time>0s</Time> Total
      </Item>
    </Timeline>
  </Card>
);
