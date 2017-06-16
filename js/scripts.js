//back end
function myFunction() {//responsive navbar
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

//front end
$(function(){//document ready

  $(window).scroll(function() {
    if ($(window).scrollTop() >= $("header").height()) {
      $(".nav").addClass("sticky-header");
      $("#nav-title").addClass("bouncy-name");
    } else {
      $(".nav").removeClass("sticky-header");
      $("#nav-title").removeClass("bouncy-name");
    }


    $("#title").css("opacity", 1 - $(window).scrollTop() / 500);

  });

});//end document ready
