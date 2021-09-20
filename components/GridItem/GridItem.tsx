import styled from "@emotion/styled";
import { system, ResponsiveValue } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { Box } from "../";
import type { BoxProps } from "../";

type GridItemProps = BoxProps & {
  colSpan?: ResponsiveValue<number>;
  rowSpan?: ResponsiveValue<number>;
};

export const GridItem = styled(Box, { shouldForwardProp })<GridItemProps>(
  system({
    colSpan: {
      property: "gridColumn",
      transform: (value) => value && `span ${value}/span ${value}`,
    },
    rowSpan: {
      property: "gridRow",
      transform: (value) => value && `span ${value}/span ${value}`,
    },
  })
);

export default GridItem;
