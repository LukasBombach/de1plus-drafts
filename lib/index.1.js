const { parse } = require("binary");
const { connect, disconnect } = require("./connect");

(async () => {
  try {
    const de1 = await connect();
    console.log("\nconnected\n");
    // console.log(de1);

    de1.discoverServices(null, async (error, services) => {
      console.log("discovered the following services:");
      for (var i in services) {
        console.log("\n\n\n" + services[i]);
        services[i].discoverCharacteristics(null, function(
          error,
          characteristics
        ) {
          console.log("discovered the following characteristics:");

          characteristics.forEach(characteristic => {
            characteristic.read(function(error, data) {
              const vars = parse(data)
                .word16lu("level")
                .word16lu("start").vars;

              /* Object.keys(vars).map(function(key) {
                vars[key] = parseFloat((vars[key] / 256).toFixed(2));
              }); */

              const {
                uuid,
                properties,
                descriptors,
                type,
                name
              } = characteristic;

              const { level, start } = vars;

              console.log({
                uuid,
                level,
                start
              });
            });
          });
        });
      }
      //await disconnect(de1);
      //console.log("disconnected!");
    });
  } catch (err) {
    console.log("An error occurred");
    console.error(err);
  }
})();
