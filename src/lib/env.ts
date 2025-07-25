// Environment detection utility
export const getEnvironment = () => {
  // Check if we're on Vercel
  if (typeof window !== 'undefined') {
    // Client-side detection
    const hostname = window.location.hostname;
    if (hostname.includes('vercel.app')) {
      return 'vercel';
    }
    if (hostname.includes('github.io')) {
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
  
  // Default to development
  return 'development';
};

export const getBasePath = () => {
  const env = getEnvironment();
  
  switch (env) {
    case 'vercel':
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