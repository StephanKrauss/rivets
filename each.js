$(document).ready(function() {

    rivets.formatters.compare = function (array, compare) {

        var tempArr = [];

        array.forEach(function (element, index, array) {
            if (element.id == compare) {
                tempArr.push(element);
            }
        });

        console.log(tempArr);

        return tempArr;
    }

    window.view = rivets.bind($('#contentWrap'), {
        truck: [{id: 1},
            {id: 2},
        ],
        jobs: [
            {id: 1, job_number: 'thing1'},
            {id: 1, job_number: 'thing2'},
            {id: 1, job_number: 'thing3'},
            {id: 1, job_number: 'thing4'},
            {id: 2, job_number: 'thing5'},
            {id: 2, job_number: 'thing6'},
            {id: 2, job_number: 'thing7'},
            {id: 2, job_number: 'thing8'},
        ]
    });

});

