import type { App } from "vue";

import pinia from "@plugins/pinia";

export default (app: App) => {
  app.use(pinia);
};
