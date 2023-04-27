// vite.config.ts
import { resolve } from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import pkg from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
    }),
    tsconfigPaths()
  ],
  build: {
    lib: {
        entry: {
          index: resolve(__dirname, 'index.ts'),
        },
        name: 'vue-eshop-ui',
        formats: ['es', 'cjs'],
        fileName: (format, entryName) => format === 'es'
          ? `${entryName}.mjs`
          : `${entryName}.${format}.js`
    },
    rollupOptions : {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'].concat(
        Object.keys(pkg.peerDependencies || {}),
        Object.keys(pkg.devDependencies || {}),
        Object.keys(pkg.dependencies || {})
      ),
      output: {
        // make sure modules are seperated and this - bundle is tree shakeable
        preserveModules: true,
      }
    }
  }
})
