import type MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'

const experienceClasses = [
  'resume-experience',
  'relative mb-4 break-inside-avoid',
  'after:content-[attr(data-period)] after:absolute after:top-0 after:right-0',
  'after:text-[13px] after:font-normal after:text-gray-500 after:whitespace-nowrap',
].join(' ')

const bodyClasses = [
  'resume-experience-body',
  'text-gray-700',
  '[&>p:first-child]:mb-2 [&>p:first-child]:pr-[110px] [&>p:first-child]:font-semibold [&>p:first-child]:text-gray-900',
  '[&>p]:mb-1.5',
].join(' ')

export function experienceContainer(md: MarkdownIt) {
  md.use(container, 'experience', {
    validate(params: string) {
      return params.trim().startsWith('experience')
    },
    render(tokens, idx) {
      const info = tokens[idx].info.trim()
      const period = info.slice('experience'.length).trim()

      if (tokens[idx].nesting === 1) {
        return `<div class="${experienceClasses}" data-period="${md.utils.escapeHtml(period)}"><div class="${bodyClasses}">\n`
      }
      return '</div></div>\n'
    },
  })
}
