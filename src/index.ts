import Layout from './Layout.vue'
import type { Theme } from 'vitepress'
import './styles/resume.css'

export default {
  Layout,
} satisfies Theme

export type { ResumeProfile, ResumeFrontmatter } from './types'
