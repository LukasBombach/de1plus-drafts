const { parse } = require("binary");

// char unsigned = word8u
// Short unsigned = word16bu
// int unsigned = word32lu

module.exports.version = buffer => {
  const result = parse(buffer)
    .word8u("ble.apiVersion")
    .word8u("ble.release")
    .word16bu("ble.commits")
    .word8u("ble.changes")
    .word32lu("ble.sha")
    .word8u("fw.apiVersion")
    .word8u("fw.release")
    .word16bu("fw.commits")
    .word8u("fw.changes")
    .word32lu("fw.sha");
  return result.vars;
};

/*
	set spec {
		BLE_APIVersion {char {} {} {unsigned} {}}
		BLE_Release {char {} {} {unsigned} {[convert_F8_1_7_to_float $val]}}
		BLE_Commits {Short {} {} {undsigned} {}}
		BLE_Changes {char {} {} {unsigned} {}}
		BLE_Sha {int {} {} {unsigned} {[format %X $val]}}

		FW_APIVersion {char {} {} {unsigned} {}}
		FW_Release {char {} {} {unsigned} {[convert_F8_1_7_to_float $val]}}
		FW_Commits {Short {} {} {unsigned} {}}
		FW_Changes {char {} {} {unsigned} {}}
		FW_Sha {int {} {} {unsigned} {[format %X $val]}}
	}
*/
