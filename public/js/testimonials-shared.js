(function () {
  'use strict';

  var DATA_URL = '/public/data/testimonials.json';
  var loadPromise = null;

  function fetchTestimonials() {
    if (window.TESTIMONIALS_DATA && window.TESTIMONIALS_DATA.length > 0) {
      return Promise.resolve(window.TESTIMONIALS_DATA);
    }
    if (!loadPromise) {
      loadPromise = fetch(DATA_URL, { credentials: 'same-origin' })
        .then(function (r) {
          if (!r.ok) throw new Error('testimonials json ' + r.status);
          return r.json();
        })
        .then(function (data) {
          window.TESTIMONIALS_DATA = Array.isArray(data) ? data : [];
          return window.TESTIMONIALS_DATA;
        })
        .catch(function () {
          loadPromise = null;
          window.TESTIMONIALS_DATA = [];
          return window.TESTIMONIALS_DATA;
        });
    }
    return loadPromise;
  }

  window.ensureTestimonialsLoaded = function (callback) {
    fetchTestimonials().then(function () {
      if (typeof callback === 'function') callback();
    });
  };

  var LOAN_TYPES = ['CONVENTIONAL', 'COMMERCIAL', 'VA LOAN', 'FHA', 'USDA'];

  var STAR_SVG =
    '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"/></svg>';

  function escapeHtml(s) {
    if (s == null || s === '') return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function relativeTime(iso) {
    var d = new Date(iso + 'T12:00:00');
    var now = new Date();
    var sec = Math.floor((now - d) / 1000);
    if (sec < 60) return 'Just now';
    var min = Math.floor(sec / 60);
    if (min < 60) return min === 1 ? '1 minute ago' : min + ' minutes ago';
    var hr = Math.floor(min / 60);
    if (hr < 24) return hr === 1 ? '1 hour ago' : hr + ' hours ago';
    var day = Math.floor(hr / 24);
    if (day < 7) return day === 1 ? '1 day ago' : day + ' days ago';
    var wk = Math.floor(day / 7);
    if (wk < 5) return wk === 1 ? '1 week ago' : wk + ' weeks ago';
    var mo = Math.floor(day / 30);
    if (mo < 12) return mo === 1 ? '1 month ago' : mo + ' months ago';
    var yr = Math.floor(day / 365);
    return yr === 1 ? '1 year ago' : yr + ' years ago';
  }

  function renderStars(rating) {
    var r = Math.max(0, Math.min(5, Number(rating) || 0));
    var parts = [];
    for (var i = 0; i < 5; i++) {
      var fill = Math.min(1, Math.max(0, r - i));
      parts.push(
        '<span class="star-cell" aria-hidden="true">' +
          '<span class="star-base">' +
          STAR_SVG +
          '</span>' +
          (fill > 0
            ? '<span class="star-fill" style="width:' + fill * 100 + '%">' + STAR_SVG + '</span>'
            : '') +
          '</span>'
      );
    }
    return (
      '<div class="stars stars--partial" role="img" aria-label="' +
      escapeHtml(r.toFixed(1)) +
      ' out of 5 stars">' +
      parts.join('') +
      '</div>'
    );
  }

  window.renderTestimonialCardHtml = function (t, index) {
    var badge = LOAN_TYPES[index % LOAN_TYPES.length];
    var loc = t.location ? '<p class="loc">' + escapeHtml(t.location) + '</p>' : '';
    var fb =
      t.feedback != null && String(t.feedback).trim() !== ''
        ? '<blockquote>"' + escapeHtml(t.feedback) + '"</blockquote>'
        : '<blockquote class="tc-muted">No additional feedback provided.</blockquote>';
    return (
      '<div class="testimonial-card testimonial-card--home">' +
      '<div class="tc-top">' +
      renderStars(t.rating) +
      '<span class="type-badge type-badge--outline">' +
      escapeHtml(badge) +
      '</span>' +
      '</div>' +
      '<p class="name">' +
      escapeHtml(t.name) +
      '</p>' +
      loc +
      fb +
      '<div class="testimonial-footer testimonial-footer--home">' +
      '<span class="time">' +
      escapeHtml(relativeTime(t.date)) +
      '</span>' +
      '</div>' +
      '</div>'
    );
  };
})();
