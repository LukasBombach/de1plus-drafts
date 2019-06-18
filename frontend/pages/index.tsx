import React from "react";
import styled from "styled-components";
import Content from "../components/espresso/content";
import SideBar from "../components/espresso/sidebar";

const EspressoLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr 240px;
  grid-column-gap: 32px;
  grid-row-gap: 0px;
  justify-items: stretch;
  align-items: stretch;
`;

const IndexPage: React.FunctionComponent = () => (
  <EspressoLayout>
    <Content />
    <SideBar />
  </EspressoLayout>
);

export default IndexPage;
