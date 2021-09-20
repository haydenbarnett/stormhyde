type Theme = {
  breakpoints: string[];
  mediaQueries: { [key: string]: string };
  colors: {
    blue: string;
    white: string;
    black: string;
    grey: {
      [key: number]: string;
    };
  };
  space: { [key: number | string]: string };
  fontFamily: { [key: string]: string };
  fontSizes: { [key: string]: string };
  lineHeights: { [key: string]: string };
  fontWeights: { [key: string]: string };
  letterSpacings: { [key: string]: string };
};
