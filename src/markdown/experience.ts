import type MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'

export function experienceContainer(md: MarkdownIt) {
  md.use(container, 'experience', {
    validate(params: string) {
      return params.trim().startsWith('experience')
    },
    render(tokens, idx) {
      const info = tokens[idx].info.trim()
      const period = info.slice('experience'.length).trim()

      if (tokens[idx].nesting === 1) {
        return `<div class="resume-experience" data-period="${md.utils.escapeHtml(period)}"><div class="resume-experience-body">\n`
      }
      return '</div></div>\n'
    },
  })
}
