import binary from "binary";

// char unsigned = word8u
// Short unsigned = word16bu
// int unsigned = word32lu

export interface StateChange {
  state: string;
  substate: string;
}

export default (buffer: Buffer): StateChange => {
  return (binary
    .parse(buffer)
    .word8u("state")
    .word8u("substate").vars as any) as StateChange; // TODO remove hack
};

/*
proc parse_state_change {packed destarrname} {
	upvar $destarrname ShotSample
	unset -nocomplain ShotSample

	set spec {
		state char
		substate char
	}
	array set specarr $spec

   	::fields::unpack $packed $spec ShotSample bigeendian
	foreach {field val} [array get ShotSample] {
		set specparts $specarr($field)
		set extra [lindex $specparts 4]
		if {$extra != ""} {
			set ShotSample($field) [expr $extra]
		}
	}
}
*/
