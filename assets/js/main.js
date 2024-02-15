let index = 0;

const totalWorkItems = $(".work-item").length;

$(document).ready(function () {

  // preloader 

  $(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').fadeOut('slow');
    $('body').delay(350).css({ 'overflow': 'visible' });
  })


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

  $(".slider-img").on("click", function () {
    $(".slider-img").removeClass("active");
    $(this).addClass("active");
  });


  // lightbox

  const wHeight = $(window).height();
  $(".lightbox-img").css("max-height", wHeight + "px");

  $(".work-item-inner").click(function () {
    index = $(this).parent(".work-item").index();
    $(".lightbox").addClass("open");
    lightboxSlideShow();
  });

  $(".lightbox .prev").click(function () {
    if (index == 0) {
      index = totalWorkItems - 1;
    } else {
      index--;
    }
    lightboxSlideShow();
  })
  $(".lightbox .next").click(function () {
    if (index == totalWorkItems - 1) {
      index = 0;
    } else {
      index++;
    }
    lightboxSlideShow();
  });

  $(".lightbox-close").click(function () {
    $(".lightbox").removeClass("open");
  });

  $(".lightbox").click(function (event) {
    if ($(event.target).hasClass("lightbox")) {
      $(this).removeClass("open");
    }
  });

  function lightboxSlideShow() {
    const imgSrc = $(".work-item").eq(index).find("img").attr("data-large");
    const category = $(".work-item").eq(index).find("h4").html();

    $(".lightbox-img").attr("src", imgSrc);
    $(".lightbox-category").html(category);
    $(".lightbox-counter").html((index + 1) + "/" + totalWorkItems);
  };

  // dialog

  $(function () {
    $("#dialog").dialog({
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

    $("#button").on("click", function () {
      $("#dialog").dialog("open");
    });
  });


  // social buttons

  $(".button-group > div").click(function () {
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


});