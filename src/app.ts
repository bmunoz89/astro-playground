import pinia from "@plugins/pinia";
import type { App } from "vue";

export default (app: App) => {
  app.use(pinia);
};
