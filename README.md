# CortexFlow.AI — Premium Web, App & AI Systems Agency

A modern, high-performance agency website showcasing premium web development, custom mobile applications, and intelligent AI pipeline solutions.

## Features

### 🎨 **Design & UX**
- Modern **glassmorphism** design with premium aesthetics
- Smooth animations and interactive elements
- Dark/Light theme toggle with persistent storage
- Responsive design for all devices
- Custom cursor spotlight effect
- Animated neural network background canvas

### 🔧 **Core Functionality**
- **Boot sequence** — Signature intro animation with system-like terminal
- **Smooth navigation** — Anchor-based scrolling with active nav state
- **Mobile menu** — Responsive hamburger navigation
- **Terminal simulator** — Interactive command interface (help, team, metrics, clear)
- **Booking CRM simulator** — Service booking widget with local logging
- **Scroll progress indicator** — Visual feedback for page position
- **Grain overlay & visual effects** — Premium polish

### 📱 **Sections**
- **Home** — Hero introduction with brand identity
- **Process** — Workflow methodology
- **Services** — Web systems, mobile apps, AI pipelines
- **Portfolio** — Project showcase
- **Team** — Engineering roster
- **Contact** — Connection CTA

### 🎯 **Accessibility & Performance**
- Proper semantic HTML structure
- Font Awesome icons integration
- Google Fonts for typography (Inter, Outfit, JetBrains Mono)
- Optimized CSS variables for theming
- Smooth transitions and cubic-bezier animations

## Getting Started

### Installation
Simply open `index.html` in your browser — no build process required.

```bash
# Clone the repository
git clone https://github.com/yourusername/cortexflow-ai.git
cd cortexflow-ai

# Open in browser
open index.html
```

## Project Structure

```
cortexflow-ai/
├── index.html       # Main HTML structure
├── style.css        # Premium styling & theme system
├── script.js        # Interactive functionality
└── README.md        # Documentation
```

## Technologies Used

- **HTML5** — Semantic structure
- **CSS3** — Glassmorphism, gradients, animations, CSS variables
- **JavaScript (Vanilla)** — DOM manipulation, theme management, interactions
- **Font Awesome 6.5.1** — Icon library
- **Google Fonts** — Typography

## Key JavaScript Functions

| Function | Purpose |
|----------|---------|
| `toggleTheme()` | Switch between light/dark modes |
| `scrollToSection(id)` | Smooth navigation to sections |
| `executeTerminalCommand()` | Process terminal commands |
| `runLocalBooking()` | Handle booking widget interactions |

## Customization

### Colors & Theme
Edit CSS variables in `style.css`:
```css
:root {
    --c-primary: #6366f1;      /* Indigo */
    --c-secondary: #14b8a6;    /* Teal */
    --c-accent: #d946ef;       /* Pink */
}
```

### Add New Sections
1. Add HTML section in `index.html` with unique `id`
2. Add navigation button referencing the `id`
3. CSS will automatically apply styling

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## Performance Features

- Zero external dependencies (except fonts & icons)
- CSS-driven animations (GPU accelerated)
- LocalStorage for theme persistence
- Lightweight, fast-loading

## License

MIT License — Feel free to use and modify

## Contact

For inquiries, navigate to the Contact section or customize the CTA buttons.

---

**Built with precision for modern agencies.** ✨
