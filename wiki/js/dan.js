//模块化 每个功能函数去做自己相应的事情 代码可维护性 可扩展性
//初始化函数
var aShowList = document.querySelectorAll('.s_show div');//获取元素 H5
var oShow = document.querySelector('.s_show');
var oSend = document.querySelector('.send');
var oBtn = document.querySelector('.btn');
var oText = document.querySelector('.text');
var time = 0;//上一次你发送的时间
var time1 = 0;
//点击发送弹幕

	oBtn.onclick = function(){//鼠标点击事件
	//oBtn.style.backgroundColor = randomColor();//按钮背景颜色变换
	time1 = new Date();
	oBtn.style.color = randomColor();//按钮字体颜色变换
	if(time1 - time > 3000){//2次发送的时间必须大于2秒
	var oDiv = document.createElement('div');//创建div
	oDiv.innerHTML = oText.value;//添加弹幕内容
	oDiv.className = 'magictime twisterInUp';//弹幕特效
	oShow.appendChild(oDiv);//添加一个子节点
	init(oDiv);//初始化
	oText.value = '';
	time = time1;
	//console.log(time);
	   }else{
		   alert("请稍后再发~");

	   }
}

for(var i = 0;i < aShowList.length;i++){
	init(aShowList[i]);//执行初始化函数
}

function init(obj){//接受弹幕对象
//确定top值的随机区间
	var screenHeight = document.documentElement.clientHeight;//获取屏幕可视高度
	var maxTop = screenHeight - oSend.offsetHeight - obj.offsetHeight;//高度差范围
	obj.style.top = maxTop * Math.random() + 'px';
//控制left值
	var screenWidth = document.documentElement.clientWidth;//获取可视宽度
	var maxLeft = screenWidth - obj.offsetWidth/* - Math.random() * 800 */;//随机宽度差
	obj.style.left = maxLeft + 'px';
//弹幕的随机颜色
	obj.style.color = randomColor();
	/*setInterval(function(){
		move(obj,maxLeft);
	},1000);*///普通定时器
	move(Math.random()*5+1,obj,maxLeft);
}
//弹幕移动函数
function move(k,obj,maxLeft){
	var speed = k;//控制速度的变量
	maxLeft -= speed;//往左移动
	if(maxLeft > -obj.offsetWidth){
		obj.style.left = maxLeft + 'px';
		requestAnimationFrame(function(){
		move(k,obj,maxLeft);
	});//H5新增的动画函数
	}else{
		init(obj);//重新初始化 营造循环弹幕效果
	  /*  oShow.removeChild(obj);//DOM删除子节点 */
	}
}
//随机颜色函数
function randomColor(){
	return '#' + Math.random().toString(16).slice(-6);//一行简化版截取后六位
	/*var str = '#';
	for(var i = 0;i < 6;i++){
		str += Math.floor(Math.random() * 16).toString(16);
	}
	return str;*///普通逻辑版
}
