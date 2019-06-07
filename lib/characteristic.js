module.exports.readCharacteristic = (service, uuid) => {
  return new Promise((resolve, reject) => {
    service.discoverCharacteristics([uuid], function(error, [characteristic]) {
      if (error) return reject(error);
      characteristic.read(function(error, data) {
        if (error) return reject(error);
        resolve(data);
      });
    });
  });
};

module.exports.readAllCharacteristics = (service, stringify) => {
  return new Promise((resolve, reject) => {
    service.discoverCharacteristics(null, async (error, characteristics) => {
      if (error) return reject(error);
      const characteristicValues = [];
      for (const characteristic of characteristics) {
        const uuid = characteristic.uuid;
        const valueAsBuffer = await read(characteristic);
        const value = stringify
          ? valueAsBuffer.toString(stringify)
          : valueAsBuffer;
        characteristicValues.push({ uuid, value });
      }
      resolve(characteristicValues);
    });
  });
};

function read(characteristic) {
  return new Promise((resolve, reject) => {
    characteristic.read(function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
}
