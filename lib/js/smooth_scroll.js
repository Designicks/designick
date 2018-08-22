//smooth scrolling script
$(document).ready(function(){
$("a.smooth").on('click', function(event) {
	var hash=0;
if (this.hash !== "") {
event.preventDefault();
var hash = this.hash;
$('html, body').animate({
scrollTop: $(hash).offset().top
}, 800, function(){
window.location.hash = hash;
});
}
});
});