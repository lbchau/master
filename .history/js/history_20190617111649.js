var jsonObj = [];

$.getJSON('../history.json', function(data){
    jsonObj = data;
})

$(document).ready(function(){
    for(var i =0;i<jsonObj.length;i++){
       var add = document.createElement("LI");
       var header = document.createElement("H6");
       var obj = document.createElement("DIV");
      add.className="list-group-item";
      header.innerHTML = jsonObj[i].date;
      add.appendChild(header);
      document.getElementById("history-list").appendChild(add);
    }

    $("#history-search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#history-list li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });

  });