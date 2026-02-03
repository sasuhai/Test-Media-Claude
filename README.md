# Hidayah Centre Foundation - Media Team Website

A beautiful, professional website showcasing the Media & Creative Team of Hidayah Centre Foundation, Kuala Lumpur.

## 🎯 Project Overview

This website serves as a digital portfolio and information hub for the Media Team, highlighting our role in managing media, digital content, visual storytelling, and outreach for Islamic da'wah, education, and community engagement.

## ✨ Features

### Design & Aesthetics
- **Modern Islamic Design**: Clean, minimalist layout with earth tones and emerald green accents
- **Premium Typography**: Elegant combination of Inter and Playfair Display fonts
- **Smooth Animations**: Subtle fade-in effects, parallax scrolling, and hover interactions
- **Fully Responsive**: Mobile-first design that works beautifully on all devices

### Sections
1. **Hero Section**: Impactful headline with call-to-action buttons
2. **About**: Introduction to the Media Team and our mission
3. **Services**: Six core media services with icon cards
4. **Portfolio**: Filterable gallery of featured work (Events, Campaigns, Videos, Designs)
5. **Impact Stats**: Animated counters showing our reach and achievements
6. **Team**: Meet the creative minds behind our work
7. **Call to Action**: Volunteer and collaboration opportunities
8. **Footer**: Complete contact information and social links

### Interactive Features
- Sticky navigation with scroll effects
- Mobile-responsive hamburger menu
- Portfolio filtering system
- Lightbox image viewer
- Animated statistics counters
- Smooth scroll navigation
- Scroll-triggered animations

## 🎨 Color Palette

- **Primary Green**: `#2d5f4f` (Deep emerald)
- **Earth Tones**: `#f5f1e8` (Sand), `#e8dcc4` (Beige), `#8b7355` (Brown)
- **Accent**: `#047857` (Emerald)
- **Neutrals**: White, off-white, and gray scale

## 🚀 Getting Started

### Option 1: Direct Open
Simply open `index.html` in your web browser.

### Option 2: Local Server (Recommended)
For the best experience, use a local development server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

### Option 3: One-Command Open (Easiest)
Run this command and the site opens automatically (it picks a free port if 8000 is busy):

```bash
npm run run
```

## 📁 File Structure

```
.
├── index.html          # Main HTML structure
├── styles.css          # Complete styling and design system
├── script.js           # Interactive functionality
└── README.md          # This file
```

## 🛠️ Customization

### Adding Real Images
Replace the placeholder gradients in the portfolio and team sections with actual photos:

1. **Portfolio Images**: Update the `portfolioData` array in `script.js`
2. **Team Photos**: Update the `teamData` array in `script.js`
3. **About Section**: Replace the `#aboutImage` background in the HTML

### Updating Content
- **Team Members**: Edit the `teamData` array in `script.js`
- **Portfolio Items**: Edit the `portfolioData` array in `script.js`
- **Statistics**: Update the `data-target` attributes on `.stat-number` elements
- **Text Content**: Directly edit the HTML in `index.html`

### Color Scheme
All colors are defined as CSS variables in `:root` at the top of `styles.css`. Simply update these values to change the entire color scheme.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast text for readability
- Responsive font sizes
- Alt text ready for images

## 📄 License

© 2026 Hidayah Centre Foundation. All rights reserved.

## 🤝 Contributing

This website is maintained by the Media Team of Hidayah Centre Foundation. For updates or contributions, please contact the team directly.

---

**Built with ❤️ by the Hidayah Centre Foundation Media Team**
*Telling Stories That Inspire Hidayah*
