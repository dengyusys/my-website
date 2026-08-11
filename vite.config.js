import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rolldownOptions: {
      output: {
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.names?.[0] ?? '';

          return fileName.endsWith('.css')
            ? 'css/[name]-[hash][extname]'
            : 'assets/[name]-[hash][extname]';
        },
      },
    },
  },
});
