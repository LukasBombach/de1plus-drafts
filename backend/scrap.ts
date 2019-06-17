//const newState = getStateAsBuffer(state ? "idle" : "sleep");

//console.log("x", states.sleep, getStateAsBuffer("sleep"));
// console.log(states.idle, getStateAsBuffer("idle"));

// buffer.writeUInt8(0x00, 0);

/* console.log("target state", state);
    console.log("current state", currentState.state);
    console.log("sending state as buffer", newState); */

/* if (state === true && currentState.state === states.sleep) {
      this.characteristics.state.write(getStateAsBuffer("idle"));
    }

    if (state === false && currentState.state === states.idle) {
      this.characteristics.state.write(getStateAsBuffer("sleep"));
    } */

// if (state.state === states.sleep) {
//   return this.characteristics.state.write(getStateAsBuffer("idle"));
// }

/* public async power(state: boolean) {
    const currentState = await this.characteristics.state.read();
    const buffer = Buffer.alloc(1);

    buffer.writeUInt8(0x00, 0);

    console.log("currentState", currentState);
    console.log("buffer", buffer);

    this.characteristics.state.write(buffer);
  } */

/* public static async connectByName(matcher: RegExp, timeoutAfterMs?: number) {
    const peripheral = await find(matcher, timeoutAfterMs);
    const device = new Device(peripheral);
    await device.connect();
    return device;
  }

  constructor(peripheral: Peripheral) {
    this.peripheral = peripheral;
  } */

/* type CharacteristicTypes = any;

interface Characteristics {
  [name: string]: CharacteristicApi<CharacteristicTypes>;
}

interface CharacteristicApi<T> {
  read?: () => Promise<T>;
  write?: (value: T) => Promise<void>;
  subscribe?: (callback: (value: T) => void) => void;
} */

/* public static find(name: RegExp, timeoutAfter: number): Promise<Peripheral> {
    return new Promise((resolve, reject) => {
      startScanning();
      const timeout = Scanner.getTimeout(reject, timeoutAfter);
      Scanner.search(name, resolve, timeout);
    });
  } */

//timeout = new Timeout("find DE1", timeoutAfter, reject);
//

/* private static checkPeripheral(peripheral, resolve, timeout) {
    return Scanner.matches(name, peripheral) ? resolve() : reject()
  } */

/* private static search(name: RegExp, onFind: Function, timeout: Timeout) {
    on("discover", peripheral => {
      if (!Scanner.matches(name, peripheral)) return;
      timeout.stop();
      stopScanning();
      onFind(peripheral);
    });
  }

  private static getTimeout(reject: Function, timeoutAfter: number = 1000) {
    return new Timeout("find DE1", timeoutAfter, () => {
      stopScanning();
      reject();
    });
  } */
