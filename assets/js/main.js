let index = 0;

const totalWorkItems = $(".work-item").length;

$(document).ready(function () {
  $(window).on("load", function () {
    $(".preloader").addClass("loaded");
  });
  
  $(".nav-toggle").click(function () {
    $(".header .nav").slideToggle();
  })
  
  $(".header .nav a").click(function () {
    if ($(window).width() < 768) {
      $(".header .nav").slideToggle();
    }
  });

  

 

  
  // end documen ready
});










