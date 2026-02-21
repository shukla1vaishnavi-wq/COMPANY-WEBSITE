// ===== MOBILE NAVBAR TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Close navbar when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});


// ===== STATS COUNTER ANIMATION =====
const counters = document.querySelectorAll('.counter');

if (counters.length > 0) {
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

  const statsSection = document.querySelector('.stats');

  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(runCounter);
          observer.unobserve(statsSection);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
  }
}


// ===== JOB SEARCH & FILTER =====
const jobSearch = document.getElementById('jobSearch');
const jobType = document.getElementById('jobType');
const jobCategory = document.getElementById('jobCategory');
const jobCards = document.querySelectorAll('.job-card');

function filterJobs() {
  const searchVal = jobSearch ? jobSearch.value.toLowerCase() : '';
  const typeVal = jobType ? jobType.value : 'all';
  const categoryVal = jobCategory ? jobCategory.value : 'all';

  jobCards.forEach(card => {
    const title = card.querySelector('h3').innerText.toLowerCase();
    const desc = card.querySelector('.job-desc').innerText.toLowerCase();
    const cardType = card.getAttribute('data-type');
    const cardCategory = card.getAttribute('data-category');

    const matchSearch = title.includes(searchVal) || desc.includes(searchVal);
    const matchType = typeVal === 'all' || cardType === typeVal;
    const matchCategory = categoryVal === 'all' || cardCategory === categoryVal;

    if (matchSearch && matchType && matchCategory) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

if (jobSearch) jobSearch.addEventListener('input', filterJobs);
if (jobType) jobType.addEventListener('change', filterJobs);
if (jobCategory) jobCategory.addEventListener('change', filterJobs);


// ===== BLOG TAG FILTER =====
const tagBtns = document.querySelectorAll('.tag-btn');
const blogCards = document.querySelectorAll('.blog-card');

tagBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    tagBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const tag = btn.getAttribute('data-tag');

    blogCards.forEach(card => {
      if (tag === 'all' || card.getAttribute('data-tag') === tag) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});


// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      formSuccess.classList.add('show');
      contactForm.reset();

      setTimeout(() => {
        formSuccess.classList.remove('show');
      }, 5000);
    }
  });
}


// ===== NEWSLETTER FORM =====
const newsletterBtn = document.querySelector('.newsletter-form .btn');
const newsletterInput = document.querySelector('.newsletter-form input');

if (newsletterBtn) {
  newsletterBtn.addEventListener('click', () => {
    const email = newsletterInput.value.trim();
    if (email && email.includes('@')) {
      newsletterBtn.innerText = '✓ Subscribed!';
      newsletterBtn.style.backgroundColor = '#4caf50';
      newsletterInput.value = '';
      setTimeout(() => {
        newsletterBtn.innerText = 'Subscribe';
        newsletterBtn.style.backgroundColor = '';
      }, 3000);
    } else {
      newsletterInput.style.borderColor = 'red';
      setTimeout(() => {
        newsletterInput.style.borderColor = '';
      }, 2000);
    }
  });
}


// ===== BACK TO TOP BUTTON =====
const backToTop = document.createElement('div');
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.style.cssText = `
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 45px;
  height: 45px;
  background-color: #c9a84c;
  color: #0a0f1e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s, transform 0.3s;
  z-index: 999;
  box-shadow: 0 4px 15px rgba(201,168,76,0.3);
`;
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop.style.opacity = '1';
    backToTop.style.transform = 'translateY(0)';
  } else {
    backToTop.style.opacity = '0';
    backToTop.style.transform = 'translateY(10px)';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


// ===== SCROLL ANIMATIONS =====
const animateElements = document.querySelectorAll(
  '.service-card, .job-card, .people-card, .blog-card, .service-detail-card, .contact-info-card'
);

const scrollObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

animateElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  scrollObserver.observe(el);
});
