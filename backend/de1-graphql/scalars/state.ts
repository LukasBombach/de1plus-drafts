/* import { GraphQLScalarType } from "graphql";
import {
  states,
  stateAsStringForValue
} from "../../de1/api/characteristics/state"; */
/* 
export default new GraphQLScalarType({
  name: "State",
  description: "DE1 Machine State",
  parseValue(value) {
    return stateAsStringForValue(value);
  },
  serialize(value) {
    return states[value];
  }
}); */

export { states as default } from "../../de1/v1/api/characteristics/state";
