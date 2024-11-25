import { defineConfig } from 'vitest/config'
import viteConfig from './vite.config.ts'
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import React from 'react'`, // Optional, if you want to automatically import React
  },
  test: {
	include: ['**/*.test.ts', '**/*.test.tsx'],
}
});