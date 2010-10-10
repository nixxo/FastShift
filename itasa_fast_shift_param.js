// Italian Subs Addicted - Parametri per Fast Shift
// by nixxo - versione 3 ;-)

VSSPlugin = {

	Name : 'ITASA - Parametri Fast Shift',
	Description : 'Parametri per fast shift - prova',
	Color : 0x00FFFF,

	// Parametri
	ParamShiftPiccolo : { Value : '50', Unit : 'ms' },
	ParamShiftGrande : { Value : '100', Unit : 'ms' },
	
  HasError : function(CurrentSub, PreviousSub, NextSub) {	},
	FixError : function(CurrentSub, PreviousSub, NextSub) {	}
}
