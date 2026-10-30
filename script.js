// Floating particles
const container = document.getElementById('particles');
const colors = ['#6fcf97', '#f78fb3', '#a29bfe', '#74b9ff', '#55efc4'];

for (let i = 0; i < 35; i++) {
  const p = document.createElement('div');
  p.classList.add('particle');
  const size = Math.random() * 6 + 3;
  p.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    left: ${Math.random() * 100}%;
    background: ${colors[Math.floor(Math.random() * colors.length)]};
    animation-duration: ${Math.random() * 12 + 8}s;
    animation-delay: ${Math.random() * 10}s;
    filter: blur(${Math.random() < 0.5 ? 1 : 0}px);
  `;
  container.appendChild(p);
}

// Card tilt effect
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `translateY(-6px) rotateX(${-y / 20}deg) rotateY(${x / 20}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// Animate stats on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.card, .stats').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
