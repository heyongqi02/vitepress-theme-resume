import ApiSnapshot from "tsnapi/rolldown";
import Vue from "unplugin-vue/rolldown";
import { defineConfig } from "vite-plus";

const PACK_BANNER = "/*! Keep it simple, keep it free */";
const PACK_FOOTER = "/*! Built with love & coffee ☕ */";
const isCI = process.env.CI === "true";

export default defineConfig({
  lint: {
    ignorePatterns: [
      "__snapshots__/**/*",
      "dist/**/*",
      "coverage/**/*",
      "themes/**/*",
      ".agents/**/*",
      "jobs/**/*",
      "docs/simple-icons-slugs.md",
    ],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    bracketSameLine: true,
    ignorePatterns: [
      "__snapshots__/**/*",
      "dist/**/*",
      "coverage/**/*",
      "themes/**/*",
      ".agents/**/*",
      "jobs/**/*",
      "docs/simple-icons-slugs.md",
    ],
    jsdoc: true,
    sortImports: true,
  },
  pack: {
    entry: {
      index: "src/index.ts",
      config: "src/config.ts",
      style: "src/styles/index.css",
    },
    attw: {
      enabled: isCI,
      ignoreRules: ["no-resolution"],
      profile: "esm-only",
    },
    banner: PACK_BANNER,
    copy: [{ from: "src/assets/fonts/*.woff2", to: "dist/assets/fonts" }],
    devtools: !isCI,
    dts: {
      vue: true,
    },
    exports: {
      packageJson: true,
      legacy: true,
    },
    deps: {
      onlyBundle: false,
    },
    footer: PACK_FOOTER,
    platform: "neutral",
    plugins: [Vue({ isProduction: true }), ...(isCI ? [ApiSnapshot()] : [])],
    publint: isCI,
    sourcemap: isCI,
    unused: isCI,
  },
  run: {
    tasks: {
      pack_watch: {
        command: "vp pack --watch",
        dependsOn: ["vitepress-theme-resume#build"],
      },
      demo_dev: {
        command: "vp run --filter ./demo docs:dev",
      },
      demo_build: {
        command: "vp run --filter ./demo docs:build",
        dependsOn: ["vitepress-theme-resume#build"],
      },
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts"],
  }
});
