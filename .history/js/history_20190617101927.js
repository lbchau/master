var jsonObj = [];

$.getJSON('../history.json', function(data){
    jsonObj = data;
})

$(document).ready(function(){

    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myList li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
    
  });