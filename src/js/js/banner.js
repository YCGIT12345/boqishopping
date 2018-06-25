/**
 * Created by Administrator on 2018/6/11.
 */
function banner() {
    this.banner = $("#banner");
    this.ul = $("#banner>ul");
    this.aLi = $("#banner>ul>li");
    this.dir = $("#direction>a");
    this.aBtn = $("#btn>a");
    this.iNow = 0;
    this.timer = null;
    this.iw = $("#banner>ul>li").width();
    this.init();
}

//jquery面向对象
$.extend(banner.prototype,{
    init:function(){
        var li = this.aLi.eq(0).clone(true);
        this.ul.append(li);
        var len = $("#banner>ul>li").length;
        this.ul.css("width",len*this.iw);
        this.autoplay()
        this.mouseover();
        this.mouseout();
        this.dirLeft();
        this.dirRight();
        this.aBtnClick();

    },
    aBtnClick:function(){
        this.aBtn.each($.proxy(this.handleaBtnEach,this))
    },
    handleaBtnEach:function(i){
        this.aBtn.eq(i).on("click",i,$.proxy(this.handleAbtn,this))
    },
    handleAbtn:function(event){
        var index = event.data;
        this.aBtn.eq(index).addClass('active').siblings().removeClass("active");

        this.ul.stop(true).animate({
            left:-index*this.iw
        })
        this.iNow = index;
    },
    dirRight:function(){
        this.dir.eq(1).on("click",$.proxy(this.handleDirRight,this))
    },
    handleDirRight:function(){
        if(this.iNow == this.aLi.length){
            this.iNow = 1;
            this.ul.css("left",0);
        }else{
            this.iNow++;
        }
        this.toImg();
    },
    dirLeft:function(){
        this.dir.eq(0).on("click",$.proxy(this.handleDirLeft,this))
    },
    handleDirLeft:function(){
        if(this.iNow == 0){
            this.iNow = this.aLi.length-1;
            this.ul.css("left",-this.aLi.length*this.iw);
        }else{
            this.iNow--;
        }

        this.toImg();
    },
    mouseover:function(){
        this.banner.on("mouseover",$.proxy(this.handleMouseover,this))
    },
    handleMouseover:function(){
        clearInterval(this.timer);
    },
    mouseout:function(){
        this.banner.on("mouseout",$.proxy(this.handleMouseout,this))
    },
    handleMouseout:function(){
        this.autoplay()
    },
    autoplay:function(){

        this.timer = setInterval($.proxy(this.handleSetInterval,this),3000)

    },
    handleSetInterval:function(){
        if(this.iNow == this.aLi.length){
            this.iNow = 1;
            this.ul.css("left",0);
        }else{
            this.iNow++;
        }
        this.toImg();
    },
    toImg:function(){
        //轮播原理
        this.ul.stop(true).animate({
            left:-this.iNow*this.iw
        })
        this.aBtn.eq(this.iNow>=this.aLi.length?0:this.iNow).addClass("active").siblings().removeClass("active");
    }
})

new banner()