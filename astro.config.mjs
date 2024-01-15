import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  devToolbar: { enabled: false },
  integrations: [
    vue({
      appEntrypoint: "/src/app",
    }),
    tailwind(),
    icon({
      include: {
        tabler: ["info-circle", "rocket", "clock-down"],
      },
      svgoOptions: {
        plugins: [
          "preset-default",
          {
            name: "convertColors",
            params: { currentColor: true },
          },
        ],
      },
    }),
  ],
});
