// Fast Shift by nixxo (versione 1.0 ;-))

// ---------------------------------------------------------------------------
// Fast Shift Indietro
// ---------------------------------------------------------------------------

JSAction_Fast_Shift_Indietro = {

  onExecute : function() {
	
    var shift = 50;

    if(VSSCore.GetSubCount() > 0) {
      var sub = VSSCore.GetFirstSelected();
      /*controllo overlap*/
      var subP = VSSCore.GetPrevious(sub);
      if ((sub.Start - subP.Stop) < shift )
        subP.Stop = subP.Stop - shift;
      /*fine controllo overlap*/
      while (sub != null) {
        sub.Start = sub.Start - shift;
        sub.Stop = sub.Stop - shift;
        sub = VSSCore.GetNext(sub);
      }
    }
  }
};

VSSCore.RegisterJavascriptAction('JSAction_Fast_Shift_Indietro', 'FastShift Indietro', 'Ctrl+F7');

// ---------------------------------------------------------------------------
// Fast Shift Avanti
// ---------------------------------------------------------------------------

JSAction_Fast_Shift_Avanti = {

  onExecute : function() {
	
    var shift = 50;

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

VSSCore.RegisterJavascriptAction('JSAction_Fast_Shift_Avanti', 'FastShift Avanti', 'Ctrl+F8');
