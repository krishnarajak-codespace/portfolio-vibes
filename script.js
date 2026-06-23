"use strict";

/* ── Data ── */
const { skills, services, experience, projects, certifications } = window.portfolioData;
const qs  = (s, r = document) => r.querySelector(s);
const qsa = (s, r = document) => [...r.querySelectorAll(s)];

/* ═══════════════════════════════════════
   1. PAGE LOADER
════════════════════════════════════════ */
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = qs("#pageLoader");
    if (loader) loader.classList.add("hidden");
    // Trigger AOS after load
    document.querySelectorAll("[data-aos]").forEach((el, i) => {
      setTimeout(() => el.classList.add("aos-animate"), i * 80);
    });
  }, 600);
});

/* ═══════════════════════════════════════
   2. CUSTOM CURSOR
════════════════════════════════════════ */
function setupCursor() {
  const dot  = qs("#cursor");
  const ring = qs("#cursorFollower");
  if (!dot || !ring || window.matchMedia("(pointer:coarse)").matches) return;

  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener("mousemove", e => { mx = e.clientX; my = e.clientY; });

  function animCursor() {
    dot.style.left  = mx + "px";
    dot.style.top   = my + "px";
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top  = ry + "px";
    requestAnimationFrame(animCursor);
  }
  animCursor();

  qsa("a, button, .proj-card, .bento-card").forEach(el => {
    el.addEventListener("mouseenter", () => { dot.classList.add("grow"); ring.classList.add("grow"); });
    el.addEventListener("mouseleave", () => { dot.classList.remove("grow"); ring.classList.remove("grow"); });
  });
}

/* ═══════════════════════════════════════
   3. NAVBAR
════════════════════════════════════════ */
function setupNavbar() {
  const navbar = qs("#navbar");
  const burger = qs("#hamburger");
  const menu   = qs("#mobileMenu");
  const mLinks = qsa(".m-link");
  const navItems = qsa(".nav-item");
  const sections = qsa("main section[id]");

  // Scroll behaviour
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
    qs("#btt").classList.toggle("show", window.scrollY > 400);
  }, { passive: true });

  // Hamburger toggle
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.classList.toggle("open", open);
    document.body.classList.toggle("no-scroll", open);
  });

  mLinks.forEach(l => l.addEventListener("click", () => {
    menu.classList.remove("open");
    burger.classList.remove("open");
    document.body.classList.remove("no-scroll");
  }));

  // Active nav highlight
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      navItems.forEach(l => l.classList.toggle("active", l.dataset.section === e.target.id));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(s => io.observe(s));
}

/* ═══════════════════════════════════════
   4. AOS — Animate on Scroll
════════════════════════════════════════ */
function setupAOS() {
  // Re-observe dynamically added elements
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = Number(e.target.dataset.aosDelay || 0);
        setTimeout(() => e.target.classList.add("aos-animate"), delay);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  function observe() {
    qsa("[data-aos]:not(.aos-animate)").forEach(el => io.observe(el));
  }

  observe();
  // Call again after render
  setTimeout(observe, 300);
  setTimeout(observe, 800);
}

/* ═══════════════════════════════════════
   5. TYPING EFFECT
════════════════════════════════════════ */
function setupTyping() {
  const el = qs("#typewriter");
  if (!el) return;

  const phrases = ["Developer.", "Engineer.", "Problem Solver.", "React Expert.", "Node.js Dev."];
  let pi = 0, ci = 0, del = false;

  function tick() {
    const phrase = phrases[pi];
    el.textContent = del ? phrase.slice(0, --ci) : phrase.slice(0, ++ci);

    if (!del && ci === phrase.length) {
      del = true;
      setTimeout(tick, 1800);
      return;
    }
    if (del && ci === 0) {
      del = false;
      pi = (pi + 1) % phrases.length;
    }
    setTimeout(tick, del ? 40 : 70);
  }
  tick();
}

