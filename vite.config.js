import { defineConfig } from 'vite';
import djangoVite from 'django-vite-plugin';
import DefineOptions from 'unplugin-vue-define-options/vite';
import vue from '@vitejs/plugin-vue';

const { resolve } = require('path');

export default defineConfig({
  plugins: [
    DefineOptions(),
    djangoVite(['resources/js/app.js']),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false,
        },
      },
    }),
  ],
  resolve: {
    alias: [{ find: '@r', replacement: resolve(__dirname, 'resources/js') }],
  },
});
