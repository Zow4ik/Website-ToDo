import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => ({
  plugins: [react()],

  css: {
    modules: {
      generateScopedName:
        mode === "development"
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:6]",
    },

    devSourcemap: true
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"),
    },
  },

  build: {
    sourcemap: true
  },

  base: '/Website-ToDo/',
}))