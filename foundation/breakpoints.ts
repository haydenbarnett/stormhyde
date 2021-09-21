const breakpoints = ["576px", "768px", "992px", "1200px"];

const mediaQueries = {
  sm: `@media screen and (min-width: ${breakpoints[0]})`,
  md: `@media screen and (min-width: ${breakpoints[1]})`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  xl: `@media screen and (min-width: ${breakpoints[3]})`,
};

const breakpointsQueries = {
  breakpoints,
  mediaQueries,
};

export default breakpointsQueries;
