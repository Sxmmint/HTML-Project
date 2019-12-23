$("#reg").click(function(){
    var name=$(".necode").val();
    var pwd=$(".pwd").val();
    var pwds=$(".pwds").val();
    if (name==""||!isNaN(name)) {
        $(".skip:eq(0)").text("昵称不能为纯数字或者为空").css("color","red");
    }else{
        $(".skip:eq(0)").text("昵称合法").css("color","green");
    }
    if (pwd==""||!isNaN(pwd)) {
        $(".skip:eq(1)").text("密码不能为纯数字或者为空").css("color","red");
    }else{
        $(".skip:eq(1)").text("密码合法").css("color","green");
    }
    if (pwd!=pwds||pwds=="") {
        $(".skip:eq(2)").text("密码不一致").css("color","red");
    }else{
       $(".skip:eq(2)").text("密码一致").css("color","green");
    }

})
$(".showimg").click(function(){
    if($(this).attr("src")=="img/view_off.png")
    {
        $(this).attr("src","img/view.png");
        $(".pwd").attr("type","text");
        $(".pwds").attr("type","text");
    }else{
        $(this).attr("src","img/view_off.png");
        $(".pwd").attr("type","password");
        $(".pwds").attr("type","password");
    }
})
$(".checkd").click(function(){
    if($(this).is(':checked'))
    {
       document.getElementById("reg").disabled=false;
       $("#reg").css({"background":"green",
        "border":"none",
        "color":"white"
    });

        
    }else{
         document.getElementById("reg").disabled=true;
         $("#reg").css({"background":"white",
         "border":"none",
         "color":"gray"
     });

    }
})