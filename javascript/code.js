// 原代码：
// var ob = document.getElementById("ob");
// var eu = document.getElementById("eu");
// //调用之前的html标签（var=balabala：定义之前的某项html标签项为此处的变量）
// //eu.style.
// // 这里的style是在JavaScript中调用css属性
// ob.onmousemove = function(){
//     eu.style.transition= "1s";
//     eu.style.visibility= "visible";
//     eu.style.opacity= "1.0"
// }

// ob.onmouseout  = function(){
//     eu.style.transition= "0s";
//     eu.style.visibility = "hidden";
//     eu.style.opacity= "0.0"
// }
// //此处的onmousemove/out设置了之前的style效果的呈现情况


function hoverEvent(name1, name2) {
    var a = document.getElementById(name1);
    var b = document.getElementById(name2);
    //调用之前的html标签（var=balabala：定义之前的某项html标签项为此处的变量）
    //b.style.
    // 这里的style是在JavaScript中调用css属性
    a.onmousemove = function(){
        b.style.transition= "1s";
        b.style.visibility= "visible";
        b.style.opacity= "1.0"
    }

    a.onmouseout  = function(){
        b.style.transition= "0s";
        b.style.visibility = "hidden";
        b.style.opacity= "0.0"
    }
    //此处的onmousemove/out设置了之前的style效果的呈现情况
}

(function(){
    hoverEvent("ob","eu")
    hoverEvent("or", "ha");
    hoverEvent("co", "_30");
    hoverEvent("ma", "ar");
    hoverEvent("la", "ari");
    hoverEvent("add", "scp");
    hoverEvent("email", "eNum");
    hoverEvent("wechat", "wNum");
    hoverEvent("phone", "pNum");
})()

// 音乐开启窗口是默认暂停的
window.onload = function(){
    var audio = document.getElementById("A&W");
    audio.pause();
    // 这个函数在eyes文件里
    switchSize();
}

// 点击播放，若正在播放则暂停
function play(){
    var audio = document.getElementById("A&W");
    if(audio.paused){
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;
    }
}

// major的框
function frameAppear(){
    var frame = document.getElementById("frame");
    if(frame.style.visibility==="hidden"){
        frame.style.visibility="visible";
    }
    else{
        frame.style.visibility="hidden";
    }
}
