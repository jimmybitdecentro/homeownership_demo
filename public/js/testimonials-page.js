(function ($) {
  'use strict';

  function fillGrid() {
    var $grid = $('#allReviewsGrid');
    if (!$grid.length || !window.TESTIMONIALS_DATA || !window.renderTestimonialCardHtml) return;

    window.TESTIMONIALS_DATA.forEach(function (t, i) {
      $grid.append(window.renderTestimonialCardHtml(t, i));
    });
  }

  $(function () {
    if (!$('#allReviewsGrid').length) return;
    if (typeof window.ensureTestimonialsLoaded === 'function') {
      window.ensureTestimonialsLoaded(fillGrid);
    } else {
      fillGrid();
    }
  });
})(jQuery);
