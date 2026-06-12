import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { experienceContainer } from '../../src/markdown/experience'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  title: '贺永琪',
  description: '前端开发工程师',
  themeConfig: {
    sidebar: [],
    nav: [],
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@theme': fileURLToPath(new URL('../../src', import.meta.url)),
      },
    },
  },
  markdown: {
    config(md) {
      experienceContainer(md)
    },
  },
})
