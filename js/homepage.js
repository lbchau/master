window.addEventListener("scroll",scrollFunc);
function scrollFunc(){
    if (document.body.scrollTop > 200||document.documentElement.scrollTop > 200){
        document.getElementById("jumpTopBtn").style.opacity="0.7";
        document.getElementById("jumpTopBtn").style.display="block";
        
        document.getElementById("floatMenu").style.position="fixed";
        //document.getElementById("floatMenu").style.display="block";
        //document.getElementById("floatMenu").style.zIndex="100";
    }
    else if ((document.body.scrollTop < 200)||(document.documentElement.scrollTop < 200)){
        document.getElementById("jumpTopBtn").style.opacity="0";
        document.getElementById("jumpTopBtn").style.display="none";

        document.getElementById("floatMenu").style.position="sticky";
        //document.getElementById("floatMenu").style.display="none";
        //document.getElementById("floatMenu").style.zIndex="-100";
    }
}

//jump Top shortcut
document.getElementById("jumpTopBtn").addEventListener("click",jumpTop);
function jumpTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.addEventListener("load", function(){
    setInterval(timeFunc,200);
    //alert("scroll down for a clock + music player");
});
function timeFunc(){
    var date = new Date();
    // var day = date.getDate();
    // var month = date.getMonth();
    // var year = date.getFullYear();
    // var wday = date.getDay();

    // var m =['January', 'February','March','April','May','June','July','August','September','October', 'November','December'];
    // var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    // var month = m[month];
    // var wday = week[wday];

    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    min = checkTime(min);
    sec = checkTime(sec);

    document.getElementById("clock").innerHTML=hour + ' : ' + min + ' : ' + sec;

    function checkTime(t){
        return t >= 10 ? t : ('0' + t);
    }
}
