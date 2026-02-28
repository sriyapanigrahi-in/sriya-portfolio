const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navAnchors.forEach((anchor) => {
    anchor.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

const revealElements = document.querySelectorAll('.reveal');
const progressFills = document.querySelectorAll('.progress-fill');

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('active');

      if (entry.target.id === 'skills') {
        progressFills.forEach((bar, idx) => {
          const targetWidth = bar.dataset.width || '0';
          setTimeout(() => {
            bar.style.width = `${targetWidth}%`;
          }, idx * 110);
        });
      }

      obs.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => observer.observe(el));

const skillsSection = document.querySelector('#skills');
if (skillsSection) observer.observe(skillsSection);

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();