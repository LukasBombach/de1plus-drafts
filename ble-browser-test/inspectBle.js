export default async function inspectBle() {
  // Validate services UUID entered by user first.
  let optionalServices = document
    .querySelector("#optionalServices")
    .value.split(/, ?/)
    .map(s => (s.startsWith("0x") ? parseInt(s) : s))
    .filter(s => s && BluetoothUUID.getService);

  try {
    console.log("Requesting any Bluetooth Device...");
    const device = await navigator.bluetooth.requestDevice({
      // filters: [...] <- Prefer filters to save energy & show relevant devices.
      acceptAllDevices: true,
      optionalServices: optionalServices
    });

    console.log("Connecting to GATT Server...");
    const server = await device.gatt.connect();

    // Note that we could also get all services that match a specific UUID by
    // passing it to getPrimaryServices().
    console.log("Getting Services...");
    const services = await server.getPrimaryServices();

    console.log("Getting Characteristics...");
    for (const service of services) {
      console.log("> Service: " + service.uuid);
      const characteristics = await service.getCharacteristics();

      characteristics.forEach(characteristic => {
        console.log(
          ">> Characteristic: " +
            characteristic.uuid +
            " " +
            getSupportedProperties(characteristic)
        );
      });
    }
  } catch (error) {
    console.log("Argh! " + error);
  }
}

/* Utils */

function getSupportedProperties(characteristic) {
  let supportedProperties = [];
  for (const p in characteristic.properties) {
    if (characteristic.properties[p] === true) {
      supportedProperties.push(p.toUpperCase());
    }
  }
  return "[" + supportedProperties.join(", ") + "]";
}
