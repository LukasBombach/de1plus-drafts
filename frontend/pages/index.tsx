import React from "react";
import styled from "styled-components";
import Content from "../components/espresso/content";
import SideBar from "../components/espresso/sidebar";

const EspressoPadding = styled.div`
  padding: 32px;
  display: grid;
`;

const EspressoLayout = styled.main`
  display: grid;
  grid-template-columns: 1fr 240px;
  grid-column-gap: 32px;
  grid-row-gap: 0px;
  justify-items: stretch;
  align-items: stretch;
`;

const IndexPage: React.FunctionComponent = () => (
  <EspressoPadding>
    <EspressoLayout>
      <Content />
      <SideBar />
    </EspressoLayout>
  </EspressoPadding>
);

export default IndexPage;
