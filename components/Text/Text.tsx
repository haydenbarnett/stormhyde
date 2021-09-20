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

type TextSize = "xs" | "sm" | "md" | "lg" | "xl";

type TextProps = DisplayProps &
  SpaceProps &
  ColorProps &
  React.ComponentPropsWithoutRef<"p"> & {
    as?: React.ElementType;
    size?: ResponsiveValue<TextSize>;
    children?: React.ReactNode;
  };

const BaseText = styled("p", { shouldForwardProp })<TextProps>(
  {
    marginTop: "0",
    marginBottom: "0.5em",
  },
  variant({
    prop: "size",
    variants: {
      xl: {
        fontSize: "xl",
        lineHeight: "xl",
        fontWeight: "normal",
      },
      lg: {
        fontSize: "lg",
        lineHeight: "lg",
        fontWeight: "normal",
      },
      md: {
        fontSize: "md",
        lineHeight: "md",
        fontWeight: "normal",
      },
      sm: {
        fontSize: "sm",
        lineHeight: "sm",
        fontWeight: "normal",
      },
      xs: {
        fontSize: "xs",
        lineHeight: "xs",
        fontWeight: "normal",
      },
    },
  }),
  compose(space, display, color)
);

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, size = "sm", ...props }, ref) => {
    return (
      <BaseText ref={ref} size={size} {...props}>
        {children}
      </BaseText>
    );
  }
);

export default Text;
