const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .panel').forEach(el => observer.observe(el));

document.querySelectorAll('[data-target]').forEach(el => {
  const target = +el.dataset.target;
  let count = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    count += step;
    el.textContent = count >= target ? target : count;
    if (count >= target) clearInterval(timer);
  }, 30);
});
