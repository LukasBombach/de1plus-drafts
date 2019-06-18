import React from "react";
import styled from "styled-components";

export interface RightHandMenuItemProps {}

// TODO change float right to flex and scrap Ant's Menu.item entirely
const ListItem = styled.li`
  display: inline-block;
  margin: 0;
  padding: 0 20px;
  box-sizing: border-box;
  float: right;
`;

const RightHandMenuItem: React.FunctionComponent<RightHandMenuItemProps> = ({
  children
}) => <ListItem>{children}</ListItem>;

export default RightHandMenuItem;
