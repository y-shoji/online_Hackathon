//幅
function checkWidth(){
	let browserWidth = $(window).width();
	let boxW = $("#LED").width();

	let plusPxw = (( browserWidth - boxW) / 2);

	$("#LED").css({"left":plusPxw + "px" });

}

//高さを真中に調整する
function checkHeight(){
	let browserHeight = $(window).height();
	let boxH  =$("#LED").height();

	let plusPxh = (( browserHeight - boxH) / 2);

	$("#LED").css({"margin-top": plusPxh + "px"});
}

$(function(){
	checkWidth();
	checkHeight()
})

$(window).on("load resize",function(){
	checkWidth();
	checkHeight();
})

$("#LED").on("click",function(){
	alert("Hello");
})