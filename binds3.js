$(document).ready(function(){
    console.clear();

    var model = {
        data: {
            enabled: 'enabled',
            vorname: 'Stephan'
        },
        controller: {
            wechsel: function(el, model)
            {
                debugger;

                console.info('wechsel');

                model.data.vorname = 'Max';
            }
        }
    };

    rivets.bind($('#content'), {
      data: model.data,
      controller: model.controller
    });


});

