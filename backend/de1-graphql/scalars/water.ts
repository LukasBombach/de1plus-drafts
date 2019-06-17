import gql from "graphql-tag";

export default gql`
  type Water {
    level: Number;
    startFillLevel: Number;
  }
`;
