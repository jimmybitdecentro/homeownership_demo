import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    host: '::',
    port: 8080,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        services: resolve(__dirname, 'public/services.html'),
        about: resolve(__dirname, 'public/about.html'),
        testimonials: resolve(__dirname, 'public/testimonials.html'),
        contact: resolve(__dirname, 'public/contact.html'),
      },
    },
  },
});
