# Agent Coding Guidelines — YRD Portfolio

## 1. Commands

### Setup & Development
```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build
```

---

## 2. Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Router setup
├── index.css             # Tailwind directives
├── components/           # Navbar, Footer, BackToTop, ProjectCard, SkillBadge
├── pages/                # Home, About, Projects, Contact
└── data/                 # Static data (projects.js)
```

---

## 3. Code Style

### Imports
Use absolute imports from `src/`. Order: React → external → internal → CSS.

```jsx
// ✅ Good
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Github } from 'lucide-react'
import Navbar from '@/components/Navbar'

// ❌ Bad
import Navbar from '@/components/Navbar'
import { useState } from 'react'
```

### Component Structure
- Use functional components
- Keep under 200 lines; extract logic into hooks
- Destructure props

```jsx
// ✅ Good
function ProjectCard({ title, description, tech, githubLink, liveLink }) {
  return <div className="card"><h3>{title}</h3></div>
}

// ❌ Bad
function ProjectCard(props) { return <div>{props.title}</div> }
```

### Naming Conventions
| Element | Convention | Example |
|---------|------------|---------|
| Components | PascalCase | `Navbar.jsx` |
| Hooks | camelCase + `use` | `useDarkMode.js` |
| Utilities | camelCase | `formatDate.js` |
| Constants | UPPER_SNAKE | `MAX_PROJECTS` |
| Files | kebab-case | `hero-section.jsx` |

### Tailwind Usage
- Use responsive prefixes: `md:`, `lg:`, `xl:`
- Prefer utilities over custom CSS
- Use `dark:` modifier for theme variants

```jsx
// ✅ Good
<div className="flex flex-col md:flex-row gap-4 p-4 dark:bg-gray-900">
// ❌ Bad
<div style={{ display: 'flex', gap: '1rem' }}>
```

### Error Handling
- Use try/catch for async operations
- Display user-friendly errors
- Log to console in development only

```jsx
async function fetchProjects() {
  try {
    return await api.getProjects()
  } catch (error) {
    console.error('Failed to fetch:', error)
    return []
  }
}
```

---

## 4. Accessibility & Best Practices
- Use semantic HTML (`<nav>`, `<main>`, `<footer>`)
- Add `aria-label` to icon-only buttons
- Ensure color contrast (WCAG AA)
- Use `alt` text for images
- Make elements keyboard-navigable

---

## 5. Performance
- Use `React.memo` for expensive components
- Lazy load pages with `React.lazy()`
- Optimize images before adding
- Avoid inline functions in `useEffect` deps
- Use proper dependency arrays

---

## 6. Git Commit Style
```
feat: add dark mode toggle
fix: resolve mobile menu overlap
docs: update README
refactor: extract project data
```

---

## 7. PRD Requirements
This project satisfies WE Applied Technology School requirements:
- Multi-page SPA with React Router (4 pages: Home, About, Projects, Contact)
- 4 JS features: dark mode, mobile menu, back-to-top, form validation
- Tailwind CSS (no custom CSS unless necessary)
- Deployed on Vercel or GitHub Pages

---

*Last updated: March 2026*
