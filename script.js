// Subhanullah Safi | Portfolio scripts (vanilla JavaScript)

// ---------- Translations ----------
// English is the default. Pashto (ps) and Dari (fa) are right-to-left.
const T = {
  en: {
    title: "Subhanullah Safi | Computer Science Student and Aspiring Software Developer",
    skip: "Skip to content",
    "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects",
    "nav.education": "Education", "nav.contact": "Contact",
    "menu.open": "Open menu", "menu.close": "Close menu",
    top: "Top", top_label: "Back to top",
    "hero.greeting": "Hello, I'm",
    "hero.title": "Computer Science Student | Aspiring Software Developer",
    "hero.intro": "I build clean, practical web projects and I am learning to turn ideas into useful digital solutions.",
    "hero.cta1": "View my projects", "hero.cta2": "Contact me",
    "about.heading": "About me",
    "about.text": "I am Subhanullah Safi, a Computer Science student at Khurasan University in Jalalabad, Afghanistan. I am passionate about technology, web development, and software engineering. I am continuously improving my skills in HTML, CSS, JavaScript, and Python while building practical projects. My goal is to become a skilled Software Developer and create useful, innovative, and professional digital solutions.",
    "about.k_loc": "Location", "about.v_loc": "Jalalabad, Afghanistan",
    "about.k_uni": "University", "about.v_uni": "Khurasan University",
    "about.k_focus": "Focus", "about.v_focus": "Software development",
    "skills.heading": "Skills", "skills.intro": "Technologies I use and keep learning.",
    "skills.html_d": "Semantic page structure.",
    "skills.css_d": "Layouts, responsive design, and styling.",
    "skills.js_d": "Interactive features and dynamic behavior.",
    "skills.py_d": "Programming logic and problem solving.",
    "projects.heading": "Projects",
    "projects.intro": "Work in progress. More projects will be added as I build them.",
    "proj.name": "Personal Website",
    "proj.desc": "My personal portfolio, built from scratch with HTML, CSS, and vanilla JavaScript.",
    "proj.status": "In progress",
    "edu.heading": "Education", "edu.name": "Khurasan University",
    "edu.degree": "Computer Science studies", "edu.place": "Jalalabad, Afghanistan",
    "contact.heading": "Contact", "contact.intro": "The best way to reach me is by email.",
    "contact.k_email": "Email", "contact.k_github": "GitHub", "contact.k_facebook": "Facebook",
    "footer.text": "Building thoughtful software, one project at a time.",
    "footer.rights": "All rights reserved."
  },

  ps: {
    title: "سبحان الله صافي | د کمپیوټر ساینس زده کوونکی او د سافټویر پراختیا کوونکی",
    skip: "منځپانګې ته لاړ شئ",
    "nav.about": "زما په اړه", "nav.skills": "مهارتونه", "nav.projects": "پروژې",
    "nav.education": "زده کړه", "nav.contact": "اړیکه",
    "menu.open": "مینو خلاص کړئ", "menu.close": "مینو بند کړئ",
    top: "پورته", top_label: "بیرته پورته",
    "hero.greeting": "سلام، زه یم",
    "hero.title": "د کمپیوټر ساینس زده کوونکی | د سافټویر پراختیا کوونکی کېدو لیوال",
    "hero.intro": "زه پاکې او ګټورې ویب پروژې جوړوم، او زده کوم چې نظریات ګټورو ډیجیټل حلونو واړوم.",
    "hero.cta1": "زما پروژې وګورئ", "hero.cta2": "ماسره اړیکه ونیسئ",
    "about.heading": "زما په اړه",
    "about.text": "زه سبحان الله صافي یم، د افغانستان د جلال اباد د خراسان پوهنتون د کمپیوټر ساینس زده کوونکی یم. زه د ټکنالوژۍ، ویب پراختیا او سافټویر انجینرۍ سره مینه لرم. زه په دوامداره توګه د HTML، CSS، JavaScript او Python مهارتونه ښه کوم او عملي پروژې جوړوم. زما موخه دا ده چې مهارتمن سافټویر پراختیا کوونکی شم او ګټور، نوښتګر او مسلکي ډیجیټل حلونه جوړ کړم.",
    "about.k_loc": "ځای", "about.v_loc": "جلال اباد، افغانستان",
    "about.k_uni": "پوهنتون", "about.v_uni": "د خراسان پوهنتون",
    "about.k_focus": "تمرکز", "about.v_focus": "د سافټویر پراختیا",
    "skills.heading": "مهارتونه", "skills.intro": "هغه ټکنالوژۍ چې کاروم او زده یې کوم.",
    "skills.html_d": "د پاڼې سم ساختمان.",
    "skills.css_d": "ترتیب، ځواب ویونکی ډیزاین او بڼه.",
    "skills.js_d": "متقابل ځانګړتیاوې او متحرک چلند.",
    "skills.py_d": "د پروګرامولو منطق او ستونزو حل.",
    "projects.heading": "پروژې",
    "projects.intro": "پرمختګ کې. نورې پروژې به وروسته اضافه شي.",
    "proj.name": "شخصي ویب پاڼه",
    "proj.desc": "زما شخصي پورټفولیو، چې د HTML، CSS او ساده JavaScript سره له صفره جوړه شوې.",
    "proj.status": "پرمختګ کې",
    "edu.heading": "زده کړه", "edu.name": "د خراسان پوهنتون",
    "edu.degree": "د کمپیوټر ساینس زده کړې", "edu.place": "جلال اباد، افغانستان",
    "contact.heading": "اړیکه", "contact.intro": "زما سره د اړیکې غوره لاره بریښنالیک دی.",
    "contact.k_email": "بریښنالیک", "contact.k_github": "GitHub", "contact.k_facebook": "Facebook",
    "footer.text": "په ځیرکتیا سافټویر جوړول، یوه پروژه په یوه وخت کې.",
    "footer.rights": "ټول حقونه خوندي دي."
  },

  fa: {
    title: "سبحان‌الله صافی | دانشجوی علوم کامپیوتر و توسعه‌دهنده نرم‌افزار",
    skip: "رفتن به محتوا",
    "nav.about": "درباره من", "nav.skills": "مهارت‌ها", "nav.projects": "پروژه‌ها",
    "nav.education": "تحصیلات", "nav.contact": "تماس",
    "menu.open": "باز کردن منو", "menu.close": "بستن منو",
    top: "بالا", top_label: "بازگشت به بالا",
    "hero.greeting": "سلام، من هستم",
    "hero.title": "دانشجوی علوم کامپیوتر | علاقه‌مند به توسعه‌دهندگی نرم‌افزار",
    "hero.intro": "پروژه‌های وب ساده و کاربردی می‌سازم و یاد می‌گیرم که ایده‌ها را به راه‌حل‌های دیجیتال مفید تبدیل کنم.",
    "hero.cta1": "دیدن پروژه‌ها", "hero.cta2": "تماس با من",
    "about.heading": "درباره من",
    "about.text": "من سبحان‌الله صافی هستم، دانشجوی علوم کامپیوتر در دانشگاه خراسان در جلال‌آباد، افغانستان. به فناوری، توسعه وب و مهندسی نرم‌افزار علاقه‌مندم. مهارت‌هایم در HTML، CSS، JavaScript و Python را پیوسته بهتر می‌کنم و پروژه‌های عملی می‌سازم. هدفم این است که به یک توسعه‌دهنده نرم‌افزار ماهر تبدیل شوم و راه‌حل‌های دیجیتال مفید، نوآورانه و حرفه‌ای بسازم.",
    "about.k_loc": "محل", "about.v_loc": "جلال‌آباد، افغانستان",
    "about.k_uni": "دانشگاه", "about.v_uni": "دانشگاه خراسان",
    "about.k_focus": "تمرکز", "about.v_focus": "توسعه نرم‌افزار",
    "skills.heading": "مهارت‌ها", "skills.intro": "فناوری‌هایی که استفاده می‌کنم و همچنان یاد می‌گیرم.",
    "skills.html_d": "ساختار معنادار صفحه.",
    "skills.css_d": "چیدمان، طراحی واکنش‌گرا و ظاهر صفحه.",
    "skills.js_d": "قابلیت‌های تعاملی و رفتار پویا.",
    "skills.py_d": "منطق برنامه‌نویسی و حل مسئله.",
    "projects.heading": "پروژه‌ها",
    "projects.intro": "در حال انجام. پروژه‌های بیشتر به‌زودی اضافه می‌شوند.",
    "proj.name": "وب‌سایت شخصی",
    "proj.desc": "پورتفولیوی شخصی من که با HTML، CSS و JavaScript ساده از صفر ساخته شده است.",
    "proj.status": "در حال انجام",
    "edu.heading": "تحصیلات", "edu.name": "دانشگاه خراسان",
    "edu.degree": "تحصیل در علوم کامپیوتر", "edu.place": "جلال‌آباد، افغانستان",
    "contact.heading": "تماس", "contact.intro": "بهترین راه ارتباط با من ایمیل است.",
    "contact.k_email": "ایمیل", "contact.k_github": "GitHub", "contact.k_facebook": "Facebook",
    "footer.text": "ساخت نرم‌افزار با دقت، یک پروژه در هر زمان.",
    "footer.rights": "کلیه حقوق محفوظ است."
  }
};

