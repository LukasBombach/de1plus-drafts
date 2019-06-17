import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import isoFetch from "isomorphic-unfetch";

let apolloClient: any = null;

function create(initialState: any) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: new HttpLink({
      uri: "http://localhost:4000/",
      fetch: (!process.browser && isoFetch) as typeof fetch
    }),
    cache: new InMemoryCache().restore(initialState || {})
  });
}

export default function initApollo(initialState?: any) {
  if (!process.browser) {
    return create(initialState);
  }
  if (!apolloClient) {
    apolloClient = create(initialState);
  }
  return apolloClient;
}
