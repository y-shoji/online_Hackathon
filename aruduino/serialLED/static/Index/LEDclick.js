$(function(){
	$("#LED").on("click",function(){

		//連続押下対策
		$(this).attr("disabled",true);

		

		$(this).attr("disabled",false);
	})
})