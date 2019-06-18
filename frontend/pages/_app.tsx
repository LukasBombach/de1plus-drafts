import React from "react";
import { ApolloProvider } from "react-apollo";
import App, { Container } from "next/app";
import withApolloClient from "../lib/with-apollo-client";
import "antd/dist/antd.css";

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
