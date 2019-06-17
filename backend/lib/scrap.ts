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
