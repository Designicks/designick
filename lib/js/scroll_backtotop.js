
//scroll back to top
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("myBtn").style.display = "block";
} else {
document.getElementById("myBtn").style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
document.body.scrollTop = 0;
var hash=0;
$('html, body').animate({
scrollTop: $(hash).offset().top
}, 800, function(){
window.location.hash = hash;
});
document.documentElement.scrollTop = 0;
}
