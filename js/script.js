jQuery(function($) {
	"use strict";

//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

//if (window.innerWidth < 766) {
//  $('.menu__link').click(function() {
//    $('.menu__list').slideToggle();
//    $('.menu').removeClass('menu--opened');
//  })
//}

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