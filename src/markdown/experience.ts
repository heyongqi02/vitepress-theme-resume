import type MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'

const experienceClasses = [
  'resume-experience',
  'group relative mb-5 break-inside-avoid',
  'rounded-r-sm border-l-2 border-slate-800/20 bg-zinc-50/60 py-3 pl-4 pr-1',
  'print:border-l-slate-300 print:bg-transparent print:py-2 print:pl-3',
].join(' ')

const periodClasses = [
  'resume-experience-period',
  'pointer-events-none absolute top-3 right-3',
  'text-xs font-medium tabular-nums tracking-wide text-zinc-400',
  'print:top-2 print:right-0',
].join(' ')

const bodyClasses = [
  'resume-experience-body',
  'text-zinc-600',
  '[&>p:first-child]:mb-2.5 [&>p:first-child]:max-w-[calc(100%-5.5rem)]',
  '[&>p:first-child]:text-[13.5px] [&>p:first-child]:font-semibold [&>p:first-child]:leading-snug [&>p:first-child]:text-zinc-900',
  '[&>p]:mb-1.5 [&_strong]:font-semibold [&_strong]:text-zinc-900',
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
        const escaped = md.utils.escapeHtml(period)
        return `<div class="${experienceClasses}"><span class="${periodClasses}">${escaped}</span><div class="${bodyClasses}">\n`
      }
      return '</div></div>\n'
    },
  })
}
