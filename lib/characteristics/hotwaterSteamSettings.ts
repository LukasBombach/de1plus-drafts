const { parse } = require("binary");

// char unsigned = word8u
// Short unsigned = word16bu
// int unsigned = word32lu

export interface HotwaterSteam {
  steamSettings: string;
  targetSteamTemp: string;
  targetSteamLength: string;
  targetHotWaterTemp: string;
  targetHotWaterVol: string;
  targetHotWaterLength: string;
  targetEspressoVol: string;
  targetGroupTemp: string;
}

export default (buffer: Buffer): HotwaterSteam => {
  const result = parse(buffer)
    .word8u("steamSettings")
    .word8u("targetSteamTemp")
    .word8u("targetSteamLength")
    .word8u("targetHotWaterTemp")
    .word8u("targetHotWaterVol")
    .word8u("targetHotWaterLength")
    .word8u("targetEspressoVol")
    .word16bu("targetGroupTemp");
  return result.vars;
};
