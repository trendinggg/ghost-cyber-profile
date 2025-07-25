// Environment detection utility
export const getEnvironment = () => {
  // Check if we're on Vercel
  if (typeof window !== 'undefined') {
    // Client-side detection
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    
    // Vercel detection
    if (hostname.includes('vercel.app')) {
      return 'vercel';
    }
    
    // GitHub Pages detection
    if (hostname.includes('github.io')) {
      return 'github-pages';
    }
    
    // Netlify detection
    if (hostname.includes('netlify.app')) {
      return 'netlify';
    }
    
    // Local development with GitHub Pages path
    if (pathname.startsWith('/ghost-cyber-profile')) {
      return 'github-pages';
    }
  }
  
  // Server-side detection
  if (process.env.VERCEL === '1') {
    return 'vercel';
  }
  if (process.env.GITHUB_PAGES === '1') {
    return 'github-pages';
  }
  if (process.env.NETLIFY === '1') {
    return 'netlify';
  }
  
  // Default to development
  return 'development';
};

export const getBasePath = () => {
  const env = getEnvironment();
  
  switch (env) {
    case 'vercel':
    case 'netlify':
      return '/';
    case 'github-pages':
      return '/ghost-cyber-profile';
    default:
      return '/';
  }
};

export const isProduction = () => {
  return import.meta.env.PROD;
};

export const isDevelopment = () => {
  return import.meta.env.DEV;
};

// Debug utility for troubleshooting
export const debugEnvironment = () => {
  if (typeof window !== 'undefined') {
    console.log('🔍 Environment Debug:');
    console.log('Hostname:', window.location.hostname);
    console.log('Pathname:', window.location.pathname);
    console.log('Detected Environment:', getEnvironment());
    console.log('Base Path:', getBasePath());
    console.log('Is Production:', isProduction());
  }
}; 