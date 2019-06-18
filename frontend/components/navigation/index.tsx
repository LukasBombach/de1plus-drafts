import React from "react";
import { Menu } from "antd";
import MenuBar from "./menuBar";
import RightItem from "./rightHandMenuItem";
import MainSwitch from "./mainSwitch";

export default ({ height = 96 }) => (
  <MenuBar height={height}>
    <Menu.Item key="1">nav 1</Menu.Item>
    <Menu.Item key="2">nav 2</Menu.Item>
    <Menu.Item key="3">nav 3</Menu.Item>

    <RightItem>
      <MainSwitch />
    </RightItem>
  </MenuBar>
);
