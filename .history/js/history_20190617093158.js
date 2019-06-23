var history = [];

$.getJSON('../history.json', function(data){
    history = data;
})