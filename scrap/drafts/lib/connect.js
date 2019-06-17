const noble = require("@abandonware/noble");

module.exports.connect = async function() {
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

module.exports.disconnect = async function disconnectDe1(peripheral) {
  return new Promise((resolve, reject) => {
    peripheral.disconnect(error => (error ? reject(error) : resolve()));
  });
};
