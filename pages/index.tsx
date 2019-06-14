import * as React from "react";
import recordedData from "../lib/characteristics/recordedData";
import characteristics, { Status } from "../lib/characteristics";

export default () => (
  <pre>
    {Object.entries(recordedData)
      .filter(isNotUnknown)
      .map(asJson)}
  </pre>
);

function isNotUnknown([key, val]: [string, Buffer]): boolean {
  return characteristics[key].status !== Status.Unknown;
}

function asJson([key, val]: [string, Buffer]): string {
  return `${key} - ${characteristics[key].name}
${JSON.stringify(characteristics[key].parse(val), null, 2)}

`;
}
