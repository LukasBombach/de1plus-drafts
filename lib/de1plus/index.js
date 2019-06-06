const { resolve } = require("path");
const { Tcl } = require("tcl");

(async () => {
  try {
    const tcl = new Tcl();
    tcl.source(resolve(__dirname, "./main.tcl"));
  } catch (err) {
    console.error(err);
  }
})();
