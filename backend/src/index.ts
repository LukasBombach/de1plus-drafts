import { GraphQLServer } from "graphql-yoga";
import DE1 from "../de1/de1";
import StateSkalar from "../de1-graphql/scalars/state";

const de1 = new DE1();

const resolvers = {
  Query: {
    state: async () => {
      try {
        return await de1.state();
      } catch (err) {
        return null;
      }
    },
    water: async () => {
      try {
        return await de1.water();
      } catch (err) {
        return null;
      }
    },
    version: async () => {
      try {
        return await de1.version();
      } catch (err) {
        return null;
      }
    },
    connected: async () => {
      try {
        return await de1.connected();
      } catch (err) {
        return null;
      }
    }
  },
  Mutation: {
    async connect() {
      await de1.connect();
      return true;
    },
    async disconnect() {
      await de1.disconnect();
      return true;
    },
    async turnOn() {
      await de1.turnOn();
      return true;
    },
    async turnOff() {
      await de1.turnOff();
      return true;
    }
  },
  State: StateSkalar
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
});

server.start(async () => {
  console.log("Server is running on http://localhost:4000");
  await de1.connect();
  console.log("Connected to DE1");
});
