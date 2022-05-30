import { App } from "vue";
import LImage from "./src/l-images.vue";
LImage.install = (app: App) => {
  app.component(LImage.name, LImage);
};

export default LImage;
