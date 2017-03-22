$(function(){
	
});

function showDialog1(){
	$("#dialog1").dialogMsg("show");
}

function hideDialog1(){
	$("#dialog1").dialogMsg("hide");
}
function showErroeDialog(){
	$.dialog.error("哈哈啊哈哈哈哈哈哈哈啊啊啊啊啊时代发生的");
}
function showInfoDialog(){
	$.dialog.info("哈哈啊哈哈哈哈哈哈哈啊啊啊啊啊时代发生的");
}
function showConfirmDialog(){
	$.dialog.confirm("哈哈啊哈哈哈哈哈哈哈啊啊啊啊啊时代发生的",function(){
		alert("你点击确定了！");
	});
}
