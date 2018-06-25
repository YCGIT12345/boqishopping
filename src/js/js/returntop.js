/**
 * Created by Administrator on 2018/6/11.
 */
function fn(){
    this.timer=null;
    this.init();
}
$.extend(fn.prototype,{
    init:function(){
        this.returntop();
    },
    returntop:function(){
        $("#returntop").click(function(){
            $("html").stop(true).animate({
                scrollTop:0
            })
        });
    }
})
new fn();