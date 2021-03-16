$(function() {
var sldr = $('.b_sldr'),
sldrContent = sldr.html(),
slideWidth = $('.b-gallery').outerWidth(),
slideCount = $('.b_sldr img').length,
prv_b = $('.b-arrow_prev'),
nxt_b = $('.b-arrow_next'),
sldrInterval = 3300,
animateTime = 1000,
course = 1,
margin = - slideWidth;
$('.b_sldr img:last').clone().prependTo('.b_sldr');$('.b_sldr img').eq(1).clone().appendTo('.b_sldr');$('.b_sldr').css('margin-left',-slideWidth);function nxt_bSlide(){interval=window.setInterval(animate,sldrInterval)}function animate(){if(margin==-slideCount*slideWidth-slideWidth){sldr.css({'marginLeft':-slideWidth});margin=-slideWidth*2}else if(margin==0&&course==-1){sldr.css({'marginLeft':-slideWidth*slideCount});margin=-slideWidth*slideCount+slideWidth}else{margin=margin-slideWidth*(course)}sldr.animate({'marginLeft':margin},animateTime)}function sldrStop(){window.clearInterval(interval)}prv_b.click(function(){if(sldr.is(':animated')){return false}var course2=course;course=-1;animate();course=course2});nxt_b.click(function(){if(sldr.is(':animated')){return false}var course2=course;course=1;animate();course=course2});sldr.add(nxt_b).add(prv_b).hover(function(){sldrStop()},nxt_bSlide);nxt_bSlide()});
