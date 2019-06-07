const { getRecordedValues } = require("./recordedValues");
const { version } = require("./characteristic/version");
const { waterLevel } = require("./characteristic/waterLevel");

(async () => {
  try {
    console.log(getRecordedValues(true));
    const values = getRecordedValues();
    console.log("a00d", version(values.a00d));
    console.log("a001", version(values.a001));
    console.log("a011", waterLevel(values.a011).parsed);
    process.exit(0);
  } catch (err) {
    console.log("An error occurred");
    console.error(err);
  }
})();
