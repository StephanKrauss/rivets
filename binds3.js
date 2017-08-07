$(document).ready(function(){
    console.clear();

    var model = {
        data: {
            enabled: 'enabled',
            vorname: 'Stephan'
        },
        functions: {
            einfach: function()
            {
                console.info('einfach');
            }
        }
    };

    rivets.bind($('#content'), {
      data: model.data
    });


});

