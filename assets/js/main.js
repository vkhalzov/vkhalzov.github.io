document.querySelectorAll('.expand-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const body = btn.closest('.entry-body');
    body.classList.toggle('is-expanded');
  });
});