function Show(){
    this.obox = $("#list")
    this.init();
}

$.extend(Show.prototype,{
    init:function(){
        $.ajax({
            type:"get",
            url:"http://localhost/petshopping/src/index.json",
            dataType:"json",
            data:{},
            success:$.proxy(this.add,this)
        })
    },
    add:function(data){
        var data  = data.data1;
        if(localStorage.getItem("init")){
            var obj = JSON.parse(localStorage.getItem("init"));
            var str="";
            for(var i in obj){
                for(var k in data){
                    if(i == data[k].id){
                        str+=`<tr>
                            <td><input type="checkbox"></td>
                            <td><img src="${data[k].img1}" class="crimg"></td>
                            <td>${data[k].content}</td>
                            <td>${data[k].price}</td>
                            <td>
                            <button class='dec'>-</button>
                            <input type='text' value="1" class='num'>
                            <button class='inc'>+</button></td>
                            <td class='mumip'></td><td><a href='#' class='del'>删除</a><br><a href='#'>移到我的关注</a><br><a href='#'>加到我的关注</a></td>
                            </tr>`
                    }

                }
            }
            this.obox.append(str);
        }
    }
})


new Show()