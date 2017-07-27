// Model - Attribute
var model = {
    modelCounter: {
        value: 10
    },
    modelColor: {
        value: 'blue'
    }
};

// Formatierer
rivets.formatters.toColorStyle = function(v) {
    return 'color: ' + v;
};

// Model für Counter
function counterViewModel(attributes) {
    this.data = attributes;

    this.increment = function (event, scope) {
        // Rivets renames kebab-case to camelCase
        scope.data.counterAttr.value++;
    };
    this.decrement = function (event, scope) {
        scope.data.counterAttr.value--;
    };
    this.toggleColor = function (event, scope) {
        var old = scope.data.colorAttr.value;

        if (old === 'red') scope.data.colorAttr.value = 'blue';
        else scope.data.colorAttr.value = 'red';
    };
}

// Componente definieren und ersetzen
rivets.components['zaehler'] = {
    template: function() {
        return '<button rv-on-click="increment"> + </button>' +
            '<button rv-on-click="decrement"> - </button>' +
            '<button rv-on-click="toggleColor">toggle color</button>';
    },
    initialize: function(el, attributes) {
        return new counterViewModel(attributes);
    }
};

// Bindung der Daten an die Componente
rivets.bind($('#view'), model);
