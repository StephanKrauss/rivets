// rivets.configure({
//
//     // Attribute prefix in templates
//     prefix: 'rv',
//
//     // Preload templates with initial data on bind
//     preloadData: true,
//
//     // Root sightglass interface for keypaths
//     rootInterface: '.',
//
//     // Template delimiters for text bindings
//     templateDelimiters: ['{', '}'],
//
//     // Augment the event handler of the on-* binder
//     handler: function(target, event, binding) {
//         this.call(target, event, binding.view.models)
//     }
//
// });

var data = {
    'name' : 'Max Mustermann',
    'tag' : '<span>Here is the content for paragraph</span>',
    'available' : true,
    'sendData' : false,
    'vote' : true,
    'publish' : function(){
        user.vote = false;
        console.log(user.name);
    },
    'hinweis': {
        wert: 5
    },
    steuerung: {
        show: true
    }
}

rivets.bind($('#block'), {
    data: data
});

$(document).ready(function(){
    window.view = rivets.bind($('#contentWrap'),{
        truck:[{id:1},
            {id:2},
            {id:3},
        ],
        jobs:[
            {id:1,job_number:'thing1'},
            {id:1,job_number:'thing2'},
            {id:1,job_number:'thing3'},
            {id:1,job_number:'thing4'},
            {id:2,job_number:'thing5'},
            {id:2,job_number:'thing6'},
            {id:2,job_number:'thing7'},
            {id:2,job_number:'thing8'},
        ]
    });
});


// console.info('Console');
