var jsonObj = [];

$.getJSON('../history.json', function(data){
    jsonObj = data;
})

$(document).ready(function(){
    for(var i =0;i<jsonObj.length;i++){
       var add = document.createElement("LI");
       var textNode = 
    }

    $("#history-search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#history-list li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

  });