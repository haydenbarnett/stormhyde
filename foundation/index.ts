import breakpoints from "./breakpoints";
import colors from "./colors";
import space from "./space";
import typography from "./typography";

export const theme: Theme = {
  ...breakpoints,
  colors,
  space,
  ...typography,
};

export default theme;
