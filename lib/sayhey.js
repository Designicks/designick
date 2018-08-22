//say hey on hover of MR.Nick pic
function display2()
	{
		document.getElementById("hello").style.display = "block";
		
	}
var statusNick=1;
var statusHello=1;
$(document).ready(function(){
$("#MR_Nick").mouseover(function(){
$("#hello").css("display", "block");
});
$("#MR_Nick").mouseout(function(){
	statusNick=0;
	if(statusHello==0 || statusNick==0)
		$("#hello").css("display", "none");
});
$("#hello").mouseout(function(){
	statusHello=0;
	if(statusHello==0 && statusNick==0)
		$("#hello").css("display", "none");
});
});