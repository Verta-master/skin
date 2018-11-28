jQuery(function($) {
	"use strict";

//Mobile menu
$('.mobile__down').click(function() {
  $(this).toggleClass('mobile__down--open');
  $(this).next().slideToggle();
});
  
$('.mobile__btn').click(function() {
  $('.mobile').addClass('mobile--slide');
  $('.main').addClass('main--overlay');
});
  
$('.mobile__close').click(function() {
  $('.mobile').removeClass('mobile--slide');
  $('.main').removeClass('main--overlay');
});

//Scroll to top
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
    $(".btn-top").fadeIn();
    $(".header").addClass("header--bg");
  } else {
    $(".btn-top").fadeOut();
    $(".header").removeClass("header--bg");
  };
});

$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});

});