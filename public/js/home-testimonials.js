(function ($) {
  'use strict';

  function chunk(arr, size) {
    var out = [];
    for (var i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
  }

  function buildSlides($track, perSlide) {
    var list = window.TESTIMONIALS_DATA;
    if (!list || !window.renderTestimonialCardHtml) return 0;
    var slides = chunk(list, perSlide);
    $track.empty();
    slides.forEach(function (group, slideIdx) {
      var inner = $('<div class="carousel-slide"><div class="carousel-slide-inner carousel-slide-inner--home"></div></div>');
      var $inner = inner.find('.carousel-slide-inner');
      group.forEach(function (t, i) {
        var globalIdx = slideIdx * perSlide + i;
        $inner.append(window.renderTestimonialCardHtml(t, globalIdx));
      });
      $track.append(inner);
    });
    return slides.length;
  }

  window.initHomeTestimonials = function () {
    var $wrap = $('#homeTestimonialsCarousel');
    if (!$wrap.length) return;

    var $track = $('#homeCarouselTrack');
    var $dots = $('#homeCarouselDots');
    var $prev = $wrap.find('.carousel-prev');
    var $next = $wrap.find('.carousel-next');

    var currentSlide = 0;
    var totalSlides = 0;
    var autoplayTimer;
    var perSlide = 3;

    function getPerSlide() {
      return window.innerWidth >= 900 ? 3 : 1;
    }

    function updateCarousel() {
      $track.css('transform', 'translateX(-' + currentSlide * 100 + '%)');
      $dots.find('.carousel-dot').removeClass('active').eq(currentSlide).addClass('active');
    }

    function moveCarousel(dir) {
      currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
      updateCarousel();
      resetAutoplay();
    }

    function goToSlide(i) {
      currentSlide = i;
      updateCarousel();
      resetAutoplay();
    }

    function resetAutoplay() {
      clearInterval(autoplayTimer);
      autoplayTimer = setInterval(function () {
        moveCarousel(1);
      }, 6000);
    }

    function rebuild() {
      var next = getPerSlide();
      if (next === perSlide && $track.children().length) return;
      perSlide = next;
      currentSlide = 0;
      totalSlides = buildSlides($track, perSlide);
      $dots.empty();
      for (var d = 0; d < totalSlides; d++) {
        $dots.append(
          $('<button type="button" class="carousel-dot" aria-label="Go to slide ' + (d + 1) + '"></button>').on(
            'click',
            (function (idx) {
              return function () {
                goToSlide(idx);
              };
            })(d)
          )
        );
      }
      if ($dots.find('.carousel-dot').length) $dots.find('.carousel-dot').eq(0).addClass('active');
      updateCarousel();
      resetAutoplay();
    }

    $prev.on('click', function () {
      moveCarousel(-1);
    });
    $next.on('click', function () {
      moveCarousel(1);
    });

    rebuild();

    var resizeTimer;
    $(window).on('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        var was = perSlide;
        var now = getPerSlide();
        if (was !== now) rebuild();
      }, 200);
    });
  };
})(jQuery);