let currentLang = "en";

// Update every translatable element on the page
function setLanguage(lang) {
  if (!T[lang]) lang = "en";
  currentLang = lang;

  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "en" ? "ltr" : "rtl";
  document.title = T[lang].title;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = T[lang][el.dataset.i18n];
    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const value = T[lang][el.dataset.i18nAria];
    if (value) el.setAttribute("aria-label", value);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  // Keep the menu label in the right language
  const toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-label", T[lang][isOpen ? "menu.close" : "menu.open"]);
  }

  try { localStorage.setItem("portfolio-lang", lang); } catch (e) { /* storage unavailable */ }
}

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Language: saved choice, otherwise English
  let saved = null;
  try { saved = localStorage.getItem("portfolio-lang"); } catch (e) { /* ignore */ }
  setLanguage(saved || "en");

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });

  // 2. Dynamic copyright year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // 3. Mobile menu
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("nav-links");

  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    navLinks.classList.toggle("open", open);
    toggle.setAttribute("aria-label", T[currentLang][open ? "menu.close" : "menu.open"]);
  };

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => setMenu(false));
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // 4. Back to top button
  const backToTop = document.querySelector(".to-top");
  const onScroll = () => {
    if (backToTop) backToTop.classList.toggle("show", window.scrollY > 500);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  // 5. Active navigation link while scrolling
  const sections = document.querySelectorAll("main section[id]");
  const navAnchors = document.querySelectorAll(".nav-links a");

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navAnchors.forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
  }
});
