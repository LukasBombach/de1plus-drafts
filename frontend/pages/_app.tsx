import React from "react";
import { ApolloProvider } from "react-apollo";
import App, { Container } from "next/app";
import styled from "styled-components";

import withApolloClient from "../lib/with-apollo-client";
import Navigation from "../components/navigation";

import "../theme/index.less";

const AppLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 96px;
  grid-column-gap: 32px;
  grid-row-gap: 0;
  justify-items: stretch;
  align-items: stretch;
  height: 100vh;
`;

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <AppLayout>
            <Component {...pageProps} />
            <Navigation />
          </AppLayout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
