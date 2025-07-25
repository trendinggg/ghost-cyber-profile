# Ghost Cyber Profile 🛡️

Professional cybersecurity portfolio for **Akshat Parikh** - Penetration Tester & Security Specialist.

## 🚀 Live Demo

**Portfolio**: [https://akshatparikh.github.io/ghost-cyber-profile](https://akshatparikh.github.io/ghost-cyber-profile)

## ✨ Features

- **Modern React Portfolio** with TypeScript
- **Cybersecurity-themed Design** with dark mode
- **Responsive Layout** for all devices
- **Smooth Animations** and scroll effects
- **Professional Sections**: Hero, Services, Experience, Achievements, Certifications, About, Contact
- **Performance Optimized** with code splitting and lazy loading
- **SEO Ready** with proper meta tags
- **Accessibility Compliant** with ARIA labels

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Deployment**: GitHub Pages

## 📦 Installation

### Prerequisites

- Node.js >= 18.0.0
- npm >= 8.0.0

### Setup

```bash
# Clone the repository
git clone https://github.com/akshatparikh/ghost-cyber-profile.git
cd ghost-cyber-profile

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run preview      # Preview production build locally
npm run preview:prod # Preview with production settings
```

### Building
```bash
npm run build        # Build for production
npm run build:dev    # Build for development
npm run build:prod   # Build for production (explicit)
npm run build:analyze # Build and analyze bundle size
```

### Code Quality
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript type checking
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Testing
```bash
npm run test         # Run tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage
```

### Deployment
```bash
npm run deploy       # Deploy to GitHub Pages
npm run deploy:force # Force deploy to GitHub Pages
npm run serve        # Serve production build locally
```

### Utilities
```bash
npm run clean        # Clean build artifacts
npm start           # Serve production build (alias for serve)
```

## 🏗️ Project Structure

```
ghost-cyber-profile/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # shadcn/ui components
│   │   └── *.tsx          # Page sections
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── pages/             # Route pages
│   ├── assets/            # Images and static files
│   ├── test/              # Test setup and utilities
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── scripts/               # Build and deployment scripts
├── dist/                  # Production build output
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── vitest.config.ts       # Vitest configuration
└── .prettierrc           # Prettier configuration
```

## 🚀 Production Deployment

### GitHub Pages (Recommended)

1. **Automatic Deployment**:
   ```bash
   npm run deploy
   ```

2. **Manual Deployment**:
   ```bash
   # Build the project
   npm run build:prod
   
   # Deploy to GitHub Pages
   npm run deploy
   ```

3. **Using Deployment Script**:
   ```bash
   # Make script executable (Linux/Mac)
   chmod +x scripts/deploy.sh
   
   # Run deployment script
   ./scripts/deploy.sh
   ```

### Other Platforms

#### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build:prod`
3. Set publish directory: `dist`
4. Deploy!

#### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build:prod`
4. Deploy!

#### Custom Server
```bash
# Build the project
npm run build:prod

# Serve the dist folder
npm run serve
```

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:
```env
VITE_APP_TITLE=Ghost Cyber Profile
VITE_APP_DESCRIPTION=Professional cybersecurity portfolio
VITE_APP_VERSION=1.0.0
```

### Build Optimization

The project includes several optimizations:
- **Code Splitting**: Automatic chunk splitting for better performance
- **Tree Shaking**: Unused code elimination
- **Minification**: Terser for production builds
- **Asset Optimization**: Image and CSS optimization
- **Bundle Analysis**: Use `npm run build:analyze` to analyze bundle size

### Performance Features

- **Lazy Loading**: Components load on demand
- **Intersection Observer**: Efficient scroll animations
- **Optimized Images**: WebP format support
- **CSS Purge**: Unused CSS removal in production
- **Service Worker**: Ready for PWA features

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### Test Structure
- **Unit Tests**: Component testing with Vitest
- **Integration Tests**: User interaction testing
- **E2E Tests**: Full application testing (can be added)

## 📊 Performance Monitoring

### Bundle Analysis
```bash
npm run build:analyze
```

This will:
1. Build the project for production
2. Open bundle analyzer in browser
3. Show chunk sizes and dependencies

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🔒 Security

### Built-in Security Features
- **Content Security Policy**: Configured for production
- **HTTPS Only**: Enforced in production
- **XSS Protection**: React's built-in protection
- **Dependency Scanning**: Regular security audits

### Security Headers
```html
<!-- Automatically added in production -->
<meta http-equiv="Content-Security-Policy" content="default-src 'self'">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** for beautiful components
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development experience
- **React** for the amazing framework
- **GitHub Pages** for hosting

## 📞 Contact

**Akshat Parikh**
- Email: akshatparikh.pt@gmail.com
- LinkedIn: [akshatparikh1010](https://www.linkedin.com/in/akshatparikh1010/)
- TryHackMe: [SN1PER](https://tryhackme.com/p/SN1PER)
- HackTheBox: [SN1PERZ](https://app.hackthebox.com/profile/2128889)

---

**Built with ❤️ and security in mind**
