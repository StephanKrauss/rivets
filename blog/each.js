$(document).ready(function() {

    // Formatierer
    rivets.formatters.compare = function (array, compare) {

        var tempArr = [];

        array.forEach(function (element, index, array) {
            if (element.id == compare) {
                tempArr.push(element);
            }
        });

        return tempArr;
    }

    var data = {
            truck: [
            {id: 1},
            {id: 2}
        ],
            jobs: [
            {id: 1, job_number: 'Aufgabe 1'},
            {id: 1, job_number: 'Aufgabe 2'},
            {id: 1, job_number: 'Aufgabe 3'},
            {id: 1, job_number: 'Aufgabe 4'},
            {id: 2, job_number: 'Aufgabe 5'},
            {id: 2, job_number: 'Aufgabe 6'},
            {id: 2, job_number: 'Aufgabe 7'},
            {id: 2, job_number: 'Aufgabe 8'}
        ]
    }

    // übergebene Daten
    rivets.bind($('#contentWrap'), data);

});

