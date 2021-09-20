import styled from "@emotion/styled";
import { system } from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { Box } from "../";
import type { BoxProps } from "../";
import * as CSS from "csstype";

type StackProps = BoxProps & {
  gap?: number | number[];
};

export const Stack = styled(Box, { shouldForwardProp })<StackProps>(
  {
    display: "flex",
    flexDirection: "column",
    "&& > *": {
      marginBottom: 0,
    },
  },
  system({
    gap: {
      property: "&& > * + *" as keyof CSS.Properties,
      scale: "space",
      transform: (value, space) => ({ marginTop: space && space[value] }),
    },
  })
);

export default Stack;
