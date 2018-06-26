var banner = document.getElementById("banner");
var aLi = document.querySelectorAll("#banner>ul>li");
var iNow = 0,Next = 0;
var timer = null;

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
};
var olist=document.getElementById("list");
ajax("get","tsconfig.json",{},function (data){
    var data=JSON.parse(data);
    var obj=data.data1;
    console.log(obj);
    var str='';
    for(var i=0;i<obj.length;i++){
        //str+=`<li data-id=${obj[i].id} class="go"><a href="#"><img src=${obj[i].img0}></a></li>`;
        //(此处本人应用的开发工具不兼容，所以写在html中了，换个工具就能执行)
    }
    olist.innerHTML+=str;


    var go=document.querySelectorAll(".go");
    for(var i=0;i<go.length;i++){
        go[i].onclick=function(){
            var num = this.getAttribute("data-id");
            location.href="details.html?id="+num;
        }
    }
});





