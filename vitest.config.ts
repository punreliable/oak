/// <reference types="vitest" />
import { defineConfig, coverageConfigDefaults } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    include: ['**/*.test.ts', '**/*.test.tsx'],
    setupFiles: 'setupTests.ts',
    // coverage: {
    //   reporter: ["locv"],
    //   enabled: true,
    //   reportsDirectory: ".coverage",
    //   exclude: ["main.tsx", ...coverageConfigDefaults.exclude],
    // },
  },
});
