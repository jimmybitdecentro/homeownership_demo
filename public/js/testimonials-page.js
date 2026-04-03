(function ($) {
  'use strict';

  $(function () {
    var $grid = $('#allReviewsGrid');
    if (!$grid.length || !window.TESTIMONIALS_DATA || !window.renderTestimonialCardHtml) return;

    window.TESTIMONIALS_DATA.forEach(function (t, i) {
      $grid.append(window.renderTestimonialCardHtml(t, i));
    });
  });
})(jQuery);
