# PRD — YRD Personal Portfolio Website
**Project:** Personal Portfolio  
**Student:** Yousif Ramadan Dahi (YRD)  
**School:** WE Applied Technology School — IT Department, Web Programming  
**Academic Year:** 2025–2026  
**Deadline:** 30/3/2026  

---

## 1. Project Overview

A multi-page personal portfolio website built with **React + Tailwind CSS**, showcasing YRD's skills, projects, and contact info. The site targets potential employers, instructors, and judges in a Shark Tank-style competition format.

**Type:** Multi-page SPA (React Router) — not a single scroll page.

---

## 2. Goals

| Goal | Description |
|------|-------------|
| Academic | Satisfy all Nass Academy final project requirements |
| Professional | Serve as a real portfolio piece for job hunting |
| Technical | Demonstrate React, Tailwind, JS interactivity, and responsive design |
| Deployment | Live hosted URL + public GitHub repo |

---

## 3. Tech Stack

| Layer | Technology | Notes |
|-------|-----------|-------|
| Framework | React 18 (Vite) | Extra credit requirement |
| Styling | Tailwind CSS v3 | Mandatory CSS framework |
| Routing | React Router DOM v6 | Multi-page navigation |
| Icons | Lucide React | Clean icon set |
| Hosting | Vercel or GitHub Pages | Must be live |
| Version Control | GitHub (youfis77) | Public repo with README |

---

## 4. Pages & Structure

### 4.1 Homepage (`/`)
**Purpose:** First impression — name, role, CTA

| Section | Content |
|---------|---------|
| Hero | Name (Yousif Ramadan Dahi), tagline ("Frontend-Focused Full Stack Developer"), CTA buttons (View Projects / Contact Me) |
| Tech Stack Strip | Logos/icons of HTML, CSS, JS, TypeScript, Python, SQL, Tailwind, Bootstrap |
| Featured Projects | 2–3 card previews linking to `/projects` |
| Footer | Social links (GitHub, LinkedIn) + copyright |

---

### 4.2 About (`/about`)
**Purpose:** Bio, skills, interests

| Section | Content |
|---------|---------|
| Bio | Short paragraph about YRD — student at WE Applied Technology School, fullstack dev, aspiring AI engineer |
| Skills | Visual progress bars or tag grid: HTML/CSS, JS, TypeScript, React, Python, SQL, Tailwind, Bootstrap |
| Interests | Boxing, Volleyball, Video Games, Linux, AI Engineering |
| Education | WE Applied Technology School — IT Department, 2nd Grade (2025–2026) |

---

### 4.3 Projects (`/projects`)
**Purpose:** Gallery of work with descriptions

| Section | Content |
|---------|---------|
| Project Cards | Each card: title, description, tech tags, GitHub link, live demo link |
| Initial Projects | Aqar Trust (graduation project), Furni (e-commerce), YRD Portfolio itself |
| Filter Tags (optional) | All / React / HTML+CSS / Python |

**Each project card includes:**
- Project name
- Short description (2–3 lines)
- Tech stack badges
- GitHub + Live demo buttons

---

### 4.4 Contact (`/contact`)
**Purpose:** Let people reach YRD

| Section | Content |
|---------|---------|
| Contact Form | Name, Email, Message fields + Submit button |
| Form Validation (JS) | Required fields, email format check, error messages |
| Contact Info Cards | Email, Phone, WhatsApp — each as a clickable card with icon |
| Social Links | GitHub (`youfis77`), LinkedIn |
| Location | Sheikh Zayed, Egypt |

**Contact Info Cards — details:**

| Card | Icon | Value | Action on Click |
|------|------|-------|-----------------|
| Email | ✉️ | youseefgamer164@gmail.com | `mailto:youseefgamer164@gmail.com` |
| Phone | 📞 | +20 101 028 4573 | `tel:+201010284573` |
| WhatsApp | 💬 | +20 101 028 4573 | `https://wa.me/201010284573` |

> Each card is a styled clickable element with an icon, label, and value.

---

## 5. JavaScript Interactive Features