/* ═══════════════════════════════════════
   6. COUNTER ANIMATION
════════════════════════════════════════ */
function setupCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el  = e.target;
      const end = Number(el.dataset.count || 0);
      let cur = 0;
      const step = Math.ceil(end / 40);
      const timer = setInterval(() => {
        cur = Math.min(cur + step, end);
        el.textContent = cur;
        if (cur >= end) clearInterval(timer);
      }, 40);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });

  qsa("[data-count], .counter").forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════
   7. RENDER — SKILLS TICKER
════════════════════════════════════════ */
function renderSkillsTicker() {
  const t1 = qs("#ticker1");
  const t2 = qs("#ticker2");
  if (!t1 || !t2) return;

  const chip = s => `
    <div class="skill-chip">
      <i class="${s.icon}" style="color:${s.color}"></i>
      <span>${s.name}</span>
    </div>`;

  const half1 = skills.slice(0, 8);
  const half2 = skills.slice(8);

  // Duplicate for seamless loop
  t1.innerHTML = [...half1, ...half1].map(chip).join("");
  t2.innerHTML = [...half2, ...half2].map(chip).join("");
}

/* ═══════════════════════════════════════
   8. RENDER — SKILL CATEGORIES
════════════════════════════════════════ */
/* ── Skill categories — exact from resume ── */
const skillCats = [
  {
    icon: "💻", name: "Languages", title: "Programming Languages",
    items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "C++", "SQL"]
  },
  {
    icon: "⚛️", name: "Frameworks", title: "Frameworks & Libraries",
    items: ["React", "Angular", "Bootstrap", "Tailwind CSS"]
  },
  {
    icon: "🖥️", name: "Backend", title: "Backend & Database",
    items: ["Node.js", "REST APIs", "MySQL", "Express.js"]
  },
  {
    icon: "🛍️", name: "CMS", title: "CMS & E-Commerce",
    items: ["WordPress", "WooCommerce", "Shopify", "Elementor", "Yoast SEO"]
  },
  {
    icon: "🛠️", name: "Tools", title: "Developer Tools",
    items: ["VS Code", "Git", "GitHub", "Chrome DevTools", "Figma", "Google Analytics"]
  },
  {
    icon: "📈", name: "SEO", title: "SEO & Digital Marketing",
    items: ["YouTube SEO", "On-Page SEO", "Keyword Research", "Content Strategy", "Metadata Optimisation"]
  }
];

