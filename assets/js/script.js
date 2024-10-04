!(function ($) {
  "use strict";
  $(".animsition").animsition({
    loadingClass: "preloader",
    loadingInner:
      '<div class="spinner"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>',
  }),
    new WOW({ mobile: !1 }).init(),
    $(".a-nav-toggle").on("click", function () {
      $("html").hasClass("body-menu-opened")
        ? $("html").removeClass("body-menu-opened").addClass("body-menu-close")
        : $("html").addClass("body-menu-opened").removeClass("body-menu-close");
    }),
    $(".navbar-nav .dropdown").on({
      mouseenter: function () {
        $(this).find(".dropdown-menu").show();
      },
      mouseleave: function () {
        $(this).find(".dropdown-menu").hide();
      },
    });
  var offset = $(window).height();
  if (
    ($(".a-affix").length &&
      $(window).scroll(function () {
        var scroll;
        $(window).scrollTop() >= offset
          ? $(".header").addClass("header-affix")
          : $(".header").removeClass("header-affix");
      }),
    $(window).on("load", function () {
      $(".a-grid").length &&
        ($(".a-grid").isotope({ itemSelector: ".grid-item" }),
        $(".a-grid-filter a").on("click", function () {
          $(this)
            .parents(".a-grid-filter")
            .find(".active")
            .removeClass("active"),
            $(this).parent().addClass("active");
          var filterValue = $(this).attr("data-filter");
          $(".a-grid").isotope({ filter: filterValue });
        })),
        $(".a-grid-line").length &&
          ($(".a-grid-line").isotope({
            itemSelector: ".grid-item",
            layoutMode: "fitRows",
          }),
          $(".a-grid-filter a").on("click", function () {
            $(this)
              .parents(".a-grid-filter")
              .find(".active")
              .removeClass("active"),
              $(this).parent().addClass("active");
            var filterValue = $(this).attr("data-filter");
            $(".a-grid-line").isotope({ filter: filterValue });
          }));
    }),
    $(".a-progressbar").length)
  ) {
    function progressbar() {
      $(".a-progressbar .progress-bar:in-viewport").each(function () {
        $(this).hasClass("animated") ||
          ($(this).addClass("animated"),
          $(this).width($(this).attr("aria-valuenow") + "%"));
      });
    }
    progressbar(),
      $(window).on("scroll", function () {
        progressbar();
      });
  }
  if ($(".a-counter").length) {
    function counter() {
      $(".a-counter:in-viewport").each(function () {
        if (!$(this).hasClass("animated")) {
          $(this).addClass("animated");
          var thisElement = $(this);
          $({ count: 0 }).animate(
            { count: thisElement.attr("data-value") },
            {
              duration: 2e3,
              easing: "swing",
              step: function step() {
                var mathCount = Math.ceil(this.count);
                thisElement.text(
                  mathCount.toLocaleString("en-IN", {
                    maximumSignificantDigits: 3,
                  })
                );
              },
            }
          );
        }
      });
    }
    counter(),
      $(window).on("scroll", function () {
        counter();
      });
  }
  function resizeVideo() {
    var width = $(window).width(),
      height = $(window).height();
    $(".a-video").each(function () {
      var iWidth = $(this).data("vimeo-width"),
        iHeight = $(this).data("vimeo-height");
      height / width > iHeight / iWidth
        ? $(this).find("iframe").css({ width: "500%", height: "100%" })
        : $(this).find("iframe").css({ width: "100%", height: "500%" });
    });
  }
  if (
    ($(".a-timer").length &&
      $(".a-timer").countdown("2020/10/10", function (event) {
        $(this).html(
          event.strftime(
            '<div class="timer-item"><span>%D</span> Days</div><div class="divider"></div><div class="timer-item"><span>%H</span> Hours</div><div class="divider"></div><div class="timer-item"><span>%M</span> Minutes</div><div class="divider"></div><div class="timer-item"><span>%S</span> Seconds</div>'
          )
        );
      }),
    $(".a-change-bg").on("mouseover", function () {
      var index = $(".a-change-bg").index(this);
      $(".slide-bg-list .slide-bg")
        .removeClass("active")
        .eq(index)
        .addClass("active");
    }),
    $(".a-minimal a").on({
      mouseenter: function () {
        $("body").addClass("dark-horizontal");
        var index = $(this).index();
        $(".promo-minimal-hover .minimal-item").eq(index).addClass("visible"),
          $(".promo-minimal .minimal-item").addClass("over");
      },
      mouseleave: function () {
        $("body").removeClass("dark-horizontal");
        var index = $(this).index();
        $(".promo-minimal-hover .minimal-item")
          .eq(index)
          .removeClass("visible"),
          $(".promo-minimal .minimal-item").removeClass("over");
      },
    }),
    $(".flash-item-nav a, .a-scroll").bind("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          { scrollTop: $($anchor.attr("href")).offset().top - 100 },
          1e3
        ),
        event.preventDefault();
    }),
    $(".a-video-play").on("click", function () {
      $(this).hasClass("active")
        ? ($(".video-container").fadeOut(),
          $(this)
            .removeClass("active")
            .html('<i class="icon ion-ios-play"></i>'))
        : ($(".video-container").fadeIn(),
          $(this)
            .addClass("active")
            .html('<i class="icon ion-ios-pause"></i>'));
    }),
    resizeVideo(),
    $(window).resize(function () {
      resizeVideo();
    }),
    $(".a-project-carousel").length)
  ) {
    var owl = $(".a-project-carousel");
    owl.owlCarousel({
      smartSpeed: 750,
      dots: !1,
      nav: !0,
      autoplay: !0,
      loop: !0,
      margin: 5,
      autoplayHoverPause: !0,
      navText: [
        '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
        '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
      ],
      items: 1,
    }),
      owl.trigger("stop.owl.autoplay"),
      $(window).bind("scroll", function (event) {
        $(".a-play").hasClass("animated") &&
          owl.trigger("play.owl.autoplay", [7e3]);
      }),
      $(".project-carousel-3d .owl-next").on({
        mouseenter: function () {
          $(".project-carousel-3d").addClass("move-left");
        },
        mouseleave: function () {
          $(".project-carousel-3d").removeClass("move-left");
        },
      }),
      $(".project-carousel-3d .owl-prev").on({
        mouseenter: function () {
          $(".project-carousel-3d").addClass("move-right");
        },
        mouseleave: function () {
          $(".project-carousel-3d").removeClass("move-right");
        },
      });
  }
  function resizeIframe() {
    var width = $(window).width(),
      height = $(window).height();
    width < 768
      ? ($(".video-text-container").addClass("owl-carousel owl-theme"),
        $(".video-text-container").owlCarousel({
          smartSpeed: 750,
          dots: !0,
          nav: !1,
          items: 1,
        }),
        $(".video-text-container").on("translated.owl.carousel", function (e) {
          $(this).find(".video-text-item.is-active").removeClass("is-active"),
            $(this)
              .find(".owl-item.active .video-text-item")
              .addClass("is-active");
        }))
      : ($(".owl-carousel .video-text-item.is-active").removeClass("is-active"),
        $(".video-text-container")
          .removeClass("owl-carousel owl-theme")
          .trigger("destroy.owl.carousel")),
      $(".video-item").each(function () {
        var iWidth = $(this).data("vimeo-width"),
          iHeight = $(this).data("vimeo-height"),
          index = $(this).data("portrait-index");
        height / width > iHeight / iWidth
          ? $(
              ".video-item[data-portrait-index=" + index + "] .iframe-css"
            ).html(
              '<style>.video-item[data-portrait-index="' +
                index +
                '"] iframe {width: 500%; height:100%;}</style>'
            )
          : $(
              ".video-item[data-portrait-index=" + index + "] .iframe-css"
            ).html(
              '<style>.video-item[data-portrait-index="' +
                index +
                '"] iframe {width: 102%; height:500%;}</style>'
            );
      });
  }
  $(".a-article-promo-carousel").length &&
    $(".a-article-promo-carousel").owlCarousel({
      smartSpeed: 750,
      dots: !0,
      nav: !0,
      autoplay: !0,
      loop: !0,
      autoplayHoverPause: !0,
      navText: [
        '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
        '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
      ],
      items: 1,
    }),
    $(".a-reviews-carousel").length &&
      $(".a-reviews-carousel").owlCarousel({
        smartSpeed: 750,
        dots: !0,
        margin: 30,
        nav: !1,
        items: 1,
      }),
    $(".a-photo-carousel").length &&
      $(".a-photo-carousel").owlCarousel({
        items: 3,
        smartSpeed: 750,
        margin: 8,
        autoplayHoverPause: !0,
        dots: !0,
        nav: !0,
        navText: [
          '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
          '<div class="arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
        ],
        dotData: !1,
        responsive: { 0: { nav: !1, items: 1 }, 900: { nav: !0, items: 3 } },
      }),
    resizeIframe(),
    $(window).resize(function () {
      resizeIframe();
    }),
    $(".circular-name, .circle-dot").on({
      mouseenter: function () {
        var index = $(this).data("portrait-index");
        $(".circular-name").removeClass("is-init"),
          $(".circular-name[data-portrait-index=" + index + "]").addClass(
            "is-init"
          );
      },
      mouseleave: function () {
        $(".circular-name").removeClass("is-init"),
          $(".circular-name").hasClass("is-active") ||
            $(".circular-name").addClass("is-init");
      },
    });
  var dStart = 2644,
    magicAngles = [9999, 2108, 1580, 1050, 530, 0],
    findDotIndex = function (a, direction) {
      if ("forward" == direction) {
        for (var i = 0; i <= magicAngles.length - 1; i++)
          if (a >= magicAngles[i]) return i;
      } else
        for (var i = magicAngles.length - 1; i > 0; i--)
          if (a <= magicAngles[i]) return i;
    },
    drawing = function drawing(dStart, dStop, selector) {
      var direction = dStart <= dStop ? "backward" : "forward";
      $({ n: dStart }).animate(
        { n: dStop },
        {
          easing: "linear",
          duration: 1e3,
          step: function (a) {
            $("." + selector).css({ "stroke-dashoffset": 0 | a });
            var index = findDotIndex(a, direction);
            "st1" == selector &&
              setTimeout(function () {
                $(
                  ".circle-dot[data-portrait-index=" +
                    index +
                    "] .circle-outside"
                ).css(
                  { opacity: "forward" == direction ? 1 : 0.2 },
                  { duration: 500 }
                );
              }, 300);
          },
        }
      );
    },
    videoItemAimateCallback = function () {
      $(this)
        .removeClass("is-active")
        .css({ opacity: "1", "z-index": "100" })
        .find("iframe")
        .remove();
    };
  $(".circular-name, .circle-dot").on("click", function () {
    if (!$(this).hasClass("is-active")) {
      var index = $(this).data("portrait-index"),
        videoItem = $(".video-item[data-portrait-index=" + index + "]"),
        url = videoItem.attr("data-vimeo"),
        iStart = videoItem.attr("data-vimeo-start");
      $(".circular-name").removeClass("is-active"),
        $(".video-item.is-active")
          .css("z-index", "500")
          .animate({ opacity: 0 }, 4e3, videoItemAimateCallback),
        videoItem
          .addClass("is-active")
          .append(
            '<iframe src="https://player.vimeo.com/video/' +
              url +
              '?title=0&byline=0&portrait=0&autoplay=1&autopause=0&muted=1&background=1" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
          ),
        resizeIframe(),
        $(
          ".circle-dot.is-active, .circular-name.is-active, .video-text-item.is-active"
        ).removeClass("is-active"),
        $(
          ".circle-dot[data-portrait-index=" +
            index +
            "], .circular-name[data-portrait-index=" +
            index +
            "], .video-text-item[data-portrait-index=" +
            index +
            "]"
        ).addClass("is-active"),
        $(".circle-dot[data-portrait-index=" + index + "] .circle-outside")
          .delay(1e3)
          .animate({ opacity: 1 }),
        drawing(dStart, magicAngles[index], "st1"),
        (dStart = magicAngles[index]);
    }
  }),
    $(window).on("load", function () {
      $(".video-item:first-child").addClass("is-active"),
        setTimeout(function () {
          $('.video-text-item[data-portrait-index="0"]').addClass("is-active"),
            drawing(2644, 0, "st0");
        }, 300);
    }),
    document.addEventListener("DOMContentLoaded", function () {
      var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "2.3",
        paceBetween: 90,
        loop: true,
        arrows: true,
        autoplay: true,
        coverflowEffect: {
          rotate: 50,
          stretch: -100,
          depth: 50,
          modifier: 1,
          slideShadows: false,
        },
        navigation: {
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        },
      });
      // <!-- Initialize Swiper -->
      let myFeedback = new Swiper(".myFeedback", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        loop: true,
        navigation: {
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        },
        effect: "cube",
        cubeEffect: {
          shadow: false,
          slideShadows: false,
          shadowOffset: 0,
          shadowScale: 0,
        },
      });
    }),
    $(".multiple-items").slick({
      infinite: true,
      centerMode: true,
      // variableWidth: true,
      // adaptiveHeight: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 7,
          },
        },
        {
          breakpoint: 1530,
          settings: {
            slidesToShow: 7,
          },
        },
        {
          breakpoint: 1245,
          settings: {
            slidesToShow: 4,
          },
        },
      ],
    });
  $(".multiple-items-2").slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1245,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });
})($);

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(
    ".form-floating-input input, .form-floating-input textarea"
  );

  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (input.value) {
        input.classList.add("filled");
      } else {
        input.classList.remove("filled");
      }
    });

    // Trigger the blur event to check initial values
    input.dispatchEvent(new Event("blur"));
  });
});

// Services Swiper
const swiper = new Swiper(".services-swiper", {
  grabCursor: true,
  effect: "creative",
  loop: true,
  arrows: true,
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
  navigation: {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  },
});
