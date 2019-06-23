$(document).ready(function () {
	$(".custom-control-input").click(checkProgress)
	//$("#modelId").modal()
	$.getJSON("https://api.myjson.com/bins/jv229",
		function (data) {
			console.log(data);
			var history_array = data;
			console.log(history_array);
	});
})

//var history_array = [];

function checkProgress() {
	var progressed = $('#progressbar').width() / $("#progressbar").parent().width() * 100
	var progressed = round(progressed, 2)
	var part = 6.25
	var progressed = progressed + part
    if (!$(this).prop("checked") 
    ) {
		progressed = progressed - part * 2
		$("#progressbar").css("width", progressed + "%")
			.attr("aria-valuenow", progressed)
		// $("#progress-text").text("Wait wut...")
		if (progressed > 50) {
			$("#progressbar")
				.attr("class", "progress-bar progress-bar-striped progress-bar-animated bg-info")
		} else {
			$("#progressbar")
				.attr("class", "progress-bar progress-bar-striped progress-bar-animated bg-primary")
		}
	} else {
		if (progressed >= 100) {
			$("#progressbar").css("width", 100 + "%")
				.attr("aria-valuenow", 100)
				.attr("class", "progress-bar progress-bar-striped progress-bar-animated bg-primary")
			// $("#progress-text").text("OMG Nice")
			$("#modelId").modal()
		} else {
			if (progressed >= 50) {
				$("#progressbar")
					.attr("class", "progress-bar progress-bar-striped progress-bar-animated bg-info")
				//   $("#progress-text").text("Keep going!")
			}
			$("#progressbar").css("width", progressed + "%")
				.attr("aria-valuenow", progressed)
		}
    }
    
        var d = new Date();
        d = d.toLocaleString();

        var obj = {
            date: d,
            check: !$(this).prop("checked") ? "unchecked" : "checked",
            name: $(this).attr("name")
        };
        console.dir(obj);
		console.dir(obj.date);
		//jsonresponse.push(obj.toLocaleString 	);
        history_array.push(obj);
    
}

function round(value, decimal) {
	return Number(Math.round(value + 'e' + decimal) + 'e-' + decimal);
	//return Math.round(value*100)/(100);
}

var date = new Date();
//var filename = date.getFullYear()+"_"+(date.getMonth()+1)+"_"+date.getDay()+".json";
//+"_"+ date.getHours()+"_"+ date.getMinutes() 
var filename = "history.json";

window.addEventListener("load", function(){
	
});

window.addEventListener("unload", function () {
	//console.save(history_array,(filename));
});

(function (console) {

	console.save = function (data, filename) {

		if (!data) {
			console.error('Console.save: No data')
			return;
		}

		if (!filename) filename = 'console.json'

		if (typeof data === "object") {
			data = JSON.stringify(data, undefined, 4)
		}

		var blob = new Blob([data], {
				type: 'text/json'
			}),
			e = document.createEvent('MouseEvents'),
			a = document.createElement('a')

		a.download = filename
		a.href = window.URL.createObjectURL(blob)
		a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
		e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
		a.dispatchEvent(e)
	}
})(console)


// function loadJSON(callback) {

//     var xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', '../history.json', true);
//     xobj.onreadystatechange = function() {
//         if (xobj.readyState == 4 && xobj.status == "200") {

//             // .open will NOT return a value but simply returns undefined in async mode so use a callback
//             callback(xobj.responseText);

//         }
//     }
//     xobj.send(null);

// }

// // Call to function with anonymous callback
// loadJSON(function(response) {
//     // Do Something with the response e.g.
//     var jsonresponse = JSON.parse(response);

//     // Assuming json data is wrapped in square brackets as Drew suggests
//     console.log(jsonresponse[0].name);

// });