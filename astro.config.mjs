import vue from "@astrojs/vue";
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  devToolbar: { enabled: false },
  integrations: [
    vue({
      appEntrypoint: "/src/app",
    }),
    tailwind(),
  ],
});
