// ===== MOBILE NAVBAR TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// ===== STATS COUNTER ANIMATION =====
const counters = document.querySelectorAll('.counter');

const runCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  const increment = target / 120;
  let current = 0;

  const update = () => {
    current += increment;
    if (current < target) {
      counter.innerText = Math.ceil(current);
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };
  update();
};

// Run counter when stats section is visible
const statsSection = document.querySelector('.stats');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      counters.forEach(runCounter);
      observer.unobserve(statsSection);
    }
  });
}, { threshold: 0.5 });

observer.observe(statsSection);