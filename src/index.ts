import { App } from "vue";

export {
  textDefaultProps,
  textStylePropNames,
  imageDefaultProps,
  imageStylePropsNames,
  shapeDefaultProps,
  shapeStylePropsNames,
} from "./defaultProps";

export type {
  TextComponentProps,
  ImageComponentProps,
  ShapeComponentProps,
  AllComponentProps,
} from "./defaultProps";

import LText from "./components/LText";

const components = [LText];

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component);
  });
};

export { LText, install };
export default {
  install,
};
