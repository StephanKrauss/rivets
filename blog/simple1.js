var mySubTemplateModel = function()
{
    // private

    // public
    return{
        name: 'Krauss',
        firstname: 'Stephan',
        phone: '+0049 176 / 37120235',
        birthday: '10.07.1958'
    }
}();



$( document ).ready(function() {
    console.log('simple 1');
    rivets.bind($('#mySubtemplate'), mySubTemplateModel);
});