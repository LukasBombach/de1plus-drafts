const { inspect } = require("util");
const noble = require("@abandonware/noble");

const connect = async function() {
  return new Promise((resolve, reject) => {
    noble.startScanning();
    noble.on("discover", peripheral => {
      if (/DE1/.test(peripheral.advertisement.localName)) {
        noble.stopScanning();
        peripheral.connect(error =>
          error ? reject(error) : resolve(peripheral)
        );
      } else {
        console.log("found", peripheral.uuid);
      }
    });
  });
};

const disconnect = async function disconnectDe1(peripheral) {
  return new Promise((resolve, reject) => {
    peripheral.disconnect(error => (error ? reject(error) : resolve()));
  });
};

(async () => {
  try {
    const de1 = await connect();
    console.log("\nconnected\n");

    de1.discoverServices(null, async (error, services) => {
      console.log("discovered the following services:");

      services.forEach(service => {
        console.log(inspect(service, { depth: 10 }));
      });

      /* for (var i in services) {
        console.log("found service", services[i].uuid);
        services[i].discoverCharacteristics(null, function(
          error,
          characteristics
        ) {
          console.log("discovered the following characteristics:");
          characteristics.forEach(c => {
            c.read((error, buffer) => console.log(c.uuid, buffer));
          });
        });
      } */
      //await disconnect(de1);
      //console.log("disconnected!");
      //process.exit(0);
    });
  } catch (err) {
    console.log("An error occurred");
    console.error(err);
  }
})();
