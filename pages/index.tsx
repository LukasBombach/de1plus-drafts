import * as React from "react";

import recordedData from "../lib/characteristics/recordedData";
import characteristics from "../lib/characteristics";

export default () => (
  <pre>
    {Object.entries(recordedData).map(
      ([key, val]) => `${key}
${JSON.stringify(characteristics[key].parse(val), null, 2)}

`
    )}
  </pre>
);
