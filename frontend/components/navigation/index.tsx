import React from "react";
import { Menu, Icon } from "antd";
import MenuBar from "./menuBar";
import RightItem from "./rightHandMenuItem";
import MainSwitch from "./mainSwitch";

const LeftItem = Menu.Item;

export default ({ height = 96 }) => (
  <MenuBar height={height}>
    <LeftItem key="flush">
      <Icon type="arrow-down" />
      Flush
    </LeftItem>

    <LeftItem key="espresso">
      <Icon type="coffee" /> Espresso
    </LeftItem>

    <LeftItem key="steam">
      <Icon type="cloud" />
      Steam
    </LeftItem>

    <LeftItem key="water">
      <Icon type="experiment" />
      Water
    </LeftItem>

    <RightItem>
      <MainSwitch />
    </RightItem>

    <RightItem>
      <Icon type="setting" style={{ marginRight: 10 }} />
      Settings
    </RightItem>
  </MenuBar>
);
