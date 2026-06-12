# vitepress-theme-resume

A VitePress theme for single-page resumes with print-friendly A4 layout.

## Install

```bash
pnpm add -D vitepress vitepress-theme-resume tailwindcss @tailwindcss/vite
```

Add the Tailwind Vite plugin in your VitePress config so utility classes in theme components are generated during dev and build:

```ts
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  extends: defineResumeConfig({ /* ... */ }),
  vite: { plugins: [tailwindcss()] },
});
```

## Quick start

**.vitepress/config.ts**

```ts
import { defineConfig } from "vitepress";
import { defineResumeConfig } from "vitepress-theme-resume/config";

export default defineConfig({
  extends: defineResumeConfig({
    title: "Your Name",
    description: "Your role",
    lang: "zh-CN",
  }),
});
```

**.vitepress/theme/index.ts**

```ts
import ResumeTheme from "vitepress-theme-resume";
import "vitepress-theme-resume/style.css";

export default ResumeTheme;
```

**index.md**

```md
---
resume: true
profile:
  name: Your Name
  meta:
    - your@email.com
    - 13800000000
  tags:
    - label: Frontend Engineer
---

## Experience

<ResumeExperience period="2024-至今" stack="vue,vite">

**Company** Role title

</ResumeExperience>
```

## Frontmatter

| Field | Type | Description |
|-------|------|-------------|
| `resume` | `boolean` | Enable resume layout |
| `profile.name` | `string` | Display name |
| `profile.meta` | `(string \| number)[]` | Contact info; email and phone are auto-linked |
| `profile.tags` | `{ label: string }[]` | Skill or intent tags |

## Theme config

`themeConfig.resume` options (via `defineResumeConfig`):

| Option | Default | Description |
|--------|---------|-------------|
| `enabled` | `true` | Default resume mode when frontmatter omits `resume` |
| `skipLinkLabel` | `跳到主内容` | Skip link text |
| `profileDefaults` | — | Default profile fields merged with page frontmatter |

## Layout slots

Extend the theme to inject content without forking:

```ts
import ResumeTheme from "vitepress-theme-resume";
import { h } from "vue";

export default {
  ...ResumeTheme,
  Layout() {
    return h(ResumeTheme.Layout!, null, {
      "header-after": () => h("p", "Custom subtitle"),
    });
  },
};
```

| Slot | Position |
|------|----------|
| `page-before` / `page-after` | Outside the A4 page |
| `header-before` / `header-after` | Around the profile header |
| `content-before` / `content-after` | Around markdown body |

## Markdown components

- `<ResumeExperience period="..." stack="...">` — work or project block
- `<ResumeHighlights>` — two-column highlight grid
- `<ResumeHighlight title="...">` — single highlight item

Components are also exported from the main entry for local imports.

## License

Apache-2.0
