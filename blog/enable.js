var data = {
  steuerung: {
      anzeige: false,
      button: false,
      esSeiDenn: true,
      checked: false
  }
};

$(document).ready(
    function(){
        rivets.bind($('#content'), data);
    }
);

