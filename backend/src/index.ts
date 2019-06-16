import { GraphQLServer } from "graphql-yoga";
import DE1 from "../lib/bluetooth/noble-as-promised";

const de1 = new DE1();

const resolvers = {
  Query: {
    connected() {
      return de1.isConnected();
    }
  },
  Mutation: {
    async connect() {
      await de1.connect();
    },
    async disconnect() {
      await de1.disconnect();
    },
    async turnOn() {
      await de1.turnOn();
    },
    async turnOff() {
      await de1.turnOff();
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(async () => {
  console.log("Server is running on http://localhost:4000");
  await de1.connect();
  console.log("Connected to de 1");
});
