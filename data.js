/* ═══════════════════════════════════════════
   PORTFOLIO DATA — Krishna Rajak
   Source: Krishna_Rajak_Resume.pdf (exact data only)
   ═══════════════════════════════════════════ */
window.portfolioData = {

  /* ──────────────────────────────────────
     SKILLS — Exactly from resume
     Technical Skills section
  ────────────────────────────────────── */
  skills: [
    /* Languages */
    { name: "HTML5",       icon: "devicon-html5-plain",       color: "#E34F26" },
    { name: "CSS3",        icon: "devicon-css3-plain",        color: "#1572B6" },
    { name: "JavaScript",  icon: "devicon-javascript-plain",  color: "#F7DF1E" },
    { name: "TypeScript",  icon: "devicon-typescript-plain",  color: "#3178C6" },
    { name: "C++",         icon: "devicon-cplusplus-plain",   color: "#00599C" },
    { name: "SQL",         icon: "devicon-mysql-plain",       color: "#4479A1" },
    /* Frameworks & Libraries */
    { name: "React",       icon: "devicon-react-original",    color: "#61DAFB" },
    { name: "Angular",     icon: "devicon-angularjs-plain",   color: "#DD0031" },
    { name: "Bootstrap",   icon: "devicon-bootstrap-plain",   color: "#7952B3" },
    { name: "Tailwind CSS",icon: "devicon-tailwindcss-plain", color: "#06B6D4" },
    /* Backend & DB */
    { name: "Node.js",     icon: "devicon-nodejs-plain",      color: "#339933" },
    { name: "MySQL",       icon: "devicon-mysql-plain",       color: "#4479A1" },
    /* CMS & E-Commerce */
    { name: "WordPress",   icon: "devicon-wordpress-plain",   color: "#21759B" },
    { name: "Shopify",     icon: "devicon-shopify-plain",     color: "#96BF48" },
    /* Tools */
    { name: "Git",         icon: "devicon-git-plain",         color: "#F05032" },
    { name: "GitHub",      icon: "devicon-github-original",   color: "#181717" },
    { name: "VS Code",     icon: "devicon-vscode-plain",      color: "#007ACC" },
    { name: "Figma",       icon: "devicon-figma-plain",       color: "#F24E1E" }
  ],

  /* ──────────────────────────────────────
     EXPERIENCE — Exactly from resume
  ────────────────────────────────────── */
  experience: [
    {
      title:   "Web Developer Intern",
      company: "Bringmark Technology",
      period:  "Mar 2024 – Jun 2024",
      type:    "Internship",
      color:   "#4f46e5",
      points: [
        "Developed and maintained responsive web pages using HTML, CSS, JavaScript and WordPress.",
        "Collaborated with designers to implement pixel-perfect UI from Figma mockups.",
        "Optimised website performance and implemented on-page SEO best practices.",
        "Assisted in integrating REST APIs and third-party plugins for client projects."
      ]
    },
    {
      title:   "YouTube SEO & Content Strategist",
      company: "Thathvam Creations",
      period:  "Jul 2024 – Dec 2024",
      type:    "Internship",
      color:   "#059669",
      points: [
        "Managed YouTube SEO for multiple channels — keyword research, titles, tags and metadata optimisation.",
        "Created and maintained content calendars aligned with trending topics and platform analytics.",
        "Analysed channel performance using YouTube Studio to improve CTR and watch time.",
        "Supported content creators with script writing and thumbnail strategy for better discoverability."
      ]
    }
  ],

  /* ──────────────────────────────────────
     PROJECTS — Exactly from resume
  ────────────────────────────────────── */
  projects: [
    {
      title:       "Shopify E-Commerce Store",
      type:        "E-Commerce",
      description: "Designed and developed a fully functional Shopify store with custom theme, product listings, cart optimisation and payment gateway integration.",
      tags:        ["Shopify", "Liquid", "CSS", "SEO"],
      accent:      "#96BF48",
      url:         "",
      featured:    true
    },
    {
      title:       "WordPress Business Website",
      type:        "CMS Website",
      description: "Built a professional multi-page WordPress website with Elementor page builder, WooCommerce integration and Yoast SEO setup for a local business client.",
      tags:        ["WordPress", "WooCommerce", "Elementor", "SEO"],
      accent:      "#21759B",
      url:         "",
      featured:    false
    },
    {
      title:       "Portfolio Website",
      type:        "Personal Project",
      description: "This portfolio site — built from scratch with HTML, CSS and Vanilla JavaScript. Includes animations, typing effect, scroll reveals and a Node.js contact API backend.",
      tags:        ["HTML5", "CSS3", "JavaScript", "Node.js"],
      accent:      "#4f46e5",
      url:         "",
      featured:    false
    },
    {
      title:       "YouTube SEO Campaign",
      type:        "Digital Marketing",
      description: "Planned and executed a full YouTube SEO strategy including keyword research, metadata optimisation and content calendar management — achieving measurable growth in channel reach.",
      tags:        ["YouTube SEO", "Analytics", "Content Strategy"],
      accent:      "#FF0000",
      url:         "",
      featured:    false
    },
    {
      title:       "React Frontend Project",
      type:        "Web App",
      description: "Built a responsive single-page React application with component-based architecture, hooks, REST API integration and dynamic data rendering.",
      tags:        ["React", "JavaScript", "CSS3", "REST API"],
      accent:      "#61DAFB",
      url:         "",
      featured:    true
    },
    {
      title:       "Angular Web Application",
      type:        "Web App",
      description: "Developed a structured Angular application using TypeScript, with modular architecture, reactive forms and service-based data management.",
      tags:        ["Angular", "TypeScript", "Bootstrap"],
      accent:      "#DD0031",
      url:         "",
      featured:    false
    }
  ],

  /* ──────────────────────────────────────
     CERTIFICATIONS — Exactly from resume
  ────────────────────────────────────── */
  certifications: [
    {
      name: "The Complete Web Developer Bootcamp",
      year: "Udemy",
      icon: "fab fa-js"
    },
    {
      name: "React — The Complete Guide",
      year: "Udemy",
      icon: "devicon-react-original"
    },
    {
      name: "Angular — The Complete Guide",
      year: "Udemy",
      icon: "devicon-angularjs-plain"
    },
    {
      name: "C++ Programming (DSA)",
      year: "Coding Ninjas",
      icon: "devicon-cplusplus-plain"
    },
    {
      name: "SEO & Digital Marketing",
      year: "Online Course",
      icon: "fas fa-search"
    },
    {
      name: "WordPress & Shopify Development",
      year: "Self-Certified",
      icon: "devicon-wordpress-plain"
    }
  ],

  /* ──────────────────────────────────────
     STATS — for hero counters
  ────────────────────────────────────── */
  stats: [
    { value: "4+",  label: "Projects" },
    { value: "2",   label: "Internships" },
    { value: "7.5", label: "CGPA" }
  ]
};
