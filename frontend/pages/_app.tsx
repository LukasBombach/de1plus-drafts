import React from "react";
import { ApolloProvider } from "react-apollo";
import App, { Container } from "next/app";
import { Layout } from "antd";
import withApolloClient from "../lib/with-apollo-client";
import Navigation from "../components/navigation";
import "antd/dist/antd.css";

const { Content } = Layout;

const menuHeight = 64;
const contentStyles = {
  height: `calc(100vh - ${menuHeight}px)`,
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
