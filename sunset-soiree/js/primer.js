/**
 * CNAHS SUNSET SOIRÉE · CLIENT EVENT PRIMER INTERACTIVE ENGINE
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navigation Bar Scroll Observer
  const nav = document.getElementById('site-nav');
  function checkNavScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', checkNavScroll, { passive: true });
  checkNavScroll();

  // 2. Active Section Spy for Navigation Links
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // 3. Frame Concept Filter / Switcher
  const conceptPills = document.querySelectorAll('.concept-pill');
  const conceptCards = document.querySelectorAll('.concept-card');

  conceptPills.forEach(pill => {
    pill.addEventListener('click', () => {
      conceptPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const target = pill.getAttribute('data-concept');
      conceptCards.forEach(card => {
        if (target === 'all' || card.getAttribute('data-concept-id') === target) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Subtle Section Fade-in Observer
  const revealElements = document.querySelectorAll('.fade-on-scroll');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }
});
