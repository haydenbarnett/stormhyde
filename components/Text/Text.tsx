import { forwardRef } from "react";
import styled from "@emotion/styled";
import {
  compose,
  display,
  space,
  color,
  typography,
  variant,
  DisplayProps,
  SpaceProps,
  ColorProps,
  TypographyProps,
  ResponsiveValue,
} from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

type TextSize = "xs" | "sm" | "md" | "lg" | "xl";

type TextProps = DisplayProps &
  SpaceProps &
  ColorProps &
  TypographyProps &
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
        lineHeight: "loose",
        fontWeight: "normal",
      },
      lg: {
        fontSize: "lg",
        lineHeight: "relaxed",
        fontWeight: "normal",
      },
      md: {
        fontSize: "md",
        lineHeight: "normal",
        fontWeight: "normal",
      },
      sm: {
        fontSize: "sm",
        lineHeight: "normal",
        fontWeight: "normal",
      },
      xs: {
        fontSize: "xs",
        lineHeight: "normal",
        fontWeight: "normal",
      },
    },
  }),
  compose(space, display, color, typography)
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
Text.displayName = "Text";

export default Text;
