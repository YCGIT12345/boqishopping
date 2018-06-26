/**
 * Created by Administrator on 2018/5/26.
 */
var banner = document.getElementById("banner");
var aLi = document.querySelectorAll("#banner>ul>li");
var iNow = 0,Next = 0;
var timer = null;
//移入的时候轮播停止
//    banner.onmouseover = function(){
//        clearInterval(timer)
//    }
//    //移除的时候轮播继续
//    banner.onmouseout = function(){
//        autoPlay()
//    }

autoPlay();
//自动轮播
function autoPlay(){
    timer = setInterval(function(){
        if(Next == aLi.length-1){
            Next = 0;
        }else{
            Next++;
        }
        toImg()
    }, 4000)
}

//运动原理
function toImg(){
    move(aLi[iNow],{opacity:0});
    move(aLi[Next],{opacity:100});
    iNow = Next;
}

//回到顶部
var iH = parseInt(document.documentElement.clientHeight/2-50);
var obox=document.getElementById("box");
obox.style.top = iH+"px";
window.onscroll = function(){
    var t = document.documentElement.scrollTop ||document.body.scrollTop;
    obox.style.top = iH+t+"px";
}
obox.onclick = function(){
    document.documentElement.scrollTop = document.body.scrollTop = 0
}


