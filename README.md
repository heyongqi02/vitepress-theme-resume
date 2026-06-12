# vitepress-theme-resume

[![npm version](https://npmx.dev/api/registry/badge/version/vitepress-theme-resume)](https://npmx.dev/package/vitepress-theme-resume)
[![npm downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-theme-resume)](https://npmx.dev/package/vitepress-theme-resume)
[![bundle size](https://npmx.dev/api/registry/badge/size/vitepress-theme-resume)](https://npmx.dev/package/vitepress-theme-resume)
[![license](https://npmx.dev/api/registry/badge/license/vitepress-theme-resume)](./LICENSE)
[![engine](https://npmx.dev/api/registry/badge/engines/vitepress-theme-resume)](https://npmx.dev/package/vitepress-theme-resume)

A VitePress theme for single-page resumes with print-friendly A4 layout, profile header, and structured resume blocks.

## Features

- A4 page layout with print styles (`@page size: A4`)
- Profile header with auto-linked email, phone, and URLs in `meta`
- `<ResumeBlock>` blocks with period, title, subtitle, and tech stack icons ([Simple Icons](https://simpleicons.org/))
- `<ResumeHighlight>` / `<ResumeHighlights>` for structured bullet points
- Layout slots for extending the theme without forking
- `useResume()` composable for custom Vue components

## Requirements

- Node.js `>=24.16.0`
- [VitePress](https://vitepress.dev/) `^2.0.0-alpha.17`
- Vue `^3.5`
- Tailwind CSS `^4` with `@tailwindcss/vite`

## Install

```bash
pnpm add -D vitepress vitepress-theme-resume tailwindcss @tailwindcss/vite
```

Add the Tailwind Vite plugin in your VitePress config so utility classes in theme components are generated during dev and build:

```ts
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitepress";
import { defineResumeConfig } from "vitepress-theme-resume/config";

export default defineConfig({
  extends: defineResumeConfig({
    /* ... */
  }),
  vite: { plugins: [tailwindcss()] },
});
```

`defineResumeConfig` merges sensible defaults (empty nav/sidebar, SSR `noExternal` for this package).

## Quick start

**.vitepress/config.ts**

```ts
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitepress";
import { defineResumeConfig } from "vitepress-theme-resume/config";

export default defineConfig({
  extends: defineResumeConfig({
    title: "Your Name",
    description: "Your role",
    lang: "zh-CN",
  }),
  vite: { plugins: [tailwindcss()] },
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
    - github.com/yourname
  tags:
    - label: Frontend Engineer
---

## Experience

<ResumeBlock period="2024-至今" title="Company Name" subtitle="Role title" stack="vue,vite">

<ResumeHighlights>

<ResumeHighlight title="Key achievement">Describe impact in one or two sentences.</ResumeHighlight>

<ResumeHighlight>Highlight without a title label.</ResumeHighlight>

</ResumeHighlights>

</ResumeBlock>
```

Resume layout activates when `resume: true` (or theme default) **and** `profile.name` is set.

## Frontmatter

| Field          | Type                   | Description                                          |
| -------------- | ---------------------- | ---------------------------------------------------- |
| `resume`       | `boolean`              | Enable resume layout                                 |
| `profile.name` | `string`               | Display name (required for resume mode)              |
| `profile.meta` | `(string \| number)[]` | Contact info; email, phone, and URLs are auto-linked |
| `profile.tags` | `{ label: string }[]`  | Skill or intent tags                                 |

`profile.meta` items are linked when they match an email (`mailto:`), phone with 7+ digits (`tel:`), `http(s)://` URL, or domain-like string (prefixed with `https://`). Other values render as plain text.

## Theme config

`themeConfig.resume` options (via `defineResumeConfig`):

| Option            | Default      | Description                                         |
| ----------------- | ------------ | --------------------------------------------------- |
| `enabled`         | `true`       | Default resume mode when frontmatter omits `resume` |
| `skipLinkLabel`   | `跳到主内容` | Skip link text                                      |
| `profileDefaults` | —            | Default profile fields merged with page frontmatter |

```ts
defineResumeConfig({
  title: "Your Name",
  resume: {
    profileDefaults: {
      name: "Your Name",
      tags: [{ label: "Open to work" }],
    },
  },
});
```

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

| Slot                               | Position                  |
| ---------------------------------- | ------------------------- |
| `page-before` / `page-after`       | Outside the A4 page       |
| `header-before` / `header-after`   | Around the profile header |
| `content-before` / `content-after` | Around markdown body      |

## Markdown components

Registered globally when using the default theme. Also exported from the main entry for local imports.

### `<ResumeBlock>`

| Prop       | Type     | Description                              |
| ---------- | -------- | ---------------------------------------- |
| `period`   | `string` | Time range, e.g. `2024.06-至今`          |
| `title`    | `string` | Primary heading (company, project, etc.) |
| `subtitle` | `string` | Secondary line (role, degree, etc.)      |
| `stack`    | `string` | Comma-separated tech names for icon row  |

Default slot: body content (e.g. `<ResumeHighlights>` or markdown).

### `<ResumeHighlights>` / `<ResumeHighlight>`

- `<ResumeHighlights>` — list container (`<dl>`)
- `<ResumeHighlight>` — description in the default slot; `title` is optional

```md
<ResumeHighlights>

<ResumeHighlight title="Achievement">Impact in one or two sentences.</ResumeHighlight>

<ResumeHighlight>Plain bullet without a title label.</ResumeHighlight>

</ResumeHighlights>
```

### Tech stack icons

`stack` names map to [Simple Icons](https://simpleicons.org/) slugs via [unpkg](https://unpkg.com/simple-icons@v16/icons/). Common aliases are built in (`js` → `javascript`, `ts` → `typescript`, `vue` → `vuedotjs`, `node` → `nodedotjs`, etc.); dots in names become `dot`. Icons that fail to load are hidden.

## Composables

```ts
import { useResume } from "vitepress-theme-resume";

const { config, isResumeMode, profile } = useResume();
```

## Development

This repo uses [vite-plus](https://github.com/heyongqi02/vite-plus) and a `demo` workspace package.

```bash
pnpm install
pnpm exec vp run demo_dev    # build theme + start demo dev server
pnpm exec vp run demo_build  # build theme + demo site
pnpm run build               # build theme package only
```

## License

Apache-2.0