| Feature | Implementation | Page |
|---------|---------------|------|
| Dark/Light Mode Toggle | `useState` + Tailwind `dark:` classes, persisted in `localStorage` | All pages (Navbar) |
| Mobile Menu Toggle | Hamburger → slide-in nav menu for screens < 768px | All pages (Navbar) |
| Back-to-Top Button | Appears after scrolling 300px, smooth scroll to top | All pages |
| Form Validation | Real-time field validation with error states before submit | `/contact` |

---

## 7. Component Architecture

```
src/
├── main.jsx                  # Vite entry point
├── App.jsx                   # Router setup
├── index.css                 # Tailwind directives
│
├── components/
│   ├── Navbar.jsx            # Responsive nav + mobile menu toggle
│   ├── Footer.jsx            # Social links + copyright
│   ├── BackToTop.jsx         # Floating back-to-top button
│   ├── ProjectCard.jsx       # Reusable project card
│   └── SkillBadge.jsx        # Tech tag/badge component
│
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
│
├── data/
│   └── projects.js           # Project data array (title, desc, tech, links)
```

---

## 8. Routing Setup

```jsx
// App.jsx
<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/"         element={<Home />} />
    <Route path="/about"    element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/contact"  element={<Contact />} />
  </Routes>
  <BackToTop />
  <Footer />
</BrowserRouter>
```

---

## 9. GitHub Repository Requirements

The README.md must include:

- [ ] Project title + screenshot
- [ ] Live demo link
- [ ] Technologies used
- [ ] Setup instructions (`npm install` → `npm run dev`)
- [ ] Folder structure overview

---

## 10. Deliverables Checklist

### Code
- [ ] 4 pages minimum (Home, About, Projects, Contact)
- [ ] Responsive on mobile / tablet / desktop
- [ ] 4 JS interactive features (dark/light mode toggle, mobile menu, back-to-top, form validation)
- [ ] Hosted live (Vercel recommended)
- [ ] Public GitHub repo with README

### Documentation (Word/PDF)
- [ ] Introduction
- [ ] Technologies used
- [ ] Setup instructions
- [ ] Code structure explanation
- [ ] Reflection / what you learned

### Presentation (PowerPoint)
- [ ] Title slide
- [ ] Project overview
- [ ] Design process (colors, typography, wireframes)
- [ ] Tech stack
- [ ] Key features
- [ ] Challenges & solutions
- [ ] Live demo + GitHub links
- [ ] Future improvements

### Video Walkthrough (5–7 min)
- [ ] Presentation summary
- [ ] Live demo (show responsiveness + features)
- [ ] Brief code walkthrough

---

## 11. Grading Alignment

| Criterion | Weight | How This PRD Addresses It |
|-----------|--------|--------------------------|
| Functionality & Code | 40% | 4 JS features, multi-page routing, clean component structure |
| Design & Responsiveness | 30% | Tailwind breakpoints, consistent layout across all pages |
| Submission & Presentation | 20% | Full deliverables list covered (slides, doc, video) |
| Technology & Ambition | 10% | React (extra credit), TypeScript-ready structure |

---

## 12. Development Phases

| Phase | Tasks | Est. Time |
|-------|-------|-----------|
| 1 — Setup | Vite + React + Tailwind + Router init, folder structure | 1 day |
| 2 — Layout | Navbar (mobile menu), Footer, BackToTop | 1 day |
| 3 — Pages | Build all 4 pages (Home → About → Projects → Contact) | 3 days |
| 4 — Polish | Animations, hover states, responsiveness fixes | 1 day |
| 5 — Deploy | GitHub repo, README, Vercel deployment | 0.5 day |
| 6 — Docs | Documentation Word/PDF + Presentation slides | 1 day |
| **Total** | | **~7.5 days** |

> Deadline: **30/3/2026** — Start no later than **22/3/2026**

---

## 13. Future Improvements (for Presentation)

- Add a Blog page (`/blog`) with markdown-based posts
- Integrate EmailJS for real contact form submission
- Add project filter/search on `/projects`
- Animate page transitions with Framer Motion
- Add a downloadable CV button

---

*Document prepared by: YRD — WE Applied Technology School, IT Dept. 2025–2026*
