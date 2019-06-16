import { GraphQLServer } from "graphql-yoga";
import DE1 from "../lib";

const de1 = new DE1();

const resolvers = {
  Query: {
    connected() {
      return de1.isConnected();
    }
  },
  Mutation: {
    async connect() {
      if (de1.isConnected()) return "ALREADY_CONNECTED";
      await de1.connect();
      return "CONNECTED";
    },
    async disconnect() {
      if (!de1.isConnected()) return "ALREADY_DISCONNECTED";
      await de1.disconnect();
      return "DISCONNECTED";
    },
    async power(parent, { state }) {
      if (!de1.isConnected()) {
        await de1.connect();
        console.log("just connected");
      }
      de1.power(state);
      return true;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(() => console.log("Server is running on http://localhost:4000"));
