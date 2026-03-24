# YRD Portfolio

A personal portfolio website built with React, Tailwind CSS, and Vite. Showcasing my skills, projects, and journey as a Full Stack Developer.

![YRD Portfolio Screenshot](https://via.placeholder.com/1200x600/080B10/00FFAA?text=YRD+Portfolio)

## 🔗 Live Demo

**[yrd-dev.vercel.app](https://yrd-dev.vercel.app)** *(coming soon)*

---

## 🛠️ Technologies Used

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, JavaScript (ES6+) |
| **Styling** | Tailwind CSS v3 |
| **Routing** | React Router DOM v6 |
| **Icons** | Lucide React |
| **Build Tool** | Vite |
| **Deployment** | Vercel |

---

## ✨ Features

### Core Features
- **Multi-page SPA** - Home, About, Projects, Contact pages
- **Responsive Design** - Works on mobile, tablet, and desktop
- **Dark/Light Mode Toggle** - Theme persistence with localStorage
- **Mobile Navigation** - Hamburger menu with smooth animations

### Interactive Elements
- **Typing Animation** - Name typing effect on homepage
- **Back-to-Top Button** - Smart positioning near footer
- **Form Validation** - Real-time contact form validation
- **Project Filtering** - Filter projects by technology
- **Hover Effects** - Smooth transitions and animations

### Design Elements
- **Custom Scrollbar** - Styled with accent color
- **Background Effects** - Grid pattern with glow effects
- **Staggered Animations** - Fade-in effects on page load
- **Card Hover Effects** - Lift and glow on interaction

---

## 📚 What I Learned

Building this portfolio was an incredible learning experience! Here are the key takeaways:

### 1. React Fundamentals
- Component-based architecture
- State management with `useState`
- Side effects with `useEffect`
- React Router for navigation

### 2. Dark/Light Mode Implementation
- Using CSS custom properties (variables)
- Persisting theme preference with `localStorage`
- Using `data-theme` attribute for theme switching
- Handling client-side theme initialization to avoid hydration issues

```javascript
// Theme toggle logic
const toggleTheme = () => {
  setTheme(prev => prev === 'dark' ? 'light' : 'dark')
}
localStorage.setItem('yrd-theme', theme)
document.documentElement.setAttribute('data-theme', theme)
```

### 3. Responsive Design with Tailwind
- Mobile-first approach
- Breakpoint prefixes (`md:`, `lg:`)
- Custom color palette configuration
- Using CSS variables with Tailwind

### 4. Interactive UI Patterns
- Mobile menu toggle with animation
- Scroll-based visibility (Back-to-Top)
- Form validation best practices
- Real-time error feedback

### 5. Performance Optimization
- Component re-rendering considerations
- Using CSS transitions over JavaScript animations where possible
- Lazy loading considerations

### 6. Deployment & DevOps
- Vercel deployment process
- Environment configuration
- Production build optimization

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/youfis77/YRD.DEV.git
cd YRD.DEV

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## 📁 Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Router setup
├── index.css             # Global styles & CSS variables
├── components/
│   ├── Navbar.jsx       # Navigation with mobile menu
│   ├── Footer.jsx       # Social links
│   ├── BackToTop.jsx    # Scroll to top button
│   ├── ProjectCard.jsx  # Reusable project card
│   └── SkillBadge.jsx   # Skill tag component
├── pages/
│   ├── Home.jsx         # Homepage with hero
│   ├── About.jsx        # About page
│   ├── Projects.jsx     # Projects gallery
│   └── Contact.jsx      # Contact form
├── hooks/
│   └── useDarkMode.js  # Dark mode hook
└── data/
    └── projects.js      # Projects & skills data
```

---

## 🎯 Future Improvements

- [ ] Add a Blog page with markdown-based posts
- [ ] Integrate EmailJS for real contact form submission
- [ ] Add project search functionality
- [ ] Animate page transitions with Framer Motion
- [ ] Add downloadable CV button
- [ ] Add more projects as I build them

---

## 📬 Contact

- **Email**: youseefgamer164@gmail.com
- **Phone**: +20 101 028 4573
- **WhatsApp**: +20 101 028 4573
- **GitHub**: [github.com/youfis77](https://github.com/youfis77)
- **LinkedIn**: [linkedin.com/in/yousif-ramadan-dahi](https://linkedin.com/in/yousif-ramadan-dahi)
- **Location**: Sheikh Zayed, Egypt

---

## 🙏 Acknowledgments

- **WE Applied Technology School** - For the opportunity to build this project
- **Design Inspiration** - Modern dark theme aesthetics
- **Lucide React** - For beautiful icons

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with ❤️ by Yousif Ramadan Dahi*
*Last Updated: March 2026*
