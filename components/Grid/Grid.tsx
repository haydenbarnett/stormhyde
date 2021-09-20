import styled from "@emotion/styled";
import { system, ResponsiveValue } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { Box } from "../";
import type { BoxProps } from "../";

type GridProps = BoxProps & {
  columns?: ResponsiveValue<number>;
};

export const Grid = styled(Box, { shouldForwardProp })<GridProps>(
  {
    display: "grid",
    rowGap: "16px",
    columnGap: "16px",
  },
  system({
    columns: {
      property: "gridTemplateColumns",
      transform: (value) => value && `repeat(${value}, minmax(0, 1fr))`,
    },
  })
);

export default Grid;
