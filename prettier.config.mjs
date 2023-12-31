/** @type {import("prettier").Config} */
export default {
  experimentalTernaries: true,
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  tailwindConfig: "./tailwind.config.mjs",
  astroAllowShorthand: true,
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
