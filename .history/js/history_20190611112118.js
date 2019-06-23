// var historyjson = [{
//     "date": "Fri, 07 Jun 2019 10:16:55 GMT",
//     "check": "checked",
//     "name": "wake-up-early"
// },
// {
//     "date": "Fri, 07 Jun 2019 10:16:57 GMT",
//     "check": "checked",
//     "name": "exercise"
// },
// {
//     "date": "Fri, 07 Jun 2019 10:16:58 GMT",
//     "check": "checked",
//     "name": "freshen-up"
// },
// {
//     "date": "Fri, 07 Jun 2019 10:16:59 GMT",
//     "check": "checked",
//     "name": "breakfast"
// },
// {
//     "date": "Fri, 07 Jun 2019 10:17:02 GMT",
//     "check": "checked",
//     "name": "tidy-house"
// },
// {
//     "date": "Fri, 07 Jun 2019 10:17:03 GMT",
//     "check": "checked",
//     "name": "gardening"
// },
// {
//     "date": "Fri, 07 Jun 2019 10:17:05 GMT",
//     "check": "checked",
//     "name": "take-a-stroll"
// },
// {
//     "date": "Fri, 07 Jun 2019 10:17:06 GMT",
//     "check": "checked",
//     "name": "grocery"
// },
// {
//     "date": "Fri, 07 Jun 2019 10:17:09 GMT",
//     "check": "checked",
//     "name": "bath"
// },
// {
//     "date": "Fri, 07 Jun 2019 10:17:10 GMT",
//     "check": "checked",
//     "name": "social"
// },
// {
//     "date": "Fri, 07 Jun 2019 10:17:12 GMT",
//     "check": "checked",
//     "name": "read"
// },
// {
//     "date": "Fri, 07 Jun 2019 10:17:12 GMT",
//     "check": "checked",
//     "name": "music"
// },
// {
//     "date": "Fri, 07 Jun 2019 10:17:16 GMT",
//     "check": "checked",
//     "name": "full-hydrate"
// },
// {
//     "date": "Fri, 07 Jun 2019 10:17:16 GMT",
//     "check": "checked",
//     "name": "on-time"
// },
// {
//     "date": "Fri, 07 Jun 2019 10:17:18 GMT",
//     "check": "checked",
//     "name": "journal"
// }
// ];
// window.addEventListener('load', function() {
//     var data = JSON.parse(JSON.stringify(historyjson));
//     alert(data[0].name);
// });

// function loadJSON(callback){
// var xobj = new XMLHttpRequest();
// xobj.overrideMimeType("application/json");
// xobj.open('GET','historyjson.json',true);
// xobj.onreadystatechange = function(){
//     if(xobj.readyState == 4 && xobj.status ==="200"){
//     callback(xobj.responseText);
//     }
// }
// xobj.send(null);
// }

// loadJSON(function(response){
//     jsonobj = JSON.parse(response);
//     console.log(jsonobj[0].name);
// });


$(function(){
    $('.img').click(function(){
        $(this).toggleClass('active');
    })
});