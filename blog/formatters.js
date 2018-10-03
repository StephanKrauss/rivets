$(document).ready(function()
{
    rivets.formatters.geld = function(value){
        return value + " €";
    }

    rivets.formatters.geburtstag = function(value){
        return value + " >> Geburtstag <<";
    }
});

