$(function(){
	
});

function showDialog1(){
	$("#dialog1").yuerMsg("show");
}

function hideDialog1(){
	$("#dialog1").yuerMsg("hide");
}
function showErroeDialog(){
	$.yuerMsg.error("哈哈啊哈哈哈哈哈哈哈啊啊啊啊啊时代发生的");
}
function showInfoDialog(){
	$.yuerMsg.info("哈哈啊哈哈哈哈哈哈哈啊啊啊啊啊时代发生的");
}
function showConfirmDialog(){
	$.yuerMsg.confirm("哈哈啊哈哈哈哈哈哈哈啊啊啊啊啊时代发生的",function(){
		$.yuerMsg.info("你点击的确定按钮");
	});
}
