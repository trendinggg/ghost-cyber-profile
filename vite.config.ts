import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Detect deployment platform
const isVercel = process.env.VERCEL === '1';
const isGitHubPages = process.env.GITHUB_PAGES === '1' || process.env.NODE_ENV === 'production' && !isVercel;
const isNetlify = process.env.NETLIFY === '1';

// Determine base path based on platform
const getBasePath = () => {
  if (isVercel || isNetlify) {
    return '/';
  }
  if (isGitHubPages || process.env.NODE_ENV === 'production') {
    return '/ghost-cyber-profile/';
  }
  return '/';
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: getBasePath(),
  server: {
    host: "::",
    port: 8080,
    open: true, // Auto-open browser
  },
  preview: {
    port: 4173,
    host: true,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: 'es2015',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: mode === 'development',
    minify: mode === 'production' ? 'terser' : false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu', '@radix-ui/react-tooltip'],
          icons: ['lucide-react'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority'],
        },
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return `js/${facadeModuleId}-[hash].js`;
        },
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || ['asset'];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
        drop_debugger: mode === 'production',
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
  css: {
    devSourcemap: mode === 'development',
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
}));
