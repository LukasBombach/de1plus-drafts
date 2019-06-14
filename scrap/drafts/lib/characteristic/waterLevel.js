const { parse } = require("binary");

// char unsigned = word8u
// Short unsigned = word16bu
// int unsigned = word32lu

module.exports.waterLevel = buffer => {
  const result = parse(buffer)
    .word16bu("level")
    .word16bu("startFillLevel");

  const orig = result.vars;

  const parsed = {
    level: orig.level / 256,
    startFillLevel: orig.startFillLevel / 256
  };

  return { orig, parsed };
};

/*
	set spec {
		Level {Short {} {} {unsigned} {$val / 256.0}}
		StartFillLevel {Short {} {} {unsigned} {$val / 256.0}}
	}
*/
