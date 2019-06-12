const { parse } = require("binary");

// char unsigned = word8u
// Short unsigned = word16bu
// int unsigned = word32lu

module.exports.hotwaterSteam = buffer => {
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

/* set spec {
  SteamSettings {char {} {} {unsigned} {}}
  TargetSteamTemp {char {} {} {unsigned} {}}
  TargetSteamLength {char {} {} {unsigned} {}}
  TargetHotWaterTemp {char {} {} {unsigned} {}}
  TargetHotWaterVol {char {} {} {unsigned} {}}
  TargetHotWaterLength {char {} {} {unsigned} {}}
  TargetEspressoVol {char {} {} {unsigned} {}}
  TargetGroupTemp {Short {} {} {unsigned} {$val / 256.0}}
} */
