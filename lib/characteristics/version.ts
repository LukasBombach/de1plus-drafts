import * as binary from "binary";

// char unsigned = word8u
// Short unsigned = word16bu
// int unsigned = word32lu

export interface Versions {
  bluetooth: Version;
  firmware: Version;
}

export interface Version {
  apiVersion: string;
  release: string;
  commits: string;
  changes: string;
  sha: string;
}

export default (buffer: Buffer): Versions => {
  const result = binary
    .parse(buffer)
    .word8u("bluetooth.apiVersion")
    .word8u("bluetooth.release")
    .word16bu("bluetooth.commits")
    .word8u("bluetooth.changes")
    .word32lu("bluetooth.sha")
    .word8u("firmware.apiVersion")
    .word8u("firmware.release")
    .word16bu("firmware.commits")
    .word8u("firmware.changes")
    .word32lu("firmware.sha");
  return (result.vars as any) as Versions; // TODO remove hack
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
