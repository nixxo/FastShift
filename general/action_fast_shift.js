// Fast Shift by nixxo (versione 2 ;-))

// ---------------------------------------------------------------------------
// Fast Shift Indietro
// ---------------------------------------------------------------------------

JSAction_Fast_Shift_Indietro_1 = {
  onExecute : function() {
	
    var shift = 50;
    try { shift = parseInt(VSSCore.GetPluginParamValue('ITASA - Parametri Fast Shift', 'ParamShiftPiccolo')); } catch (err) {}

    if(VSSCore.GetSubCount() > 0) {
      var sub = VSSCore.GetFirstSelected();
      //controllo se è selezionato il primo sottotitolo
      if (sub.Index > 1) {
        //controllo overlap
        var subP = VSSCore.GetPrevious(sub);
          if ((sub.Start - subP.Stop) < shift )
            subP.Stop = subP.Stop - shift;
        //fine controllo overlap
      }
      
      while (sub != null) {
        sub.Start = sub.Start - shift;
        sub.Stop = sub.Stop - shift;
        sub = VSSCore.GetNext(sub);
      }
    }
  }
};

JSAction_Fast_Shift_Indietro_2 = {
  onExecute : function() {
	
    var shift = 100;
    try { shift = parseInt(VSSCore.GetPluginParamValue('ITASA - Parametri Fast Shift', 'ParamShiftGrande')); } catch (err) {}

    if(VSSCore.GetSubCount() > 0) {
      var sub = VSSCore.GetFirstSelected();
      //controllo se è selezionato il primo sottotitolo
      if (sub.Index > 1) {
        //controllo overlap
        var subP = VSSCore.GetPrevious(sub);
          if ((sub.Start - subP.Stop) < shift )
            subP.Stop = subP.Stop - shift;
        //fine controllo overlap
      }
      
      while (sub != null) {
        sub.Start = sub.Start - shift;
        sub.Stop = sub.Stop - shift;
        sub = VSSCore.GetNext(sub);
      }
    }
  }
};


// ---------------------------------------------------------------------------
// Fast Shift Avanti
// ---------------------------------------------------------------------------

JSAction_Fast_Shift_Avanti_1 = {
  onExecute : function() {
	
    var shift = 50;
    try { shift = parseInt(VSSCore.GetPluginParamValue('ITASA - Parametri Fast Shift', 'ParamShiftPiccolo')); } catch (err) {}

    if(VSSCore.GetSubCount() > 0) {
      var sub = VSSCore.GetFirstSelected();
      while (sub != null) {
        sub.Start = sub.Start + shift;
        sub.Stop = sub.Stop + shift;
        sub = VSSCore.GetNext(sub);
      }
    }
  }
};

JSAction_Fast_Shift_Avanti_2 = {
  onExecute : function() {
	
    var shift = 100;
    try { shift = parseInt(VSSCore.GetPluginParamValue('ITASA - Parametri Fast Shift', 'ParamShiftGrande')); } catch (err) {}

    if(VSSCore.GetSubCount() > 0) {
      var sub = VSSCore.GetFirstSelected();
      while (sub != null) {
        sub.Start = sub.Start + shift;
        sub.Stop = sub.Stop + shift;
        sub = VSSCore.GetNext(sub);
      }
    }
  }
};

//Registrazione funzioni javasript
VSSCore.RegisterJavascriptAction('JSAction_Fast_Shift_Indietro_1', 'FastShift Indietro Piccolo', '');
VSSCore.RegisterJavascriptAction('JSAction_Fast_Shift_Indietro_2', 'FastShift Indietro Grande', '');
VSSCore.RegisterJavascriptAction('JSAction_Fast_Shift_Avanti_1', 'FastShift Avanti Piccolo', '');
VSSCore.RegisterJavascriptAction('JSAction_Fast_Shift_Avanti_2', 'FastShift Avanti Grande', '');
