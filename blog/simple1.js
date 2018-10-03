var auction = {
    product: {
        name: 'Produkt Name',
        currentBid: 120,
        timeLeft: 20
    }
};


$( document ).ready(function() {
    console.log('simple 1');

    rivets.bind($('#auction'), auction);
});