// const { connect, disconnect } = require("./connect");
// const { getService } = require("./service");
// const { readAllCharacteristics } = require("./characteristic");
const { getRecordedValues } = require("./recordedValues");
const { parseVersion } = require("./characteristic/version");

(async () => {
  try {
    /* const de1 = await connect();
    const service = await getService(de1, "a000");
    const characteristics = await readAllCharacteristics(service, "hex");
    characteristics.forEach(c => console.log(c)); 
    await disconnect(de1);*/

    console.log(getRecordedValues());

    process.exit(0);
  } catch (err) {
    console.log("An error occurred");
    console.error(err);
  }
})();
