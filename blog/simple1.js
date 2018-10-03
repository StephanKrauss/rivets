var mySubTemplateModel = function()
{
    // private
    function todoList(){
        return [{"name":"Bla","alter":25},{"name":"Blub","alter":30}];
    }

    // public
    return{
        name: 'Krauss',
        firstname: 'Stephan',
        phone: '+0049 176 / 37120235',
        birthday: '10.07.1958',
        todo: todoList()
    }
}();



$( document ).ready(function() {
    console.log('Model: mySubTemplate');
    rivets.bind($('#mySubtemplate'), mySubTemplateModel);
});