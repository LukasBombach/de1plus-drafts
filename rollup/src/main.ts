import recordedData from "./characteristics/recordedData";
import characteristics from "./characteristics";

Object.entries(recordedData).forEach(([key, val]) => {
  console.log(key, characteristics[key].parse(val));
});

// console.log("hello world");
