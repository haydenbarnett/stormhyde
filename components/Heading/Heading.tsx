import { forwardRef } from "react";
import styled from "@emotion/styled";
import {
  compose,
  display,
  space,
  color,
  variant,
  DisplayProps,
  SpaceProps,
  ColorProps,
  ResponsiveValue,
} from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

type HeadingSize = "h1" | "h2" | "h3";

type HeadingProps = DisplayProps &
  SpaceProps &
  ColorProps &
  React.ComponentPropsWithoutRef<"h2"> & {
    as?: React.ElementType;
    size?: ResponsiveValue<HeadingSize>;
    children?: React.ReactNode;
  };

const BaseHeading = styled("h2", { shouldForwardProp })<HeadingProps>(
  {
    marginTop: "0",
    marginBottom: "0.5em",
  },
  variant({
    prop: "size",
    variants: {
      h1: {
        fontSize: "xl",
        lineHeight: "tight",
        fontWeight: "medium",
      },
      h2: {
        fontSize: "lg",
        lineHeight: "tight",
        fontWeight: "medium",
      },
      h3: {
        fontSize: "md",
        lineHeight: "tight",
        fontWeight: "normal",
      },
    },
  }),
  compose(space, display, color)
);

export const Heading = forwardRef<HTMLParagraphElement, HeadingProps>(
  ({ children, size = "h2", ...props }, ref) => {
    const as = props.as ?? (size as React.ElementType);
    return (
      <BaseHeading ref={ref} size={size} as={as} {...props}>
        {children}
      </BaseHeading>
    );
  }
);
Heading.displayName = "Heading";

export default Heading;
