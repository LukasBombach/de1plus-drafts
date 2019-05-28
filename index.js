const { cmd } = require("./lib/tcl");

(async () => {
  const result = await cmd("info tclversion");
  console.log(result.data());
})();
