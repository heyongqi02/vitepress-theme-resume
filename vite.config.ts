import tailwindcss from "@tailwindcss/vite";
import ApiSnapshot from "tsnapi/rolldown";
import Vue from "unplugin-vue/rolldown";
import { defineConfig } from "vite-plus";

const ignorePatterns = [
  "__snapshots__/**/*",
  "dist/**/*",
  "coverage/**/*",
  "themes/**/*",
  ".agents/**/*",
  "CODE_OF_CONDUCT.md",
];
const PACK_BANNER = "/*! Keep it simple, keep it free */";
const PACK_FOOTER = "/*! Built with love & coffee ☕ */";

export default defineConfig({
  plugins: [tailwindcss()],
  lint: {
    ignorePatterns,
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  fmt: {
    bracketSameLine: true,
    ignorePatterns,
    jsdoc: true,
    sortImports: true,
    sortPackageJson: {
      sortScripts: true,
    },
    sortTailwindcss: true,
  },
  pack: {
    attw: {
      enabled: true,
      ignoreRules: ["no-resolution"],
      profile: "esm-only",
    },
    banner: PACK_BANNER,
    deps: {
      onlyBundle: false,
    },
    devtools: true,
    dts: {
      vue: true,
    },
    entry: {
      config: "src/config.ts",
      index: "src/index.ts",
      style: "src/styles/index.css",
    },
    exports: {
      packageJson: true,
      legacy: true,
    },
    footer: PACK_FOOTER,
    platform: "neutral",
    plugins: [ApiSnapshot(), Vue({ isProduction: true })],
    publint: true,
    shims: true,
    sourcemap: true,
    unbundle: true,
    unused: true,
  },
  run: {
    tasks: {
      demo_dev: {
        command: "vp run --filter ./demo docs:dev",
        dependsOn: ["vitepress-theme-resume#build"],
      },
      demo_build: {
        command: "vp run --filter ./demo docs:build",
        dependsOn: ["vitepress-theme-resume#build"],
      },
      demo_preview: {
        command: "vp run --filter ./demo docs:preview",
        dependsOn: ["demo_build"],
      },
      submodule: {
        command: "git submodule update --init --recursive --force",
      },
    },
  },
});
