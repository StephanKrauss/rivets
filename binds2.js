rivets.configure({

    // Attribute prefix in templates
    prefix: 'rv',

    // Preload templates with initial data on bind
    preloadData: true,

    // Root sightglass interface for keypaths
    rootInterface: '.',

    // Template delimiters for text bindings
    templateDelimiters: ['{', '}'],

    // Augment the event handler of the on-* binder
    handler: function(target, event, binding) {
        this.call(target, event, binding.view.models)
    }

});

var person = {
    'name' : 'Max Mustermann',
    'tag' : '<span>Here is the content for paragraph</span>',
    'available' : true,
    'sendData' : false,
    'vote' : true,
    'publish' : function(){
        user.vote = false;
        console.log(user.name);
    }
}

rivets.bind($('#block'), {
    user: person,
    dummy: dummy
});

// debugger;

var dummy = {
    bla: 'bla',
    blub: 'blub'
}

rivets.bind($('#dummy'),dummy);

var zaehler = {
    zaehler: 5
};

rivets.bind($('#zaehler'), zaehler);



console.info('Console');
