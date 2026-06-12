# vitepress-theme-resume

[![npm version](https://npmx.dev/api/registry/badge/version/vitepress-theme-resume)](https://npmx.dev/package/vitepress-theme-resume)
[![npm downloads](https://npmx.dev/api/registry/badge/downloads/vitepress-theme-resume)](https://npmx.dev/package/vitepress-theme-resume)
[![license](https://npmx.dev/api/registry/badge/license/vitepress-theme-resume)](./LICENSE)

VitePress theme for single-page resumes with A4 print layout.

## Install

```bash
vp add -D vitepress@next vitepress-theme-resume tailwindcss @tailwindcss/vite
```

## Usage

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

Resume layout activates when `resume: true` and `profile.name` is set. `profile.meta` auto-links email, phone, and URLs.

### Components

- `<ResumeBlock period title subtitle stack>` — experience / project block; `stack` is comma-separated tech names for [Simple Icons](https://simpleicons.org/)
- `<ResumeHighlights>` + `<ResumeHighlight title?>` — structured bullet list

### Theme config

```ts
defineResumeConfig({
  resume: {
    enabled: true, // default resume mode
    skipLinkLabel: "跳到主内容",
    profileDefaults: { name: "Your Name", tags: [{ label: "Open to work" }] },
  },
});
```

## License

[Apache-2.0](./LICENSE)
