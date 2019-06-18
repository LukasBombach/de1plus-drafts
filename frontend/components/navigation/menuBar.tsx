import React from "react";
import { Menu } from "antd";

export interface MenuProps {
  height: number;
}

const MenuBar: React.FunctionComponent<MenuProps> = ({ height, children }) => (
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={["1"]}
    style={getStyle(height)}
  >
    {children}
  </Menu>
);

const getStyle = (height: number): React.CSSProperties => ({
  lineHeight: `${height}px`,
  position: "fixed",
  bottom: "0",
  left: "0",
  right: "0"
});

export default MenuBar;
