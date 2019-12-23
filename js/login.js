$(".register").click(function () {
  $("#box").animate({width: 'toggle'},350)
$("#loginbox").hide();
})
$(".cancel").click(function(){
	$("#box").animate({width: 'toggle'},350)
$("#loginbox").show();
	
	
})
$(".user").blur(function(){
		if($(this).val()==""){
			$("img:eq(1)").attr("src","img/哭.png");
			$("img:eq(1)").show();
		}else{
			$("img:eq(1)").attr("src","img/笑.png");
			$("img:eq(1)").show();
		}
	
})
$(".pwd").blur(function(){
		if($(this).val()==""){
			$("img:eq(3)").attr("src","img/哭.png");
			$("img:eq(3)").show();
		}else{
			$("img:eq(3)").attr("src","img/笑.png");
			$("img:eq(3)").show();
		}
})
$(".login").click(function(){
		if($(".user").val()!=""||$(".pwd").val()!=""){
			alert("登录成功");
		}else{
			$(this).disabled=true;
		}
	
})
$(".userl").blur(function(){
		if($(this).val()==""){
			$("img:eq(6)").attr("src","img/哭.png");
			$("img:eq(6)").show();
		}else{
			$("img:eq(6)").attr("src","img/笑.png");
			$("img:eq(6)").show();
		}
})
$(".pwdl").blur(function(){
		if($(this).val()==""){
			$("img:eq(8)").attr("src","img/哭.png");
			$("img:eq(8)").show();
		}else{
			$("img:eq(8)").attr("src","img/笑.png");
			$("img:eq(8)").show();
		}
})
$(".pwds").blur(function(){
		if($(this).val()==""){
			$("img:eq(10)").attr("src","img/哭.png");
			$("img:eq(10)").show();
		}else{
			$("img:eq(10)").attr("src","img/笑.png");
			$("img:eq(10)").show();
		}
})
$(".registerbtn").click(function(){
	if($(".userl").val()==""||$(".pwdl").val==""()){
		alert("不能为空！");
	}else if($(".pwds").val()!=$(".pwdl").val()){
		alert("密码不一致");
	}else{
		alert("注册成功");
	}
	
})
