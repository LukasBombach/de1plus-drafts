const { parse } = require("binary");

// char unsigned = word8u
// Short unsigned = word16bu
// int unsigned = word32lu

module.exports.shotValue = buffer => {
  const { vars } = parse(buffer)
    .word16bu("timer")
    .word16bu("groupPressure")
    .word16bu("groupFlow")
    .word16bu("mixTemp")
    .word8u("headTemp1")
    .word8u("headTemp2")
    .word8u("headTemp3")
    .word16bu("setMixTemp")
    .word16bu("setHeadTemp")
    .word8u("setGroupPressure")
    .word8u("setGroupFlow")
    .word8u("frameNumber")
    .word8u("steamTemp");

  const hertz = 50;

  vars.timer = parseInt(100 * (vars.timer / (hertz * 2)));
  vars.groupPressure = vars.groupPressure / 4096;
  vars.groupFlow = vars.groupFlow / 4096;
  vars.mixTemp = vars.mixTemp / 256;

  vars.setMixTemp = vars.setMixTemp / 256;
  vars.setHeadTemp = vars.setHeadTemp / 256;
  vars.setGroupPressure = vars.setGroupPressure / 16;
  vars.setGroupFlow = vars.setGroupFlow / 16;

  return vars;
};

/* 
set spec {
  Timer {Short {} {} {unsigned} {int(100 * ($val / ($::de1(hertz) * 2.0)))}}
  GroupPressure {Short {} {} {unsigned} {$val / 4096.0}}
  GroupFlow {Short {} {} {unsigned} {$val / 4096.0}}
  MixTemp {Short {} {} {unsigned} {$val / 256.0}}
  HeadTemp1 {char {} {} {unsigned} {}}
  HeadTemp2 {char {} {} {unsigned} {}}
  HeadTemp3 {char {} {} {unsigned} {}}
  SetMixTemp {Short {} {} {unsigned} {$val / 256.0}}
  SetHeadTemp {Short {} {} {unsigned} {$val / 256.0}}
  SetGroupPressure {char {} {} {unsigned} {$val / 16.0}}
  SetGroupFlow {char {} {} {unsigned} {$val / 16.0}}
  FrameNumber {char {} {} {unsigned} {}}
  SteamTemp {chart {} {} {unsigned} {}}
  }
 */
