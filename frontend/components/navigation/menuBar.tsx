import React from "react";
import { Menu } from "antd";

export interface MenuProps {
  height: number;
}

const MenuBar: React.FunctionComponent<MenuProps> = ({
  height = 64,
  children
}) => (
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
    {children}
  </Menu>
);

export default MenuBar;
