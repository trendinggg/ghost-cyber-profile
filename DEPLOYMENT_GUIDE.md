# 🚀 Multi-Platform Deployment Guide

## ✅ Universal Deployment Setup

Your **Ghost Cyber Profile** is now configured for seamless deployment across multiple platforms:

- **GitHub Pages** - Free hosting with custom domain support
- **Vercel** - Lightning-fast global CDN with edge functions
- **Netlify** - Robust hosting with form handling and serverless functions

## 🔧 Platform Detection System

The project automatically detects the deployment platform and configures:
- **Base paths** correctly for each platform
- **Asset URLs** with proper prefixes
- **Routing** that works on all platforms
- **Environment variables** for platform-specific features

### Platform-Specific Configurations

| Platform | Base Path | Build Command | Config File |
|----------|-----------|---------------|-------------|
| **GitHub Pages** | `/ghost-cyber-profile/` | `npm run build:github` | `.github/workflows/deploy.yml` |
| **Vercel** | `/` | `npm run build:vercel` | `vercel.json` |
| **Netlify** | `/` | `npm run build:netlify` | `netlify.toml` |
| **Development** | `/` | `npm run dev` | - |

## 🚀 Deployment Options

### 1. **GitHub Pages Deployment**

#### Automatic Deployment (Recommended)
```bash
# Push to main branch - GitHub Actions will auto-deploy
git push origin main

# Or use the deployment script
./scripts/deploy.sh --platform github
```

#### Manual Deployment
```bash
# Build for GitHub Pages
npm run build:github

# Deploy to GitHub Pages
npm run deploy
```

**URL**: `https://akshatparikh.github.io/ghost-cyber-profile`

### 2. **Vercel Deployment**

#### Automatic Deployment
```bash
# Push to main branch - Vercel will auto-deploy
git push origin main

# Or use the deployment script
./scripts/deploy.sh --platform vercel
```

#### Manual Deployment
```bash
# Build for Vercel
npm run build:vercel

# Deploy using Vercel CLI
vercel --prod
```

**URL**: `https://your-app.vercel.app`

### 3. **Netlify Deployment**

#### Automatic Deployment
```bash
# Push to main branch - Netlify will auto-deploy
git push origin main

# Or use the deployment script
./scripts/deploy.sh --platform netlify
```

#### Manual Deployment
```bash
# Build for Netlify
npm run build:netlify

# Deploy using Netlify CLI
netlify deploy --prod --dir=dist
```

**URL**: `https://your-app.netlify.app`

## 📦 Build Commands

### Platform-Specific Builds
```bash
# GitHub Pages
npm run build:github

# Vercel
npm run build:vercel

# Netlify
npm run build:netlify

# Generic production build
npm run build:prod
```

### Quality Assurance
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Formatting
npm run format

# Testing
npm run test
```

## 🔍 Environment Detection

The project uses intelligent environment detection:

### Client-Side Detection
```javascript
// Automatically detects platform based on hostname
getEnvironment() // Returns: 'vercel', 'github-pages', 'netlify', or 'development'
getBasePath()    // Returns correct base path for current platform
```

### Server-Side Detection
```bash
# Environment variables for build-time detection
VERCEL=1        # For Vercel builds
GITHUB_PAGES=1  # For GitHub Pages builds
NETLIFY=1       # For Netlify builds
```

## 🛠️ Configuration Files

### 1. **GitHub Actions** (`.github/workflows/deploy.yml`)
- Automatic deployment on push to main
- Type checking and linting
- Build optimization for GitHub Pages

### 2. **Vercel** (`vercel.json`)
- SPA routing configuration
- Security headers
- Asset caching
- Performance optimization

### 3. **Netlify** (`netlify.toml`)
- Build settings
- Redirect rules
- Security headers
- Asset caching

## 🔧 Platform Setup

### GitHub Pages Setup
1. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (auto-created)
   - Folder: `/ (root)`

2. **Custom Domain** (Optional):
   - Add your domain in Settings → Pages
   - Create CNAME file in public/ directory

### Vercel Setup
1. **Connect Repository**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Framework: Vite

2. **Environment Variables**:
   ```
   VERCEL=1
   NODE_ENV=production
   ```

### Netlify Setup
1. **Connect Repository**:
   - Go to [netlify.com](https://netlify.com)
   - Import your GitHub repository
   - Build command: `npm run build:netlify`

2. **Environment Variables**:
   ```
   NETLIFY=1
   NODE_ENV=production
   ```

## 🚨 Troubleshooting

### Common Issues

#### 1. **Assets Not Loading (404 Errors)**
**Solution**: Check platform detection and base path
```bash
# Debug environment detection
npm run dev
# Open browser console and check:
# console.log('Environment:', getEnvironment());
# console.log('Base Path:', getBasePath());
```

#### 2. **Routing Not Working**
**Solution**: Verify platform-specific configuration
- **GitHub Pages**: Check `vercel.json` rewrites
- **Vercel**: Check `vercel.json` rewrites
- **Netlify**: Check `netlify.toml` redirects

#### 3. **Build Fails**
**Solution**: Check platform-specific build command
```bash
# Test build locally
npm run build:github  # For GitHub Pages
npm run build:vercel  # For Vercel
npm run build:netlify # For Netlify
```

### Debug Commands
```bash
# Debug environment detection
npm run dev
# Add to any component:
import { debugEnvironment } from '@/lib/env';
debugEnvironment();

# Check build output
npm run build:analyze

# Test locally
npm run preview:prod
```

## 📊 Performance Comparison

| Platform | Pros | Cons |
|----------|------|------|
| **GitHub Pages** | Free, Custom domains, Git integration | Limited features, No serverless |
| **Vercel** | Fast CDN, Edge functions, Analytics | Free tier limits |
| **Netlify** | Forms, Functions, Large ecosystem | Can be slower than Vercel |

## 🎯 Best Practices

### 1. **Development Workflow**
```bash
# Start development
npm run dev

# Make changes...

# Quality checks
npm run lint && npm run type-check

# Test build
npm run build:prod
npm run preview:prod
```

### 2. **Deployment Workflow**
```bash
# Commit changes
git add .
git commit -m "Update portfolio"
git push origin main

# Automatic deployment happens
# Check deployment status in platform dashboard
```

### 3. **Monitoring**
- **GitHub Pages**: Check Actions tab for deployment status
- **Vercel**: Monitor in Vercel dashboard
- **Netlify**: Check deployment logs in Netlify dashboard

## 📞 Support

### Platform Resources
- **GitHub Pages**: [Documentation](https://pages.github.com/)
- **Vercel**: [Documentation](https://vercel.com/docs)
- **Netlify**: [Documentation](https://docs.netlify.com/)

### Project-Specific
- Check platform-specific configuration files
- Review build logs in platform dashboards
- Test locally before deploying

---

## 🎉 Ready for Multi-Platform Deployment!

Your portfolio is now optimized for deployment across all major platforms:

✅ **Automatic platform detection**  
✅ **Platform-specific configurations**  
✅ **Seamless routing on all platforms**  
✅ **Optimized builds for each platform**  
✅ **Security headers and caching**  
✅ **Performance optimization**  

**Choose your platform and deploy with confidence!** 🚀 