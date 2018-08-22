// shrink script for navbar
$(window).scroll(function() {
if ($(document).scrollTop() > 10) {
$('nav').addClass('shrink');
} else {
$('nav').removeClass('shrink');
}
});