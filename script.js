// Initialize AOS Animation
AOS.init({
  duration: 1200,
  once: false,
});

// Dark/Light Mode Toggle
const toggleBtn = document.querySelector('.mode-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggleBtn.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});
