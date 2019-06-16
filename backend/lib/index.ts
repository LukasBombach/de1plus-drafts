import { Peripheral } from "@abandonware/noble";
import { connect, disconnect } from "../lib/machine/connect";
import { states } from "../lib/machine/state";
import { getCharacteristics, Characteristics } from "../lib/characteristics";
import { getStateAsBuffer } from "../lib/machine/state";

export default class DE1 {
  private peripheral: Peripheral = null;
  private characteristics: Characteristics = null;

  public async connect(): Promise<DE1> {
    if (this.isConnected()) return this;
    this.peripheral = await connect();
    this.characteristics = await getCharacteristics(this.peripheral);
    return this;
  }

  public async disconnect(): Promise<DE1> {
    if (!this.isConnected()) return this;
    await disconnect(this.peripheral);
    this.peripheral = null;
    return this;
  }

  public isConnected(): boolean {
    return this.peripheral !== null;
  }

  public async power(state: boolean) {
    const currentState = await this.characteristics.state.read();
    const buffer = Buffer.alloc(1);

    buffer.writeUInt8(0x00, 0);

    console.log("currentState", currentState);
    console.log("buffer", buffer);

    this.characteristics.state.write(buffer);

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
  }
}
