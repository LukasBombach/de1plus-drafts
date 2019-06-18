import React from "react";
import { ApolloProvider } from "react-apollo";
import App, { Container } from "next/app";
import { Layout } from "antd";
import withApolloClient from "../lib/with-apollo-client";
import "../theme/index.less";

import Navigation from "../components/navigation";

const { Content } = Layout;
const menuHeight = 96;
const contentHeight = `calc(100vh - ${menuHeight}px)`;

const contentStyles = {
  height: contentHeight,
  padding: 32,
  boxSizing: "border-box",
  overflow: "auto"
};

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Layout>
            <Content style={contentStyles}>
              <Component {...pageProps} />
            </Content>
            <Navigation height={menuHeight} />
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
