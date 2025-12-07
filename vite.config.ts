import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, resolve('.'), '');
  
  // Fallback key (Note: For production security, prefer setting this in Netlify/Vercel dashboard)
  const defaultKey = "gen-lang-client-0780505389";

  const apiKey = env.API_KEY || defaultKey;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, './'),
      },
    },
    define: {
      // Securely inject the API key. 
      // This replaces 'process.env.API_KEY' in the code with the actual string value during build.
      'process.env.API_KEY': JSON.stringify(apiKey),
      // Polyfill for other process.env accesses to prevent runtime errors
      'process.env': {} 
    },
    build: {
      outDir: 'dist',
      sourcemap: true
    }
  };
});