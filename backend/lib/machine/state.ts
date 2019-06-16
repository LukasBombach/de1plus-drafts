export interface States {
  sleep: number;
  goingToSleep: number;
  idle: number;
  busy: number;
  espresso: number;
  steam: number;
  hotWater: number;
  shortCal: number;
  selfTest: number;
  longCal: number;
  descale: number;
  fatalError: number;
  init: number;
  noRequest: number;
  skipToNext: number;
  hotWaterRinse: number;
  steamRinse: number;
  refill: number;
  clean: number;
  inBootLoader: number;
  airPurge: number;
}

export const states: States = {
  sleep: 0x00,
  goingToSleep: 0x01,
  idle: 0x02,
  busy: 0x03,
  espresso: 0x04,
  steam: 0x05,
  hotWater: 0x06,
  shortCal: 0x07,
  selfTest: 0x08,
  longCal: 0x09,
  descale: 0x0a,
  fatalError: 0x0b,
  init: 0x0c,
  noRequest: 0x0d,
  skipToNext: 0x0e,
  hotWaterRinse: 0x0f,
  steamRinse: 0x10,
  refill: 0x11,
  clean: 0x12,
  inBootLoader: 0x13,
  airPurge: 0x14
};

/* function asBuffer(state: number) {
  const buffer = Buffer.alloc(1);
  buffer.writeUInt8(states[state], 0);
  return buffer;
} */
