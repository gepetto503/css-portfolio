$(function(){
  $(window).scroll(function() {
    if ($(window).scrollTop() >= $("header").height()) {
      $(".nav").addClass("sticky-header");
    } else {
      $(".nav").removeClass("sticky-header");
    }

    
  });
});
