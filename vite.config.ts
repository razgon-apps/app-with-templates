/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react(), tsconfigPaths()],
    define: {
      'process.env.CONTACT_PHONE': JSON.stringify(env.CONTACT_PHONE),
    },
    server: {
      port: 8080,
      open: true,
      host: '0.0.0.0',
    },
    preview: {
      port: 8080,
      open: false,
    },
  };
});
