import React from "react";
import { Menu } from "antd";

export default ({ height = 64 }) => (
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={["1"]}
    style={{
      lineHeight: `${height}px`,
      position: "fixed",
      bottom: "0",
      left: "0",
      right: "0"
    }}
  >
    <Menu.Item key="1">nav 1</Menu.Item>
    <Menu.Item key="2">nav 2</Menu.Item>
    <Menu.Item key="3">nav 3</Menu.Item>
  </Menu>
);
