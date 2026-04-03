(function () {
  'use strict';

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

  window.TESTIMONIALS_DATA = [
    { name: 'Jessica B H', location: 'Elgin, TX', rating: 5.0, date: '2025-07-17', feedback: 'I was treated like family. Quick close and stellar customer service.' },
    { name: 'Bradley H', location: 'Driftwood, TX', rating: 5.0, date: '2025-07-02', feedback: "Austin's level of customer service was off the charts, couldn't have been happier with him." },
    { name: 'Sergio S', location: 'McAllen, TX', rating: 5.0, date: '2025-06-24', feedback: "Austin made things simple, approachable and feasible. Thank you Mr. Dellabate!" },
    { name: 'Jared L D', location: 'Cottonwood Shores, TX', rating: 5.0, date: '2025-05-16', feedback: 'Austin was available to me 24/7. He never gave up on getting me a loan. It felt like he truly cared about me and my family.' },
    { name: 'Landon O', location: null, rating: 5.0, date: '2025-05-14', feedback: 'Austin did a wonderful job guiding us through our first home purchase. Very attentive and always available. Helped secure a great rate.' },
    { name: 'Jared D', location: null, rating: 5.0, date: '2025-05-09', feedback: "Austin is amazing! He fights for his clients and doesn't quit until the job is done right. Truly cares." },
    { name: 'Kathy D I', location: 'Killeen, TX', rating: 5.0, date: '2025-05-02', feedback: 'Expertise and understanding made the experience seamless. Highly recommend.' },
    { name: 'Jordan A J', location: 'Converse, TX', rating: 5.0, date: '2022-04-07', feedback: 'All around great job from everyone involved.' },
    { name: 'Mia B H', location: 'Cedar Creek, TX', rating: 4.3, date: '2022-03-18', feedback: 'The communication and guidance.' },
    { name: 'SHANE M', location: 'Austin, TX', rating: 1.0, date: '2022-01-21', feedback: 'Very unorganized. Repeated requests for info and last-minute issues affecting closing.' },
    { name: 'Gary R H', location: 'Richardson, TX', rating: 5.0, date: '2021-12-23', feedback: 'Everyone was very helpful.' },
    { name: 'Lauren R H', location: 'Lubbock, TX', rating: 4.5, date: '2021-12-15', feedback: 'Got me into my dream home quickly and easily.' },
    { name: 'Herman F', location: 'Austin, TX', rating: 4.8, date: '2021-12-14', feedback: 'Easy to work with. Very informative and responsive.' },
    { name: 'Tara S M', location: 'Pflugerville, TX', rating: 5.0, date: '2021-12-12', feedback: 'Prompt, patient, and provides great guidance.' },
    { name: 'Sean P F', location: 'Quinlan, TX', rating: 4.8, date: '2021-12-10', feedback: 'Responsive.' },
    { name: 'Todd R', location: 'Austin, TX', rating: 4.5, date: '2021-10-23', feedback: 'Great team, but wanted better rate-lock options and communication.' },
    { name: 'Alonso E J', location: 'Manor, TX', rating: 5.0, date: '2021-09-24', feedback: 'Efficient, transparent, thorough, and got it done quickly.' },
    { name: 'Cylinda D', location: 'Austin, TX', rating: 5.0, date: '2021-09-10', feedback: 'Extremely responsive. Made the entire process painless.' },
    { name: 'Terry J S', location: 'Duncanville, TX', rating: 5.0, date: '2021-09-07', feedback: 'Excellent communication and smooth process.' },
    { name: 'Mathile P', location: 'Brownwood, TX', rating: 1.3, date: '2021-08-24', feedback: 'Multiple delays and poor experience. Would not recommend.' },
    { name: 'Carolina T', location: 'Round Rock, TX', rating: 5.0, date: '2021-08-24', feedback: 'Great support during first home purchase.' },
    { name: 'Jose R', location: 'Elgin, TX', rating: 5.0, date: '2021-04-05', feedback: 'Very patient and helpful.' },
    { name: 'Nicholas P', location: 'Austin, TX', rating: 5.0, date: '2021-02-28', feedback: 'Went above and beyond. Excellent communication.' },
    { name: 'Karen O', location: 'Austin, TX', rating: 5.0, date: '2021-02-13', feedback: 'Extremely attentive and helpful throughout.' },
    { name: 'Lacey R', location: 'Kyle, TX', rating: 5.0, date: '2021-02-08', feedback: 'Always available and quick to help.' },
    { name: 'Tanya L', location: 'Forney, TX', rating: 4.8, date: '2021-01-22', feedback: 'Fast, smooth process and great communication.' },
    { name: 'Donald W', location: 'Forney, TX', rating: 5.0, date: '2021-01-22', feedback: 'Communication made the process fast and easy.' },
    { name: 'Patricia B', location: 'Montgomery, TX', rating: 5.0, date: '2020-11-05', feedback: 'Austin did everything to make this process good.' },
    { name: 'Nathan E', location: 'Lakeway, TX', rating: 5.0, date: '2020-08-22', feedback: 'Worked very hard to get the best rate possible.' },
    { name: 'Bryon S', location: 'Round Rock, TX', rating: 5.0, date: '2020-08-21', feedback: null }
  ];

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
