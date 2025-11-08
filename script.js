// script.js
document.addEventListener('DOMContentLoaded', () => {

  // ===== Smooth Scroll for Internal Links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // ===== Active Nav Highlight on Scroll =====
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-link'));
  const setActive = () => {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    let current = sections[0];
    for(const s of sections){
      if(s.offsetTop <= scrollPos) current = s;
    }
    navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current.id}`));
  };
  if (sections.length) {
    setActive();
    window.addEventListener('scroll', setActive);
  }

  // ===== Mobile Nav Toggle =====
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
  }

  // ===== Typed Text Effect =====
  const typedSpan = document.querySelector('.typed');
  if (typedSpan) {
    const phrases = ['Front-end • Web Apps • E-commerce', 'React • HTML • CSS • JS', 'Performance • Accessibility'];
    let i = 0, j = 0, adding = true;
    const tick = () => {
      const p = phrases[i];
      typedSpan.textContent = p.slice(0, j);
      if (adding) {
        j++;
        if (j > p.length) { adding = false; setTimeout(tick, 1100); return; }
      } else {
        j--;
        if (j < 0) { adding = true; i = (i + 1) % phrases.length; }
      }
      setTimeout(tick, adding ? 80 : 40);
    };
    tick();
  }

  // ===== ScrollReveal Animations =====
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal({
      reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200
    });
    ScrollReveal().reveal('.hero h1, .hero h2, .hero p, .hero .btn', { origin: 'top' });
    ScrollReveal().reveal('.project-card', { origin: 'bottom', interval: 200 });
    ScrollReveal().reveal('.contact h2, .contact p, .contact form', { origin: 'left' });
  }

  
  // ===== ScrollReveal Animation Script =====
const sr = ScrollReveal({
  distance: "50px",
  duration: 1000,
  easing: "ease-in-out",
  reset: false
});

sr.reveal(".fade-bottom", { origin: "bottom", interval: 150 });
sr.reveal(".fade-left", { origin: "left", interval: 150 });
sr.reveal(".fade-right", { origin: "right", interval: 150 });


});
