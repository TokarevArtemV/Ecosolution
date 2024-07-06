import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from '@svgr/rollup';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      assets: '/src/assets',
      helpers: './src/helpers',
    },
  },
  base: '',
  build: {
    rollupOptions: {
      external: ['@chatscope/chat-ui-kit-styles'],
    },
  },
});
