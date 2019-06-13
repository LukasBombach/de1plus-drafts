import * as React from "react";

import recordedData from "../lib/characteristics/recordedData";
import characteristics from "../lib/characteristics";

Object.entries(recordedData).forEach(([key, val]) => {
  console.log(key, characteristics[key].parse(val));
});

export default () => <p>Hello World</p>;
