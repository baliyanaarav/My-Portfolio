# Modern Portfolio Website

A stunning, responsive portfolio website built with React.js, featuring modern animations, dark/light theme toggle, and professional design.

## Features

- 🎨 **Modern Design**: Clean, professional design with gradient accents
- 🌙 **Dark/Light Theme**: Toggle between dark and light modes
- 📱 **Responsive**: Fully responsive design for all devices
- ✨ **Smooth Animations**: Framer Motion animations throughout
- 🎯 **Interactive Elements**: Hover effects and micro-interactions
- 📧 **Contact Form**: Functional contact form with validation
- 🔍 **SEO Optimized**: Meta tags and semantic HTML
- ⚡ **Fast Performance**: Optimized for speed and performance

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and background
3. **Skills**: Technical skills with animated progress bars
4. **Projects**: Portfolio showcase with filtering
5. **Experience**: Work history with timeline
6. **Contact**: Contact form and information
7. **Footer**: Links and social media

## Technologies Used

- **React.js** - Frontend framework
- **Styled Components** - CSS-in-JS styling
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll animations

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.js` - Update name and title
- `src/components/About.js` - Update personal details
- `src/components/Skills.js` - Update skills and percentages
- `src/components/Projects.js` - Update project details
- `src/components/Experience.js` - Update work experience
- `src/components/Contact.js` - Update contact information

### Styling

The color scheme can be customized by modifying the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --background-color: #0a0a0a;
  --text-color: #ffffff;
}
```

### Theme Colors

The gradient colors used throughout the site can be modified in the styled components:

```javascript
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.js
│   ├── Hero.js
│   ├── About.js
│   ├── Skills.js
│   ├── Projects.js
│   ├── Experience.js
│   ├── Contact.js
│   └── Footer.js
├── context/
│   └── ThemeContext.js
├── App.js
├── index.js
└── index.css
```

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`

### GitHub Pages

1. Add homepage to package.json: `"homepage": "https://username.github.io/repo-name"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add scripts to package.json:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## Performance Optimization

- Images are optimized and lazy-loaded
- Code splitting implemented
- Bundle size optimized
- CSS animations use transform instead of layout properties

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Styled Components](https://styled-components.com/)

## Contact

Aarav Baliyan - aaravbaliyan0001@gmail.com

Project Link: [https://github.com/baliyanaarav/portfolio](https://github.com/baliyanaarav/portfolio)
