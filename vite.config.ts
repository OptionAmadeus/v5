import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'recharts'],
          web3: ['@web3-onboard/core', '@web3-onboard/coinbase', '@web3-onboard/react']
        }
      }
    }
  },
  server: {
    port: 5173,
    host: true
  }
});