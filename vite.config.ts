import { lib } from "@bjmhe/viteplus-preset";
import tailwindcss from "@tailwindcss/vite";
import Vue from "unplugin-vue/rolldown";

export default lib(
  {},
  {
    // @ts-ignore
    plugins: [
      // @ts-ignore
      tailwindcss(),
    ],
    run: {
      tasks: {
        autofix: ["vpx automd", "vpx bjmhe fetch", "vp check --fix"],
      },
    },
    pack: {
      plugins: [Vue({ isProduction: true })],
      dts: { vue: true },
    },
  },
);
