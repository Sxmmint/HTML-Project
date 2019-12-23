
// 封装方法，
//
var sorce//成绩
var arr=[];//存放身体
var sumnodes=[];//存放整个蛇
var time;//计时器
var map=document.getElementById("map");//地图
// 刷新页面，产生蛇头，以及食物

	function creatediv(color){
		var divs=document.createElement("div");
		divs.style.width="48px";
		divs.style.height="48px";
		//生成随机数 保证其生成div位置随机
		divs.style.left=parseInt(Math.random()*10)*50+"px";
		divs.style.top=parseInt(Math.random()*10)*50+"px";
	//	改变位置,不让独立成行
		divs.style.position="absolute";
		divs.style.background=color;
		map.appendChild(divs);
		//返回div
		return divs;
	}
	//创建蛇头 
	var head=creatediv("red");
	sumnodes.push(head);//将蛇头存放进整个身体数组
	head.value="下";
	//食物
	var food=creatediv("blue");

function begin(){
	clearInterval(time);
	document.getElementById("begin").disabled=true;
	
function move(){

	sorce=0;
	//循环遍历让身体移动	
	if(arr.length>0){
		for (var n = arr.length-1; n >=0; n--) {
			switch(arr[n].value){
				case "左" :
						arr[n].style.left=parseInt(arr[n].style.left)-50+"px";
				break;
				case "右" :
						arr[n].style.left=parseInt(arr[n].style.left)+50+"px";
				break;
				case "上" :
						arr[n].style.top=parseInt(arr[n].style.top)-50+"px";
				break;
				case "下" :
						arr[n].style.top=parseInt(arr[n].style.top)+50+"px";
				break;
		
			}
			if(n==0)
			{
				arr[n].value=head.value
			}else{
				arr[n].value=arr[n-1].value;
			}
			
			
		}

	}
	
	//移动蛇头 四个方向，判断蛇头移动	
	switch(head.value){
		case "左" :
			head.style.left=parseInt(head.style.left)-50+"px";
		break;
		case "右" :
				head.style.left=parseInt(head.style.left)+50+"px";
		break;
		case "上" :
				head.style.top=parseInt(head.style.top)-50+"px";
		break;
		case "下" :
				head.style.top=parseInt(head.style.top)+50+"px";
		break;

	}
		// 碰撞检测 蛇头是否吃到食物
		if(head.style.left==food.style.left&&head.style.top==food.style.top){
			// console.log("1");
			//食物位置更新

			sorce+=5;
			document.getElementById("sroce").innerHTML="成绩："+sorce
			document.getElementsByTagName("h1").innerHTML="成绩:"+sorce
			var px=parseInt(Math.random()*10)*50;
			var py=parseInt(Math.random()*10)*50;
			
			for(var n=0;n<sumnodes.length;n++){
				if (parseInt(sumnodes[n].style.left)==px&&parseInt(sumnodes[n].style.top)==py) {
				px=parseInt(Math.random()*10)*50;
				 py=parseInt(Math.random()*10)*50;
				 n=-1;
					
				}

			}
			food.style.left=px+"px";
			food.style.top=py+"px";
			//生成身体
			var body=creatediv("yellow");
			body.className="body";
			
			//最后一块身体
			var lastnode
			if(arr.length>0){
				lastnode=arr[arr.length-1];
			}else{
				lastnode=head;
			}
			//连接身体
			switch(lastnode.value){
				case "左":
					body.style.left=parseInt(lastnode.style.left)+50+"px";
					body.style.top=lastnode.style.top;
					break;
			case "右":
					body.style.left=parseInt(lastnode.style.left)-50+"px";
					body.style.top=lastnode.style.top;
					break;
			case "上":
					body.style.top=parseInt(lastnode.style.top)+50+"px";
					body.style.left=lastnode.style.left;
					break;
			case "下":
					body.style.top=parseInt(lastnode.style.top)-50+"px";
					body.style.left=lastnode.style.left;
					break;
			}
			// console.log("左边距"+lastnode.style.left)
			// console.log("上边距"+lastnode.style.top)
			// console.log(lastnode.value);
			body.value=lastnode.value; //新产生的身体跟随前一块移动
		
			arr.push(body);
			sumnodes.push(body);//将生成的身体房间整个蛇的数组里面
			

		}
		// 判断蛇头是否出界
		if(parseInt(head.style.left)>450||parseInt(head.style.left)<0||parseInt(head.style.top)>450||parseInt(head.style.top)<0){
			clearInterval(time);
			alert("Game Over");

		}
		if(arr.length>0){
			for(var n=0;n<arr.length;n++)
			{
				if (head.style.left==arr[n].style.left&&head.style.top==arr[n].style.top) {
					clearInterval(time);
				alert("哎呀，咬到自己了");
				}
				
				
				
			}

		}
}

	time=setInterval(move,300);
	//键盘按下事件
	document.onkeydown=function(e){
		// keyCode——键盘值
		// console.log(e.keyCode)
		switch(e.keyCode){
			case 37:
				if (head.value!="右"||arr.length==0) {
					head.value="左";
				}
				
				break;
			case 38:
					if (head.value!="下"||arr.length==0) {
						head.value="上";
					}
			
				break;
			case 39:
					if (head.value!="左"||arr.length==0) {
						head.value="右";
					}
				
				break;
			case 40:
					if (head.value!="上"||arr.length==0) {
						head.value="下";
					}
			
				break;

		}


	}

}
function stopGame(){
	
	if (document.getElementById("stop").innerHTML=="暂停游戏") {
		document.getElementById("begin").disabled=false;
		document.getElementById("stop").innerHTML="继续游戏";
		clearInterval(time);
	}else{
		document.getElementById("stop").innerHTML="暂停游戏";
		document.getElementById("begin").disabled=true;
		time=setInterval(move(),300);
	}
	
}
function rebegin(){	 	
	// var  bodys=document.getElementsByClassName("body");
	// for (var n = 0; n < bodys.length; n++) {
	// 	console.log(bodys[n]);
	// 	$("#map").remove(bodys[n]);
		
	// }
 
		$("#map").removeChild($(".body"));
		
		// console.log(bodys);	
		console.log("清除成功");
	clearInterval(time);
	// document.getElementById("begin").disabled=false;
	// head.style.left=parseInt(Math.random()*10)*50+"px";
	// 	head.style.top=parseInt(Math.random()*10)*50+"px";
	// 	food.style.left=parseInt(Math.random()*10)*50+"px";
	// 	food.style.top=parseInt(Math.random()*10)*50+"px";
		
	
}


