(function () {
  const root = document.documentElement;
  const savedTheme = localStorage.getItem("olp_theme");
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");
  root.setAttribute("data-theme", theme);
  const btn = document.getElementById("themeToggle");
  if (btn) {
    btn.addEventListener("click", function () {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      localStorage.setItem("olp_theme", next);
      btn.innerHTML = (next === "dark" ? "☀️" : "🌙") + "<span></span>";
    });
    btn.innerHTML = (theme === "dark" ? "☀️" : "🌙") + "<span></span>";
  }
  window.OLP = {
    data: null,
    ready: null,
    getParam: function (name) {
      const params = new URLSearchParams(window.location.search);
      return params.get(name);
    },
    findCourseById: function (id) {
      if (!this.data) return null;
      return this.data.courses.find((c) => c.id === id || c.slug === id);
    },
    loadData: function () {
      if (this.ready) return this.ready;
      this.ready = fetch("assets/data/courses.json", { cache: "no-store" })
        .then((r) => r.json())
        .then((json) => {
          this.data = json;
          return json;
        })
        .catch((err) => {
          console.error("Failed to load courses.json", err);
          const el = document.getElementById("content");
          if (el)
            el.innerHTML =
              '<div class="notice">Could not load data. If running locally, start a web server to avoid CORS issues (e.g., <code>python -m http.server</code>).</div>';
        });
      return this.ready;
    },
    fmtPrice: function (p) {
      return p === 0 ? "Free" : "$" + p.toFixed(2);
    },
    star: function (r) {
      return "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));
    },
  };
  const path = location.pathname.split("/").pop();
  document.querySelectorAll(".nav a").forEach((a) => {
    if (a.getAttribute("href") === path) a.style.opacity = 1;
  });
})();

// assets/js/app.js

(function () {
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    var header = document.querySelector(".header");
    var inner = header ? header.querySelector(".inner") : null;
    var nav = document.getElementById("primaryNav");
    var btn = document.getElementById("menuToggle");

    if (!header || !inner || !nav || !btn) return;

    function openMenu() {
      header.classList.add("is-menu-open");
      btn.setAttribute("aria-expanded", "true");
    }
    function closeMenu() {
      header.classList.remove("is-menu-open");
      btn.setAttribute("aria-expanded", "false");
    }
    function toggleMenu() {
      if (header.classList.contains("is-menu-open")) closeMenu();
      else openMenu();
    }

    // Toggle on click
    btn.addEventListener("click", toggleMenu);

    // Close when clicking a nav link (good for single-page or anchor links)
    nav.addEventListener("click", function (e) {
      var target = e.target.closest("a");
      if (target) closeMenu();
    });

    // Close on outside click
    document.addEventListener("click", function (e) {
      if (!header.classList.contains("is-menu-open")) return;
      if (!inner.contains(e.target)) closeMenu();
    });

    // Close on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMenu();
    });

    // Reset state on resize back to desktop
    var mq = window.matchMedia("(min-width: 901px)");
    function handleDesktopSwitch(e) {
      if (e.matches) closeMenu();
    }
    if (mq.addEventListener) mq.addEventListener("change", handleDesktopSwitch);
    else mq.addListener(handleDesktopSwitch); // older Safari

    // Optional: auto-highlight active link based on body[data-page]
    // Expects: <body data-page="home"> and links like href="index.html"
    try {
      var page = document.body.getAttribute("data-page");
      if (page) {
        var candidates = nav.querySelectorAll("a[href]");
        candidates.forEach(function (a) {
          var href = a.getAttribute("href") || "";
          var key = href.replace(/^\/+/, "").toLowerCase();
          // Map common patterns
          var map = {
            home: ["index.html", "index.htm", ""],
            categories: ["categories.html"],
            search: ["search.html"],
            about: ["about.html"],
            faq: ["faq.html"],
            contact: ["contact.html"],
            admin: ["admin-login.html", "admin.html"],
          };
          var matchList = map[page] || [];
          if (
            matchList.some(function (m) {
              return key.endsWith(m);
            })
          ) {
            a.classList.add("is-active");
          }
        });
      }
    } catch (_) {}
  });
})();
