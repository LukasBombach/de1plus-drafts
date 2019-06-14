import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import GraphQLJSON from "graphql-type-json";
import { Context } from "./utils";

import recordedData from "../lib/characteristics/recordedData";
import characteristics, { Status } from "../lib/characteristics";

const resolvers = {
  Query: {
    characteristics(parent, args, context: Context) {
      return Object.entries(recordedData)
        .filter(isNotUnknown)
        .map(mergeData)
        .reduce(toObject, {});
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
