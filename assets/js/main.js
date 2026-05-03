document.querySelectorAll('.expand-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.closest('.entry-body');
    body.classList.toggle('is-expanded');
  });
});

const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
  window.addEventListener('scroll', () => {
    scrollTop.classList.toggle('is-visible', window.scrollY > 300);
  }, { passive: true });
}