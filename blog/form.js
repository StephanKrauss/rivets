/**
 * Created by stephan.krauss on 27.07.2017.
 */


rivets.configure({

    // Attribute prefix in templates
    prefix: 'rv',

    // Preload templates with initial data on bind
    preloadData: true,

    // Root sightglass interface for keypaths
    rootInterface: '.',

    // Template delimiters for text bindings
    templateDelimiters: ['{', '}'],

    // Alias for index in rv-each binder
    iterationAlias : function(modelName) {
        return '%' + modelName + '%';
    },

    // Augment the event handler of the on-* binder
    handler: function(target, event, binding) {
        this.call(target, event, binding.view.models)
    },

    // Since rivets 0.9 functions are not automatically executed in expressions. If you need backward compatibilty, set this parameter to true
    executeFunctions: false

})



var auction = {
        product: {
            name: 'Test'
        },
        user: {
            firstname: 'Stephan',
            lastname: 'Krauss',
            description: 'ksdjskfjjskdjf sfsfsd sdfsfsdf sdfsdfd'
        }
}

rivets.bind($('#auction'), {auction: auction});

rivets.binders.color = function(el, value) {
    el.style.color = value
}