function renderSkillCats() {
  const el = qs("#skillCats");
  if (!el) return;
  el.innerHTML = skillCats.map(c => `
    <div class="skill-cat-card" data-aos="fade-up">
      <div class="skill-cat-icon">${c.icon}</div>
      <div class="skill-cat-name">${c.name}</div>
      <div class="skill-cat-title">${c.title}</div>
      <div class="skill-cat-items">
        ${c.items.map(i => `<span class="skill-tag">${i}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

/* ═══════════════════════════════════════
   9. RENDER — EXPERIENCE
════════════════════════════════════════ */
function renderExperience() {
  const el = qs("#expTimeline");
  if (!el) return;
  el.innerHTML = experience.map(r => `
    <div class="tl-item" data-aos="fade-up" style="--dot-color:${r.color}">
      <div class="tl-left">
        <div class="tl-dot"></div>
        <div class="tl-line"></div>
      </div>
      <div class="tl-right">
        <div class="tl-head">
          <div>
            <div class="tl-title">${r.title}</div>
            <div class="tl-company">${r.company}</div>
          </div>
          <div class="tl-badges">
            <span class="tl-period">${r.period}</span>
            <span class="tl-type">${r.type}</span>
          </div>
        </div>
        <ul class="tl-points">
          ${r.points.map(p => `<li>${p}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");
}

/* ═══════════════════════════════════════
   10. RENDER — PROJECTS
════════════════════════════════════════ */
function renderProjects() {
  const el = qs("#projectsGrid");
  if (!el) return;
  el.innerHTML = projects.map(p => `
    <article class="proj-card" data-aos="fade-up"
      style="--accent-grad: linear-gradient(135deg, ${p.accent}, ${p.accent}99)">
      <div class="proj-top">
        <span class="proj-type">${p.type}</span>
        <div class="proj-links">
          ${p.url ? `<a href="${p.url}" target="_blank" rel="noreferrer" class="proj-link" title="Live Site">
            <i class="fas fa-external-link-alt"></i></a>` : ""}
        </div>
      </div>
      <h3 class="proj-title">${p.title}</h3>
      <p class="proj-desc">${p.description}</p>
      <div class="proj-tags">${p.tags.map(t => `<span>${t}</span>`).join("")}</div>
    </article>
  `).join("");
}

/* ═══════════════════════════════════════
   11. RENDER — CERTIFICATIONS
════════════════════════════════════════ */
function renderCerts() {
  const el = qs("#certsList");
  if (!el) return;
  el.innerHTML = certifications.map(c => `
    <div class="cert-item" data-aos="fade-up">
      <div class="cert-icon"><i class="${c.icon}"></i></div>
      <div>
        <div class="cert-name">${c.name}</div>
        <div class="cert-year">${c.year}</div>
      </div>
    </div>
  `).join("");
}

/* ═══════════════════════════════════════
   12. CONTACT FORM
════════════════════════════════════════ */
function setupContact() {
  const form   = qs("#contactForm");
  const status = qs("#fStatus");
  const btn    = qs("#submitBtn");
  if (!form) return;

  form.addEventListener("submit", async e => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = "Sending…";
    status.textContent = "";
    status.className = "f-status";

    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error();
      form.reset();
      status.textContent = "✓ Message sent! I'll reply within 24 hours.";
    } catch {
      status.textContent = "Server offline — please email me directly at rajakkrishna695@gmail.com";
      status.classList.add("error");
    } finally {
      btn.disabled = false;
      btn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
    }
  });
}

/* ═══════════════════════════════════════
   13. BACK TO TOP
════════════════════════════════════════ */
function setupBTT() {
  qs("#btt")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ═══════════════════════════════════════
   14. CARD TILT (desktop)
════════════════════════════════════════ */
function setupTilt() {
  if (window.matchMedia("(pointer:coarse)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion:reduce)").matches) return;

  document.addEventListener("mousemove", e => {
    qsa(".proj-card, .skill-cat-card, .bento-card").forEach(card => {
      const r = card.getBoundingClientRect();
      const inside = e.clientX > r.left && e.clientX < r.right &&
                     e.clientY > r.top  && e.clientY < r.bottom;
      if (inside) {
        const x = (e.clientX - r.left) / r.width  - 0.5;
        const y = (e.clientY - r.top)  / r.height - 0.5;
        card.style.transform = `perspective(800px) rotateX(${y * -4}deg) rotateY(${x * 6}deg) translateY(-4px)`;
      } else {
        card.style.transform = "";
      }
    });
  });
}

/* ═══════════════════════════════════════
   15. STAT COUNTER HERO
════════════════════════════════════════ */
function setupHeroStats() {
  const els = qsa(".stat-num[data-count]");
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const end = Number(el.dataset.count);
      let cur = 0;
      const timer = setInterval(() => {
        cur = Math.min(cur + 1, end);
        el.textContent = cur;
        if (cur >= end) clearInterval(timer);
      }, 60);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════
   INIT
════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
  // Render all data-driven sections
  renderSkillsTicker();
  renderSkillCats();
  renderExperience();
  renderProjects();
  renderCerts();

  // Wait a tick so DOM is painted, then run animations
  requestAnimationFrame(() => {
    setupCursor();
    setupNavbar();
    setupTyping();
    setupCounters();
    setupHeroStats();
    setupContact();
    setupBTT();
    setupTilt();
    setupAOS();
  });
});
