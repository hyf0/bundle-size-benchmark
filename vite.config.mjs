import { defineConfig } from 'vite';

export default defineConfig( {
  build: {
    emptyOutDir: false,
    assetsDir: '.',
    rollupOptions: {
      input: {
        app: './vite.html'
      },
      output: {
        entryFileNames: 'vite.js',
        format: 'es'
      }
    }
  },
  esbuild: {
    legalComments: 'none'
  },
} );
