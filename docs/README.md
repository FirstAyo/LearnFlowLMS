# LearnFlow — Online Learning System Template

> Polished documentation generated from the uploaded project.

## Overview
Multi‑page LMS theme with course catalog, lessons, quizzes, enrollment, and student/instructor dashboards.

## Tech Stack
- HTML5, CSS3, JavaScript
- Optional libraries referenced via assets (e.g., Bootstrap, jQuery, Video.js, Chart.js)

## Structure
```
online-learning-system/
├─ assets
│  ├─ css
│  │  └─ styles.css
│  ├─ data
│  │  └─ courses.json
│  ├─ img
│  │  └─ course-default.svg
│  └─ js
│     ├─ pages
│     │  ├─ admin-dashboard.js
│     │  ├─ admin-login.js
│     │  ├─ categories.js
│     │  ├─ category.js
│     │  ├─ course.js
│     │  ├─ home.js
│     │  ├─ learn.js
│     │  ├─ quiz.js
│     │  ├─ result.js
│     │  └─ search.js
│     └─ app.js
├─ 404.html
├─ about.html
├─ admin-dashboard.html
├─ admin-login.html
├─ categories.html
├─ category.html
├─ contact.html
├─ course.html
├─ faq.html
├─ index.html
├─ learn.html
├─ quiz.html
├─ README.md
├─ result.html
└─ search.html
```

## Pages & Assets
- `404.html` — **OLP — Not found** (H1: 404)
  - CSS: `assets/css/styles.css`
  - JS: `https://code.jquery.com/jquery-3.7.1.min.js`, `assets/js/app.js`
  - Features: Navigation
  - Counts: tables=0, forms=0
- `about.html` — **About — OLP** (H1: About)
  - CSS: `assets/css/styles.css`
  - JS: `https://code.jquery.com/jquery-3.7.1.min.js`, `assets/js/app.js`
  - Features: Navigation
  - Counts: tables=0, forms=0
- `admin-dashboard.html` — **Admin Dashboard — OLP** (H1: Admin Dashboard)
  - CSS: `assets/css/styles.css`
  - JS: `https://code.jquery.com/jquery-3.7.1.min.js`, `assets/js/app.js`, `assets/js/pages/admin-dashboard.js`
  - Features: Online learning/LMS strings detected, Table(s), Navigation
  - Counts: tables=1, forms=0
- `admin-login.html` — **Admin Login — OLP** (H1: Admin Login)
  - CSS: `assets/css/styles.css`
  - JS: `https://code.jquery.com/jquery-3.7.1.min.js`, `assets/js/app.js`, `assets/js/pages/admin-login.js`
  - Features: Form(s), Navigation
  - Counts: tables=0, forms=1
- `categories.html` — **OLP — Categories** (H1: Categories)
  - CSS: `assets/css/styles.css`
  - JS: `https://code.jquery.com/jquery-3.7.1.min.js`, `assets/js/app.js`, `assets/js/pages/categories.js`
  - Features: Navigation
  - Counts: tables=0, forms=0
- `category.html` — **OLP — Category** (H1: Category)
  - CSS: `assets/css/styles.css`
  - JS: `https://code.jquery.com/jquery-3.7.1.min.js`, `assets/js/app.js`, `assets/js/pages/category.js`
  - Features: Navigation
  - Counts: tables=0, forms=0
- `contact.html` — **Contact — OLP** (H1: Contact)
  - CSS: `assets/css/styles.css`
  - JS: `https://code.jquery.com/jquery-3.7.1.min.js`, `assets/js/app.js`
  - Features: Navigation
  - Counts: tables=0, forms=0
- `course.html` — **OLP — Course** (H1: Course)
  - CSS: `assets/css/styles.css`
  - JS: `https://code.jquery.com/jquery-3.7.1.min.js`, `assets/js/app.js`, `assets/js/pages/course.js`
  - Features: Online learning/LMS strings detected, Navigation
  - Counts: tables=0, forms=0
- `faq.html` — **FAQ — OLP** (H1: FAQ)
  - CSS: `assets/css/styles.css`
  - JS: `https://code.jquery.com/jquery-3.7.1.min.js`, `assets/js/app.js`
  - Features: Online learning/LMS strings detected, Navigation
  - Counts: tables=0, forms=0
- `index.html` — **OLP — Home** (H1: Learn fast with concise, hands‑on courses.)
  - CSS: `assets/css/styles.css`
  - JS: `https://code.jquery.com/jquery-3.7.1.min.js`, `assets/js/app.js`, `assets/js/pages/home.js`
  - Features: Online learning/LMS strings detected, Form(s), Navigation
  - Counts: tables=0, forms=1
- `learn.html` — **OLP — Learn** (H1: Lesson)
  - CSS: `assets/css/styles.css`
  - JS: `https://code.jquery.com/jquery-3.7.1.min.js`, `assets/js/app.js`, `assets/js/pages/learn.js`
  - Features: Online learning/LMS strings detected, Navigation
  - Counts: tables=0, forms=0
- `quiz.html` — **OLP — Quiz** (H1: Quiz:)
  - CSS: `assets/css/styles.css`
  - JS: `https://code.jquery.com/jquery-3.7.1.min.js`, `assets/js/app.js`, `assets/js/pages/quiz.js`
  - Features: Online learning/LMS strings detected, Form(s), Navigation
  - Counts: tables=0, forms=1
- `result.html` — **OLP — Result** (H1: Quiz Result)
  - CSS: `assets/css/styles.css`
  - JS: `https://code.jquery.com/jquery-3.7.1.min.js`, `assets/js/app.js`, `assets/js/pages/result.js`
  - Features: Online learning/LMS strings detected, Navigation
  - Counts: tables=0, forms=0
- `search.html` — **OLP — Search** (H1: Search)
  - CSS: `assets/css/styles.css`
  - JS: `https://code.jquery.com/jquery-3.7.1.min.js`, `assets/js/app.js`, `assets/js/pages/search.js`
  - Features: Form(s), Navigation
  - Counts: tables=0, forms=1

## Local Development
1. Open `index.html` directly or serve locally for accurate relative paths:

   - Python: `python3 -m http.server 5173`

   - Node: `npx serve .`

2. Visit `http://localhost:5173/`

## Dependencies (from asset paths)
- **jQuery** — e.g., `https://code.jquery.com/jquery-3.7.1.min.js`


## Notes
- Optimize thumbnails and lesson media; prefer modern formats.

- If embedding video or charts, pin CDN versions and add SRI attributes.

- Run Lighthouse on landing/catalog/lesson pages for performance and a11y.


See **DEPLOYMENT.md** for hosting instructions.
