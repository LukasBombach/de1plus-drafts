const chalk = require("chalk");
const { getRecordedValues } = require("./recordedValues");
const { version } = require("./characteristic/version");
const { waterLevel } = require("./characteristic/waterLevel");
const { hotwaterSteam } = require("./characteristic/hotwaterSteamSettings");
const { shotValue } = require("./characteristic/shotValue");

(async () => {
  try {
    // console.log(getRecordedValues(true));
    const values = getRecordedValues();

    function log(uuid, label = "", parse = v => v.toString("hex")) {
      const formattedUuid = chalk.dim(uuid);
      const formattedLabel = chalk.dim(label);
      const formattedValue = parse(values[uuid]);
      console.log(formattedUuid, formattedLabel, formattedValue);
    }

    log("a001", "version", v => version(v)); // '040901c151092c5ee0000000000000000000',
    log("a002"); // '02',
    log("a003"); // '0000000000000000',
    log("a004"); // '000000000000000000000000000000000000000000000000',
    log("a005"); // '0000000000000000000000000000000000000000',
    log("a006"); // '',
    log("a007"); // '',
    log("a008"); // '',
    log("a009"); // '',
    log("a00a"); // '00000000000000000000000000000000',
    log("a00b", "hotwaterSteam", v => hotwaterSteam(v)); // '00a03c50503cc85800',
    log("a00c"); // '0000000000000000000000000000000000000000',
    log("a00d", "shotValue", v => shotValue(v)); // '000100a00000583a583ab35a005800000002a0',
    log("a00e"); // '0200',
    log("a00f"); // '0103010060',
    log("a010"); // '026040b09e000400',
    log("a011", "waterLevel", v => waterLevel(v).parsed); // '1c480500',
    log("a012"); // '0000000000000000000000000000',

    /* console.log("a001", "version", version(values.a001)); // '040901c151092c5ee0000000000000000000',
    console.log("a002", values.a002.toString("hex")); // '02',
    console.log("a003", values.a003.toString("hex")); // '0000000000000000',
    console.log("a004", values.a004.toString("hex")); // '000000000000000000000000000000000000000000000000',
    console.log("a005", values.a005.toString("hex")); // '0000000000000000000000000000000000000000',
    console.log("a006", values.a006.toString("hex")); // '',
    console.log("a007", values.a007.toString("hex")); // '',
    console.log("a008", values.a008.toString("hex")); // '',
    console.log("a009", values.a009.toString("hex")); // '',
    console.log("a00a", values.a00a.toString("hex")); // '00000000000000000000000000000000',
    console.log("a00b", "hotwaterSteam", hotwaterSteam(values.a00b)); // '00a03c50503cc85800',
    console.log("a00c", values.a00c.toString("hex")); // '0000000000000000000000000000000000000000',
    console.log("a00d", "shotValue", shotValue(values.a00d)); // '000100a00000583a583ab35a005800000002a0',
    console.log("a00e", values.a00e.toString("hex")); // '0200',
    console.log("a00f", values.a00f.toString("hex")); // '0103010060',
    console.log("a010", values.a010.toString("hex")); // '026040b09e000400',
    console.log("a011", "waterLevel", waterLevel(values.a011).parsed); // '1c480500',
    console.log("a012", values.a012.toString("hex")); // '0000000000000000000000000000', */

    process.exit(0);
  } catch (err) {
    console.log("An error occurred");
    console.error(err);
  }
})();
