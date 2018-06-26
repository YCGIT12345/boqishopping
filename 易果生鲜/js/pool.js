/*
	获取随机数
 */
function numRandom(){
	return parseInt(arguments[0]+Math.random()*(arguments[1]-arguments[0]+1));
}

//选择排序
function selectSort (arr) {
	var temp;
	for(var i=0;i<arr.length-1;i++){
		for(var k=i+1;k<arr.length;k++){
			if(arr[i]>arr[k]){
				temp = arr[i];
				arr[i] = arr[k];
				arr[k] = temp;
			}
		}
	}

	return arr;
}


//冒泡排序
function bubbleSort(arr){
	var temp;
	for(var i=0;i<arr.length-1;i++){
		for(var k=0;k<arr.length-i-1;k++){
			if(arr[k]>arr[k+1]){
				temp = arr[k];
				arr[k] = arr[k+1];
				arr[k+1] = temp;
			}
		}
	}
	return arr;
}

//获取最大值
function getMax(arr){
	var max = arr[0];
	for(var i in arr){
		if(arr[i]>max){
			max = arr[i];
		}
	}
	return max;
}

//获取最小值下标
function getMinIndex(arr){
	var max = arr[0];
	var index = 0;
	for(var i in arr){
		if(arr[i]<max){
			max = arr[i];
			index = i;
		}
	}
	return index;
}

//判断某个值是否存在
function has(arr,num){
	var bStop = false;
	for(var i in arr){
		if(arr[i] == num){
			bStop = true;
			break;
		}
	}
	return bStop;
}

//数组去重
function norepeat1(arr){
	var newArr = [];
	for(var i in arr){
		if(!has(newArr,arr[i])){
			newArr.push(arr[i])
		}
	}
	return newArr;
}
//数组去重2
function norepeat2(arr) {
	var arr1 = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr1.indexOf(arr[i]) == -1) {
			arr1.push(arr[i]);
		}
	}
	return arr1;
}
//随机颜色1
function randomColor(){
	var r = numRandom(0,255);
	var g = numRandom(0,255);
	var b = numRandom(0,255);

	return "rgb("+r+","+g+","+b+")"
}

//随机颜色2
function random2Color(){
	var r = numRandom(0,255)
	var g = numRandom(0,255)
	var b = numRandom(0,255)

	return "#"+rZero(r,g,b);
}


function rZero(r,g,b){
	
	r = r.toString(16).length>=2?r.toString(16):"0"+r.toString(16);
	g = g.toString(16).length>=2?g.toString(16):"0"+g.toString(16);
	b = b.toString(16).length>=2?b.toString(16):"0"+b.toString(16);

	return ""+r+g+b
}

//将时间对象转换为字符串
function stringDate(d,sign){
	if(!sign){
		sign = "/"
	}
	return ""+d.getFullYear()+sign+drZero((d.getMonth()+1))+sign+drZero(d.getDate())+" "+drZero(d.getHours())+":"+drZero(d.getMinutes())+":"+ drZero(d.getSeconds());


}
//事件对象补0
function drZero(n){
	if(n<10){
		return "0"+n;
	}else{
		return n;
	}
}
//数字字母混合验证码
function codeRandom () {
	var str = "";
	for(var i=0;i<6;i++){
		var n = parseInt(48+Math.random()*(122-48+1));
		while(n>=58 && n<=64 || n>=91 && n<=96){
			n = parseInt(48+Math.random()*(122-48+1));
		}
		var char = String.fromCharCode(n);

		str+=char;
		return str;
	}
}

//获取id元素
function $(id) {
	 id = id.slice(1);
	 return document.getElementById(id);
}

//获取非行间样式
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}
//显示
function show(obj){
	obj.style.display = "block";
}
//隐藏
function hide(obj){
	obj.style.display = "none";
}

//获取和设置自定义属性
function attr(){
	if(arguments.length== 2){
		return arguments[0].getAttribute(arguments[1]);
	}else if(arguments.length == 3){
	 	arguments[0].setAttribute(arguments[1],arguments[2])
	}
}

//获取距离页面的偏移量
function offset(ele){
	var obj = {}
	obj.l= ele.offsetLeft;
	obj.t= ele.offsetTop;
	while(ele.offsetParent){
		ele = ele.offsetParent;
		obj.t+= ele.offsetTop;
		obj.l+= ele.offsetLeft;
	}
	return obj;
}

//设置cookie
function setCookie(_name,val,expires){
	var d = new Date();
	d.setDate(d.getDate()+expires);
	document.cookie = _name+"="+val+";path=/;expires="+d.toGMTString();
}

//获取cookie
function getCookie(_name){
	var cookie = document.cookie;
	var arr = cookie.split("; ");
	for(var i=0;i<arr.length;i++){
		var newArr = arr[i].split("=");
		if(newArr[0] == _name){
			return newArr[1];
		}
	}
}

//删除cookie
function removeCookie(_name,val){
	setCookie(_name,val,-1)
}

function move(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var bStop = true;
		for(var attr in json){
			//先判断是否是透明度
			var iCur;
			if(attr == "opacity"){
				iCur = parseInt(parseFloat(getStyle(obj,attr))*100);
			}else{
				iCur = parseInt(getStyle(obj,attr));
			}

			//算速度
			

			var speed = (json[attr] - iCur)/8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);

			if(json[attr] != iCur){
				bStop = false;
			}


			if(attr == "opacity"){
				obj.style.opacity = (iCur+speed)/100;
				obj.style.filter = "alpha(opacity:"+(iCur+speed)+")"
			}else{
				obj.style[attr] = iCur+speed+'px';
			}
		}

		if(bStop){
			clearInterval(obj.timer);
			fn&&fn();
		}
	},30)
}

