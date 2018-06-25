/**
 * Created by Administrator on 2018/6/13.
 */
function fn(){
    this.skip();
    this.loCal = localStorage.getItem("init")?JSON.parse(localStorage.getItem("init")):{};
}
$.extend(fn.prototype,{
    init:function(){
    this.num();
        this.box();
        this.mov();
        this.out();
        this.move();
        this.goshop();
    },
    //商品数量
    num:function(){
        $(".add").click(function(){
            var num = $("#number").val();
            num++;
            $("#number").val(num);
        })
        $(".minus").click(function(){
            var num = $("#number").val();
            if(num<=1){
                num=1;
            }else{
                num--;
                $("#number").val(num);
            }
        })
    },
    //选项卡
    move:function(){
        $(".small").mouseover(function(){
            var url=$(this).attr('src');
            $(".middle").attr("src",url);
            $("#maxImg").attr("src",url);
        })
    },
    //放大镜
    box:function(){
        $(".box").mouseover(function(){
            $("#filter").css("display","block");
            $("#max").css("display","block");
        })
    },
    mov:function(){
        $(".box").mousemove(function(e){

            var l = e.pageX -$(this).offset().left-$("#filter").width()/2;
            var t = e.pageY -$(this).offset().top - $("#filter").height()/2;

            if(l<0){
                l=0
            }
            if(t<0){
                t=0
            }
            if(l>=$(this).width()-$("#filter").width()){
                l=$(this).width()-$("#filter").width()
            }
            if(t>=$(this).height()-$("#filter").height()){
                t=$(this).height()-$("#filter").height()
            }

            $("#filter").css({
                'left':l,
                'top':t
            })

            $("#max>img").css({
                'left':-2*l,
                'top':-2*t
            })
        })
    },
    out:function(){
        $(".box").mouseout(function(){
            $("#filter").css("display","none");
            $("#max").css("display","none");
        })
    },
    //调用json数据
    skip:function(){
        var num=location.href.split("?")[1];
        var str='';
        var _this=this;
        $.get("http://localhost/petshopping/src/index.json",{},function(data){
            var data =data.data1;
            console.log(data)
            for(var i in data){
                if(data[i].id==num){
                str+=`<div class="box ">
    <img src="${data[i].img0}" class="middle">
    <div id="filter"></div>
    </div>
    <div id="max">
    <img src="${data[i].img0}" id="maxImg">
    </div>
    <div id="bot">
    <img src="${data[i].img1}" class="small"  data-url="${data[i].img1}">
    <img src="${data[i].img2}" class="small"  data-url="${data[i].img2}">
    <img src="${data[i].img3}" class="small"  data-url="${data[i].img3}">
    </div>
    <div class="ab_right">
    <p><h1 class="pp1">${data[i].name}</h1></p>
    <p class="pp2">6.8-6.15 聚品牌专场 全场7折起 领券再享双重优惠</p>
    <p><br>
    <p class="pp3"><span>波奇价：<span class="bigred">${data[i].price}</span></span><br><span>厂商指导价: <s class="graycenter">${data[i].price1}</s></span><br><span class="red">促销信息：已优惠48元</span></p><br>
    <p>配送至：<select>
        <option value="">广东</option>
        <option value="">上海</option>
        <option value="">北京</option>
        <option value="">深圳</option></select>
        有货；<span class="red">支持使用优惠券</span>
    </p>
    <p id="pp4"><span>数量:</span><button class="add">+</button>
    <input type="text" class="txt" value="1" id="number"><button class="minus">-</button>
    </p>
        <p id="pp5"><a href="#" class="shop"><i class="iconfont icon-cart"></i>加入购物车</a><a href="http://localhost/petshopping/src/html/product.html"><i class="iconfont icon-cart"></i>立即购买</a></p>
    </div>`;
                }
                $(".main_1").html(str);
            }
            _this.init();
        })
    },
    goshop:function(){
        $(".shop").on({
            click:$.proxy(this.buyshop,this)
        })
    },
    buyshop:function(e){

        var e = $(e.target)
        var id = location.href.split("?")[1];
        console.log(id)
        var n = this.loCal[id];
        if(!n){
            n=1;
            this.loCal[id]=n;
        }else{
            n++;
            this.loCal[id]=n;
        }
        var str = JSON.stringify(this.loCal);
        localStorage.setItem("init",str);
        console.log(str)

    }
})
new fn();


