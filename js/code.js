var bgColors = ["red","orange","yellow","green","blue","navy","purple"];
var index = 0

function startworker(){
    interval = setInterval(function(){
        var dates = new Date();
        var bgColor = bgColors[index];
        index = index+1;
        if(index >= 7){
            index = 0 
        }
        postMessage({date:dates,bgColor:bgColor});
    },1000)
}
function stopworker(){
    clearInterval(interval);
}
onmessage = function(e){
    if(e.data==="start"){
        startworker();
    }
    else if (e.data==="stop"){
        stopworker();
    }
}