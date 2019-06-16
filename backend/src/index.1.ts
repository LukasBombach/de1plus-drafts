import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import GraphQLJSON from "graphql-type-json";

import recordedData from "../lib/characteristics/recordedData";
import characteristics, { Status } from "../lib/characteristics";
import { connect, disconnect } from "../lib/machine";

let de1 = null;

const resolvers = {
  Query: {
    characteristics() {
      return Object.entries(recordedData)
        .filter(isNotUnknown)
        .map(mergeData)
        .reduce(toObject, {});
    },
    async bluetoothInfo() {
      const de1 = await connect();
      await disconnect(de1);
      return Object.entries(de1)
        .filter(([key]) => !key.startsWith("_"))
        .reduce((obj, [key, val]) => Object.assign(obj, { [key]: val }), {});
    }
  },
  Mutation: {
    async connect() {
      de1 = await connect();
      return de1;
    },
    async disconnect() {
      await disconnect(de1);
      return true;
    }
  },

  JSON: GraphQLJSON
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma }
});

server.start(() => console.log("Server is running on http://localhost:4000"));

function isNotUnknown([key, val]: [string, Buffer]): boolean {
  return characteristics[key].status !== Status.Unknown;
}

function mergeData([key, val]: [string, Buffer]): any[] {
  return [key, characteristics[key].parse(val)];
}

function toObject(acc, [key, val]: [string, any]): any {
  acc[key] = val;
  return acc;
}
