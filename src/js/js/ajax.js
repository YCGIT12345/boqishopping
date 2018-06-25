function Hotpro_b(){
	this.hotpro_b=$("#hotpro_b");
	this.init();
}
$.extend(Hotpro_b.prototype,{
	init:function(){
		this.main();
		this.show();
	},
	show:function(){
		$(".menu_list_1").onmouseover=function(){
			$(".erji").display="block";
		}
		$(".menu_list_1").onmouseout=function(){
			$(".erji").display="none";
		}
	},
	main:function(){
		$.ajax({
			type:"get",
			url:"index.json",
			dataType:"json",
			success: $.proxy(this.handleajax,this)
		})
	},
	handleajax:function(data){
		var obj=data.data1;
		var str='';
		for(var i=0;i<obj.length;i++){
			str+=`
            <dl class="first" data-id=${obj[i].id }>
                        <dt><a href="##"><img src=${obj[i].img0}></a></dt>
                        <dd><a href="##">${obj[i].content}</a></dd>
                        <dd><span class="span1 red">${obj[i].price}</span><span class="span2">${obj[i].details}</span></dd>
                    </dl>
            `;
		}
		this.hotpro_b.html(str);

		$(".first").click(function(){

			var id = $(this).attr("data-id");
			location.href = "http://localhost/petshopping/src/html/details.html?"+id;
		})
	},

})
new Hotpro_b();