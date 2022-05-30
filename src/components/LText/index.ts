import { App } from "vue";

import LText from "./src/l-text.vue";

LText.install = (app: App) => {
  app.component(LText.name, LText);
};

export default LText;
