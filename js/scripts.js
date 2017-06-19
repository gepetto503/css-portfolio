$(function(){

  // Sticky Header: makes navbar appear after you scroll down 100(px?), and stick to the top of the window
  $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
          $('.main_h').addClass('sticky');
      } else {
          $('.main_h').removeClass('sticky');
      }
  });

  // Mobile Navigation: when you click the menu hamburger...
  $('.mobile-toggle').click(function() {
    //a) a class is applied to header that makes the burger rotate
      if ($('.main_h').hasClass('open-nav')) {
          $('.main_h').removeClass('open-nav');
      } else {
          $('.main_h').addClass('open-nav');
          //applies the open-nav class that makes the header (main_h) tall enough to show the ul links that are initially hidden due to overflow:hidden being present on the header.
      }
  });
  //b)
  $('.main_h li a').click(function() {
      if ($('.main_h').hasClass('open-nav')) {
          $('.navigation').removeClass('open-nav');//no idea what this line does, there is nothing in document with class called "navigation"?
          $('.main_h').removeClass('open-nav');
      }
  });

  // Navigation Scroll 
  $('nav a').click(function(event) {
      var id = $(this).attr("href");
      var offset = 70;
      var target = $(id).offset().top - offset;
      $('html, body').animate({
          scrollTop: target
      }, 500);
      event.preventDefault();
  });
});
