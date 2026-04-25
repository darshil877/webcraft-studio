// ============================================================
//  WebCraft Studio — terms.js
//  Animates terms blocks as user scrolls.
//  ⚠️  DO NOT EDIT unless you know JavaScript.
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ─── NAV ────────────────────────────────────────────────
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger) {
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  }

  // ─── TERMS BLOCK REVEAL ──────────────────────────────────
  const blocks = document.querySelectorAll('.terms-block');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Stagger delay based on data-index
        const idx = parseInt(e.target.dataset.index || 0);
        e.target.style.transitionDelay = `${idx * 0.05}s`;
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  blocks.forEach(b => observer.observe(b));

});
