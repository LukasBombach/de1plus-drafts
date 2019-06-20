import React from "react";
import { Typography } from "antd";
import styled from "styled-components";
import Info, { Items } from "./info";
import withStatus from "../../../de1/withStatus";
import withTemperature from "../../../de1/withTemperature";

const { Title } = Typography;

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-items: stretch;
  align-items: stretch;
`;

const State = withStatus(({ data }) => {
  const items: Items = [["Connected", data.connected], ["State", data.state]];
  return <Info items={items} />;
});

const Temperature = withTemperature(({ data }) => {
  const items: Items = [["Goal", data.goal], ["Metal", data.metal]];
  return <Info items={items} />;
});

const Dashboard: React.FunctionComponent = () => (
  <Section>
    <Title level={3}>Dashboard</Title>
    <Grid>
      <State />
      <Temperature />
    </Grid>
  </Section>
);

export default Dashboard;
