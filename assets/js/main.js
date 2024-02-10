let index = 0;

const totalWorkItems = $(".work-item").length;

$(document).ready(function () {

  // preloader 

  $(window).on('load', function () { // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 
    $('#preloader').fadeOut('slow'); // will fade out the white DIV that covers the website. 
    $('body').delay(350).css({ 'overflow': 'visible' });
  })

  //navToggle mobile
  // $(".nav-toggle").click(function () {
  //   $(".header .nav").slideToggle();
  // })
  // $(".header .nav a").click(function () {
  //   if ($(window).width() < 768) {
  //     $(".header .nav").slideToggle();
  //   }
  // });

  let menu = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  }

  

  // fixed header
  $(window).scroll(function () {
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");


    // if ((this).scrollTop() > 100) {
    //   $("header").addClass("fixed");
    // }
    // else {
    //   $("header").removeClass("fixed");
    // }
  });
  
  
  // counterUp 

  $(function () {
    function count($this) {
      var current = parseInt($this.html(), 10);
      current = current + 50; /* Where 50 is increment */

      $this.html(++current);
      if (current > $this.data('count')) {
        $this.html($this.data('count'));
      } else {
        setTimeout(function () { count($this) }, 5);
      }
    }

    $(".counter").each(function () {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');
      count($(this));
    });

  });


  // Slider section 

  $(".slider-img").on("click", function() {
    $(".slider-img").removeClass("active");
  $(this).addClass("active");
});

  
  // slidebox

  const wHeight = $(window).height();
  $(".slidebox-img").css("max-height", wHeight + "px");

  $(".work-item-inner").click(function () {
    index = $(this).parent(".work-item").index();
    $(".slidebox").addClass("open");
    slideboxSlideShow();
  });

  $(".slidebox .prev").click(function () {
    if (index == 0) {
      index = totalWorkItems - 1;
    } else {
      index--;
    }
    slideboxSlideShow();
  })
  $(".slidebox .next").click(function () {
    if (index == totalWorkItems - 1) {
      index = 0;
    } else {
      index++;
    }
    slideboxSlideShow();
  });
  
  $(".slidebox-close").click(function () {
    $(".slidebox").removeClass("open");
  });

  $(".slidebox").click(function (event) {
    if ($(event.target).hasClass("slidebox")) {
      $(this).removeClass("open");
    }
  });
  
  function slideboxSlideShow() {
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();

    $(".slidebox-img").attr("src", imgSrc);
    $(".slidebox-category").html(category);
    $(".slidebox-counter").html(totalWorkItems+"/"+(index+1));
  };

  // dialog

  $( function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#button" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
  } );


  // social buttons

   $( ".button-group > div" ).click(function() {
  $('.button-group > div.active').not(this).removeClass('active');
  $(this).toggleClass("active");
});
 $(".telegram").hover(function () {
    $(this).toggleClass("color-telegram");
});
$(".linkedin").hover(function () {
  $(this).toggleClass("color-linkedin");
});

$(".whatsapp").hover(function () {
  $(this).toggleClass("color-whatsapp")
});

$(".instagram").hover(function () {
  $(this).toggleClass("color-instagram")
});
  
  // end documen ready
});