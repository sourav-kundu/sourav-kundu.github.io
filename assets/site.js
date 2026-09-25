/* Sourav Kundu — site interactions. Plain JS, no dependencies.
   Progressive enhancement only: the page is fully usable without this file. */
(function () {
  'use strict';
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------- Carousels ---------------- */
  document.querySelectorAll('[data-carousel]').forEach(function (root) {
    var track = root.querySelector('.carousel__track');
    var slides = Array.prototype.slice.call(root.querySelectorAll('.carousel__slide'));
    if (!track || slides.length < 2) return;

    var dotsWrap = document.createElement('div');
    dotsWrap.className = 'carousel__dots';
    var dots = slides.map(function (_, i) {
      var b = document.createElement('button');
      b.className = 'carousel__dot' + (i === 0 ? ' is-active' : '');
      b.type = 'button';
      b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      b.addEventListener('click', function () { goTo(i); restartAutoplay(); });
      dotsWrap.appendChild(b);
      return b;
    });
    root.appendChild(dotsWrap);

    function index() { return Math.round(track.scrollLeft / track.clientWidth); }
    function goTo(i) {
      var n = slides.length;
      track.scrollTo({ left: ((i % n) + n) % n * track.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' });
    }
    root.querySelector('.carousel__btn--prev').addEventListener('click', function () { goTo(index() - 1); restartAutoplay(); });
    root.querySelector('.carousel__btn--next').addEventListener('click', function () { goTo(index() + 1); restartAutoplay(); });

    var ticking = false;
    track.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var i = index();
        dots.forEach(function (d, j) { d.classList.toggle('is-active', j === i); });
        ticking = false;
      });
    });

    /* Gentle autoplay; never for reduced-motion users, paused on hover/focus/hidden tab. */
    var timer = null;
    function startAutoplay() {
      if (reduceMotion || timer) return;
      timer = setInterval(function () { goTo(index() + 1); }, 5000);
    }
    function stopAutoplay() { clearInterval(timer); timer = null; }
    function restartAutoplay() { stopAutoplay(); startAutoplay(); }
    root.addEventListener('mouseenter', stopAutoplay);
    root.addEventListener('mouseleave', startAutoplay);
    root.addEventListener('focusin', stopAutoplay);
    root.addEventListener('focusout', startAutoplay);
    document.addEventListener('visibilitychange', function () {
      document.hidden ? stopAutoplay() : startAutoplay();
    });
    startAutoplay();
  });

  /* ---------------- Scroll reveal ---------------- */
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.card, .stat, .section__heading, .principle, .timeline__item');
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(function (t) { t.classList.add('reveal'); io.observe(t); });
  }
})();
