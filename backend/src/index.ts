import { GraphQLServer } from "graphql-yoga";
import DE1 from "../de1";
import StateSkalar from "../de1-graphql/scalars/state";

const de1 = new DE1();

const resolvers = {
  Query: {
    state: async () => {
      try {
        return await de1.get("state");
      } catch (err) {
        return null;
      }
    },
    water: async () => {
      try {
        return await de1.get("water");
      } catch (err) {
        return null;
      }
    },
    version: async () => {
      try {
        return await de1.get("version");
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
      return await de1.connect();
    },
    async disconnect() {
      return await de1.disconnect();
    },
    async turnOn() {
      return await de1.turnOn();
    },
    async turnOff() {
      return await de1.turnOff();
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
  try {
    await de1.connect();
    console.log("Connected to DE1");
  } catch ({ message }) {
    console.log(message);
  }
});
