import React from "react";
import { Menu, Icon } from "antd";
import MenuBar from "./menuBar";
import RightItem from "./rightHandMenuItem";
import MainSwitch from "./mainSwitch";

export default ({ height = 96 }) => (
  <MenuBar height={height}>
    <Menu.Item key="flush">
      <Icon type="arrow-down" />
      Flush
    </Menu.Item>
    <Menu.Item key="espresso">
      <Icon type="coffee" /> Espresso
    </Menu.Item>
    <Menu.Item key="steam">
      <Icon type="cloud" />
      Steam
    </Menu.Item>
    <Menu.Item key="water">
      <Icon type="experiment" />
      Water
    </Menu.Item>

    <RightItem>
      <MainSwitch />
    </RightItem>
  </MenuBar>
);
