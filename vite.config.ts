import tailwindcss from "@tailwindcss/vite";
import ApiSnapshot from "tsnapi/rolldown";
import Vue from "unplugin-vue/rolldown";
import { defineConfig } from "vite-plus";

const PACK_BANNER = "/*! Keep it simple, keep it free */";
const PACK_FOOTER = "/*! Built with love & coffee ☕ */";

export default defineConfig({
  plugins: [tailwindcss()],
  lint: {
    ignorePatterns: ["__snapshots__/**/*", "dist/**/*", "coverage/**/*", "themes/**/*"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    bracketSameLine: true,
    ignorePatterns: ["__snapshots__/**/*", "dist/**/*", "coverage/**/*", "themes/**/*"],
    jsdoc: true,
    sortImports: true,
    sortTailwindcss: true,
  },
  pack: {
    entry: {
      index: "src/index.ts",
      style: "src/index.css",
    },
    attw: {
      enabled: true,
      ignoreRules: ["no-resolution"],
      profile: "esm-only",
    },
    banner: PACK_BANNER,
    devtools: true,
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
    plugins: [ApiSnapshot(), Vue({ isProduction: true })],
    publint: true,
    sourcemap: true,
    unused: true,
  },
  run: {
    tasks: {
      dev: {
        command: "vp run --filter ./demo docs:dev",
        dependsOn: ["vitepress-theme-resume#build"]
      }
    }
  }
});
