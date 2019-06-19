import styled from "styled-components";
// import { Card } from "antd";
import StartButton from "./startButton";
import Spacer from "./spacer";
import Info from "./info";

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
`;

export default () => (
  <Aside>
    <StartButton />
    <Spacer />
    <Info />
  </Aside>
);
