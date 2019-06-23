import React from "react";
import logo from "./logo.svg";
import "./App.css";

export const DE1_NAME = "DE1";
export const SERVICE_UUID = 0xa000;

const filters = [{ name: DE1_NAME }];
const optionalServices = [SERVICE_UUID];
const bleSettings = { filters, optionalServices };

function buf2hex(buffer) {
  return Array.prototype.map
    .call(new Uint8Array(buffer), x => ("00" + x.toString(16)).slice(-2))
    .join("");
}

async function listPermissions() {
  try {
    const result = await navigator.permissions.query({
      name: "bluetooth",
      deviceId: sessionStorage.lastDevice
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

async function listCharacteristics() {
  try {
    const device = await navigator.bluetooth.requestDevice(bleSettings);
    const server = await device.gatt.connect();
    const service = await server.getPrimaryService(SERVICE_UUID);
    const characteristics = await service.getCharacteristics();

    for (const characteristic of characteristics) {
      const { uuid, properties } = characteristic;
      if (properties.read) {
        const { buffer } = await characteristic.readValue();
        console.log(uuid.substr(4, 4), buf2hex(buffer));
      } else {
        console.log(uuid.substr(4, 4), properties);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={listCharacteristics}>connect</button>
      </header>
    </div>
  );
}

export default App;
