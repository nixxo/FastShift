// Fast Shift by nixxo (versione 3.0 ;-))

JSAction_Fast_Shift_Indietro_1 = {
  onExecute : function() {
	
	var shift = 50;
  try { shift = parseInt(VSSCore.GetPluginParamValue('ITASA - Parametri Fast Shift', 'ParamShiftPiccolo')); } catch (err) {}

  Shift( VSSCore.GetFirstSelected(), -shift );

  }
};

JSAction_Fast_Shift_Indietro_2 = {
  onExecute : function() {
	
	var shift = 100;
  try { shift = parseInt(VSSCore.GetPluginParamValue('ITASA - Parametri Fast Shift', 'ParamShiftGrande')); } catch (err) {}

  Shift( VSSCore.GetFirstSelected(), -shift );

  }
};

JSAction_Fast_Shift_Avanti_1 = {
  onExecute : function() {
	
	var shift = 50;
  try { shift = parseInt(VSSCore.GetPluginParamValue('ITASA - Parametri Fast Shift', 'ParamShiftPiccolo')); } catch (err) {}
  
  Shift( VSSCore.GetFirstSelected(), shift );

  }
};

JSAction_Fast_Shift_Avanti_2 = {
  onExecute : function() {
	
	var shift = 100;
  try { shift = parseInt(VSSCore.GetPluginParamValue('ITASA - Parametri Fast Shift', 'ParamShiftGrande')); } catch (err) {}

  Shift( VSSCore.GetFirstSelected(), shift );
  
  }
};

JSAction_Fast_Shift_Cursor = {
  onExecute : function() {
	
	var shift = 0;
  try { shift = VSSCore.GetCursorPosition() - VSSCore.GetFirstSelected().Start; } catch (err) {}

  Shift( VSSCore.GetFirstSelected(), shift );
  
  }
};

function Shift( sub, shift ) {
	if(VSSCore.GetSubCount() > 0) {
    //controllo se è selezionato il primo sottotitolo
    if (sub.Index > 1 && shift < 0) {
      //controllo overlap
      var subP = VSSCore.GetPrevious(sub);
      if ( sub.Start - subP.Stop < ( -shift + VSSCore.MinimumBlank ) )
        subP.Stop = sub.Start - ( -shift + VSSCore.MinimumBlank );
    }
    
		while (sub != null) {
			sub.Start = sub.Start + shift;
			sub.Stop = sub.Stop + shift;
      sub = VSSCore.GetNext(sub);
		}
  }
}

//Registrazione funzioni javasript
VSSCore.RegisterJavascriptAction('JSAction_Fast_Shift_Indietro_1', 'FastShift Indietro Piccolo', '');
VSSCore.RegisterJavascriptAction('JSAction_Fast_Shift_Indietro_2', 'FastShift Indietro Grande', '');
VSSCore.RegisterJavascriptAction('JSAction_Fast_Shift_Avanti_1', 'FastShift Avanti Piccolo', '');
VSSCore.RegisterJavascriptAction('JSAction_Fast_Shift_Avanti_2', 'FastShift Avanti Grande', '');
VSSCore.RegisterJavascriptAction('JSAction_Fast_Shift_Cursor', 'FastShift Cursor', '');

VSSCore.InsertBreakBeforeJavascriptMenuItem( 'FastShift Indietro Piccolo' );
VSSCore.InsertBreakAfterJavascriptMenuItem( 'FastShift Cursor' );
