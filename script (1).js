// Mobile menu
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const setMenu = open => {
  menu.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', open);
};
burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.addEventListener('click', e => { if (e.target.tagName === 'A') setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Light parallax on scroll (no cursor effects). Skipped for reduced motion.
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const layers = [['.blob.b1', .15], ['.blob.b3', .1], ['.speed', .08], ['.kanji', .2]]
    .map(([s, k]) => [document.querySelector(s), k]).filter(([el]) => el);
  let ticking = false;
  addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = Math.min(scrollY, innerHeight);
      layers.forEach(([el, k]) => el.style.translate = `0 ${y * k}px`);
      ticking = false;
    });
  }, { passive: true });
}
