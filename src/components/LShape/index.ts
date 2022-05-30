import { App } from "vue";
import LShape from "./src/l-shape.vue";
LShape.install = (app: App) => {
  app.component(LShape.name, LShape);
};

export default LShape;
