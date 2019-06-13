module.exports.getService = function(peripheral, uuid) {
  return new Promise((resolve, reject) => {
    peripheral.discoverServices([uuid], function(error, [service]) {
      if (error) return reject(error);
      resolve(service);
    });
  });
};
