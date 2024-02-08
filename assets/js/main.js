let index = 0;

// var Body = $('body');
const totalWorkItems = $(".work-item").length;

$(document).ready(function () {
  // $(window).on("load", function () {
  //   $(".preloader").addClass("loaded");
  // });

  $(window).on('load', function () { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').fadeOut('slow'); // will fade out the white DIV that covers the website. 
    // $('body').delay(350).css({'overflow':'visible'});
  })

  //   $(".nav-toggle").click(function () {
  //     $(".header .nav").slideToggle();
  // });

  // $(".header .nav a").click(function (event) {
  //   //if ($(window).width() < 768) {
  //     $(".header .nav").slideToggle();
  //     event.stopPropagation(); // Stop event propagation
  //   //}
  // });








  $(".nav-toggle").click(function () {
    $(".header .nav").slideToggle();
  })

  $(".header .nav a").click(function () {
    if ($(window).width() < 768) {
      $(".header .nav").slideToggle();
    }
  });






  // fixed header
  $(window).scroll(function () {
    if ((this).scrollTop() > 100) {
      $(".header").addClass("fixed");
    }
    else {
      $(".header").removeClass("fixed");
    }
  });






   // end documen ready
});